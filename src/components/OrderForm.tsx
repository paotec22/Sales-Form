import React, { useState, useMemo } from 'react';
import { Loader2, ChevronDown, AlertCircle, ShieldCheck, Check, MapPin, Truck, Bus } from 'lucide-react';
import { OrderFormData, Web3FormsConfig, FormSubmissionState } from '../types';
import { PuidoLogo } from './PuidoLogo';
import { validateField, validateAllFields, FormErrors } from '../utils/validation';
import { STATES_LIST, getLgasForState } from '../utils/nigeriaData';

interface OrderFormProps {
  config: Web3FormsConfig;
  onOpenSettings: () => void;
  onSuccess: (data: OrderFormData) => void;
}

export const REDIRECT_TARGET_URL = 'https://puidosmartsolutions.com/cameratyp/';

export const OrderForm: React.FC<OrderFormProps> = ({
  config,
  onOpenSettings,
  onSuccess,
}) => {
  const [formData, setFormData] = useState<OrderFormData>({
    firstName: '',
    lastName: '',
    state: '',
    lga: '',
    closestPark: '',
    addressLine1: '',
    phoneNumber: '',
    alternativePhone: '',
    quantity: '',
    deliveryReadiness: '',
  });

  const [submissionState, setSubmissionState] = useState<FormSubmissionState>({
    status: 'idle',
  });

  const [validationErrors, setValidationErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  const availableLgas = useMemo(() => {
    return getLgasForState(formData.state);
  }, [formData.state]);

  const validate = (): boolean => {
    const errors = validateAllFields(formData as unknown as Record<string, string>);
    setValidationErrors(errors);
    
    // Mark all fields as touched
    setTouched({
      firstName: true,
      lastName: true,
      state: true,
      lga: true,
      closestPark: true,
      addressLine1: true,
      phoneNumber: true,
      alternativePhone: true,
      quantity: true,
      deliveryReadiness: true,
    });

    if (Object.keys(errors).length > 0) {
      // Focus first erroneous input for accessibility
      const firstErrorField = Object.keys(errors)[0];
      const el = document.getElementsByName(firstErrorField)[0];
      if (el) {
        el.focus();
        el.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      return false;
    }

    return true;
  };

  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));

    const error = validateField(name, value, formData as unknown as Record<string, string>);
    setValidationErrors((prev) => {
      const next = { ...prev };
      if (error) {
        next[name as keyof FormErrors] = error;
      } else {
        delete next[name as keyof FormErrors];
      }
      return next;
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    let updatedForm = { ...formData, [name]: value };

    // Reset LGA if State is changed
    if (name === 'state') {
      updatedForm = { ...updatedForm, state: value, lga: '' };
    }

    setFormData(updatedForm);

    // If field was already touched, perform real-time validation to clear error
    if (touched[name]) {
      const error = validateField(name, value, updatedForm as unknown as Record<string, string>);
      setValidationErrors((prev) => {
        const next = { ...prev };
        if (error) {
          next[name as keyof FormErrors] = error;
        } else {
          delete next[name as keyof FormErrors];
        }
        return next;
      });
    }

    // Re-validate alternative phone if primary phone changes
    if (name === 'phoneNumber' && touched.alternativePhone && formData.alternativePhone) {
      const altError = validateField('alternativePhone', formData.alternativePhone, updatedForm as unknown as Record<string, string>);
      setValidationErrors((prev) => {
        const next = { ...prev };
        if (altError) {
          next.alternativePhone = altError;
        } else {
          delete next.alternativePhone;
        }
        return next;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    setSubmissionState({ status: 'submitting' });

    // If Web3Forms Access Key is not configured or in test mode
    const cleanKey = (config.accessKey || '').trim();
    if (!cleanKey || cleanKey === 'YOUR_ACCESS_KEY_HERE' || config.isTestMode) {
      // Simulate submission with short delay
      setTimeout(() => {
        setSubmissionState({
          status: 'success',
          submittedData: formData,
        });
        onSuccess(formData);
        // Automatically redirect to the target URL
        setTimeout(() => {
          window.location.href = REDIRECT_TARGET_URL;
        }, 1200);
      }, 800);
      return;
    }

    // Actual submission to Web3Forms
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: cleanKey,
          subject: `New Smart Camera Order: ${formData.firstName} ${formData.lastName} (${formData.state} - ${formData.quantity} unit${formData.quantity === '1' ? '' : 's'})`,
          from_name: 'PUIDO Smart Solutions Order Portal',
          'First Name': formData.firstName,
          'Last Name': formData.lastName,
          'Full Name': `${formData.firstName} ${formData.lastName}`.trim(),
          State: formData.state,
          'Local Government (LGA)': formData.lga,
          'Closest Interstate Park': formData.closestPark,
          'Delivery Address': formData.addressLine1,
          'Primary Phone': formData.phoneNumber,
          'Alternative Phone': formData.alternativePhone || 'N/A',
          Quantity: formData.quantity,
          'Ready within 12-48 Hours': formData.deliveryReadiness,
          redirect: REDIRECT_TARGET_URL,
        }),
      });

      const data = await response.json().catch(() => null);

      if (response.ok && data && data.success) {
        setSubmissionState({
          status: 'success',
          submittedData: formData,
        });
        onSuccess(formData);
        // Automatically redirect to the target URL
        setTimeout(() => {
          window.location.href = REDIRECT_TARGET_URL;
        }, 1000);
      } else {
        const errorMsg = data?.message || 'Failed to submit order to Web3Forms. Please verify your Access Key in Settings.';
        setSubmissionState({
          status: 'error',
          errorMessage: errorMsg,
        });
      }
    } catch {
      setSubmissionState({
        status: 'error',
        errorMessage: 'Network error occurred while contacting Web3Forms. Please check your connection.',
      });
    }
  };

  const isBlue = config.colorTheme !== 'terracotta';
  const accentFocusClass = isBlue
    ? 'border-gray-300 focus:border-[#0047FF] focus:ring-1 focus:ring-[#0047FF]/25'
    : 'border-gray-300 focus:border-[#be4b27] focus:ring-1 focus:ring-[#be4b27]/25';

  const buttonColorClass = isBlue
    ? 'bg-[#0047FF] hover:bg-[#003be0] active:bg-[#0031c2]'
    : 'bg-[#be4b27] hover:bg-[#a63f1f] active:bg-[#913619]';

  return (
    <div id="order-form-wrapper" className="w-full max-w-[840px] mx-auto bg-white py-4 px-2 sm:px-6">
      {/* Official PUIDO Smart Solutions Brand Header */}
      <div className="mb-6 pb-6 border-b border-gray-200/80 flex flex-col sm:flex-row items-center sm:items-end justify-between gap-4">
        <div className="flex items-center gap-3">
          <PuidoLogo height={48} />
        </div>
        <div className="text-center sm:text-right">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-gray-100 text-gray-700">
            <ShieldCheck className={`w-3.5 h-3.5 ${isBlue ? 'text-[#0047FF]' : 'text-[#be4b27]'}`} />
            Official Order Portal
          </span>
          <p className="text-[11px] text-gray-400 mt-1">Direct to PUIDO Dispatch</p>
        </div>
      </div>

      {submissionState.status === 'error' && (
        <div
          id="form-error-banner"
          className="mb-6 p-4 rounded-md bg-red-50 border border-red-200 text-red-700 flex items-start gap-3"
        >
          <AlertCircle className="w-5 h-5 mt-0.5 shrink-0 text-red-600" />
          <div className="text-sm">
            <p className="font-semibold">Submission Issue</p>
            <p>{submissionState.errorMessage}</p>
            <button
              type="button"
              onClick={onOpenSettings}
              className="mt-2 text-xs font-semibold text-red-800 underline hover:text-red-950"
            >
              Verify your Web3Forms Access Key in Settings →
            </button>
          </div>
        </div>
      )}

      <form id="checkout-order-form" onSubmit={handleSubmit} noValidate className="space-y-6">
        {/* Full Name */}
        <div id="group-fullname" className="space-y-2">
          <label className="block text-[15px] font-bold text-gray-900 tracking-tight">
            Full Name <span className="text-red-600">*</span>
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <div className="relative">
                <input
                  id="input-first-name"
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="First Name"
                  className={`w-full h-11 px-3.5 pr-10 text-[15px] text-gray-800 bg-white border rounded transition-colors placeholder:text-gray-400 focus:outline-none ${
                    validationErrors.firstName && touched.firstName
                      ? 'border-red-500 focus:border-red-500 ring-1 ring-red-500/20'
                      : touched.firstName && formData.firstName.trim().length >= 2
                      ? 'border-emerald-500/80 focus:border-emerald-600 ring-1 ring-emerald-500/20'
                      : accentFocusClass
                  }`}
                />
                {touched.firstName && (
                  <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                    {validationErrors.firstName ? (
                      <AlertCircle className="w-4 h-4 text-red-500" />
                    ) : formData.firstName.trim().length >= 2 ? (
                      <Check className="w-4 h-4 text-emerald-600" />
                    ) : null}
                  </div>
                )}
              </div>
              {validationErrors.firstName && touched.firstName && (
                <div className="flex items-center gap-1.5 mt-1.5 text-xs text-red-600 font-medium">
                  <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                  <span>{validationErrors.firstName}</span>
                </div>
              )}
            </div>

            <div>
              <div className="relative">
                <input
                  id="input-last-name"
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Last Name"
                  className={`w-full h-11 px-3.5 pr-10 text-[15px] text-gray-800 bg-white border rounded transition-colors placeholder:text-gray-400 focus:outline-none ${
                    validationErrors.lastName && touched.lastName
                      ? 'border-red-500 focus:border-red-500 ring-1 ring-red-500/20'
                      : touched.lastName && formData.lastName.trim().length >= 2
                      ? 'border-emerald-500/80 focus:border-emerald-600 ring-1 ring-emerald-500/20'
                      : accentFocusClass
                  }`}
                />
                {touched.lastName && (
                  <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                    {validationErrors.lastName ? (
                      <AlertCircle className="w-4 h-4 text-red-500" />
                    ) : formData.lastName.trim().length >= 2 ? (
                      <Check className="w-4 h-4 text-emerald-600" />
                    ) : null}
                  </div>
                )}
              </div>
              {validationErrors.lastName && touched.lastName && (
                <div className="flex items-center gap-1.5 mt-1.5 text-xs text-red-600 font-medium">
                  <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                  <span>{validationErrors.lastName}</span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* State and Local Government (LGA) */}
        <div id="group-state-lga" className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="block text-[15px] font-bold text-gray-900 tracking-tight">
              State <span className="text-red-600">*</span>
            </label>
            <div className="relative">
              <select
                id="select-state"
                name="state"
                value={formData.state}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`w-full h-11 px-3.5 pr-10 text-[15px] bg-white border rounded transition-colors appearance-none cursor-pointer focus:outline-none ${
                  !formData.state ? 'text-gray-400' : 'text-gray-800 font-medium'
                } ${
                  validationErrors.state && touched.state
                    ? 'border-red-500 focus:border-red-500 ring-1 ring-red-500/20'
                    : touched.state && formData.state
                    ? 'border-emerald-500/80 focus:border-emerald-600 ring-1 ring-emerald-500/20'
                    : accentFocusClass
                }`}
              >
                <option value="" disabled>
                  Select State
                </option>
                {STATES_LIST.map((st) => (
                  <option key={st} value={st}>
                    {st}
                  </option>
                ))}
              </select>
              <ChevronDown className="w-5 h-5 text-gray-500 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
            {validationErrors.state && touched.state && (
              <div className="flex items-center gap-1.5 mt-1.5 text-xs text-red-600 font-medium">
                <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                <span>{validationErrors.state}</span>
              </div>
            )}
          </div>

          <div className="space-y-2">
            <label className="block text-[15px] font-bold text-gray-900 tracking-tight">
              Local Government (LGA) <span className="text-red-600">*</span>
            </label>
            <div className="relative">
              {availableLgas.length > 0 ? (
                <div className="relative">
                  <select
                    id="select-lga"
                    name="lga"
                    value={formData.lga}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`w-full h-11 px-3.5 pr-10 text-[15px] bg-white border rounded transition-colors appearance-none cursor-pointer focus:outline-none ${
                      !formData.lga ? 'text-gray-400' : 'text-gray-800'
                    } ${
                      validationErrors.lga && touched.lga
                        ? 'border-red-500 focus:border-red-500 ring-1 ring-red-500/20'
                        : touched.lga && formData.lga
                        ? 'border-emerald-500/80 focus:border-emerald-600 ring-1 ring-emerald-500/20'
                        : accentFocusClass
                    }`}
                  >
                    <option value="" disabled>
                      {formData.state ? `Select LGA in ${formData.state}` : 'Select State First'}
                    </option>
                    {availableLgas.map((lgaName) => (
                      <option key={lgaName} value={lgaName}>
                        {lgaName}
                      </option>
                    ))}
                    <option value="Other / Not in List">Other / Not in List</option>
                  </select>
                  <ChevronDown className="w-5 h-5 text-gray-500 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
              ) : (
                <input
                  id="input-lga"
                  type="text"
                  name="lga"
                  value={formData.lga}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder={formData.state ? 'Enter LGA name' : 'Select State first or type LGA'}
                  className={`w-full h-11 px-3.5 pr-10 text-[15px] text-gray-800 bg-white border rounded transition-colors placeholder:text-gray-400 focus:outline-none ${
                    validationErrors.lga && touched.lga
                      ? 'border-red-500 focus:border-red-500 ring-1 ring-red-500/20'
                      : touched.lga && formData.lga.trim().length >= 2
                      ? 'border-emerald-500/80 focus:border-emerald-600 ring-1 ring-emerald-500/20'
                      : accentFocusClass
                  }`}
                />
              )}
            </div>
            {validationErrors.lga && touched.lga && (
              <div className="flex items-center gap-1.5 mt-1.5 text-xs text-red-600 font-medium">
                <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                <span>{validationErrors.lga}</span>
              </div>
            )}
          </div>
        </div>

        {/* Closest Interstate Park */}
        <div id="group-closest-park" className="space-y-2">
          <div className="flex items-baseline justify-between">
            <label className="block text-[15px] font-bold text-gray-900 tracking-tight">
              Closest Interstate Park <span className="text-red-600">*</span>
            </label>
            <span className="text-[11px] text-gray-500 flex items-center gap-1">
              <Bus className="w-3 h-3 text-gray-400" />
              Motor Park / Bus Station for dispatch
            </span>
          </div>
          <div className="relative">
            <input
              id="input-closest-park"
              type="text"
              name="closestPark"
              value={formData.closestPark}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="e.g. Ojota Motor Park, Jibowu Park, Utako Park, Peace Mass Transit, God is Good (GIGM)"
              className={`w-full h-11 px-3.5 pr-10 text-[15px] text-gray-800 bg-white border rounded transition-colors placeholder:text-gray-400 focus:outline-none ${
                validationErrors.closestPark && touched.closestPark
                  ? 'border-red-500 focus:border-red-500 ring-1 ring-red-500/20'
                  : touched.closestPark && formData.closestPark.trim().length >= 3
                  ? 'border-emerald-500/80 focus:border-emerald-600 ring-1 ring-emerald-500/20'
                  : accentFocusClass
              }`}
            />
            {touched.closestPark && (
              <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                {validationErrors.closestPark ? (
                  <AlertCircle className="w-4 h-4 text-red-500" />
                ) : formData.closestPark.trim().length >= 3 ? (
                  <Check className="w-4 h-4 text-emerald-600" />
                ) : null}
              </div>
            )}
          </div>
          {validationErrors.closestPark && touched.closestPark && (
            <div className="flex items-center gap-1.5 mt-1.5 text-xs text-red-600 font-medium">
              <AlertCircle className="w-3.5 h-3.5 shrink-0" />
              <span>{validationErrors.closestPark}</span>
            </div>
          )}
        </div>

        {/* Detailed Address */}
        <div id="group-fulladdress" className="space-y-2">
          <div className="flex items-baseline justify-between">
            <label className="block text-[15px] font-bold text-gray-900 tracking-tight">
              Detailed Address <span className="text-red-600">*</span>
            </label>
            <span className="text-[11px] text-gray-500 flex items-center gap-1">
              <MapPin className="w-3 h-3 text-gray-400" />
              Street, House No, Estate, or Landmark
            </span>
          </div>
          <div className="relative">
            <input
              id="input-address"
              type="text"
              name="addressLine1"
              value={formData.addressLine1}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="e.g. 14 Admiralty Way, Lekki Phase 1, Opposite Hubmart"
              className={`w-full h-11 px-3.5 pr-10 text-[15px] text-gray-800 bg-white border rounded transition-colors placeholder:text-gray-400 focus:outline-none ${
                validationErrors.addressLine1 && touched.addressLine1
                  ? 'border-red-500 focus:border-red-500 ring-1 ring-red-500/20'
                  : touched.addressLine1 && formData.addressLine1.trim().length >= 6
                  ? 'border-emerald-500/80 focus:border-emerald-600 ring-1 ring-emerald-500/20'
                  : accentFocusClass
              }`}
            />
            {touched.addressLine1 && (
              <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                {validationErrors.addressLine1 ? (
                  <AlertCircle className="w-4 h-4 text-red-500" />
                ) : formData.addressLine1.trim().length >= 6 ? (
                  <Check className="w-4 h-4 text-emerald-600" />
                ) : null}
              </div>
            )}
          </div>
          {validationErrors.addressLine1 && touched.addressLine1 && (
            <div className="flex items-center gap-1.5 mt-1.5 text-xs text-red-600 font-medium">
              <AlertCircle className="w-3.5 h-3.5 shrink-0" />
              <span>{validationErrors.addressLine1}</span>
            </div>
          )}
        </div>

        {/* Phone Number & Alternative Phone */}
        <div id="group-phones" className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="block text-[15px] font-bold text-gray-900 tracking-tight">
              Phone Number <span className="text-red-600">*</span>
            </label>
            <div className="relative">
              <input
                id="input-phone"
                type="tel"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="e.g. 08012345678"
                className={`w-full h-11 px-3.5 pr-10 text-[15px] text-gray-800 bg-white border rounded transition-colors placeholder:text-gray-400 focus:outline-none ${
                  validationErrors.phoneNumber && touched.phoneNumber
                    ? 'border-red-500 focus:border-red-500 ring-1 ring-red-500/20'
                    : touched.phoneNumber && !validationErrors.phoneNumber && formData.phoneNumber.trim().length >= 7
                    ? 'border-emerald-500/80 focus:border-emerald-600 ring-1 ring-emerald-500/20'
                    : accentFocusClass
                }`}
              />
              {touched.phoneNumber && (
                <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                  {validationErrors.phoneNumber ? (
                    <AlertCircle className="w-4 h-4 text-red-500" />
                  ) : formData.phoneNumber.trim().length >= 7 ? (
                    <Check className="w-4 h-4 text-emerald-600" />
                  ) : null}
                </div>
              )}
            </div>
            {validationErrors.phoneNumber && touched.phoneNumber && (
              <div className="flex items-center gap-1.5 mt-1.5 text-xs text-red-600 font-medium">
                <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                <span>{validationErrors.phoneNumber}</span>
              </div>
            )}
          </div>

          <div className="space-y-2">
            <label className="block text-[15px] font-bold text-gray-900 tracking-tight">
              Alternative Phone <span className="text-xs font-normal text-gray-500">(Optional)</span>
            </label>
            <div className="relative">
              <input
                id="input-alternative-phone"
                type="tel"
                name="alternativePhone"
                value={formData.alternativePhone}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Secondary phone"
                className={`w-full h-11 px-3.5 pr-10 text-[15px] text-gray-800 bg-white border rounded transition-colors placeholder:text-gray-400 focus:outline-none ${
                  validationErrors.alternativePhone && touched.alternativePhone
                    ? 'border-red-500 focus:border-red-500 ring-1 ring-red-500/20'
                    : touched.alternativePhone && !validationErrors.alternativePhone && formData.alternativePhone.trim().length >= 7
                    ? 'border-emerald-500/80 focus:border-emerald-600 ring-1 ring-emerald-500/20'
                    : accentFocusClass
                }`}
              />
              {touched.alternativePhone && formData.alternativePhone.trim() && (
                <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                  {validationErrors.alternativePhone ? (
                    <AlertCircle className="w-4 h-4 text-red-500" />
                  ) : (
                    <Check className="w-4 h-4 text-emerald-600" />
                  )}
                </div>
              )}
            </div>
            {validationErrors.alternativePhone && touched.alternativePhone && (
              <div className="flex items-center gap-1.5 mt-1.5 text-xs text-red-600 font-medium">
                <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                <span>{validationErrors.alternativePhone}</span>
              </div>
            )}
          </div>
        </div>

        {/* Quantity */}
        <div id="group-quantity" className="space-y-2">
          <label className="block text-[15px] font-bold text-gray-900 tracking-tight">
            Quantity <span className="text-red-600">*</span>
          </label>
          <div className="relative">
            <select
              id="select-quantity"
              name="quantity"
              value={formData.quantity}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`w-full h-11 px-3.5 pr-10 text-[15px] bg-white border rounded transition-colors appearance-none cursor-pointer focus:outline-none ${
                !formData.quantity ? 'text-gray-400' : 'text-gray-800'
              } ${
                validationErrors.quantity && touched.quantity
                  ? 'border-red-500 focus:border-red-500 ring-1 ring-red-500/20'
                  : touched.quantity && formData.quantity
                  ? 'border-emerald-500/80 focus:border-emerald-600 ring-1 ring-emerald-500/20'
                  : accentFocusClass
              }`}
            >
              <option value="" disabled>
                Select Quantity
              </option>
              <option value="1">1 Unit</option>
              <option value="2">2 Units</option>
              <option value="3">3 Units</option>
              <option value="4">4 Units</option>
              <option value="5">5 Units</option>
              <option value="6">6 Units</option>
              <option value="7">7 Units</option>
              <option value="8">8 Units</option>
              <option value="9">9 Units</option>
              <option value="10+">10 or more</option>
            </select>
            <ChevronDown className="w-5 h-5 text-gray-500 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
          {validationErrors.quantity && touched.quantity && (
            <div className="flex items-center gap-1.5 mt-1.5 text-xs text-red-600 font-medium">
              <AlertCircle className="w-3.5 h-3.5 shrink-0" />
              <span>{validationErrors.quantity}</span>
            </div>
          )}
        </div>

        {/* Are you ready to receive your order within 12- 48 Hours? */}
        <div id="group-delivery-readiness" className="space-y-2">
          <label className="block text-[15px] font-bold text-gray-900 tracking-tight">
            Are you ready to receive your order within 12- 48 Hours? <span className="text-red-600">*</span>
          </label>
          <div className="relative">
            <select
              id="select-delivery-readiness"
              name="deliveryReadiness"
              value={formData.deliveryReadiness}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`w-full h-11 px-3.5 pr-10 text-[15px] bg-white border rounded transition-colors appearance-none cursor-pointer focus:outline-none ${
                !formData.deliveryReadiness ? 'text-gray-400' : 'text-gray-800'
              } ${
                validationErrors.deliveryReadiness && touched.deliveryReadiness
                  ? 'border-red-500 focus:border-red-500 ring-1 ring-red-500/20'
                  : touched.deliveryReadiness && formData.deliveryReadiness
                  ? 'border-emerald-500/80 focus:border-emerald-600 ring-1 ring-emerald-500/20'
                  : accentFocusClass
              }`}
            >
              <option value="" disabled>
                Select Your Answer
              </option>
              <option value="Yes, I am ready to receive it within 12 - 48 Hours">
                Yes, I am ready to receive it within 12 - 48 Hours
              </option>
              <option value="No, please contact me to schedule later">
                No, please contact me to schedule later
              </option>
              <option value="Yes, urgent delivery needed today">
                Yes, urgent delivery needed today
              </option>
            </select>
            <ChevronDown className="w-5 h-5 text-gray-500 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
          {validationErrors.deliveryReadiness && touched.deliveryReadiness && (
            <div className="flex items-center gap-1.5 mt-1.5 text-xs text-red-600 font-medium">
              <AlertCircle className="w-3.5 h-3.5 shrink-0" />
              <span>{validationErrors.deliveryReadiness}</span>
            </div>
          )}
        </div>

        {/* Place Order button */}
        <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <button
            id="btn-place-order"
            type="submit"
            disabled={submissionState.status === 'submitting'}
            className={`inline-flex items-center justify-center px-8 py-3 text-[15px] font-semibold text-white rounded transition duration-150 shadow-xs disabled:opacity-75 disabled:cursor-not-allowed ${buttonColorClass}`}
          >
            {submissionState.status === 'submitting' ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin text-white" />
                Processing Order...
              </>
            ) : (
              'Place Order'
            )}
          </button>
          <div className="flex items-center gap-2 text-xs text-gray-500">
            <Truck className="w-4 h-4 text-emerald-600" />
            <span>Fast Nationwide Dispatch & Delivery</span>
          </div>
        </div>
      </form>
    </div>
  );
};

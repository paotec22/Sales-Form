import React, { useEffect, useState } from 'react';
import { CheckCircle2, ArrowLeft, Mail, Clock, Phone, MapPin, ArrowRight, Bus, Layers } from 'lucide-react';
import { OrderFormData, Web3FormsConfig } from '../types';
import { REDIRECT_TARGET_URL } from './OrderForm';
import { PuidoLogo } from './PuidoLogo';

interface SubmissionSuccessProps {
  data: OrderFormData;
  config: Web3FormsConfig;
  onReset: () => void;
  onOpenSettings: () => void;
}

export const SubmissionSuccess: React.FC<SubmissionSuccessProps> = ({
  data,
  config,
  onReset,
  onOpenSettings,
}) => {
  const [countdown, setCountdown] = useState(3);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          try {
            window.location.href = REDIRECT_TARGET_URL;
          } catch {
            // In case iframe blocks top navigation
          }
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);
  const isBlue = config.colorTheme !== 'terracotta';

  return (
    <div id="submission-success-view" className="w-full max-w-[840px] mx-auto bg-white py-6 px-4 sm:px-6">
      {/* Brand Header */}
      <div className="mb-6 pb-4 border-b border-gray-100 flex items-center justify-between">
        <PuidoLogo height={42} />
        <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider hidden sm:inline">
          Order Confirmation
        </span>
      </div>

      <div className="rounded-xl border border-emerald-200 bg-emerald-50/60 p-6 sm:p-8">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center shrink-0">
            <CheckCircle2 className="w-7 h-7 text-emerald-600" />
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
              Order Received Successfully!
            </h2>
            <p className="text-sm sm:text-base text-gray-600 mt-0.5">
              Thank you, <span className="font-semibold text-gray-900">{data.firstName} {data.lastName}</span>. Your order details have been placed.
            </p>
          </div>
        </div>

        {/* Redirect Notice Banner */}
        <div className={`mt-5 p-4 rounded-lg border text-sm ${isBlue ? 'bg-blue-50/80 border-blue-200 text-blue-950' : 'bg-orange-50 border-orange-200 text-orange-950'}`}>
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <div>
              <p className="font-semibold text-gray-900">
                Redirecting to Camera Confirmation Page {countdown > 0 ? `in ${countdown}s...` : 'now...'}
              </p>
              <p className="text-xs text-gray-600 font-mono mt-0.5 break-all">
                {REDIRECT_TARGET_URL}
              </p>
            </div>
            <a
              id="btn-manual-redirect"
              href={REDIRECT_TARGET_URL}
              target="_top"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white rounded-md transition shrink-0 shadow-xs ${
                isBlue ? 'bg-[#0047FF] hover:bg-[#003be0]' : 'bg-[#be4b27] hover:bg-[#a63f1f]'
              }`}
            >
              <span>Continue Now</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Web3Forms notification status */}
        <div className="mt-6 p-4 rounded-lg bg-white border border-emerald-200/80 shadow-xs text-sm">
          <div className="flex items-start gap-2.5">
            <Mail className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
            <div className="space-y-1">
              <span className="font-semibold text-gray-800">
                {config.accessKey && !config.isTestMode
                  ? 'Delivery Confirmation'
                  : 'Test Mode Preview'}
              </span>
              <p className="text-gray-600 text-xs sm:text-sm">
                {config.accessKey && !config.isTestMode ? (
                  <>
                    Dispatched directly via Web3Forms API. Your notification email will receive this submission instantly.
                  </>
                ) : (
                  <>
                    Simulated submission successful! To receive real emails to{' '}
                    <span className="font-medium text-gray-800">{config.notificationEmail || 'your email'}</span>, enter your Web3Forms Access Key in Settings.
                  </>
                )}
              </p>
            </div>
          </div>
        </div>

        {/* Order details summary */}
        <div className="mt-6 border-t border-emerald-200/70 pt-5">
          <h3 className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-3">
            Summary of Submitted Details
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
            <div className="flex items-start gap-2">
              <MapPin className="w-4 h-4 text-gray-400 mt-0.5 shrink-0" />
              <div>
                <p className="text-xs text-gray-500">State & LGA</p>
                <p className="font-medium text-gray-800">
                  {data.state} {data.lga ? `• ${data.lga} LGA` : ''}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-2">
              <Bus className="w-4 h-4 text-gray-400 mt-0.5 shrink-0" />
              <div>
                <p className="text-xs text-gray-500">Closest Interstate Park</p>
                <p className="font-medium text-gray-800">{data.closestPark}</p>
              </div>
            </div>

            <div className="flex items-start gap-2 sm:col-span-2">
              <MapPin className="w-4 h-4 text-gray-400 mt-0.5 shrink-0" />
              <div>
                <p className="text-xs text-gray-500">Detailed Delivery Address</p>
                <p className="font-medium text-gray-800">{data.addressLine1}</p>
              </div>
            </div>

            <div className="flex items-start gap-2">
              <Phone className="w-4 h-4 text-gray-400 mt-0.5 shrink-0" />
              <div>
                <p className="text-xs text-gray-500">Contact Number</p>
                <p className="font-medium text-gray-800">
                  {data.phoneNumber}
                  {data.alternativePhone ? ` (Alt: ${data.alternativePhone})` : ''}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-2">
              <Layers className="w-4 h-4 text-gray-400 mt-0.5 shrink-0" />
              <div>
                <p className="text-xs text-gray-500">Order Quantity</p>
                <p className="font-medium text-gray-800">{data.quantity} units</p>
              </div>
            </div>

            <div className="flex items-start gap-2 sm:col-span-2">
              <Clock className="w-4 h-4 text-gray-400 mt-0.5 shrink-0" />
              <div>
                <p className="text-xs text-gray-500">Ready in 12-48 Hours</p>
                <p className="font-medium text-gray-800">{data.deliveryReadiness}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <button
            id="btn-submit-another"
            type="button"
            onClick={onReset}
            className={`inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white rounded transition shadow-xs ${
              isBlue ? 'bg-[#0047FF] hover:bg-[#003be0]' : 'bg-[#be4b27] hover:bg-[#a63f1f]'
            }`}
          >
            <ArrowLeft className="w-4 h-4" />
            Submit Another Order
          </button>

          {(!config.accessKey || config.isTestMode) && (
            <button
              id="btn-setup-web3forms"
              type="button"
              onClick={onOpenSettings}
              className="inline-flex items-center gap-1.5 px-4 py-2.5 text-sm font-medium text-blue-900 bg-blue-100 hover:bg-blue-200/80 rounded transition"
            >
              Connect Live Web3Forms Email
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

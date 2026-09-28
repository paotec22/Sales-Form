/**
 * Validation utilities for PUIDO Smart Solutions Order Form
 */

export interface FormErrors {
  firstName?: string;
  lastName?: string;
  state?: string;
  lga?: string;
  closestPark?: string;
  addressLine1?: string;
  phoneNumber?: string;
  alternativePhone?: string;
  quantity?: string;
  deliveryReadiness?: string;
}

/**
 * Validates a single field by name
 */
export const validateField = (
  name: string,
  value: string,
  allValues?: Record<string, string>
): string | undefined => {
  const trimmed = (value || '').trim();

  switch (name) {
    case 'firstName': {
      if (!trimmed) {
        return 'First name is required';
      }
      if (trimmed.length < 2) {
        return 'First name must be at least 2 characters';
      }
      if (trimmed.length > 50) {
        return 'First name cannot exceed 50 characters';
      }
      if (!/^[a-zA-Z\u00C0-\u017F\s'-]+$/.test(trimmed)) {
        return 'First name can only contain letters, hyphens, or apostrophes';
      }
      return undefined;
    }

    case 'lastName': {
      if (!trimmed) {
        return 'Last name is required';
      }
      if (trimmed.length < 2) {
        return 'Last name must be at least 2 characters';
      }
      if (trimmed.length > 50) {
        return 'Last name cannot exceed 50 characters';
      }
      if (!/^[a-zA-Z\u00C0-\u017F\s'-]+$/.test(trimmed)) {
        return 'Last name can only contain letters, hyphens, or apostrophes';
      }
      return undefined;
    }

    case 'state': {
      if (!trimmed) {
        return 'Please select your delivery state';
      }
      return undefined;
    }

    case 'lga': {
      if (!trimmed) {
        return 'Please select or enter your Local Government Area (LGA)';
      }
      if (trimmed.length < 2) {
        return 'Local Government Area name is too short';
      }
      return undefined;
    }

    case 'closestPark': {
      if (!trimmed) {
        return 'Please enter the closest interstate motor park or bus terminal';
      }
      if (trimmed.length < 3) {
        return 'Please enter a valid park name (e.g. Jibowu, Ojota, Utako, Peace Mass)';
      }
      if (trimmed.length > 150) {
        return 'Park name cannot exceed 150 characters';
      }
      return undefined;
    }

    case 'addressLine1': {
      if (!trimmed) {
        return 'Street / delivery address is required';
      }
      if (trimmed.length < 6) {
        return 'Please enter a more detailed address (at least 6 characters)';
      }
      if (trimmed.length > 250) {
        return 'Address cannot exceed 250 characters';
      }
      if (!/[a-zA-Z]/.test(trimmed)) {
        return 'Please include a street name, house number, or landmark';
      }
      return undefined;
    }

    case 'phoneNumber': {
      if (!trimmed) {
        return 'Primary phone number is required';
      }
      if (!/^[+]?[0-9\s\-().]{7,25}$/.test(trimmed)) {
        return 'Phone number contains invalid characters (allowed: digits, +, -, ())';
      }
      const digits = trimmed.replace(/\D/g, '');
      if (digits.length < 7) {
        return 'Phone number is too short (minimum 7 digits)';
      }
      if (digits.length > 15) {
        return 'Phone number is too long (maximum 15 digits)';
      }
      return undefined;
    }

    case 'alternativePhone': {
      if (!trimmed) {
        return undefined; // Optional field
      }
      if (!/^[+]?[0-9\s\-().]{7,25}$/.test(trimmed)) {
        return 'Alternative phone contains invalid characters (allowed: digits, +, -, ())';
      }
      const altDigits = trimmed.replace(/\D/g, '');
      if (altDigits.length < 7) {
        return 'Alternative phone is too short (minimum 7 digits)';
      }
      if (altDigits.length > 15) {
        return 'Alternative phone is too long (maximum 15 digits)';
      }
      if (allValues?.phoneNumber) {
        const primaryDigits = allValues.phoneNumber.replace(/\D/g, '');
        if (primaryDigits && primaryDigits === altDigits) {
          return 'Alternative phone should be different from primary phone';
        }
      }
      return undefined;
    }

    case 'quantity': {
      if (!trimmed) {
        return 'Please select a quantity';
      }
      return undefined;
    }

    case 'deliveryReadiness': {
      if (!trimmed) {
        return 'Please answer the 12-48 hour delivery readiness question';
      }
      return undefined;
    }

    default:
      return undefined;
  }
};

/**
 * Validates entire order form dataset
 */
export const validateAllFields = (formData: Record<string, string>): FormErrors => {
  const errors: FormErrors = {};

  const fieldsToCheck = [
    'firstName',
    'lastName',
    'state',
    'lga',
    'closestPark',
    'addressLine1',
    'phoneNumber',
    'alternativePhone',
    'quantity',
    'deliveryReadiness',
  ];

  fieldsToCheck.forEach((fieldName) => {
    const error = validateField(fieldName, formData[fieldName] || '', formData);
    if (error) {
      errors[fieldName as keyof FormErrors] = error;
    }
  });

  return errors;
};

export interface OrderFormData {
  firstName: string;
  lastName: string;
  state: string;
  lga: string;
  closestPark: string;
  addressLine1: string;
  phoneNumber: string;
  alternativePhone: string;
  quantity: string;
  deliveryReadiness: string;
}

export interface FormSubmissionState {
  status: 'idle' | 'submitting' | 'success' | 'error';
  errorMessage?: string;
  submittedData?: OrderFormData;
}

export interface Web3FormsConfig {
  accessKey: string;
  notificationEmail: string;
  isTestMode: boolean;
  colorTheme?: 'puido-blue' | 'terracotta';
}

// Backward-compatible alias
export type FormspreeConfig = Web3FormsConfig;

import React, { useState } from 'react';
import { X, Check, ExternalLink, Mail, Sparkles, AlertCircle, Key } from 'lucide-react';
import { Web3FormsConfig } from '../types';

interface Web3FormsSettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
  config: Web3FormsConfig;
  onSave: (newConfig: Web3FormsConfig) => void;
}

export const FormspreeSettingsModal: React.FC<Web3FormsSettingsModalProps> = ({
  isOpen,
  onClose,
  config,
  onSave,
}) => {
  const [accessKeyInput, setAccessKeyInput] = useState(config.accessKey || '');
  const [emailInput, setEmailInput] = useState(config.notificationEmail || 'paotec22@gmail.com');
  const [isTestMode, setIsTestMode] = useState(config.isTestMode);
  const [testingStatus, setTestingStatus] = useState<'idle' | 'testing' | 'success' | 'failed'>('idle');
  const [testMessage, setTestMessage] = useState('');

  if (!isOpen) return null;

  const cleanKey = (val: string) => val.trim();

  const handleSave = () => {
    onSave({
      accessKey: cleanKey(accessKeyInput),
      notificationEmail: emailInput.trim() || 'paotec22@gmail.com',
      isTestMode: isTestMode,
      colorTheme: config.colorTheme,
    });
    onClose();
  };

  const handleTestConnection = async () => {
    const key = cleanKey(accessKeyInput);
    if (!key || key === 'YOUR_ACCESS_KEY_HERE') {
      setTestingStatus('failed');
      setTestMessage('Please enter your Web3Forms Access Key first.');
      return;
    }

    setTestingStatus('testing');
    setTestMessage('Sending test ping to Web3Forms API...');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: key,
          subject: 'Web3Forms Connection Test - PUIDO Smart Solutions',
          from_name: 'PUIDO Smart Solutions Order Portal',
          message: 'Congratulations! Your Web3Forms integration is successfully connected. Customer orders will now arrive directly at this email.',
        }),
      });

      const data = await response.json().catch(() => null);

      if (response.ok && data?.success) {
        setTestingStatus('success');
        setTestMessage('Web3Forms verified! Check your inbox for the test confirmation email.');
      } else {
        setTestingStatus('failed');
        setTestMessage(data?.message || 'Web3Forms rejected the request. Please double-check your Access Key.');
      }
    } catch {
      setTestingStatus('failed');
      setTestMessage('Network error communicating with Web3Forms. Ensure your Access Key is valid.');
    }
  };

  return (
    <div id="web3forms-settings-modal" className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white rounded-xl shadow-2xl max-w-lg w-full overflow-hidden border border-gray-100 flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100 bg-gray-50/50">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-blue-100 text-[#0047FF] flex items-center justify-center font-bold text-sm">
              <Mail className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base font-bold text-gray-900">Web3Forms Email Settings</h3>
              <p className="text-xs text-gray-500">Deliver order notifications directly to your inbox</p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 p-1.5 rounded-lg hover:bg-gray-100 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-5 text-sm">
          {/* Quick Explanation */}
          <div className="p-3.5 rounded-lg bg-blue-50/70 border border-blue-200/60 text-xs text-blue-900 flex items-start gap-2.5">
            <Sparkles className="w-4 h-4 text-[#0047FF] mt-0.5 shrink-0" />
            <div className="space-y-1">
              <p>
                <strong>Why Web3Forms:</strong> Web3Forms requires no password, no complex account setup, and works reliably with standard HTML forms and modern JavaScript fetch.
              </p>
              <p className="text-blue-800">
                Simply enter your email at <a href="https://web3forms.com" target="_blank" rel="noopener noreferrer" className="underline font-semibold">web3forms.com</a> to receive your free Access Key in 5 seconds.
              </p>
            </div>
          </div>

          {/* Web3Forms Access Key Input */}
          <div className="space-y-1.5">
            <div className="flex items-center justify-between">
              <label className="block font-semibold text-gray-800 text-xs uppercase tracking-wide">
                Web3Forms Access Key
              </label>
              <a
                href="https://web3forms.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[11px] font-semibold text-[#0047FF] hover:underline inline-flex items-center gap-1"
              >
                Get Access Key at web3forms.com <ExternalLink className="w-3 h-3" />
              </a>
            </div>
            <div className="flex gap-2">
              <input
                id="input-web3forms-key"
                type="text"
                value={accessKeyInput}
                onChange={(e) => {
                  setAccessKeyInput(e.target.value);
                  setTestingStatus('idle');
                }}
                placeholder="e.g. 1a2b3c4d-5e6f-7a8b-9c0d-1e2f3a4b5c6d"
                className="flex-1 h-10 px-3 border border-gray-300 rounded-md text-sm text-gray-800 font-mono placeholder:text-gray-400 focus:outline-none focus:border-[#0047FF] focus:ring-1 focus:ring-[#0047FF]/30"
              />
              <button
                type="button"
                onClick={handleTestConnection}
                disabled={testingStatus === 'testing' || !accessKeyInput.trim()}
                className="px-3.5 h-10 rounded-md bg-blue-50 hover:bg-blue-100 text-xs font-semibold text-[#0047FF] transition disabled:opacity-50 disabled:cursor-not-allowed shrink-0 border border-blue-200"
              >
                {testingStatus === 'testing' ? 'Testing...' : 'Test Key'}
              </button>
            </div>
            <p className="text-[11px] text-gray-500">
              Paste the Access Key sent to your email from Web3Forms.
            </p>
          </div>

          {/* Test Status feedback */}
          {testingStatus === 'success' && (
            <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-md text-emerald-800 text-xs flex items-center gap-2">
              <Check className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>{testMessage}</span>
            </div>
          )}
          {testingStatus === 'failed' && (
            <div className="p-3 bg-red-50 border border-red-200 rounded-md text-red-800 text-xs flex items-center gap-2">
              <AlertCircle className="w-4 h-4 text-red-600 shrink-0" />
              <span>{testMessage}</span>
            </div>
          )}

          {/* Notification Email */}
          <div className="space-y-1.5">
            <label className="block font-semibold text-gray-800 text-xs uppercase tracking-wide">
              Target Notification Email
            </label>
            <input
              id="input-notification-email"
              type="email"
              value={emailInput}
              onChange={(e) => setEmailInput(e.target.value)}
              placeholder="paotec22@gmail.com"
              className="w-full h-10 px-3 border border-gray-300 rounded-md text-sm text-gray-800 placeholder:text-gray-400 focus:outline-none focus:border-[#0047FF] focus:ring-1 focus:ring-[#0047FF]/30"
            />
            <p className="text-[11px] text-gray-500">
              When creating your Access Key on web3forms.com, enter this email address.
            </p>
          </div>

          {/* Mode Switch */}
          <div className="p-3.5 rounded-lg border border-gray-200 bg-gray-50/70 space-y-2">
            <div className="flex items-center justify-between">
              <div>
                <span className="font-semibold text-gray-800 text-xs">Preview / Simulation Mode</span>
                <p className="text-[11px] text-gray-500">
                  Simulate instant order placement and automatic redirection without calling the live Web3Forms endpoint
                </p>
              </div>
              <input
                id="checkbox-test-mode"
                type="checkbox"
                checked={isTestMode}
                onChange={(e) => setIsTestMode(e.target.checked)}
                className="w-4 h-4 text-[#0047FF] accent-[#0047FF] rounded cursor-pointer"
              />
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-end gap-2.5 px-6 py-3.5 border-t border-gray-100 bg-gray-50">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-gray-600 hover:text-gray-800 rounded-md hover:bg-gray-200/60 transition"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={handleSave}
            className="px-4 py-2 text-xs font-semibold text-white bg-[#0047FF] hover:bg-[#003be0] rounded-md transition shadow-xs"
          >
            Save Settings
          </button>
        </div>
      </div>
    </div>
  );
};


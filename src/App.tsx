/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Settings, Globe, Download, Mail, Palette } from 'lucide-react';
import { OrderForm } from './components/OrderForm';
import { SubmissionSuccess } from './components/SubmissionSuccess';
import { FormspreeSettingsModal } from './components/FormspreeSettingsModal';
import { NamecheapGuideModal } from './components/NamecheapGuideModal';
import { CodeExportModal } from './components/CodeExportModal';
import { PuidoLogo } from './components/PuidoLogo';
import { Web3FormsConfig, OrderFormData } from './types';

const STORAGE_KEY = 'web3forms_order_config';

export default function App() {
  const [config, setConfig] = useState<Web3FormsConfig>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY) || localStorage.getItem('formspree_order_config');
      if (saved) {
        const parsed = JSON.parse(saved);
        const resolvedKey = parsed.accessKey || (parsed.formId && parsed.formId !== 'xbgloqbl' ? parsed.formId : '');
        return {
          accessKey: resolvedKey,
          notificationEmail: parsed.notificationEmail || 'paotec22@gmail.com',
          isTestMode: parsed.isTestMode ?? false,
          colorTheme: parsed.colorTheme || 'puido-blue',
        };
      }
    } catch {
      // Fallback
    }
    return {
      accessKey: '',
      notificationEmail: 'paotec22@gmail.com',
      isTestMode: false,
      colorTheme: 'puido-blue',
    };
  });

  const isBlue = config.colorTheme !== 'terracotta';

  const toggleTheme = () => {
    setConfig((prev) => ({
      ...prev,
      colorTheme: prev.colorTheme === 'terracotta' ? 'puido-blue' : 'terracotta',
    }));
  };

  const [submittedData, setSubmittedData] = useState<OrderFormData | null>(null);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isGuideOpen, setIsGuideOpen] = useState(false);
  const [isExportOpen, setIsExportOpen] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(config));
    } catch {
      // Ignore storage errors
    }
  }, [config]);

  const handleSaveConfig = (newConfig: Web3FormsConfig) => {
    setConfig(newConfig);
  };

  const handleOrderSuccess = (data: OrderFormData) => {
    setSubmittedData(data);
  };

  const handleReset = () => {
    setSubmittedData(null);
  };

  return (
    <div className={`min-h-screen bg-[#fafafa] text-gray-900 flex flex-col font-sans ${isBlue ? 'selection:bg-blue-100 selection:text-blue-900' : 'selection:bg-[#be4b27]/20 selection:text-[#be4b27]'}`}>
      {/* Top Utility & Deployment Header */}
      <header className="sticky top-0 z-30 bg-white/95 backdrop-blur-xs border-b border-gray-200 shadow-2xs">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <PuidoLogo height={36} showSubtitle={false} />
            <span className="hidden sm:inline-block h-4 w-px bg-gray-200" />
            <span className="hidden sm:inline-block text-xs font-semibold text-gray-500 uppercase tracking-wider">
              smart solutions
            </span>

            {/* Web3Forms Status Tag */}
            <button
              type="button"
              onClick={() => setIsSettingsOpen(true)}
              className="hidden md:inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium transition cursor-pointer bg-gray-100 hover:bg-gray-200/80 text-gray-700 ml-1"
              title="Click to configure Web3Forms Access Key"
            >
              <span
                className={`w-2 h-2 rounded-full ${
                  config.accessKey && !config.isTestMode ? 'bg-emerald-500' : 'bg-amber-400'
                }`}
              />
              <span>Web3Forms:</span>
              <span className="font-mono">
                {config.accessKey && !config.isTestMode
                  ? `${config.accessKey.slice(0, 8)}...`
                  : (config.isTestMode ? 'Test Mode' : 'Not Configured')}
              </span>
            </button>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Quick Theme Switcher */}
            <button
              type="button"
              id="header-btn-theme"
              onClick={toggleTheme}
              className="inline-flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-medium text-gray-600 bg-gray-50 hover:bg-gray-100 border border-gray-200 rounded-md transition"
              title={`Switch color theme (Currently: ${isBlue ? 'PUIDO Royal Blue' : 'Classic Terracotta'})`}
            >
              <Palette className={`w-3.5 h-3.5 ${isBlue ? 'text-[#0047FF]' : 'text-[#be4b27]'}`} />
              <span className="hidden sm:inline">
                {isBlue ? 'Royal Blue' : 'Terracotta'}
              </span>
            </button>

            <button
              type="button"
              id="header-btn-guide"
              onClick={() => setIsGuideOpen(true)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-gray-700 bg-gray-50 hover:bg-gray-100 border border-gray-200 rounded-md transition"
            >
              <Globe className={`w-3.5 h-3.5 ${isBlue ? 'text-[#0047FF]' : 'text-[#be4b27]'}`} />
              <span className="hidden sm:inline">Namecheap Guide</span>
              <span className="sm:hidden">Guide</span>
            </button>

            <button
              type="button"
              id="header-btn-export"
              onClick={() => setIsExportOpen(true)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-gray-700 bg-gray-50 hover:bg-gray-100 border border-gray-200 rounded-md transition"
            >
              <Download className="w-3.5 h-3.5 text-gray-600" />
              <span className="hidden sm:inline">Export HTML</span>
              <span className="sm:hidden">HTML</span>
            </button>

            <button
              type="button"
              id="header-btn-settings"
              onClick={() => setIsSettingsOpen(true)}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white rounded-md transition shadow-2xs ${
                isBlue ? 'bg-[#0047FF] hover:bg-[#003be0]' : 'bg-[#be4b27] hover:bg-[#a63f1f]'
              }`}
            >
              <Settings className="w-3.5 h-3.5" />
              <span>Settings</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 max-w-4xl w-full mx-auto px-4 sm:px-6 py-6 sm:py-10">
        {/* Subtle helper banner for quick guidance */}
        {!config.accessKey && (
          <div className={`mb-6 p-4 rounded-lg border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs sm:text-sm ${
            isBlue ? 'bg-blue-50/70 border-blue-200/80 text-blue-950' : 'bg-orange-50/70 border-orange-200/80 text-orange-950'
          }`}>
            <div className="flex items-start gap-2.5">
              <Mail className={`w-4 h-4 mt-0.5 shrink-0 ${isBlue ? 'text-[#0047FF]' : 'text-[#be4b27]'}`} />
              <div>
                <p className="font-semibold text-gray-900">
                  Ready to link submissions directly to {config.notificationEmail}?
                </p>
                <p className="text-gray-600 text-xs">
                  This form is currently running in <strong>Test Simulation Mode</strong>. Add your Web3Forms Access Key in Settings to receive customer orders straight to your email.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <button
                type="button"
                onClick={() => setIsSettingsOpen(true)}
                className={`px-3 py-1.5 text-xs font-semibold text-white rounded transition shadow-2xs ${
                  isBlue ? 'bg-[#0047FF] hover:bg-[#003be0]' : 'bg-[#be4b27] hover:bg-[#a63f1f]'
                }`}
              >
                Enter Web3Forms Key
              </button>
              <button
                type="button"
                onClick={() => setIsGuideOpen(true)}
                className="px-3 py-1.5 text-xs font-semibold text-gray-700 bg-white hover:bg-gray-50 border border-gray-200 rounded transition"
              >
                Hosting Guide
              </button>
            </div>
          </div>
        )}

        {/* The Checkout Form or Success View */}
        <div className="bg-white rounded-xl shadow-xs border border-gray-200/70 p-4 sm:p-8">
          {submittedData ? (
            <SubmissionSuccess
              data={submittedData}
              config={config}
              onReset={handleReset}
              onOpenSettings={() => setIsSettingsOpen(true)}
            />
          ) : (
            <OrderForm
              config={config}
              onOpenSettings={() => setIsSettingsOpen(true)}
              onSuccess={handleOrderSuccess}
            />
          )}
        </div>
      </main>

      {/* Modals */}
      <FormspreeSettingsModal
        isOpen={isSettingsOpen}
        onClose={() => setIsSettingsOpen(false)}
        config={config}
        onSave={handleSaveConfig}
      />

      <NamecheapGuideModal
        isOpen={isGuideOpen}
        onClose={() => setIsGuideOpen(false)}
        accessKey={config.accessKey}
      />

      <CodeExportModal
        isOpen={isExportOpen}
        onClose={() => setIsExportOpen(false)}
        accessKey={config.accessKey}
      />
    </div>
  );
}

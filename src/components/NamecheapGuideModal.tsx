import React, { useState } from 'react';
import { X, Globe, Mail, CheckCircle2, Copy, Check, ExternalLink, ArrowRight, Server, ShieldCheck } from 'lucide-react';

interface NamecheapGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
  accessKey?: string;
  formId?: string;
}

export const NamecheapGuideModal: React.FC<NamecheapGuideModalProps> = ({
  isOpen,
  onClose,
  accessKey,
  formId,
}) => {
  const [activeTab, setActiveTab] = useState<'web3forms' | 'namecheap' | 'checklist'>('namecheap');
  const [copiedText, setCopiedText] = useState<string | null>(null);
  const effectiveKey = accessKey || formId || '';

  if (!isOpen) return null;

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(id);
    setTimeout(() => setCopiedText(null), 2000);
  };

  return (
    <div id="namecheap-guide-modal" className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white rounded-xl shadow-2xl max-w-2xl w-full overflow-hidden border border-gray-100 flex flex-col max-h-[92vh]">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100 bg-gray-50/70">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-blue-100 text-[#0038FF] flex items-center justify-center font-bold text-sm">
              <Globe className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base font-bold text-gray-900">Namecheap & Formspree Setup Guide</h3>
              <p className="text-xs text-gray-500">Step-by-step instructions to get your form live on your domain</p>
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

        {/* Tab Navigation */}
        <div className="flex border-b border-gray-200 px-6 pt-2 bg-gray-50/30 gap-6">
          <button
            type="button"
            onClick={() => setActiveTab('namecheap')}
            className={`pb-3 text-xs font-semibold border-b-2 transition ${
              activeTab === 'namecheap'
                ? 'border-[#0038FF] text-[#0038FF]'
                : 'border-transparent text-gray-500 hover:text-gray-700'
            }`}
          >
            1. Hosting on Namecheap Domain
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('web3forms')}
            className={`pb-3 text-xs font-semibold border-b-2 transition ${
              activeTab === 'web3forms'
                ? 'border-[#0038FF] text-[#0038FF]'
                : 'border-transparent text-gray-500 hover:text-gray-700'
            }`}
          >
            2. Web3Forms Setup
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('checklist')}
            className={`pb-3 text-xs font-semibold border-b-2 transition ${
              activeTab === 'checklist'
                ? 'border-[#0038FF] text-[#0038FF]'
                : 'border-transparent text-gray-500 hover:text-gray-700'
            }`}
          >
            3. Verification Checklist
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6 text-sm">
          {activeTab === 'namecheap' && (
            <div className="space-y-6">
              {/* Highlight banner for the specific domain and /forms path */}
              <div className="bg-blue-50/80 border border-blue-200 rounded-lg p-4 text-xs text-blue-950 space-y-1.5">
                <div className="flex items-center gap-1.5 font-bold text-sm text-blue-900">
                  <Globe className="w-4 h-4 text-[#0047FF]" />
                  <span>Target URL: https://puidosmartsolutions.com/forms</span>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  To make the checkout form accessible at exactly <strong className="font-mono text-blue-800">/forms</strong> without showing <code className="bg-white px-1 py-0.5 rounded border border-blue-200">.html</code> in the address bar, follow the folder method below:
                </p>
              </div>

              {/* Step 1 */}
              <div className="flex gap-3">
                <div className="w-6 h-6 rounded-full bg-gray-100 text-gray-700 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                  1
                </div>
                <div className="space-y-1">
                  <h4 className="font-bold text-gray-900">Log into Namecheap cPanel</h4>
                  <p className="text-gray-600 text-xs leading-relaxed">
                    Go to <a href="https://www.namecheap.com" target="_blank" rel="noreferrer" className="text-[#0047FF] underline font-medium">namecheap.com</a>, log into your account, navigate to <strong>Hosting List</strong>, and click <strong>Go to cPanel</strong> next to <span className="font-medium text-gray-800">puidosmartsolutions.com</span>.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex gap-3">
                <div className="w-6 h-6 rounded-full bg-gray-100 text-gray-700 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                  2
                </div>
                <div className="space-y-1">
                  <h4 className="font-bold text-gray-900">Open File Manager & locate public_html</h4>
                  <p className="text-gray-600 text-xs leading-relaxed">
                    Under the <strong>Files</strong> section in cPanel, click <strong>File Manager</strong>. In the folder list on the left, double-click to open <code className="bg-gray-100 px-1.5 py-0.5 rounded font-mono text-gray-800 font-semibold">public_html</code>.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex gap-3">
                <div className="w-6 h-6 rounded-full bg-[#0047FF] text-white font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                  3
                </div>
                <div className="space-y-1">
                  <h4 className="font-bold text-gray-900">Create a New Folder named &ldquo;forms&rdquo;</h4>
                  <p className="text-gray-600 text-xs leading-relaxed">
                    In the top toolbar of File Manager, click the <strong>+ Folder</strong> button. In the popup dialog, type the new folder name: <code className="bg-blue-50 text-blue-900 px-1.5 py-0.5 rounded font-mono font-bold">forms</code> (all lowercase), and click <strong>Create New Folder</strong>.
                  </p>
                </div>
              </div>

              {/* Step 4 */}
              <div className="flex gap-3">
                <div className="w-6 h-6 rounded-full bg-gray-100 text-gray-700 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                  4
                </div>
                <div className="space-y-1">
                  <h4 className="font-bold text-gray-900">Open &ldquo;forms&rdquo; and Create &ldquo;index.html&rdquo;</h4>
                  <p className="text-gray-600 text-xs leading-relaxed">
                    Double-click into the new <code className="bg-gray-100 px-1 py-0.5 rounded font-mono text-gray-800">public_html/forms</code> folder. Click <strong>+ File</strong> in the top toolbar, name the file <code className="bg-emerald-50 text-emerald-800 px-1.5 py-0.5 rounded font-mono font-bold">index.html</code>, and click <strong>Create New File</strong>.
                  </p>
                  <p className="text-[11px] text-gray-500 italic mt-0.5">
                    Naming it index.html ensures the web server automatically serves this file when someone visits puidosmartsolutions.com/forms without needing to type /index.html.
                  </p>
                </div>
              </div>

              {/* Step 5 */}
              <div className="flex gap-3">
                <div className="w-6 h-6 rounded-full bg-gray-100 text-gray-700 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                  5
                </div>
                <div className="space-y-1">
                  <h4 className="font-bold text-gray-900">Paste the Form Code & Save</h4>
                  <p className="text-gray-600 text-xs leading-relaxed">
                    Select <code className="bg-gray-100 px-1 py-0.5 rounded font-mono text-gray-800">index.html</code>, click <strong>Edit</strong> in the toolbar (or right-click &gt; Edit). Click the <strong>&ldquo;Export Code&rdquo;</strong> button in this app, copy the entire HTML, paste it into the editor, and click <strong>Save Changes</strong>.
                  </p>
                </div>
              </div>

              {/* WordPress Alternative */}
              <div className="p-3.5 bg-gray-50 border border-gray-200 rounded-lg text-xs text-gray-600 space-y-1.5">
                <div className="flex items-center gap-1.5 font-semibold text-gray-800">
                  <Server className="w-4 h-4 text-[#0038FF] shrink-0" />
                  <span>WordPress Setup & Page Title Hiding:</span>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Go to WordPress Admin &gt; <strong>Pages</strong> &gt; <strong>Add New Page</strong>. In the editor, add a <strong>Custom HTML</strong> block and paste the WordPress embed snippet.
                </p>
                <p className="text-blue-900 bg-blue-50/80 p-2.5 rounded border border-blue-200/70 leading-relaxed">
                  <strong>Hiding the Page Title:</strong> The exported snippet includes built-in CSS and script rules that automatically hide theme page titles (e.g. <code className="font-mono text-blue-950 font-bold">.entry-title</code>, <code className="font-mono text-blue-950 font-bold">.wp-block-post-title</code>, <code className="font-mono text-blue-950 font-bold">header.entry-header</code>). In your page settings sidebar, you can also set the page template to <em>"Elementor Canvas"</em>, <em>"Blank"</em>, or toggle <em>"Disable Title"</em> for a 100% clean full-width look.
                </p>
              </div>
            </div>
          )}

          {activeTab === 'web3forms' && (
            <div className="space-y-6">
              <div className="bg-blue-50/80 border border-blue-200 rounded-lg p-3.5 text-xs text-blue-950">
                <strong>Why Web3Forms is faster and more reliable:</strong> It requires zero passwords, no complex dashboard, and works out-of-the-box with direct form submissions and JSON fetch. All form fields are automatically formatted and delivered directly to your inbox.
              </div>

              {/* Step 1 */}
              <div className="flex gap-3">
                <div className="w-6 h-6 rounded-full bg-blue-100 text-[#0038FF] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                  1
                </div>
                <div className="space-y-1">
                  <h4 className="font-bold text-gray-900">Get your Free Access Key</h4>
                  <p className="text-gray-600 text-xs leading-relaxed">
                    Go to <a href="https://web3forms.com" target="_blank" rel="noreferrer" className="text-[#0038FF] font-semibold underline inline-flex items-center gap-1">web3forms.com <ExternalLink className="w-3 h-3" /></a>, enter your email address (<code className="font-mono text-gray-800">paotec22@gmail.com</code>), and click <strong>Create Access Key</strong>.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex gap-3">
                <div className="w-6 h-6 rounded-full bg-blue-100 text-[#0038FF] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                  2
                </div>
                <div className="space-y-1">
                  <h4 className="font-bold text-gray-900">Check your Email</h4>
                  <p className="text-gray-600 text-xs leading-relaxed">
                    Web3Forms immediately sends your unique Access Key (e.g. <code className="bg-gray-100 px-1 py-0.5 rounded font-mono text-gray-800">a1b2c3d4-e5f6-7890-abcd-ef1234567890</code>) to your inbox.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex gap-3">
                <div className="w-6 h-6 rounded-full bg-blue-100 text-[#0038FF] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                  3
                </div>
                <div className="space-y-1">
                  <h4 className="font-bold text-gray-900">Paste your Access Key into Settings</h4>
                  <p className="text-gray-600 text-xs leading-relaxed">
                    Open <strong>Settings</strong> in this app, paste the Access Key, and click <strong>Test Key</strong>. You'll receive a test email confirming the pipeline is active.
                  </p>
                </div>
              </div>

              {/* Step 4 */}
              <div className="flex gap-3">
                <div className="w-6 h-6 rounded-full bg-blue-100 text-[#0038FF] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                  4
                </div>
                <div className="space-y-1">
                  <h4 className="font-bold text-gray-900">Export or Upload</h4>
                  <p className="text-gray-600 text-xs leading-relaxed">
                    Click <strong>Export HTML</strong> to download your <code className="bg-gray-100 px-1 py-0.5 rounded font-mono text-gray-800">index.html</code> (with your Web3Forms key pre-configured) and upload it to <code className="bg-gray-100 px-1 py-0.5 rounded font-mono text-gray-800">public_html/forms/</code> on your Namecheap cPanel.
                  </p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'checklist' && (
            <div className="space-y-4">
              <h4 className="font-bold text-gray-900 text-xs uppercase tracking-wide">
                Pre-Flight Launch Checklist
              </h4>

              <div className="space-y-2.5">
                <div className="p-3 bg-gray-50 border border-gray-200 rounded-lg flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                  <div className="text-xs">
                    <span className="font-semibold text-gray-800">Form Fields Match Customer Requirements</span>
                    <p className="text-gray-600">First Name, Last Name, Full Address, Primary Phone, Alternative Phone, Quantity, Delivery Readiness.</p>
                  </div>
                </div>

                <div className="p-3 bg-gray-50 border border-gray-200 rounded-lg flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                  <div className="text-xs">
                    <span className="font-semibold text-gray-800">SSL Certificate Active on Namecheap</span>
                    <p className="text-gray-600">Ensure Namecheap cPanel has Free PositiveSSL active so your site loads over <code className="font-mono text-gray-700">https://</code>.</p>
                  </div>
                </div>

                <div className="p-3 bg-gray-50 border border-gray-200 rounded-lg flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                  <div className="text-xs">
                    <span className="font-semibold text-gray-800">Test Submission Delivered to Email</span>
                    <p className="text-gray-600">Submit a test order and verify the incoming email arrives in your inbox or spam folder (mark as Not Spam once).</p>
                  </div>
                </div>

                <div className="p-3 bg-gray-50 border border-gray-200 rounded-lg flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                  <div className="text-xs">
                    <span className="font-semibold text-gray-800">Automatic Redirect to Camera Page</span>
                    <p className="text-gray-600">Upon order placement, users are automatically taken directly to <code className="font-mono text-[#be4b27]">https://puidosmartsolutions.com/cameratyp/</code>.</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between px-6 py-3.5 border-t border-gray-100 bg-gray-50">
          <span className="text-xs text-gray-500">
            Web3Forms Access Key: <strong className="font-mono text-gray-800">{effectiveKey ? `${effectiveKey.slice(0, 8)}...` : 'Not set (Test Mode)'}</strong>
          </span>
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-white bg-[#0038FF] hover:bg-[#002edb] rounded-md transition shadow-xs"
          >
            Got it, close
          </button>
        </div>
      </div>
    </div>
  );
};

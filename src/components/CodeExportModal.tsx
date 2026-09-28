import React, { useState } from 'react';
import { X, Copy, Check, Download, FileCode, CheckCircle2, Code2, Globe, EyeOff } from 'lucide-react';
import { generateStandaloneHtml, generateWordpressEmbedHtml } from '../utils/exportTemplates';

interface CodeExportModalProps {
  isOpen: boolean;
  onClose: () => void;
  accessKey?: string;
  formId?: string;
}

export const CodeExportModal: React.FC<CodeExportModalProps> = ({
  isOpen,
  onClose,
  accessKey,
  formId,
}) => {
  const [activeTab, setActiveTab] = useState<'standalone' | 'wordpress'>('standalone');
  const [copied, setCopied] = useState(false);

  const effectiveKey = accessKey || formId || '';
  const standaloneCode = generateStandaloneHtml(effectiveKey);
  const wordpressCode = generateWordpressEmbedHtml(effectiveKey);

  const currentCode = activeTab === 'standalone' ? standaloneCode : wordpressCode;
  const fileName = activeTab === 'standalone' ? 'index.html' : 'puido-order-form.html';

  if (!isOpen) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText(currentCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  const handleDownload = () => {
    const blob = new Blob([currentCode], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = fileName;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div id="code-export-modal" className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white rounded-xl shadow-2xl max-w-3xl w-full overflow-hidden border border-gray-100 flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100 bg-gray-50/70">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-blue-100 text-[#0038FF] flex items-center justify-center font-bold text-sm">
              <FileCode className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base font-bold text-gray-900">Export Order Form Code</h3>
              <p className="text-xs text-gray-500">
                Powered by Web3Forms — Ready for Namecheap cPanel upload or WordPress embedding
              </p>
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

        {/* Tab Selection */}
        <div className="flex border-b border-gray-200 bg-gray-50/50 px-6 pt-2 gap-2">
          <button
            type="button"
            onClick={() => setActiveTab('standalone')}
            className={`px-4 py-2.5 text-xs font-semibold rounded-t-lg transition flex items-center gap-2 border-b-2 ${
              activeTab === 'standalone'
                ? 'bg-white border-[#0038FF] text-[#0038FF] shadow-xs'
                : 'border-transparent text-gray-600 hover:text-gray-900 hover:bg-gray-100/60'
            }`}
          >
            <Globe className="w-3.5 h-3.5" />
            Namecheap Standalone HTML (for /forms)
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('wordpress')}
            className={`px-4 py-2.5 text-xs font-semibold rounded-t-lg transition flex items-center gap-2 border-b-2 ${
              activeTab === 'wordpress'
                ? 'bg-white border-[#0038FF] text-[#0038FF] shadow-xs'
                : 'border-transparent text-gray-600 hover:text-gray-900 hover:bg-gray-100/60'
            }`}
          >
            <Code2 className="w-3.5 h-3.5" />
            WordPress Custom HTML Block (Scoped)
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-emerald-50 border border-emerald-100 rounded-lg p-3 text-xs text-emerald-900">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>
                Backend:{' '}
                <strong className="font-mono">
                  api.web3forms.com/submit
                </strong>
                {' '}• Access Key:{' '}
                <strong className="font-mono">{effectiveKey ? `${effectiveKey.slice(0, 8)}...` : 'YOUR_ACCESS_KEY_HERE'}</strong>
                {' '}• Redirects to:{' '}
                <strong className="font-mono">puidosmartsolutions.com/cameratyp/</strong>
              </span>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <button
                type="button"
                onClick={handleCopy}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white border border-emerald-200 hover:bg-emerald-50 font-semibold rounded text-emerald-800 transition"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                {copied ? 'Copied!' : 'Copy Code'}
              </button>
              <button
                type="button"
                onClick={handleDownload}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#0038FF] hover:bg-[#002edb] text-white font-semibold rounded transition shadow-xs"
              >
                <Download className="w-3.5 h-3.5" />
                Download {fileName}
              </button>
            </div>
          </div>

          {activeTab === 'wordpress' && (
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 text-xs text-blue-900 flex items-start gap-2.5">
              <EyeOff className="w-4 h-4 text-[#0038FF] mt-0.5 shrink-0" />
              <div className="space-y-1">
                <p className="font-semibold text-blue-950">
                  Page Title Automatically Hidden
                </p>
                <p className="text-blue-800 leading-relaxed">
                  This WordPress snippet has built-in CSS and script rules that automatically hide theme page titles (e.g. <code className="font-mono bg-blue-100/80 px-1 py-0.5 rounded text-blue-950">.entry-title</code>, <code className="font-mono bg-blue-100/80 px-1 py-0.5 rounded text-blue-950">.wp-block-post-title</code>, and <code className="font-mono bg-blue-100/80 px-1 py-0.5 rounded text-blue-950">header.entry-header</code>) so only your checkout form displays on the live page.
                </p>
                <p className="text-blue-700 text-[11px]">
                  <strong>WordPress Tip:</strong> In your page editor sidebar under Page Settings, you can also set Template to <em>"Elementor Canvas"</em> or toggle <em>"Disable Title"</em> for a clean full-width layout.
                </p>
              </div>
            </div>
          )}

          <div className="relative border border-gray-200 rounded-lg overflow-hidden bg-gray-900">
            <div className="flex items-center justify-between px-4 py-2 bg-gray-800 text-gray-300 text-xs font-mono border-b border-gray-700">
              <span>{fileName} {activeTab === 'wordpress' ? '(WordPress Custom HTML block)' : '(Single-File Page)'}</span>
              <span>{(currentCode.length / 1024).toFixed(1)} KB</span>
            </div>
            <pre className="p-4 text-xs font-mono text-gray-200 overflow-x-auto max-h-[360px] leading-relaxed">
              <code>{currentCode}</code>
            </pre>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between px-6 py-3.5 border-t border-gray-100 bg-gray-50">
          <p className="text-xs text-gray-500">
            {activeTab === 'standalone' ? (
              <>Upload directly to Namecheap cPanel under <code className="bg-gray-200 px-1 py-0.5 rounded font-mono">public_html/forms/index.html</code></>
            ) : (
              <>Paste into your WordPress block editor: add a <strong>Custom HTML</strong> block and paste this whole snippet.</>
            )}
          </p>
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-gray-700 bg-gray-200 hover:bg-gray-300 rounded-md transition"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

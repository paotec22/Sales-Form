import React, { useState, useRef } from 'react';
import { SVG_PUIDO_LOGO } from '../utils/exportTemplates';

interface PuidoLogoProps {
  className?: string;
  height?: number | string;
  showSubtitle?: boolean;
  allowUpload?: boolean;
}

export const PuidoLogo: React.FC<PuidoLogoProps> = ({
  className = '',
  height = 52,
  allowUpload = false,
}) => {
  const [customSvg, setCustomSvg] = useState<string | null>(() => {
    return localStorage.getItem('puido_custom_logo_svg');
  });

  const [imgSrc, setImgSrc] = useState<string>('/puido-logo.svg');
  const [hasError, setHasError] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const numericHeight = typeof height === 'number' ? height : parseInt(String(height), 10) || 52;

  // Handle fallback progression: puido-logo.svg -> Primary SVG -> puido-logo.png -> .jpg
  const handleImageError = () => {
    if (imgSrc === '/puido-logo.svg') {
      setImgSrc('/Puido Smart Solutions_Primary Logo_page-0001.svg');
    } else if (imgSrc.includes('Primary Logo_page-0001.svg')) {
      setImgSrc('/puido-logo.png');
    } else if (imgSrc === '/puido-logo.png') {
      setImgSrc('/Puido Smart Solutions_Primary Logo_page-0001.jpg');
    } else {
      setHasError(true);
    }
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const result = event.target?.result as string;
      if (result) {
        setCustomSvg(result);
        localStorage.setItem('puido_custom_logo_svg', result);
      }
    };
    reader.readAsDataURL(file);
  };

  return (
    <div
      className={`inline-flex items-center select-none relative group ${className}`}
      style={{ height: numericHeight }}
    >
      {allowUpload && (
        <input
          ref={fileInputRef}
          type="file"
          accept=".svg,image/svg+xml,.png,.jpg"
          className="hidden"
          onChange={handleFileUpload}
        />
      )}

      {customSvg ? (
        <img
          src={customSvg}
          alt="PUIDO smart solutions"
          referrerPolicy="no-referrer"
          className="h-full w-auto max-w-full object-contain"
          style={{ height: numericHeight }}
        />
      ) : !hasError ? (
        <img
          src={imgSrc}
          alt="PUIDO smart solutions"
          referrerPolicy="no-referrer"
          className="h-full w-auto max-w-full object-contain"
          style={{ height: numericHeight }}
          onError={handleImageError}
        />
      ) : (
        <div
          style={{ height: numericHeight }}
          className="h-full w-auto flex items-center"
          dangerouslySetInnerHTML={{ __html: SVG_PUIDO_LOGO }}
        />
      )}
    </div>
  );
};

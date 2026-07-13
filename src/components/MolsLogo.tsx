/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

interface MolsLogoProps {
  className?: string;
  showText?: boolean;
  textColorClass?: string;
}

export const MolsLogo: React.FC<MolsLogoProps> = ({
  className = 'h-8',
  showText = false,
  textColorClass = 'text-[#0B0B0B]'
}) => {
  return (
    <div className="flex items-center gap-3 select-none" id="mols-logo-container">
      {/* SVG rendering the exact geometric 3-bar M symbol */}
      <svg
        viewBox="0 0 120 100"
        fill="currentColor"
        className={`${className} text-[#0A47D1] transition-transform duration-300 hover:scale-105`}
        xmlns="http://www.w3.org/2000/svg"
        id="mols-logo-svg"
      >
        {/* Left slanted block */}
        <polygon points="10,15 42,15 28,85 10,85" />
        {/* Middle thin slanted block */}
        <polygon points="52,15 67,15 47,85 32,85" />
        {/* Right slanted block */}
        <polygon points="78,15 110,15 110,85 92,85" />
      </svg>
      
      {showText && (
        <span 
          className={`font-oswald text-2xl font-normal tracking-[0.15em] leading-none uppercase ${textColorClass}`}
          id="mols-logo-text"
        >
          MOLS
        </span>
      )}
    </div>
  );
};

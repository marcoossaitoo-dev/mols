/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import logo from '../assets/images/logo.svg';
import icon from '../assets/images/icon.svg';

interface MolsLogoProps {
  className?: string;
  iconOnly?: boolean;
}

export const MolsLogo: React.FC<MolsLogoProps> = ({
  className = 'h-8',
  iconOnly = false
}) => {
  const imageSrc = iconOnly ? icon : logo;
  
  return (
    <img
      src={imageSrc}
      alt="MOLS Logo"
      className={`${className} transition-transform duration-300 hover:scale-105 select-none`}
      id={iconOnly ? 'mols-icon' : 'mols-logo'}
    />
  );
};

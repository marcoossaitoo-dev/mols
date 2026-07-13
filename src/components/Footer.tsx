/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Instagram, Linkedin, Mail } from 'lucide-react';
import { MolsLogo } from './MolsLogo';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer 
      className="bg-white border-t border-black/[0.04] py-10 md:py-14 px-6"
      id="main-footer"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8" id="footer-container">
        
        {/* Left Side: Logo */}
        <div className="flex items-center" id="footer-logo">
          <MolsLogo className="h-6 w-auto" showText={true} />
        </div>

        {/* Middle: Copyright */}
        <div className="text-xs text-black/40 font-sans tracking-wide text-center" id="footer-copyright">
          © {currentYear} MOLS. Todos os direitos reservados.
        </div>

        {/* Right Side: Social Media Links */}
        <div className="flex items-center gap-5" id="footer-socials">
          <a 
            href="https://instagram.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-2 rounded-full hover:bg-neutral-50 text-black/40 hover:text-[#0A47D1] transition-colors cursor-pointer"
            aria-label="Instagram"
            id="footer-social-instagram"
          >
            <Instagram className="w-4.5 h-4.5" />
          </a>
          <a 
            href="https://linkedin.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-2 rounded-full hover:bg-neutral-50 text-black/40 hover:text-[#0A47D1] transition-colors cursor-pointer"
            aria-label="LinkedIn"
            id="footer-social-linkedin"
          >
            <Linkedin className="w-4.5 h-4.5" />
          </a>
          <a 
            href="mailto:contato@mols.dev" 
            className="p-2 rounded-full hover:bg-neutral-50 text-black/40 hover:text-[#0A47D1] transition-colors cursor-pointer"
            aria-label="Email"
            id="footer-social-mail"
          >
            <Mail className="w-4.5 h-4.5" />
          </a>
        </div>

      </div>
    </footer>
  );
};

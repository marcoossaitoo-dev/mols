/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { MessageSquare, ArrowRight, ExternalLink } from 'lucide-react';

export const ContactCTA: React.FC = () => {
  return (
    <section 
      className="py-16 md:py-24 px-6 bg-[#FAFAFA]"
      id="contact"
    >
      <div className="max-w-4xl mx-auto" id="contact-cta-wrapper">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="relative bg-gradient-to-br from-[#0A47D1] to-[#082B63] rounded-3xl p-8 md:p-12 overflow-hidden shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8 text-white select-none"
          id="contact-cta-card"
        >
          {/* Decorative subtle background waves */}
          <div className="absolute inset-0 opacity-10 pointer-events-none" id="cta-wave-bg">
            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <path d="M0,50 Q25,30 50,50 T100,50 L100,100 L0,100 Z" fill="white" />
            </svg>
          </div>

          {/* Left Text Side */}
          <div className="flex items-center gap-6 text-left relative z-10" id="cta-text-side">
            <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 hidden sm:flex items-center justify-center shrink-0">
              {/* WhatsApp message styled SVG bubble or Message icon */}
              <svg 
                viewBox="0 0 24 24" 
                fill="currentColor" 
                className="w-8 h-8 text-white"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12.004 2C6.48 2 2 6.48 2 12.004c0 1.83.493 3.543 1.347 5.03l-1.3 4.757a.75.75 0 00.916.916l4.757-1.3A9.957 9.957 0 0012.004 22c5.523 0 10-4.477 10-10C22.004 6.481 17.527 2 12.004 2zm5.03 14.004c-.21.595-1.22 1.135-1.705 1.18-.465.045-.915.195-2.955-.615-2.61-1.035-4.29-3.72-4.425-3.9-.135-.18-1.095-1.455-1.095-2.775 0-1.32.69-1.965.945-2.22.255-.255.555-.315.735-.315.18 0 .36 0 .51.015.165.015.39-.06.615.48.225.54.78 1.905.84 2.025.06.12.105.255.015.42-.09.18-.135.285-.27.45-.135.15-.285.345-.405.465-.135.135-.285.285-.12.57.165.285.735 1.215 1.575 1.965.72.645 1.32.84 1.575.96.255.12.405.105.555-.06.15-.165.645-.75.825-1.005.18-.255.36-.21.6-.12.24.09 1.53.72 1.785.855.255.135.42.195.48.3.06.105.06.615-.15 1.21z" />
              </svg>
            </div>
            <div>
              <h3 className="text-2xl font-extrabold tracking-tight mb-2">
                Gostou das soluções que oferecemos?
              </h3>
              <p className="text-sm text-white/70 leading-relaxed max-w-md">
                Clique ao lado para iniciar uma conversa direto no WhatsApp e planejar seu próximo site ou sistema sob medida.
              </p>
            </div>
          </div>

          {/* Right Button Side */}
          <div className="w-full md:w-auto shrink-0 relative z-10" id="cta-btn-side">
            <a
              href="https://wa.me/5517981392639"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4.5 rounded-2xl bg-white hover:bg-neutral-100 text-[#0A47D1] font-sans text-sm font-bold tracking-wide transition-all duration-300 shadow-xl shadow-blue-900/20 group cursor-pointer"
              id="cta-whatsapp-link"
            >
              Falar com Matheus
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

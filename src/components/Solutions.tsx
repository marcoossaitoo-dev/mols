/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Monitor, FileText, Code, Sparkles } from 'lucide-react';
import { solutionsData } from '../data/projects';

export const Solutions: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Monitor':
        return <Monitor className="w-6 h-6 text-[#0A47D1]" />;
      case 'FileText':
        return <FileText className="w-6 h-6 text-[#0A47D1]" />;
      case 'Code':
        return <Code className="w-6 h-6 text-[#0A47D1]" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-[#0A47D1]" />;
      default:
        return <Monitor className="w-6 h-6 text-[#0A47D1]" />;
    }
  };

  return (
    <section 
      className="py-20 md:py-28 px-6 bg-white border-y border-black/[0.04]"
      id="solutions"
    >
      <div className="max-w-7xl mx-auto" id="solutions-container">
        
        {/* Solutions header info */}
        <div className="text-center max-w-xl mx-auto mb-16 md:mb-20" id="solutions-header">
          <span className="text-[10px] uppercase font-bold tracking-widest text-[#0A47D1] block mb-3">
            O QUE CONSTRUÍMOS
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-[#0B0B0B] font-sans">
            Soluções digitais completas para cada etapa do seu negócio.
          </h2>
        </div>

        {/* Solutions cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" id="solutions-grid">
          {solutionsData.map((sol, index) => (
            <motion.div
              key={sol.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="p-6 md:p-8 rounded-2xl bg-neutral-50 hover:bg-white border border-black/[0.03] hover:border-[#0A47D1]/15 transition-all duration-300 premium-glow flex flex-col gap-5 text-left"
              id={`solution-card-${index}`}
            >
              {/* Icon Container */}
              <div 
                className="w-12 h-12 rounded-xl bg-[#0A47D1]/5 flex items-center justify-center shadow-inner"
                id={`solution-icon-${index}`}
              >
                {getIcon(sol.iconName)}
              </div>

              {/* Text content */}
              <div className="flex flex-col gap-2" id={`solution-text-${index}`}>
                <h3 className="font-bold text-base text-[#0B0B0B] tracking-tight font-sans">
                  {sol.title}
                </h3>
                <p className="text-xs text-black/55 leading-relaxed font-sans">
                  {sol.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

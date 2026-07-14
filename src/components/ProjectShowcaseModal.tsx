/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { X, Calendar, User, Tag, Sparkles, CheckCircle, ExternalLink } from 'lucide-react';
import { Project } from '../types';
import { ProjectIntelligenceCenter } from './ProjectIntelligenceCenter';

interface ProjectShowcaseModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectShowcaseModal: React.FC<ProjectShowcaseModalProps> = ({
  project,
  onClose,
}) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 md:p-6" id="project-showcase-modal">
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-[#0B0B0B]/80 backdrop-blur-md cursor-pointer"
        id="modal-backdrop"
      />

      {/* Modal Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ type: 'spring', duration: 0.4 }}
        className="relative w-full max-w-[1200px] bg-neutral-50 rounded-3xl overflow-hidden shadow-2xl z-10 border border-black/[0.06] flex flex-col max-h-[95vh]"
        id="modal-container"
      >
        {/* Header bar */}
        <div className="sticky top-0 bg-white/80 backdrop-blur-md border-b border-black/[0.06] px-6 py-4 flex justify-between items-center z-20" id="modal-header-bar">
          <div className="flex items-center gap-3">
            <div className="flex flex-wrap items-center gap-1.5">
              {project.category.map((category) => (
                <span key={category} className="text-[10px] uppercase font-bold tracking-widest bg-[#0A47D1]/10 text-[#0A47D1] px-3 py-1.5 rounded-full">
                  {category}
                </span>
              ))}
            </div>
            <span className="hidden sm:inline-block text-xs text-black/40 font-mono">ID: {project.id}</span>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-black/5 rounded-full text-black/50 hover:text-black transition-colors cursor-pointer"
            id="modal-close-btn"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Area */}
        <div className="overflow-y-auto p-4 md:p-8 lg:p-10 flex-grow scrollbar-hide" id="modal-scrollable-content">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12" id="modal-grid">
            
            {/* Left Column: Project Details Info */}
            <div className="lg:col-span-5 flex flex-col justify-start" id="modal-info-column">
              <div className="sticky top-0">
                <span className="text-xs font-semibold text-[#0A47D1] uppercase tracking-widest block mb-2">PROJETO MOLS</span>
                <h2 className="font-oswald text-4xl lg:text-5xl font-normal tracking-wide text-[#0B0B0B] mb-5 uppercase">{project.name}</h2>
                
                <p className="text-sm text-black/70 leading-relaxed mb-8">
                  {project.fullDescription}
                </p>

                {/* Meta details list */}
                <div className="flex flex-col gap-4 border-y border-black/[0.08] py-6 mb-8 text-xs text-black/70" id="modal-meta-list">
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-black/40 flex items-center gap-2"><User className="w-4 h-4" /> Cliente:</span>
                    <span className="font-semibold text-[#0B0B0B]">{project.client}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-black/40 flex items-center gap-2"><Calendar className="w-4 h-4" /> Ano de Criação:</span>
                    <span className="font-semibold text-[#0B0B0B]">{project.year}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-black/40 flex items-center gap-2"><Tag className="w-4 h-4" /> Categoria:</span>
                    <div className="flex flex-wrap justify-end gap-1.5">
                      {project.category.map((category) => (
                        <span key={category} className="font-semibold text-[#0B0B0B]">
                          {category}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Features Checklist */}
                <div className="mb-8">
                  <h4 className="text-xs font-bold text-black/80 uppercase tracking-wider mb-4 flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-[#0A47D1]" />
                    Destaques da Solução
                  </h4>
                  <ul className="flex flex-col gap-3" id="modal-features-list">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm text-black/65">
                        <CheckCircle className="w-4 h-4 text-[#0A47D1] mt-0.5 shrink-0" />
                        <span className="leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tags block */}
                <div className="pt-6 border-t border-black/[0.06] flex flex-col gap-6" id="modal-tags-and-link">
                  <div className="flex flex-wrap gap-2" id="modal-tags">
                    {project.tags.map((tag) => (
                      <span 
                        key={tag} 
                        className="text-[10px] font-medium text-black/55 bg-black/5 px-3 py-1.5 rounded-md uppercase tracking-wider"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Project Intelligence Center */}
            <div className="lg:col-span-7 flex flex-col justify-start" id="modal-interactive-column">
              <ProjectIntelligenceCenter project={project} />
            </div>

          </div>
        </div>
      </motion.div>
    </div>
  );
};

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Grid, Cpu, Scissors } from 'lucide-react';
import { Project } from '../types';
import { projectsData } from '../data/projects';

const featuredProjectIds = ['fintrack', 'atelier-aurea'] as const;

interface FeaturedProjectsProps {
  onSelectProject: (project: Project) => void;
  onViewAllProjects: () => void;
}

export const FeaturedProjects: React.FC<FeaturedProjectsProps> = ({
  onSelectProject,
  onViewAllProjects,
}) => {
  const featuredProjects = featuredProjectIds
    .map((projectId) => projectsData.find((project) => project.id === projectId))
    .filter((project): project is Project => Boolean(project));

  return (
    <section 
      className="py-16 md:py-20 px-6 bg-white border-t border-black/[0.03]"
      id="featured-projects"
    >
      <div className="max-w-6xl mx-auto" id="featured-container">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-10 md:mb-12" id="featured-header">
          <span className="text-[10px] uppercase font-bold tracking-widest text-[#0A47D1] block mb-2.5">
            NOSSOS PROJETOS
          </span>
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-[#0B0B0B] font-sans">
            Projetos que geram impacto e resultados.
          </h2>
        </div>

        {/* Feature Cards Grid (Two horizontal items side-by-side) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10" id="featured-cards-grid">
          
          {featuredProjects.map((project, idx) => (
            <div 
              key={project.id}
              onClick={() => onSelectProject(project)}
              className="group relative rounded-2xl overflow-hidden bg-[#0A0A0A] border border-white/5 shadow-md shadow-black/10 hover:-translate-y-1 hover:shadow-[0_15px_30px_rgba(10,71,209,0.12)] hover:border-[#0A47D1]/20 cursor-pointer h-[260px] md:h-[280px] p-6 md:p-8 flex flex-col justify-between transition-all duration-300 ease-out"
              id={`featured-card-${project.id}`}
            >
              {/* Image Background */}
              {project.imageUrl && (
                <div 
                  className="absolute right-0 top-0 bottom-0 w-[55%] z-0" 
                  style={{
                    backgroundImage: `url(${project.imageUrl})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                />
              )}

              {/* Gradient Overlay to ensure text readability */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#0B0B0B] via-[#0B0B0B]/90 to-transparent z-10" />
              <div className="absolute inset-0 bg-[#0B0B0B]/40 group-hover:bg-[#0B0B0B]/20 transition-all duration-300 ease-out z-10" />

              {/* Tag positioned absolutely at top right */}
              <div className="absolute top-6 right-6 z-20 flex flex-wrap justify-end gap-1.5" id={`${project.id}-tag-wrapper`}>
                {project.category.map((category) => (
                  <span key={category} className="text-[9px] font-bold tracking-wider text-white/50 bg-black/40 backdrop-blur-sm border border-white/10 px-3 py-1 rounded-full uppercase">
                    {category}
                  </span>
                ))}
              </div>

              {/* Left side content (Text description & Brand header) */}
              <div className="w-[60%] h-full flex flex-col justify-between relative z-20" id={`${project.id}-left-content`}>
                {/* Brand Header */}
                <div className="flex items-center gap-1.5" id={`${project.id}-mini-logo`}>
                  <div className="w-4 h-4 rounded bg-[#0A47D1]/10 border border-[#0A47D1]/20 flex items-center justify-center">
                    <span className="text-[9px] font-extrabold text-[#0A47D1] font-mono">
                      {project.name.charAt(0)}
                    </span>
                  </div>
                  <span className="text-[10px] font-extrabold tracking-wider text-white/70 uppercase truncate">{project.client}</span>
                </div>

                {/* Core copy */}
                <div className="my-auto py-2" id={`${project.id}-copy`}>
                  <h3 className="font-sans text-xl md:text-2xl font-bold text-white mb-2 leading-tight">
                    {project.name}
                  </h3>
                  <p className="text-[11px] md:text-xs text-white/55 group-hover:text-white/80 leading-relaxed transition-colors duration-300 line-clamp-3">
                    {project.description}
                  </p>
                </div>

                {/* Bottom CTA trigger */}
                <div className="flex items-center gap-1.5 text-xs font-semibold text-white/45 group-hover:text-[#0A47D1] transition-colors duration-300" id={`${project.id}-action-trigger`}>
                  <span>Ver detalhes do projeto</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </div>

            </div>
          ))}

        </div>

        {/* View All Projects Button Link */}
        <div className="flex justify-center" id="featured-action-area">
          <button
            onClick={onViewAllProjects}
            className="flex items-center gap-2.5 px-5 py-2.5 rounded-full border border-black/10 hover:border-[#0A47D1]/20 bg-white hover:bg-neutral-50 text-xs font-bold text-black/80 hover:text-[#0A47D1] tracking-wide transition-all duration-300 shadow-sm cursor-pointer"
            id="featured-btn-view-all"
          >
            <Grid className="w-3.5 h-3.5 text-black/40" />
            Ver mais projetos
          </button>
        </div>

      </div>
    </section>
  );
};

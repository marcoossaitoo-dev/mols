/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Grid, Layout, AppWindow, FileSpreadsheet, Layers, Scissors, DollarSign, Cpu, Sliders } from 'lucide-react';
import { Project, ProjectFilter, projectFilters } from '../types';
import { projectsData } from '../data/projects';

interface ProjectsPageProps {
  onSelectProject: (project: Project) => void;
}

export const ProjectsPage: React.FC<ProjectsPageProps> = ({
  onSelectProject,
}) => {
  const [selectedFilter, setSelectedFilter] = useState<ProjectFilter>('Todos');

  const filteredProjects =
    selectedFilter === 'Todos'
      ? projectsData
      : projectsData.filter((project) => project.category.includes(selectedFilter));

  return (
    <div className="min-h-screen bg-neutral-50 pt-32 pb-24 px-6" id="projects-page">
      <div className="max-w-7xl mx-auto" id="projects-page-container">
        
        {/* Top Header Section */}
        <div className="max-w-3xl mb-16" id="projects-page-header">
          <span className="text-[10px] uppercase font-bold tracking-widest text-[#0A47D1] block mb-3">
            PORTFÓLIO MOLS
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-[#0B0B0B] font-sans mb-5 leading-none">
            Soluções desenvolvidas
          </h1>
          <p className="text-sm md:text-base text-black/60 leading-relaxed font-sans max-w-xl">
            Projetos estrategicamente criados para otimizar processos, elevar a presença digital e trazer mais resultados comerciais a cada parceiro Mols.
          </p>
        </div>

        {/* Filter Chips / Chips Nav */}
        <div className="flex flex-wrap items-center gap-2 mb-12 border-b border-black/[0.05] pb-6" id="projects-filter-chips">
          {projectFilters.map((filter) => (
            <button
              key={filter}
              onClick={() => setSelectedFilter(filter)}
              className={`px-5 py-2.5 rounded-full text-xs font-semibold tracking-wide transition-all duration-300 cursor-pointer ${
                selectedFilter === filter
                  ? 'bg-[#0A47D1] text-white shadow-md shadow-blue-600/10'
                  : 'bg-white hover:bg-neutral-100 text-black/60 hover:text-black border border-black/[0.04]'
              }`}
              id={`filter-chip-${filter.toLowerCase().replace(/\s+/g, '-')}`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Projects Grid List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8" id="projects-grid">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.4 }}
                onClick={() => onSelectProject(project)}
                className="group relative rounded-3xl overflow-hidden bg-white border border-black/5 premium-glow transition-all duration-500 hover:shadow-2xl hover:border-[#0A47D1]/15 cursor-pointer flex flex-col h-[520px] justify-between"
                id={`project-card-${project.id}`}
              >
                {/* Desaturated customized preview card background */}
                <div 
                  className={`relative w-full h-[320px] overflow-hidden flex items-center justify-center border-b border-black/5 ${
                    project.darkTheme ? 'bg-[#121212]' : 'bg-neutral-50'
                  }`}
                  id={`project-preview-${project.id}`}
                >
                  {/* Image Background */}
                  {project.imageUrl && (
                    <div 
                      className="absolute inset-0 z-0" 
                      style={{
                        backgroundImage: `url(${project.imageUrl})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                      }}
                    />
                  )}

                  {/* Desaturating overlay */}
                  <div className="absolute inset-0 bg-[#0B0B0B]/60 grayscale group-hover:grayscale-0 group-hover:bg-[#0B0B0B]/20 transition-all duration-500 z-10" />
                </div>
                {/* Info and action content footer */}
                <div className="p-6 md:p-8 flex flex-col justify-end bg-gradient-to-t from-white via-white/95 to-transparent flex-grow z-20" id={`project-footer-${project.id}`}>
                  <div className="flex items-center justify-between gap-3 mb-2">
                    <div className="flex flex-wrap items-center gap-1.5">
                      {project.category.map((category) => (
                        <span key={category} className="text-[10px] font-bold uppercase tracking-wider text-[#0A47D1]">
                          {category}
                        </span>
                      ))}
                    </div>
                    <span className="text-[10px] font-mono text-black/30">
                      Ano: {project.year}
                    </span>
                  </div>
                  
                  <h3 className="font-oswald text-2xl font-normal tracking-wide text-black uppercase mb-1">
                    {project.name}
                  </h3>
                  
                  <p className="text-xs text-black/60 leading-relaxed mb-4 max-w-md">
                    {project.description}
                  </p>

                  <span className="text-xs font-semibold text-[#0A47D1] group-hover:text-blue-600 flex items-center gap-1.5 transition-colors">
                    Ver projeto
                    <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>
    </div>
  );
};

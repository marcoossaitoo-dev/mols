/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { AnimatePresence } from 'motion/react';
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import { ProjectsPage } from './pages/Projects';
import { Footer } from './components/Footer';
import { ProjectShowcaseModal } from './components/ProjectShowcaseModal';
import { Project } from './types';

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'projects'>('home');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleScrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  const handleSelectProject = (project: Project) => {
    setSelectedProject(project);
  };

  const handleCloseProject = () => {
    setSelectedProject(null);
  };

  const handleViewAllProjects = () => {
    setCurrentPage('projects');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col justify-between font-sans select-none" id="mols-app-root">
      {/* 1. Floating & Expandable Responsive Navbar */}
      <Navbar 
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        onScrollToSection={handleScrollToSection}
      />

      {/* 2. Main Page Render and Transitions */}
      <main className="flex-grow">
        {currentPage === 'home' ? (
          <Home 
            onSelectProject={handleSelectProject}
            onViewAllProjects={handleViewAllProjects}
            onScrollToSection={handleScrollToSection}
          />
        ) : (
          <ProjectsPage 
            onSelectProject={handleSelectProject}
          />
        )}
      </main>

      {/* 3. Global Elegant Footer */}
      <Footer />

      {/* 4. Project Showcase & Simulated App Play Area Overlay */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectShowcaseModal 
            project={selectedProject}
            onClose={handleCloseProject}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

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

const SCROLL_GAP = 16;

const getFixedHeaderOffset = () => {
  const isDesktop = window.matchMedia('(min-width: 768px)').matches;

  if (isDesktop) {
    const desktopWrapper = document.getElementById('desktop-navbar-wrapper');
    const desktopNav = document.getElementById('desktop-navbar');
    const wrapperTop = desktopWrapper?.getBoundingClientRect().top ?? 24;
    const navHeight = desktopNav?.getBoundingClientRect().height ?? 64;

    return wrapperTop + navHeight + SCROLL_GAP;
  }

  const mobileContainer = document.getElementById('mobile-navbar-container');
  const mobileContent = document.getElementById('mobile-navbar-content');

  if (!mobileContainer || !mobileContent) {
    return 80 + SCROLL_GAP;
  }

  const containerStyles = window.getComputedStyle(mobileContainer);
  const verticalPadding =
    parseFloat(containerStyles.paddingTop) + parseFloat(containerStyles.paddingBottom);

  return mobileContent.getBoundingClientRect().height + verticalPadding + SCROLL_GAP;
};

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'projects'>('home');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleScrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const elementTop = element.getBoundingClientRect().top + window.scrollY;
      const targetTop = Math.max(elementTop - getFixedHeaderOffset(), 0);

      window.scrollTo({ top: targetTop, behavior: 'smooth' });
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

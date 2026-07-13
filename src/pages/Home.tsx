/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Hero } from '../components/Hero';
import { Solutions } from '../components/Solutions';
import { FeaturedProjects } from '../components/FeaturedProjects';
import { Team } from '../components/Team';
import { ContactCTA } from '../components/ContactCTA';
import { Project } from '../types';

interface HomeProps {
  onSelectProject: (project: Project) => void;
  onViewAllProjects: () => void;
  onScrollToSection: (sectionId: string) => void;
}

export const Home: React.FC<HomeProps> = ({
  onSelectProject,
  onViewAllProjects,
  onScrollToSection,
}) => {
  return (
    <div id="homepage-container">
      {/* 1. Hero Section */}
      <Hero 
        onExploreProjects={onViewAllProjects}
        onContact={() => onScrollToSection('contact')}
      />

      {/* 2. Solutions Section (O Que Fazemos) */}
      <Solutions />

      {/* 3. Featured Projects (FinTrack & Concept Hair) */}
      <FeaturedProjects 
        onSelectProject={onSelectProject}
        onViewAllProjects={onViewAllProjects}
      />

      {/* 4. Team (Quem está por trás) */}
      <Team />

      {/* 5. Contact CTA */}
      <ContactCTA />
    </div>
  );
};

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowRight, MessageSquare, Briefcase, Info, Mail } from 'lucide-react';
import { MolsLogo } from './MolsLogo';

interface NavItemProps {
  label: string;
  icon: React.ReactNode;
  isActive?: boolean;
  isHovered: boolean;
  onClick: () => void;
  id: string;
}

const NavItem: React.FC<NavItemProps> = ({
  label,
  icon,
  isActive,
  isHovered,
  onClick,
  id,
}) => {
  return (
    <button
      onClick={onClick}
      className={`relative h-10 px-3 flex items-center justify-center transition-colors duration-300 cursor-pointer rounded-lg focus:outline-none ${
        isActive ? 'text-[#0A47D1]' : 'text-black/60 hover:text-[#0A47D1]'
      }`}
      id={id}
    >
      <AnimatePresence mode="wait">
        {!isHovered ? (
          <motion.div
            key="icon"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.12 }}
            className="flex items-center justify-center"
          >
            {icon}
          </motion.div>
        ) : (
          <motion.span
            key="text"
            initial={{ opacity: 0, x: -4 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -4 }}
            transition={{ duration: 0.12 }}
            className="text-xs font-bold tracking-wide whitespace-nowrap"
          >
            {label}
          </motion.span>
        )}
      </AnimatePresence>
    </button>
  );
};

interface NavbarProps {
  currentPage: 'home' | 'projects';
  setCurrentPage: (page: 'home' | 'projects') => void;
  onScrollToSection: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  setCurrentPage,
  onScrollToSection,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Track scroll position to change background opacity if desired
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (sectionId: string) => {
    setIsMobileMenuOpen(false);
    if (currentPage !== 'home') {
      setCurrentPage('home');
      // Delay scrolling slightly to allow page transition
      setTimeout(() => {
        onScrollToSection(sectionId);
      }, 100);
    } else {
      onScrollToSection(sectionId);
    }
  };

  const handleProjectsClick = () => {
    setIsMobileMenuOpen(false);
    if (currentPage !== 'home') {
      setCurrentPage('home');
      setTimeout(() => {
        onScrollToSection('featured-projects');
      }, 100);
    } else {
      onScrollToSection('featured-projects');
    }
  };

  return (
    <>
      {/* DESKTOP FLOATING NAVBAR */}
      <div 
        className="fixed top-6 left-0 right-0 z-50 hidden md:flex justify-center px-4"
        id="desktop-navbar-wrapper"
      >
        <motion.nav
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          animate={{
            width: isHovered ? 680 : 260,
          }}
          transition={{
            type: 'spring',
            stiffness: 160,
            damping: 22,
          }}
          className="h-16 flex items-center justify-between rounded-full border border-black/[0.05] bg-white/85 backdrop-blur-md shadow-md shadow-black/[0.02] px-5 overflow-hidden"
          id="desktop-navbar"
        >
          {/* Brand/Logo Area */}
          <button 
            onClick={() => {
              setCurrentPage('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center focus:outline-none cursor-pointer flex-shrink-0" 
            id="navbar-brand-logo"
          >
            <div className="flex items-center gap-2">
              <MolsLogo className="h-4.5 w-auto" showText={false} />
              <AnimatePresence>
                {isHovered && (
                  <motion.span
                    initial={{ opacity: 0, width: 0, x: -10 }}
                    animate={{ opacity: 1, width: 'auto', x: 0 }}
                    exit={{ opacity: 0, width: 0, x: -10 }}
                    transition={{ duration: 0.2, ease: 'easeOut' }}
                    className="font-oswald text-lg font-normal tracking-[0.15em] leading-none uppercase text-[#0B0B0B] overflow-hidden whitespace-nowrap"
                    id="mols-logo-text-animated"
                  >
                    MOLS
                  </motion.span>
                )}
              </AnimatePresence>
            </div>
          </button>

          {/* Navigation Links */}
          <div
            className="flex items-center gap-1.5 font-sans"
            id="navbar-desktop-links"
          >
            <NavItem
              label="Sobre"
              icon={<Info className="w-4.5 h-4.5" />}
              isActive={false}
              isHovered={isHovered}
              onClick={() => handleNavClick('solutions')}
              id="nav-link-solutions"
            />
            <NavItem
              label="Projetos"
              icon={<Briefcase className="w-4.5 h-4.5" />}
              isActive={currentPage === 'projects'}
              isHovered={isHovered}
              onClick={handleProjectsClick}
              id="nav-link-projects"
            />
            <NavItem
              label="Contato"
              icon={<Mail className="w-4.5 h-4.5" />}
              isActive={false}
              isHovered={isHovered}
              onClick={() => handleNavClick('contact')}
              id="nav-link-contact-link"
            />
          </div>

          {/* Call to Action Button */}
          <div id="navbar-desktop-cta" className="flex-shrink-0">
            <motion.button
              onClick={() => handleNavClick('contact')}
              animate={{
                width: isHovered ? 140 : 40,
              }}
              transition={{
                type: 'spring',
                stiffness: 180,
                damping: 24,
              }}
              className="h-10 flex items-center justify-center rounded-full bg-[#0A47D1] hover:bg-[#082B63] text-white shadow-md shadow-blue-600/10 hover:shadow-lg hover:shadow-blue-600/20 group cursor-pointer overflow-hidden focus:outline-none"
              id="nav-btn-contact"
            >
              <AnimatePresence mode="wait">
                {!isHovered ? (
                  <motion.div
                    key="compact-btn"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.12 }}
                    className="flex items-center justify-center"
                  >
                    <ArrowRight className="w-4.5 h-4.5" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="full-btn"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.12 }}
                    className="flex items-center gap-1.5 justify-center px-4"
                  >
                    <span className="text-[11px] font-bold tracking-wide whitespace-nowrap">
                      Fale conosco
                    </span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </motion.nav>
      </div>

      {/* MOBILE NAVBAR */}
      <div 
        className={`fixed top-0 left-0 right-0 z-50 md:hidden transition-all duration-300 ${
          isScrolled || isMobileMenuOpen 
            ? 'bg-white/95 border-b border-black/[0.05] shadow-sm backdrop-blur-md py-4' 
            : 'bg-transparent py-5'
        }`}
        id="mobile-navbar-container"
      >
        <div className="flex items-center justify-between px-6" id="mobile-navbar-content">
          <button 
            onClick={() => {
              setCurrentPage('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-1.5 focus:outline-none cursor-pointer"
            id="mobile-navbar-home-btn"
          >
            <MolsLogo className="h-6 w-auto" showText={true} />
          </button>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-black/80 hover:text-[#0A47D1] transition-colors focus:outline-none cursor-pointer"
            aria-label="Toggle Menu"
            id="mobile-navbar-toggle"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* MOBILE MENU DROPDOWN */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: 'easeInOut' }}
              className="bg-white/95 backdrop-blur-md border-b border-black/[0.05] overflow-hidden"
              id="mobile-navbar-dropdown"
            >
              <div className="flex flex-col gap-5 px-6 pt-4 pb-8 font-sans text-lg font-medium" id="mobile-dropdown-links">
                <button
                  onClick={() => handleNavClick('solutions')}
                  className="text-left py-2 text-black/70 hover:text-[#0A47D1] transition-colors cursor-pointer border-b border-black/[0.03]"
                  id="mobile-nav-solutions"
                >
                  Sobre
                </button>
                <button
                  onClick={handleProjectsClick}
                  className={`text-left py-2 hover:text-[#0A47D1] transition-colors cursor-pointer border-b border-black/[0.03] ${
                    currentPage === 'projects' ? 'text-[#0A47D1] font-semibold' : 'text-black/70'
                  }`}
                  id="mobile-nav-projects"
                >
                  Projetos
                </button>
                <button
                  onClick={() => handleNavClick('team')}
                  className="text-left py-2 text-black/70 hover:text-[#0A47D1] transition-colors cursor-pointer border-b border-black/[0.03]"
                  id="mobile-nav-team"
                >
                  Contato
                </button>
                <button
                  onClick={() => handleNavClick('contact')}
                  className="mt-2 w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-[#0A47D1] text-white text-sm font-semibold tracking-wide transition-all cursor-pointer shadow-md shadow-blue-600/10"
                  id="mobile-nav-cta"
                >
                  <MessageSquare className="w-4 h-4" />
                  Fale conosco
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

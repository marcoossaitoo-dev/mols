/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { flushSync } from 'react-dom';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import { Menu, X, ArrowRight, MessageSquare } from 'lucide-react';
import { MolsLogo } from './MolsLogo';

const whatsappMessage =
  'Oi, vim pelo site da Mols e gostaria de saber mais sobre uma solução digital para o meu negócio.';

const whatsappUrl = `https://wa.me/5516997295436?text=${encodeURIComponent(
  whatsappMessage
)}`;

const releaseBodyScrollLock = () => {
  document.body.style.overflow = '';
  document.documentElement.style.overflow = '';
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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const mobileNavRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  // Track scroll position to change background opacity if desired
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!isMobileMenuOpen) {
      return;
    }

    const handlePointerDown = (event: PointerEvent) => {
      if (
        mobileNavRef.current &&
        !mobileNavRef.current.contains(event.target as Node)
      ) {
        setIsMobileMenuOpen(false);
        releaseBodyScrollLock();
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMobileMenuOpen(false);
        releaseBodyScrollLock();
      }
    };

    document.addEventListener('pointerdown', handlePointerDown);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('pointerdown', handlePointerDown);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isMobileMenuOpen]);

  const runAfterLayout = (callback: () => void) => {
    requestAnimationFrame(() => {
      releaseBodyScrollLock();
      callback();
    });
  };

  const navigateHomeTop = () => {
    flushSync(() => {
      setIsMobileMenuOpen(false);
      setCurrentPage('home');
    });

    releaseBodyScrollLock();
    runAfterLayout(() => window.scrollTo({ top: 0, behavior: 'smooth' }));
  };

  const navigateToHomeSection = (sectionId: string) => {
    flushSync(() => {
      setIsMobileMenuOpen(false);
      if (currentPage !== 'home') {
        setCurrentPage('home');
      }
    });

    releaseBodyScrollLock();
    runAfterLayout(() => onScrollToSection(sectionId));
  };

  const handleProjectsClick = () => {
    navigateToHomeSection('featured-projects');
  };

  return (
    <>
      {/* DESKTOP FLOATING NAVBAR */}
      <div
        className="fixed top-6 left-0 right-0 z-40 hidden justify-center px-4 lg:z-50 lg:flex"
        id="desktop-navbar-wrapper"
      >
        <nav
          className="flex h-16 w-[min(820px,calc(100vw-48px))] items-center justify-between rounded-[28px] border border-black/[0.06] bg-white/88 px-5 shadow-[0_16px_44px_rgba(10,18,30,0.07)] backdrop-blur-md"
          id="desktop-navbar"
        >
          <button
            onClick={navigateHomeTop}
            className="flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0A47D1]/20 cursor-pointer flex-shrink-0"
            id="navbar-brand-logo"
            aria-label="Ir para o início"
          >
            <MolsLogo className="h-5 w-auto" />
          </button>

          <div
            className="flex items-center gap-1.5 font-sans"
            id="navbar-desktop-links"
          >
            <button
              onClick={() => navigateToHomeSection('solutions')}
              className="rounded-full px-4 py-2.5 text-xs font-semibold text-black/62 transition-colors duration-200 hover:text-[#0A47D1] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0A47D1]/20 cursor-pointer"
              id="nav-link-solutions"
            >
              Sobre
            </button>
            <button
              onClick={handleProjectsClick}
              className={`rounded-full px-4 py-2.5 text-xs font-semibold transition-colors duration-200 hover:text-[#0A47D1] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0A47D1]/20 cursor-pointer ${
                currentPage === 'projects' ? 'text-[#0A47D1]' : 'text-black/62'
              }`}
              id="nav-link-projects"
            >
              Projetos
            </button>
            <button
              onClick={() => navigateToHomeSection('contact')}
              className="rounded-full px-4 py-2.5 text-xs font-semibold text-black/62 transition-colors duration-200 hover:text-[#0A47D1] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0A47D1]/20 cursor-pointer"
              id="nav-link-contact-link"
            >
              Contato
            </button>
          </div>

          <div id="navbar-desktop-cta" className="flex-shrink-0">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex h-10 items-center justify-center gap-1.5 rounded-full bg-[#0A47D1] px-4.5 text-[11px] font-semibold tracking-wide text-white shadow-[0_12px_28px_rgba(10,71,209,0.16)] transition-colors duration-200 hover:bg-[#082B63] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0A47D1]/30 cursor-pointer"
              id="nav-btn-contact"
              aria-label="Falar com a Mols pelo WhatsApp"
            >
              <span className="whitespace-nowrap">Fale conosco</span>
              <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
            </a>
          </div>
        </nav>
      </div>

      {/* MOBILE NAVBAR */}
      <div
        ref={mobileNavRef}
        className="fixed top-0 left-0 right-0 z-50 px-4 py-4 lg:hidden"
        id="mobile-navbar-container"
      >
        <div
          className={`mx-auto max-w-[440px] rounded-[24px] border transition-all duration-200 ${
            isScrolled || isMobileMenuOpen
              ? 'border-black/[0.07] bg-white/94 shadow-[0_18px_50px_rgba(10,18,30,0.09)] backdrop-blur-md'
              : 'border-black/[0.045] bg-white/82 shadow-[0_10px_34px_rgba(10,18,30,0.055)] backdrop-blur-sm'
          }`}
        >
          <div
            className="flex h-14 items-center justify-between px-4"
            id="mobile-navbar-content"
          >
            <button
              onClick={navigateHomeTop}
              className="flex items-center gap-2 focus:outline-none cursor-pointer"
              id="mobile-navbar-home-btn"
              aria-label="Ir para o início"
            >
              <MolsLogo className="h-5.5 w-auto" />
            </button>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-black/[0.06] bg-white text-black/72 shadow-sm shadow-black/[0.02] transition-colors duration-200 hover:text-[#0A47D1] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0A47D1]/20 cursor-pointer"
              aria-label={isMobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-navbar-dropdown"
              id="mobile-navbar-toggle"
            >
              {isMobileMenuOpen ? <X className="h-4.5 w-4.5" /> : <Menu className="h-4.5 w-4.5" />}
            </button>
          </div>

          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, y: -6, height: 0 }}
                animate={{ opacity: 1, y: 0, height: 'auto' }}
                exit={{ opacity: 0, y: -6, height: 0 }}
                transition={{
                  duration: prefersReducedMotion ? 0 : 0.18,
                  ease: 'easeOut',
                }}
                className="overflow-hidden"
                id="mobile-navbar-dropdown"
              >
                <div
                  className="mx-3 mb-3 border-t border-black/[0.05] pt-3"
                  id="mobile-dropdown-links"
                >
                  <div className="flex flex-col">
                    <button
                      onClick={() => navigateToHomeSection('solutions')}
                      className="flex items-center justify-between rounded-2xl px-3.5 py-3 text-left text-sm font-medium text-black/72 transition-colors duration-200 hover:bg-black/[0.025] hover:text-[#0A47D1] cursor-pointer"
                      id="mobile-nav-solutions"
                    >
                      Sobre
                      <span className="text-[10px] uppercase tracking-[0.18em] text-black/28">01</span>
                    </button>
                    <button
                      onClick={handleProjectsClick}
                      className={`flex items-center justify-between rounded-2xl px-3.5 py-3 text-left text-sm font-medium transition-colors duration-200 hover:bg-black/[0.025] hover:text-[#0A47D1] cursor-pointer ${
                        currentPage === 'projects' ? 'text-[#0A47D1]' : 'text-black/72'
                      }`}
                      id="mobile-nav-projects"
                    >
                      Projetos
                      <span className="text-[10px] uppercase tracking-[0.18em] text-black/28">02</span>
                    </button>
                    <button
                      onClick={() => navigateToHomeSection('contact')}
                      className="flex items-center justify-between rounded-2xl px-3.5 py-3 text-left text-sm font-medium text-black/72 transition-colors duration-200 hover:bg-black/[0.025] hover:text-[#0A47D1] cursor-pointer"
                      id="mobile-nav-contact"
                    >
                      Contato
                      <span className="text-[10px] uppercase tracking-[0.18em] text-black/28">03</span>
                    </button>
                  </div>

                  <div className="mt-3 border-t border-black/[0.05] pt-3">
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => {
                        setIsMobileMenuOpen(false);
                        releaseBodyScrollLock();
                      }}
                      className="flex w-full items-center justify-center gap-2 rounded-2xl bg-[#0A47D1] px-4 py-3.5 text-sm font-semibold text-white shadow-[0_14px_34px_rgba(10,71,209,0.18)] transition-colors duration-200 hover:bg-[#082B63] cursor-pointer"
                      id="mobile-nav-cta"
                    >
                      <MessageSquare className="h-4 w-4" />
                      Fale conosco
                    </a>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </>
  );
};

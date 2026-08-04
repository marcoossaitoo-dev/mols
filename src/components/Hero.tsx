/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ArrowRight } from 'lucide-react';

interface HeroProps {
  onExploreProjects: () => void;
  onContact: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onExploreProjects,
  onContact,
}) => {
  return (
    <section
      className="relative flex min-h-screen items-center overflow-hidden bg-white px-6 pb-14 pt-28 md:px-12 md:pb-20 md:pt-32"
      id="home-hero-section"
    >
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(250,250,250,0.92)_0%,#fff_46%,rgba(10,71,209,0.035)_100%)] pointer-events-none" />
      <div className="absolute left-1/2 top-24 h-px w-[min(860px,80vw)] -translate-x-1/2 bg-gradient-to-r from-transparent via-black/[0.07] to-transparent pointer-events-none" />
      <div className="absolute right-[-18%] top-[18%] h-[520px] w-[720px] rounded-full bg-[radial-gradient(circle,rgba(10,71,209,0.085)_0%,rgba(10,71,209,0.035)_36%,transparent_70%)] blur-2xl pointer-events-none" />
      <div className="absolute bottom-10 left-1/2 h-px w-[min(1040px,86vw)] -translate-x-1/2 bg-gradient-to-r from-transparent via-black/[0.05] to-transparent pointer-events-none" />

      <div
        className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-11 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.08fr)] lg:gap-8 xl:grid-cols-[minmax(0,0.98fr)_minmax(0,1.12fr)] xl:gap-10"
        id="hero-grid"
      >
        <div
          className="flex max-w-[680px] flex-col items-start text-left"
          id="hero-copy-column"
        >
          <p
            className="mb-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#0A47D1]"
            id="hero-eyebrow"
          >
            SITES • SISTEMAS • PRODUTOS DIGITAIS
          </p>

          <h1
            className="mb-5 max-w-[13.5em] font-oswald text-[36px] font-normal leading-[1.06] tracking-normal text-[#0B0B0B] sm:text-[46px] lg:text-[50px] xl:text-[56px]"
            id="hero-main-title"
          >
            Sites e sistemas pensados para transformar presença digital em resultado.
          </h1>

          <p
            className="mb-7 max-w-[35rem] text-[15px] leading-7 text-black/60 sm:text-base"
            id="hero-subtext"
          >
            Unimos estratégia, design e tecnologia para criar experiências digitais claras, rápidas e preparadas para gerar resultado.
          </p>

          <div
            className="flex w-full flex-col items-stretch gap-3 sm:w-auto sm:flex-row sm:items-center"
            id="hero-buttons-container"
          >
            <button
              onClick={onExploreProjects}
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#0A47D1] px-5 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-white shadow-[0_12px_30px_rgba(10,71,209,0.16)] transition-colors duration-200 hover:bg-[#082B63] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0A47D1]/35 cursor-pointer"
              id="hero-btn-explore"
            >
              Conhecer projetos
              <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
            </button>

            <button
              onClick={onContact}
              className="inline-flex items-center justify-center rounded-full px-2 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-black/64 transition-colors duration-200 hover:text-[#0A47D1] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0A47D1]/20 sm:px-4 cursor-pointer"
              id="hero-btn-contact"
            >
              Falar com a Mols
            </button>
          </div>

          <p
            className="mt-8 border-t border-black/[0.06] pt-4 text-[11px] font-medium uppercase tracking-[0.18em] text-black/42"
            id="hero-trust-line"
          >
            CLAREZA • PERFORMANCE • ESCALA
          </p>
        </div>

        <div
          className="flex items-center justify-center lg:justify-end"
          id="hero-mockup-column"
        >
          <div
            className="relative w-full max-w-[630px] sm:max-w-[700px] lg:-mr-10 lg:max-w-[800px] xl:-mr-16 xl:max-w-[900px]"
            id="hero-mockup-image-stage"
          >
            <img
              src="/images/hero-mockup.avif"
              alt="Dashboard responsivo da Mols exibido em notebook e celular"
              width={1536}
              height={1024}
              sizes="(max-width: 768px) 92vw, (max-width: 1280px) 58vw, 760px"
              loading="eager"
              fetchPriority="high"
              decoding="async"
              className="h-auto w-full object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

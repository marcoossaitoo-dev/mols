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
      className="relative flex min-h-0 items-start overflow-hidden bg-white px-6 pb-10 pt-[88px] md:px-12 md:pb-14 md:pt-[96px] lg:min-h-[720px] lg:pt-[100px] lg:pb-24 xl:min-h-[740px]"
      id="home-hero-section"
    >
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(250,250,250,0.92)_0%,#fff_46%,rgba(10,71,209,0.035)_100%)] pointer-events-none" />
      <div className="absolute left-1/2 top-24 h-px w-[min(860px,80vw)] -translate-x-1/2 bg-gradient-to-r from-transparent via-black/[0.07] to-transparent pointer-events-none" />
      <div className="absolute right-[-18%] top-[18%] h-[520px] w-[720px] rounded-full bg-[radial-gradient(circle,rgba(10,71,209,0.085)_0%,rgba(10,71,209,0.035)_36%,transparent_70%)] blur-2xl pointer-events-none" />
      <div className="absolute bottom-10 left-1/2 h-px w-[min(1040px,86vw)] -translate-x-1/2 bg-gradient-to-r from-transparent via-black/[0.05] to-transparent pointer-events-none" />

      <div
        className="relative z-10 mx-auto grid w-full max-w-[90rem] grid-cols-1 items-center gap-11 lg:mt-[50px] lg:grid-cols-[660px_minmax(0,1fr)] lg:gap-5 xl:mt-[52px] xl:gap-6"
        id="hero-grid"
      >
        <div
          className="flex w-full max-w-[560px] flex-col items-start text-left lg:max-w-[660px] lg:min-h-[26.875rem] lg:justify-between"
          id="hero-copy-column"
        >
          <div id="hero-copy-top">
            <p
              className="mb-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#0A47D1]"
              id="hero-eyebrow"
            >
              SITES • SISTEMAS • PRODUTOS DIGITAIS
            </p>

            <h1
              className="max-w-[12.9em] font-sans text-[30px] font-bold leading-[1.12] tracking-normal text-[#0B0B0B] max-[374px]:text-[28px] max-[374px]:leading-[1.14] sm:text-[43px] sm:leading-[1.09] md:text-[48px] lg:max-w-none lg:text-[48px] xl:text-[50px]"
              id="hero-main-title"
            >
              Sites e sistemas pensados para transformar presença digital em resultado.
            </h1>
          </div>

          <div id="hero-copy-bottom">
            <p
              className="mb-7 max-w-[35rem] text-[15px] leading-7 text-black/68 sm:text-base"
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
          </div>

        </div>

        <div
          className="flex items-center justify-center lg:justify-end lg:overflow-visible"
          id="hero-mockup-column"
        >
          <div
            className="relative w-full max-w-[630px] sm:max-w-[700px] lg:w-[122%] lg:max-w-[min(64vw,1020px)] lg:-mr-8 xl:w-[126%] xl:max-w-[min(66vw,1080px)] xl:-mr-12"
            id="hero-mockup-image-stage"
          >
            <img
              src="/images/hero-mockup.avif"
              alt="Dashboard responsivo da Mols exibido em notebook e celular"
              width={1536}
              height={1024}
              sizes="(max-width: 768px) 92vw, (max-width: 1280px) 62vw, (max-width: 1536px) 66vw, 1080px"
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

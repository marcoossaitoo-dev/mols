/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, MessageSquare, TrendingUp, BarChart3, PieChart, Activity, Layers } from 'lucide-react';
import { MolsLogo } from './MolsLogo';

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
      className="relative min-h-screen flex items-center pt-28 pb-20 md:py-32 px-6 md:px-12 bg-white overflow-hidden"
      id="home-hero-section"
    >
      {/* Premium subtle background gradient mirroring reference */}
      <div className="absolute inset-0 bg-gradient-to-br from-neutral-50/20 via-white to-blue-50/10 pointer-events-none" id="hero-subtle-bg" />

      {/* Decorative clean light background circle */}
      <div className="absolute top-[20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-blue-50/20 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 items-center relative z-10" id="hero-grid">
        
        {/* Left Column: Headline and Actions with refined, lighter weight & superior spacing */}
        <div className="lg:col-span-6 flex flex-col items-start text-left" id="hero-copy-column">
          
          {/* Tagline Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-blue-50/60 border border-blue-100/50 text-[#0A47D1] mb-6 shadow-sm shadow-blue-500/[0.01]"
            id="hero-badge"
          >
            <span className="text-[10px] uppercase font-bold tracking-widest flex items-center gap-1.5">
              <span className="text-[#0A47D1]">⚡</span> Soluções Digitais de Alto Padrão
            </span>
          </motion.div>

          {/* Balanced, elegant headline using Oswald on emphasis but Inter on body */}
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
            className="text-3xl sm:text-4xl lg:text-[40px] xl:text-[45px] font-bold text-[#0B0B0B] leading-[1.2] tracking-tight font-sans mb-6"
            id="hero-main-title"
          >
            Pensamos em soluções digitais para melhorar a <span className="text-[#0A47D1]">visibilidade</span>, a <span className="text-[#0A47D1]">organização</span> e o <span className="text-[#0A47D1]">posicionamento</span> de negócios.
          </motion.h1>

          {/* Refined, airy description text */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2, ease: 'easeOut' }}
            className="text-sm sm:text-base text-black/50 font-sans leading-relaxed max-w-lg mb-10"
            id="hero-subtext"
          >
            Unimos estratégia, design e tecnologia para criar sites, landing pages e sistemas personalizados que fortalecem a presença digital e impulsionam resultados reais.
          </motion.p>

          {/* Well-spaced buttons mirroring the custom premium style exactly */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3, ease: 'easeOut' }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto"
            id="hero-buttons-container"
          >
            <button
              onClick={onExploreProjects}
              className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#0A47D1] hover:bg-[#082B63] text-white font-sans text-xs font-bold tracking-wider uppercase transition-all duration-300 shadow-md shadow-blue-600/10 hover:shadow-lg hover:shadow-blue-600/20 group cursor-pointer"
              id="hero-btn-explore"
            >
              Conhecer projetos
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" />
            </button>
            
            <button
              onClick={onContact}
              className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border border-black/[0.08] hover:border-[#0A47D1]/20 bg-white hover:bg-neutral-50 text-black/80 hover:text-black font-sans text-xs font-bold tracking-wider uppercase transition-all duration-300 shadow-sm shadow-black/[0.01] cursor-pointer"
              id="hero-btn-contact"
            >
              Fale conosco
              <MessageSquare className="w-4 h-4 text-black/45" />
            </button>
          </motion.div>
        </div>

        {/* Right Column: High-Fidelity 3D Composition (MacBook Pro + iPhone 16 Pro + Floating Cards) */}
        <div className="lg:col-span-6 flex justify-center items-center relative py-12" id="hero-mockup-column">
          
          {/* Main composition container with Perspective setting */}
          <div className="relative w-full max-w-[580px] lg:max-w-[620px] aspect-[1.3/1]" id="hero-perspective-stage">
            
            {/* 1. MacBook Pro Mockup (Tilted to the right background) */}
            <motion.div
              initial={{ opacity: 0, x: 20, y: 10, rotate: 1 }}
              animate={{ opacity: 1, x: 0, y: 0, rotate: 0 }}
              transition={{ duration: 0.8, delay: 0.15, ease: 'easeOut' }}
              className="absolute left-[5%] top-[10%] w-[78%] z-10 [perspective:1200px]"
              id="hero-macbook-perspective"
            >
              <div 
                className="relative transition-all duration-500 [transform:rotateY(-18deg)_rotateX(7deg)_rotateZ(1deg)]"
                id="macbook-frame-container"
              >
                {/* MacBook Screen Bezel */}
                <div className="bg-[#1C1A17] rounded-xl border border-white/10 p-[6px] shadow-[0_25px_60px_rgba(0,0,0,0.15)] overflow-hidden">
                  <div className="bg-[#121212] rounded-lg overflow-hidden border border-black/40 aspect-[16/10] relative">
                    
                    {/* Dashboard Interface Inside MacBook Screen */}
                    <div className="absolute inset-0 bg-[#F8F9FC] flex flex-col font-sans select-none" id="macbook-screen-content">
                      
                      {/* Dashboard Header Bar */}
                      <div className="h-8 bg-white border-b border-black/[0.04] flex items-center justify-between px-3 flex-shrink-0">
                        <div className="flex items-center gap-1.5">
                          <MolsLogo className="h-3.5 w-auto" showText={true} />
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-[7px] text-black/40">✦ Natrea</span>
                          <div className="w-4.5 h-4.5 rounded-full bg-neutral-100 border border-black/5 flex items-center justify-center">
                            <span className="text-[6px] font-bold text-black/55">N</span>
                          </div>
                        </div>
                      </div>

                      {/* Dashboard Body */}
                      <div className="flex-grow flex overflow-hidden">
                        
                        {/* Compact left menu bar */}
                        <div className="w-10 bg-[#151922] flex flex-col items-center py-3 gap-3 flex-shrink-0">
                          <div className="w-6 h-6 rounded bg-[#0A47D1] flex items-center justify-center text-white">
                            <Layers className="w-3.5 h-3.5" />
                          </div>
                          <div className="w-6 h-6 rounded hover:bg-white/5 flex items-center justify-center text-white/40">
                            <BarChart3 className="w-3.5 h-3.5" />
                          </div>
                          <div className="w-6 h-6 rounded hover:bg-white/5 flex items-center justify-center text-white/40">
                            <PieChart className="w-3.5 h-3.5" />
                          </div>
                          <div className="w-6 h-6 rounded hover:bg-white/5 flex items-center justify-center text-white/40">
                            <Activity className="w-3.5 h-3.5" />
                          </div>
                        </div>

                        {/* Content Grid */}
                        <div className="flex-grow p-3 flex flex-col gap-2.5 overflow-hidden">
                          
                          <div className="flex items-center justify-between">
                            <span className="text-[9px] font-bold text-[#0B0B0B]">Visão geral</span>
                          </div>

                          {/* Widgets layout */}
                          <div className="grid grid-cols-3 gap-2">
                            {/* Card 1: Faturamento */}
                            <div className="bg-white rounded-lg border border-black/[0.04] p-2 flex flex-col justify-between shadow-[0_2px_8px_rgba(0,0,0,0.02)] h-14">
                              <div>
                                <span className="text-[6px] text-black/40 uppercase font-bold tracking-wider block">Faturamento</span>
                                <span className="text-[10px] font-bold text-[#0B0B0B] font-mono block">R$ 128.430,50</span>
                              </div>
                              <span className="text-[6px] text-emerald-500 font-bold bg-emerald-500/10 px-1 py-0.2 rounded-full self-start">+24,8%</span>
                            </div>

                            {/* Card 2: Despesas */}
                            <div className="bg-white rounded-lg border border-black/[0.04] p-2 flex flex-col justify-between shadow-[0_2px_8px_rgba(0,0,0,0.02)] h-14">
                              <div>
                                <span className="text-[6px] text-black/40 uppercase font-bold tracking-wider block">Despesas do mês</span>
                                <span className="text-[10px] font-bold text-[#0B0B0B] font-mono block">R$ 5.630,00</span>
                              </div>
                              <span className="text-[6px] text-emerald-500 font-bold bg-emerald-500/10 px-1 py-0.2 rounded-full self-start">+12,5%</span>
                            </div>

                            {/* Card 3: Meta mensal */}
                            <div className="bg-white rounded-lg border border-black/[0.04] p-2 flex flex-col justify-between shadow-[0_2px_8px_rgba(0,0,0,0.02)] h-14">
                              <div>
                                <span className="text-[6px] text-black/40 uppercase font-bold tracking-wider block">Meta mensal</span>
                                <span className="text-[10px] font-bold text-[#0B0B0B] block">72%</span>
                              </div>
                              {/* Mini radial chart progress */}
                              <div className="w-3.5 h-3.5 rounded-full border-2 border-blue-500 border-r-transparent self-start animate-spin-slow" />
                            </div>
                          </div>

                          {/* Chart Container */}
                          <div className="bg-white rounded-lg border border-black/[0.04] p-2.5 shadow-[0_2px_8px_rgba(0,0,0,0.02)] flex-grow flex flex-col justify-between">
                            <div className="flex justify-between items-center pb-1 border-b border-black/[0.02]">
                              <span className="text-[7px] font-bold text-black/60">Resumo de desempenho</span>
                              <span className="text-[6px] text-[#0A47D1] font-bold">+ 24,8% <span className="text-black/30 font-medium">em relação ao mês anterior</span></span>
                            </div>
                            {/* Smooth mini SVG chart line graph */}
                            <div className="h-14 w-full">
                              <svg className="w-full h-full overflow-visible" viewBox="0 0 100 30" preserveAspectRatio="none">
                                <path 
                                  d="M 0 25 Q 15 22 30 18 T 60 10 T 100 2" 
                                  fill="none" 
                                  stroke="#0A47D1" 
                                  strokeWidth="1.8" 
                                  strokeLinecap="round" 
                                />
                                <path 
                                  d="M 0 25 Q 15 22 30 18 T 60 10 T 100 2 L 100 30 L 0 30 Z" 
                                  fill="rgba(10, 71, 209, 0.04)" 
                                />
                              </svg>
                            </div>
                          </div>

                        </div>
                      </div>

                    </div>

                  </div>
                </div>

                {/* MacBook base stand matching reference perfectly */}
                <div className="relative h-[8px] bg-gradient-to-r from-neutral-500 via-neutral-400 to-neutral-500 rounded-b-lg shadow-[0_15px_30px_rgba(0,0,0,0.15)] mt-[-2px] border-t border-white/10" />
                <div className="mx-auto w-[60px] h-[3px] bg-black/40 rounded-b-md" />
              </div>
            </motion.div>

            {/* 2. iPhone 16 Pro Mockup (Standing Upright on front right) */}
            <motion.div
              initial={{ opacity: 0, x: 20, y: 15, rotate: -0.5 }}
              animate={{ opacity: 1, x: 0, y: 0, rotate: 0 }}
              transition={{ duration: 0.8, delay: 0.35, ease: 'easeOut' }}
              className="absolute right-[4%] bottom-[5%] w-[33%] z-20 [perspective:1200px]"
              id="hero-iphone-perspective"
            >
              <div 
                className="relative transition-all duration-500 [transform:rotateY(-12deg)_rotateX(4deg)_rotateZ(-1deg)]"
                id="iphone-frame-container"
              >
                {/* Clean bezel matching reference */}
                <div className="bg-[#1C1A17] rounded-[30px] p-[5px] shadow-[0_20px_50px_rgba(0,0,0,0.18)] border border-white/10 overflow-hidden">
                  <div className="bg-white rounded-[25px] overflow-hidden aspect-[9/19] relative border border-black/5 flex flex-col">
                    
                    {/* iPhone 16 Pro Dynamic Island notch */}
                    <div className="absolute top-2 left-1/2 -translate-x-1/2 w-12 h-3.5 bg-[#0C0C0C] rounded-full z-40" />

                    {/* Mobile App View Content */}
                    <div className="absolute inset-0 bg-white flex flex-col pt-7 px-3 text-black font-sans select-none overflow-hidden" id="iphone-screen-content">
                      
                      {/* Top mobile navbar */}
                      <div className="flex justify-between items-center pb-1.5 border-b border-black/[0.03]">
                        <MolsLogo className="h-3 w-auto" showText={true} />
                        <div className="flex flex-col gap-0.5">
                          <span className="w-3.5 h-0.5 bg-black" />
                          <span className="w-3.5 h-0.5 bg-black" />
                        </div>
                      </div>

                      {/* Headline Badge inside iPhone */}
                      <div className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded-full bg-blue-50 border border-blue-100/50 text-[#0A47D1] mt-3 mb-1.5 self-start">
                        <span className="text-[5px] uppercase font-bold tracking-wider">
                          ⚡ Soluções Digitais de Alto Padrão
                        </span>
                      </div>

                      {/* iPhone headline */}
                      <h3 className="text-[9px] font-bold text-[#0B0B0B] leading-tight tracking-tight mb-2">
                        Pensamos em soluções digitais para melhorar a <span className="text-[#0A47D1]">visibilidade</span>, a <span className="text-[#0A47D1]">organização</span> e o <span className="text-[#0A47D1]">posicionamento</span> de negócios.
                      </h3>

                      {/* iPhone description */}
                      <p className="text-[5.5px] text-black/50 leading-relaxed mb-3">
                        Unimos estratégia, design e tecnologia para criar sites, landing pages e sistemas que fortalecem a presença digital.
                      </p>

                      {/* iPhone CTA buttons */}
                      <div className="grid grid-cols-2 gap-1.5 mb-3">
                        <div className="bg-[#0A47D1] rounded-md py-1 text-center text-white text-[5px] font-bold">
                          Conhecer projetos
                        </div>
                        <div className="bg-white border border-black/[0.08] rounded-md py-1 text-center text-black/80 text-[5px] font-bold">
                          Fale conosco
                        </div>
                      </div>

                      {/* Recursive Dashboard Image Frame inside iPhone Screen */}
                      <div className="bg-neutral-50 rounded-lg border border-black/[0.03] p-1.5 flex-grow flex flex-col gap-1 overflow-hidden shadow-[inset_0_1px_3px_rgba(0,0,0,0.02)]">
                        <MolsLogo className="h-2 w-auto" showText={true} />
                        <span className="text-[4px] font-bold text-black/60 block leading-none">Visão geral</span>
                        
                        {/* Recursive Mini widgets inside iPhone screen */}
                        <div className="grid grid-cols-2 gap-1 mt-1">
                          <div className="bg-white rounded border border-black/[0.02] p-1 text-[4px]">
                            <span className="text-black/30 block">Faturamento</span>
                            <span className="font-bold text-black/80 block font-mono">R$ 128,4K</span>
                          </div>
                          <div className="bg-white rounded border border-black/[0.02] p-1 text-[4px]">
                            <span className="text-black/30 block">Despesas</span>
                            <span className="font-bold text-black/80 block font-mono">R$ 5,6K</span>
                          </div>
                        </div>

                        {/* Recursive Mini chart inside iPhone */}
                        <div className="h-8 w-full mt-1.5 bg-white rounded border border-black/[0.02] p-1">
                          <svg className="w-full h-full overflow-visible" viewBox="0 0 100 30" preserveAspectRatio="none">
                            <path d="M0,25 Q15,22 30,18 T60,10 T100,2" fill="none" stroke="#0A47D1" strokeWidth="1.5" />
                          </svg>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* 3. Floating Micro-UI Cards/Indicators (Right of the iPhone for premium depth) */}
            {/* Card 1: Blue stats graph */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute right-[-4%] top-[40%] w-[10%] aspect-square bg-white rounded-lg border border-black/[0.04] shadow-[0_8px_20px_rgba(0,0,0,0.05)] flex items-center justify-center z-30"
              id="floating-card-1"
            >
              <BarChart3 className="w-4 h-4 text-[#0A47D1]" />
            </motion.div>

            {/* Card 2: Circle chart */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4.2, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
              className="absolute right-[10%] top-[25%] w-[9%] aspect-square bg-white rounded-lg border border-black/[0.04] shadow-[0_8px_20px_rgba(0,0,0,0.05)] flex items-center justify-center z-30"
              id="floating-card-2"
            >
              <PieChart className="w-3.5 h-3.5 text-[#0A47D1]" />
            </motion.div>

            {/* Card 3: Line trend indicator */}
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 4.8, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              className="absolute right-[6%] bottom-[42%] w-[9%] aspect-square bg-white rounded-lg border border-black/[0.04] shadow-[0_8px_20px_rgba(0,0,0,0.05)] flex items-center justify-center z-30"
              id="floating-card-3"
            >
              <Activity className="w-3.5 h-3.5 text-[#0A47D1]" />
            </motion.div>

          </div>
        </div>

      </div>
    </section>
  );
};

import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Play, Activity, Gauge, Server, ArrowRight, CheckCircle2, Zap, Smartphone, Monitor, Sparkles, Plus } from 'lucide-react';
import { Project } from '../types';
import { metricsData } from '../data/metrics-generated';

interface ProjectIntelligenceCenterProps {
  project: Project;
}

export const ProjectIntelligenceCenter: React.FC<ProjectIntelligenceCenterProps> = ({ project }) => {
  const [showGeneralAdvantages, setShowGeneralAdvantages] = useState(false);
  const projectMetrics = metricsData[project.id];

  const generalAdvantages = [
    "Sana dúvidas e reduz perguntas frequentes no atendimento",
    "Expande o conhecimento dos clientes sobre as soluções oferecidas",
    "Agilização extrema no serviço e no agendamento inicial",
    "Aumento direto no alcance orgânico e engajamento",
    "Posicionamento de autoridade e credibilidade digital"
  ];

  return (
    <div className="flex flex-col gap-8 pb-8">
      {/* 1. CINEMATIC PREVIEW */}
      <section className="bg-white rounded-2xl border border-black/[0.06] shadow-sm overflow-hidden flex flex-col">
        <div className="px-4 py-3 border-b border-black/[0.04] flex items-center justify-between bg-black/[0.01]">
          <div className="flex items-center gap-2">
            <Activity className="w-4 h-4 text-[#0A47D1]" />
            <span className="text-xs font-semibold tracking-wider text-black/80 uppercase">Project Intelligence</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5 text-[10px] font-medium text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-100">
              <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></span>
              LIVE IN PRODUCTION
            </span>
            <span className="hidden sm:flex items-center gap-1.5 text-[10px] font-medium text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full border border-blue-100">
              <Zap className="w-3 h-3" />
              MOBILE OPTIMIZED
            </span>
          </div>
        </div>
        <div className="relative w-full aspect-video bg-neutral-100 flex items-center justify-center p-4">
          {project.url ? (
            <div className="relative w-full h-full rounded-xl overflow-hidden shadow-lg border border-black/10 bg-white group">
              <div className="absolute inset-0 z-10 hidden group-hover:flex items-center justify-center bg-black/5 backdrop-blur-[1px] transition-all">
                 <a href={project.url} target="_blank" rel="noopener noreferrer" className="bg-white/90 text-black px-4 py-2 rounded-full text-sm font-semibold shadow-xl hover:scale-105 transition-transform flex items-center gap-2">
                    Visualizar Site
                    <ArrowRight className="w-4 h-4" />
                 </a>
              </div>
              <iframe 
                src={project.url} 
                className="w-full h-full border-none pointer-events-none bg-white" 
                title={`${project.name} Preview`}
                loading="lazy"
              />
            </div>
          ) : (
            <div className="w-full h-full rounded-xl bg-[#0A0A0A] border border-black/10 shadow-lg p-6 flex flex-col items-center justify-center text-white/50 relative overflow-hidden group">
               <div className="absolute inset-0 bg-blue-500/5 mix-blend-overlay"></div>
               <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 blur-[80px] rounded-full pointer-events-none"></div>
              <Activity className="w-12 h-12 mb-4 text-blue-500/70" />
              <h5 className="font-mono text-sm text-white/90 tracking-wider mb-2 uppercase">Proprietary System Architecture</h5>
              <p className="text-xs text-center max-w-sm text-white/60 mb-6 leading-relaxed">
                Internal system access is restricted. The architecture utilizes distributed microservices, edge-caching, and end-to-end encryption.
              </p>
              <div className="w-full max-w-md bg-black/60 rounded-lg p-4 font-mono text-[10px] text-emerald-400 flex flex-col gap-2 border border-white/5 shadow-inner">
                 <span className="text-blue-400">// Blueprint loaded</span>
                 <span className="opacity-80">const instance = await Platform.deploy();</span>
                 <span className="opacity-80">instance.enableZeroTrustNetwork();</span>
                 <span className="text-white/40">Status: <span className="text-emerald-400 animate-pulse">Running securely in enclave.</span></span>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* 2. PERFORMANCE METRICS (PageSpeed Insights) */}
      {projectMetrics && (
        <section className="bg-white rounded-2xl border border-black/[0.06] shadow-sm p-5 md:p-6">
          <div className="flex items-center gap-2 mb-6">
            <Gauge className="w-4 h-4 text-[#0A47D1]" />
            <h3 className="text-xs font-semibold tracking-wider text-black/80 uppercase">Performance Blueprint</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="flex flex-col">
              <div className="flex items-center gap-2 mb-4 text-xs font-medium text-black/60 uppercase">
                <Monitor className="w-4 h-4" />
                <span>Desktop Metrics</span>
              </div>
              <div className="grid grid-cols-4 gap-2">
                <MetricCircle label="Performance" value={projectMetrics.desktop.performance} />
                <MetricCircle label="Accessibility" value={projectMetrics.desktop.accessibility} />
                <MetricCircle label="Best Practices" value={projectMetrics.desktop.bestPractices} />
                <MetricCircle label="SEO" value={projectMetrics.desktop.seo} />
              </div>
            </div>

            <div className="flex flex-col">
              <div className="flex items-center gap-2 mb-4 text-xs font-medium text-black/60 uppercase">
                <Smartphone className="w-4 h-4" />
                <span>Mobile Metrics</span>
              </div>
              <div className="grid grid-cols-4 gap-2">
                <MetricCircle label="Performance" value={projectMetrics.mobile.performance} />
                <MetricCircle label="Accessibility" value={projectMetrics.mobile.accessibility} />
                <MetricCircle label="Best Practices" value={projectMetrics.mobile.bestPractices} />
                <MetricCircle label="SEO" value={projectMetrics.mobile.seo} />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 pt-5 border-t border-black/[0.04]">
             <VitalStat label="LCP" value={projectMetrics.desktop.lcp} />
             <VitalStat label="FCP" value={projectMetrics.desktop.fcp} />
             <VitalStat label="CLS" value={projectMetrics.desktop.cls} />
             <VitalStat label="TBT" value={projectMetrics.desktop.tbt} />
             <VitalStat label="TTI" value={projectMetrics.desktop.tti} />
             <VitalStat label="Speed Index" value={projectMetrics.desktop.speedIndex} />
          </div>
        </section>
      )}

      {/* 3. TECHNICAL BLUEPRINT */}
      {project.techStack && (
        <section className="bg-white rounded-2xl border border-black/[0.06] shadow-sm p-5 md:p-6 overflow-hidden relative">
          <div className="flex items-center gap-2 mb-6 relative z-10">
            <Server className="w-4 h-4 text-[#0A47D1]" />
            <h3 className="text-xs font-semibold tracking-wider text-black/80 uppercase">Digital Architecture</h3>
          </div>
          <div className="relative z-10 flex flex-wrap items-center justify-center gap-4 py-4">
             {project.techStack.map((tech, idx) => (
                <React.Fragment key={idx}>
                   <div className="group relative bg-white border border-black/[0.08] shadow-sm rounded-xl p-3 md:p-4 hover:border-blue-500 hover:shadow-md transition-all cursor-default w-32 flex flex-col items-center text-center">
                     <h4 className="text-[11px] font-bold text-black/80 group-hover:text-blue-600 transition-colors uppercase tracking-wider">{tech.name}</h4>
                     
                     {/* Tooltip */}
                     <div className="absolute opacity-0 group-hover:opacity-100 bottom-full left-1/2 -translate-x-1/2 mb-3 w-56 bg-[#0B0B0B] text-white text-[10px] leading-relaxed p-3 rounded-xl pointer-events-none transition-all z-20 shadow-2xl">
                       {tech.description}
                       <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-[#0B0B0B]"></div>
                     </div>
                   </div>
                   
                   {idx < project.techStack!.length - 1 && (
                      <div className="hidden sm:flex text-blue-500/30">
                         <ArrowRight className="w-4 h-4" />
                      </div>
                   )}
                </React.Fragment>
             ))}
          </div>

          <div className="mt-5 pt-4 border-t border-black/[0.04] flex flex-wrap gap-4 text-[10px] font-mono text-black/50">
            <span className="flex items-center gap-1.5"><div className="w-1 h-1 bg-blue-500 rounded-full"></div>Global CDN Enabled</span>
            <span className="flex items-center gap-1.5"><div className="w-1 h-1 bg-emerald-500 rounded-full"></div>Edge Rendering</span>
            <span className="flex items-center gap-1.5"><div className="w-1 h-1 bg-purple-500 rounded-full"></div>Static Optimization</span>
          </div>
        </section>
      )}

      {/* 3. BEFORE VS AFTER TRANSFORMATION */}
      {project.transformation && (
        <section className="bg-gradient-to-br from-[#0B0B0B] to-[#1A1A1A] rounded-2xl border border-black/[0.06] shadow-xl p-5 md:p-6 text-white overflow-hidden relative">
           <div className="absolute top-0 right-0 w-64 h-64 bg-[#0A47D1]/20 blur-[80px] rounded-full pointer-events-none"></div>
           
           <div className="flex items-center gap-2 mb-6 relative z-10">
            <Sparkles className="w-4 h-4 text-blue-400" />
            <h3 className="text-xs font-semibold tracking-wider text-white/80 uppercase">Impact Analysis</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 relative z-10">
             <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                <h4 className="text-xs font-medium text-white/50 uppercase mb-3 flex items-center gap-2">
                   Before
                </h4>
                <ul className="flex flex-col gap-2">
                   {project.transformation.before.map((item, i) => (
                     <li key={i} className="text-sm text-white/70 flex items-start gap-2">
                        <span className="text-red-400 mt-1 shrink-0">×</span>
                        <span className="leading-relaxed">{item}</span>
                     </li>
                   ))}
                </ul>
             </div>

             <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-4">
                <h4 className="text-xs font-medium text-blue-300 uppercase mb-3 flex items-center gap-2">
                   After Transformation
                </h4>
                <ul className="flex flex-col gap-2">
                   {project.transformation.after.map((item, i) => (
                     <li key={i} className="text-sm text-white/90 flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                        <span className="leading-relaxed">{item}</span>
                     </li>
                   ))}
                </ul>
             </div>
          </div>

          <div className="grid grid-cols-2 gap-4 relative z-10 pt-6 border-t border-white/10">
            {project.transformation.stats.map((stat, i) => (
               <motion.div 
                 initial={{ opacity: 0, y: 10 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: 0.1 * i }}
                 key={i} 
                 className="flex flex-col"
               >
                  <span className="text-3xl font-oswald font-normal tracking-wide text-white">{stat.value}</span>
                  <span className="text-xs font-medium text-white/50 uppercase tracking-wider mt-1">{stat.label}</span>
               </motion.div>
            ))}
          </div>

          <div className="mt-6 border-t border-white/10 pt-4 relative z-10">
            <button 
              onClick={() => setShowGeneralAdvantages(!showGeneralAdvantages)}
              className="flex items-center justify-center gap-2 text-[10px] uppercase font-semibold text-white/70 hover:text-white/100 transition-all bg-white/5 hover:bg-white/10 px-4 py-2.5 rounded-full mx-auto w-fit"
            >
              <Plus className={`w-3.5 h-3.5 transition-transform ${showGeneralAdvantages ? 'rotate-45' : ''}`} />
              Vantagens Gerais da Solução
            </button>
            
            {showGeneralAdvantages && (
              <motion.div 
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                className="mt-4 bg-white/5 border border-white/10 rounded-xl p-4"
              >
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {generalAdvantages.map((adv, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-white/70">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 mt-0.5 shrink-0" />
                      <span>{adv}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}
          </div>
        </section>
      )}

    </div>
  );
};

const MetricCircle = ({ label, value }: { label: string, value: number }) => {
   const [currentValue, setCurrentValue] = useState(0);
   
   useEffect(() => {
      const timer = setTimeout(() => {
         setCurrentValue(value);
      }, 300);
      return () => clearTimeout(timer);
   }, [value]);

   const color = value >= 90 ? '#10B981' : value >= 50 ? '#F59E0B' : '#EF4444';
   const circumference = 2 * Math.PI * 18;
   const strokeDashoffset = circumference - (currentValue / 100) * circumference;

   return (
      <div className="flex flex-col items-center gap-2">
         <div className="relative w-12 h-12 flex items-center justify-center">
            {/* Background Circle */}
            <svg className="w-full h-full transform -rotate-90">
               <circle cx="24" cy="24" r="18" stroke="currentColor" strokeWidth="3" fill="transparent" className="text-black/5" />
               <motion.circle 
                  cx="24" cy="24" r="18" 
                  stroke={color} 
                  strokeWidth="3" 
                  fill="transparent" 
                  strokeDasharray={circumference}
                  initial={{ strokeDashoffset: circumference }}
                  animate={{ strokeDashoffset }}
                  transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
                  strokeLinecap="round"
               />
            </svg>
            <span className="absolute text-[11px] font-semibold text-black/80">{currentValue}</span>
         </div>
         <span className="text-[9px] font-medium text-black/50 uppercase text-center leading-tight tracking-wider w-full truncate px-1" title={label}>{label}</span>
      </div>
   );
};

const VitalStat = ({ label, value }: { label: string, value: string }) => (
   <div className="flex flex-col gap-1 p-2 bg-neutral-50 rounded-lg border border-black/[0.03]">
      <span className="text-xs font-semibold text-black">{value}</span>
      <span className="text-[9px] font-medium text-black/50 uppercase tracking-wider">{label}</span>
   </div>
);

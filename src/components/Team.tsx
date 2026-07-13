/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, ExternalLink, User } from 'lucide-react';
import { teamData } from '../data/projects';

export const Team: React.FC = () => {
  return (
    <section 
      className="py-20 md:py-28 px-6 bg-white"
      id="team"
    >
      <div className="max-w-7xl mx-auto" id="team-container">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-16 md:mb-20" id="team-header">
          <span className="text-[10px] uppercase font-bold tracking-widest text-[#0A47D1] block mb-3">
            QUEM ESTÁ POR TRÁS
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-[#0B0B0B] font-sans">
            Estratégia, tecnologia e dedicação.
          </h2>
        </div>

        {/* Team Members Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto" id="team-grid">
          {teamData.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="p-6 md:p-8 rounded-2xl bg-[#FAFAFA] border border-black/[0.04] flex flex-col justify-between hover:border-[#0A47D1]/15 transition-all duration-300 premium-glow"
              id={`team-card-${index}`}
            >
              <div id={`team-card-top-${index}`}>
                {/* Profile icon placeholder that looks super high-end */}
                <div 
                  className="w-12 h-12 rounded-full bg-[#0A47D1]/5 border border-[#0A47D1]/10 flex items-center justify-center mb-5 shadow-sm"
                  id={`team-avatar-${index}`}
                >
                  <User className="w-5 h-5 text-[#0A47D1]" />
                </div>

                <h3 className="font-bold text-lg text-[#0B0B0B] tracking-tight font-sans">
                  {member.name}
                </h3>
                
                <p className="text-xs font-semibold text-[#0A47D1] uppercase tracking-wide mt-1.5 mb-6 font-sans">
                  {member.role}
                </p>
              </div>

              {/* Contact and interaction links */}
              <div 
                className="flex flex-col gap-3.5 pt-6 border-t border-black/[0.05] text-xs text-black/70"
                id={`team-card-bottom-${index}`}
              >
                {/* Email link */}
                <a 
                  href={`mailto:${member.email}`}
                  className="flex items-center gap-2.5 hover:text-[#0A47D1] transition-colors group"
                  id={`team-email-link-${index}`}
                >
                  <Mail className="w-4 h-4 text-black/30 group-hover:text-[#0A47D1]" />
                  <span>{member.email}</span>
                </a>

                {/* WhatsApp Link */}
                <a 
                  href={`https://wa.me/${member.phone}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 hover:text-[#0A47D1] transition-colors group"
                  id={`team-phone-link-${index}`}
                >
                  <Phone className="w-4 h-4 text-black/30 group-hover:text-[#0A47D1]" />
                  <span>{member.phoneFormatted}</span>
                  <ExternalLink className="w-3 h-3 text-black/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

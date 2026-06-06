/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Heart, Landmark, LandmarkIcon, Leaf, Users } from 'lucide-react';

export default function About() {
  const pillars = [
    {
      title: 'Business Support Integrations',
      desc: 'We map operational workflows meticulously. Our assistants do not just execute isolated tasks; they understand how their responsibilities link directly to your core revenue engines.',
      icon: <Landmark className="w-5 h-5 text-[#1F3A5F]" />
    },
    {
      title: 'Ethical Work Environments',
      desc: 'Outsourcing shouldn\'t depend on wage exploitation. We pay our professionals top 10% market rates, include full wellness resources, and support their continuous upskilling.',
      icon: <Heart className="w-5 h-5 text-rose-800" />
    },
    {
      title: 'Long-Term Partnership focus',
      desc: 'We value compounding knowledge. Having an assistant who works with you for years eliminates the exhausting cycles of retraining and onboarding new team members.',
      icon: <Users className="w-5 h-5 text-emerald-800" />
    },
    {
      title: 'Sustainable Operations',
      desc: 'Through structured time monitoring, sensible workload limits, and healthy time-zone boundaries, we guarantee support continuity without administrative burnout.',
      icon: <Leaf className="w-5 h-5 text-[#5F7D6E]" />
    }
  ];

  return (
    <section id="about" className="bg-[#F8F9FA] py-16 md:py-24 border-t border-[#5B6777]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column Story Panel */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <span className="text-[10px] uppercase tracking-[0.2em] text-[#5F7D6E] font-bold block">
              Our Story
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1F3A5F] tracking-tight leading-tight">
              The human story behind <span className="text-[#5F7D6E]">Assistense</span>
            </h2>
            <div className="w-16 h-[1px] bg-[#5F7D6E]/40" />
            
            <p className="text-sm text-[#5B6777] leading-relaxed">
              Founded in 2021, Assistense was born out of a simple observation: modern busy creators, solo workers, and small teams are drowning in administrative tasks, while the global outsourcing market is defined by high turnover and low-paying agencies. 
            </p>
            <p className="text-sm text-[#5B6777] leading-relaxed">
              We realized that the secret to superior support lies in a simple equation: **valuing assistants and clients equally**. By providing stable salaries, continuous training, and robust career pathways, we build a supportive community of brilliant virtual assistants. 
            </p>
            <p className="text-sm text-[#5B6777] leading-relaxed font-sans">
              When an assistant is supported, respected, and given a healthy work environment, they deliver exceptional, reliable operational support. This is how we construct happy partnerships built to last.
            </p>

            <div className="p-2 bg-white border border-[#5B6777]/15 my-4 rounded-xl shadow-sm">
              <img
                src="/src/assets/images/workspace_organizer_1780726293622.png"
                alt="A tidy digital workspace showing scheduling calendar and correspondence tools"
                referrerPolicy="no-referrer"
                className="w-full h-auto aspect-[16/9] object-cover rounded-lg"
              />
            </div>

            <div className="border-l-4 border-[#5F7D6E] pl-4 py-2 my-4 bg-white p-4 rounded-xl shadow-sm">
              <p className="text-sm font-sans text-[#1F3A5F]">
                "Our virtual assistant, Clara, has been an absolute pillar of our law practice. She operates exactly like a staff member sitting in our office, managing client followups and calendar alerts flawlessly."
              </p>
              <span className="block text-[9px] uppercase font-sans font-bold text-[#5B6777] mt-2 tracking-wider">
                — Gregory Vance, Managing Partner at Vance Legal LLC
              </span>
            </div>
          </div>

          {/* Right Column Pillars Grid */}
          <div className="lg:col-span-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {pillars.map((pil, idx) => (
                <div
                  key={pil.title}
                  id={`about-pillar-${idx}`}
                  className="bg-white p-6 rounded-2xl border border-[#5B6777]/10 flex flex-col space-y-3 transition-all duration-300 hover:border-[#5F7D6E] hover:shadow-md"
                >
                  <div className="w-10 h-10 rounded-full bg-[#5F7D6E]/10 flex items-center justify-center shrink-0">
                    {pil.icon}
                  </div>
                  <h3 className="text-sm font-sans font-bold text-[#1F3A5F]">
                    {pil.title}
                  </h3>
                  <p className="text-xs font-sans text-[#5B6777] leading-relaxed">
                    {pil.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

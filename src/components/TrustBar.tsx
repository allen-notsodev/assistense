/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { TRUST_METRICS } from '../data';
import { ShieldCheck, Award, Zap, Users } from 'lucide-react';

const iconsMapping = [
  <Users className="w-5 h-5 text-[#5F7D6E]" />,
  <ShieldCheck className="w-5 h-5 text-[#5F7D6E]" />,
  <Zap className="w-5 h-5 text-[#5F7D6E]" />,
  <Award className="w-5 h-5 text-[#5F7D6E]" />
];

export default function TrustBar() {
  return (
    <section id="trust-bar" className="bg-white py-12 border-y border-[#5B6777]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 md:divide-x md:divide-[#5B6777]/10">
          {TRUST_METRICS.map((metric, idx) => (
            <div
              key={metric.label}
              id={`trust-metric-card-${idx}`}
              className="text-center md:px-6 flex flex-col items-center space-y-1.5"
            >
              {/* Soft circle icon wrapper */}
              <div className="w-10 h-10 rounded-full bg-[#5F7D6E]/10 flex items-center justify-center mb-1.5">
                {iconsMapping[idx] || <ShieldCheck className="w-5 h-5 text-[#5F7D6E]" />}
              </div>

              {/* Numerical value indicator */}
              <div className="text-3xl sm:text-4xl font-sans font-extrabold text-[#1F3A5F] tracking-tight">
                {metric.value}
                <span className="text-[#5F7D6E] font-sans font-bold">{metric.suffix || ''}</span>
              </div>

              {/* Title label */}
              <span className="text-[10px] font-sans font-bold text-[#1F3A5F] tracking-[0.15em] uppercase">
                {metric.label}
              </span>

              {/* Explanatory subtitle */}
              <p className="text-xs font-sans text-[#5B6777] max-w-[185px]">
                {metric.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

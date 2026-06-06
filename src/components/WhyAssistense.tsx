/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { VALUE_PROPS } from '../data';
import { Shield, Sparkles, HeartHandshake } from 'lucide-react';

const icons = [
  <Shield className="w-6 h-6 text-[#1F3A5F]" />,
  <Sparkles className="w-6 h-6 text-[#1F3A5F]" />,
  <HeartHandshake className="w-6 h-6 text-[#1F3A5F]" />
];

export default function WhyAssistense() {
  return (
    <section id="why-assistense" className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header container */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-[10px] uppercase tracking-[0.15em] text-[#5F7D6E] font-bold block">
            Why Assistense
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1F3A5F] tracking-tight">
            Reliable support built on mutual respect
          </h2>
          <div className="w-16 h-[1px] bg-[#5F7D6E]/40 mx-auto" />
          <p className="text-base text-[#5B6777] leading-relaxed font-sans">
            Unlike standard high-turnover outsourcing agencies, we place equal value on our clients and our virtual administrative professionals. This creates durable, dependable support structures that you can count on as your business grows.
          </p>
        </div>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 font-sans">
          {VALUE_PROPS.map((prop, idx) => (
            <div
              key={prop.title}
              id={`why-prop-card-${idx}`}
              className="bg-[#F8F9FA] p-8 rounded-2xl border border-[#5B6777]/10 flex flex-col space-y-4 relative overflow-hidden group hover:border-[#5F7D6E] transition-all duration-300 shadow-sm"
            >
              {/* Card top indicator bar */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-transparent group-hover:bg-[#5F7D6E] transition-colors" />

              {/* Icon container */}
              <div className="w-12 h-12 rounded-xl bg-white border border-[#5B6777]/10 flex items-center justify-center shadow-sm">
                {icons[idx] || <Shield className="w-6 h-6" />}
              </div>

              {/* Title & Description */}
              <h3 className="text-base font-bold text-[#1F3A5F]">
                {prop.title}
              </h3>
              
              <p className="text-xs font-sans text-[#5B6777] leading-relaxed flex-1">
                {prop.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

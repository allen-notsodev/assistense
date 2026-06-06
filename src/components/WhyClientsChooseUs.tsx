/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { CLIENTS_CHOOSE_US_BENEFITS } from '../data';
import { CheckCircle, ShieldCheck } from 'lucide-react';

export default function WhyClientsChooseUs() {
  return (
    <section id="why-choose-us" className="bg-white py-16 md:py-24 border-t border-[#5B6777]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Block: Bold Copy and Focus */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <span className="text-[10px] uppercase tracking-[0.15em] text-[#5F7D6E] font-bold block">
              Our Promise
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1F3A5F] tracking-tight leading-tight">
              Why clients love Assistense
            </h2>
            <div className="w-16 h-[1px] bg-[#5F7D6E]/40" />
            <p className="text-sm text-[#5B6777] leading-relaxed font-sans">
              We did not recreate the usual impersonal outsourcing model. Clients partner with us over years because we bring exceptional care, warm support, and unmatched safety controls to our working relationships.
            </p>

            <div className="p-6 bg-[#F8F9FA] rounded-2xl border border-[#5B6777]/10 relative overflow-hidden shadow-sm">
              <div className="absolute top-0 right-0 w-16 h-16 bg-[#1F3A5F]/5" />
              <div className="flex items-start space-x-3 text-sm">
                <ShieldCheck className="w-5 h-5 text-[#5F7D6E] shrink-0 mt-0.5 stroke-[1.5]" />
                <div className="space-y-1">
                  <span className="font-sans font-bold text-[#1F3A5F] text-sm">The Assistense security standard</span>
                  <p className="text-xs text-[#5B6777] leading-relaxed font-sans">
                    All virtual professionals sign strict legal NDAs. We assist you in establishing secure shared logins via industry-leading access managers (such as LastPass or 1Password), safeguarding your operations.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column Checklist Format */}
          <div className="lg:col-span-7">
            <div id="clients-benefits-checklist-grid" className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
              {CLIENTS_CHOOSE_US_BENEFITS.map((b, idx) => (
                <div
                  key={b.title}
                  id={`choose-benefit-item-${idx}`}
                  className="flex items-start space-x-3.5 p-5 rounded-2xl bg-white border border-[#5B6777]/10 hover:border-[#5F7D6E] transition-all shadow-sm"
                >
                  <CheckCircle className="w-5 h-5 text-[#5F7D6E] shrink-0 mt-0.5 stroke-[1.5]" />
                  <div className="space-y-1">
                    <h3 className="text-sm font-sans font-bold text-[#1F3A5F]">
                      {b.title}
                    </h3>
                    <p className="text-xs font-sans text-[#5B6777] leading-relaxed">
                      {b.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

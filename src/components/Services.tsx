/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { SERVICES } from '../data';
import {
  Mail,
  Calendar,
  Clock,
  MessageSquareText,
  FileText,
  Database,
  PhoneCall,
  Layers,
  ArrowRight,
  Sparkles,
  HelpCircle
} from 'lucide-react';

interface ServicesProps {
  onSelectService: (serviceTitle: string) => void;
}

// Icon mapper helper
const renderIcon = (name: string) => {
  const css = "w-6 h-6 text-[#1F3A5F] group-hover:text-[#5F7D6E] transition-colors";
  switch (name) {
    case 'Mail':
      return <Mail className={css} />;
    case 'Calendar':
      return <Calendar className={css} />;
    case 'Clock':
      return <Clock className={css} />;
    case 'MessageSquareText':
      return <MessageSquareText className={css} />;
    case 'FileText':
      return <FileText className={css} />;
    case 'Database':
      return <Database className={css} />;
    case 'PhoneCall':
      return <PhoneCall className={css} />;
    case 'Layers':
      return <Layers className={css} />;
    default:
      return <HelpCircle className={css} />;
  }
};

export default function Services({ onSelectService }: ServicesProps) {
  const [activeTab, setActiveTab] = useState<string | null>(null);

  const handleInquiry = (serviceTitle: string) => {
    onSelectService(serviceTitle);
    
    // Smooth scroll to contact
    const contactElem = document.querySelector('#contact');
    if (contactElem) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = contactElem.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="services" className="bg-[#F8F9FA] py-16 md:py-24 border-t border-[#5B6777]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-[10px] uppercase tracking-[0.2em] text-[#5F7D6E] font-bold block mb-2">
            What We Do
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1F3A5F] tracking-tight">
            Helpful support for <span className="text-[#5F7D6E]">whatever you need</span>
          </h2>
          <div className="w-16 h-[1px] bg-[#5F7D6E]/40 mx-auto" />
          <p className="text-base text-[#5B6777] leading-relaxed">
            Whether you need help with your calendar, email, customers, or creative projects, we match you with friendly assistants who care. No corporate jargon—just helpful, reliable support.
          </p>
        </div>

        {/* Dynamic Service Grid Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((srv) => (
            <div
              key={srv.id}
              id={`service-card-${srv.id}`}
              className="bg-white rounded-2xl border border-[#5B6777]/10 p-6 flex flex-col justify-between transition-all duration-300 group hover:border-[#5F7D6E] hover:shadow-md relative overflow-hidden"
            >
              <div>
                {/* Icon wrapper */}
                <div className="w-12 h-12 rounded-full bg-[#1F3A5F]/5 flex items-center justify-center mb-5 group-hover:bg-[#5F7D6E]/10 transition-colors">
                  {renderIcon(srv.iconName)}
                </div>

                {/* Service Title */}
                <h4 className="text-base font-sans font-bold text-[#1F3A5F] mb-2">
                  {srv.title}
                </h4>

                {/* Service Description */}
                <p className="text-sm font-sans text-[#5B6777] leading-relaxed mb-6">
                  {srv.description}
                </p>
              </div>

              {/* Action trigger button */}
              <button
                type="button"
                onClick={() => handleInquiry(srv.title)}
                className="inline-flex items-center space-x-1.5 text-[10px] uppercase tracking-wider font-bold text-[#1F3A5F] hover:text-[#5F7D6E] transition-colors focus:outline-none cursor-pointer self-start border-b border-[#1F3A5F]/20 hover:border-[#5F7D6E] pb-0.5"
              >
                <span>Get started</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          ))}
        </div>

        {/* Trust Highlight Banner below grid */}
        <div className="mt-12 bg-gradient-to-r from-[#1F3A5F] to-[#5F7D6E] rounded-2xl p-6 md:p-8 text-white relative overflow-hidden shadow-sm">
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center lg:text-left max-w-2xl">
              <div className="inline-block px-2.5 py-1 bg-white/10 text-emerald-200 text-[9px] uppercase tracking-wider font-bold rounded-full">
                Custom Supportive Help
              </div>
              <h4 className="text-lg md:text-xl font-bold font-sans">
                Need help with other specific tools or soft tasks?
              </h4>
              <p className="text-sm text-gray-200 leading-relaxed font-sans">
                Many of our assistants have skills in specific popular tools like Shopify, Canva, Notion, or simple accounting systems. We are happy to match you with someone who fits your unique way of working!
              </p>
            </div>
            <button
              id="specialized-help-cta"
              type="button"
              onClick={() => handleInquiry('Specialized Custom Workflow')}
              className="bg-white hover:bg-gray-100 text-[#1F3A5F] text-[11px] uppercase tracking-wider font-bold px-6 py-3 rounded-full transition-colors cursor-pointer shrink-0"
            >
              Tell Us What You Need
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}

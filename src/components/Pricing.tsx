import React, { useState } from 'react';
import { Check, ArrowDown, ChevronDown, ChevronUp, Calendar, ShieldCheck, Mail, ArrowRight } from 'lucide-react';

interface PricingProps {
  onSelectPlan: (planName: string, price: string) => void;
}

export default function Pricing({ onSelectPlan }: PricingProps) {
  // Expandable state for our Detailed Deliverables Comparison section below
  const [expandedStarter, setExpandedStarter] = useState(true);
  const [expandedGrowth, setExpandedGrowth] = useState(true);
  const [expandedEnterprise, setExpandedEnterprise] = useState(true);

  // CTA Scroll trigger to direct users to scheduling block
  const handleSelect = (planName: string, price: string) => {
    onSelectPlan(planName, price);
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

  // Direct scroller to Section 2: Detailed Deliverables
  const scrollToCompleteComparison = (e: React.MouseEvent) => {
    e.preventDefault();
    const elem = document.getElementById('complete-deliverables');
    if (elem) {
      const offset = 90;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = elem.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  // Scroll to general contact/discovery call booking
  const handleScrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
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
    <section id="pricing" className="bg-[#F8F9FA] py-16 md:py-24 border-t border-[#5B6777]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-[10px] uppercase tracking-[0.15em] text-[#5F7D6E] font-bold block">
            Investment options
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1F3A5F] tracking-tight">
            Simple flat rates, <span className="text-[#5F7D6E]">no surprises</span>
          </h2>
          <div className="w-16 h-[1px] bg-[#5F7D6E]/40 mx-auto" />
          <p className="text-sm text-[#5B6777] leading-relaxed font-sans">
            Choose the plan that's right for you. Simple flat rates, friendly supportive helpers, and no hiring headaches.
          </p>
        </div>

        {/* 3-Column Core Comparison Pricing Table */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch pt-6 pb-12">
          
          {/* PACKAGE 1: STARTER PLAN */}
          <div 
            id="pricing-card-starter"
            className="bg-white border border-[#5B6777]/15 rounded-xl shadow-sm flex flex-col justify-between transition-all duration-300 hover:shadow-md hover:border-[#1F3A5F]/30 p-8 text-left relative"
          >
            <div className="space-y-6">
              {/* Placement Buffer to offset highlighted Featured plan height */}
              <div className="h-6" />

              {/* Pricing amount & Title */}
              <div className="space-y-1">
                <div className="text-5xl font-sans font-extrabold text-[#1F3A5F] tracking-tight">
                  $1,100
                </div>
                <h3 className="text-lg font-sans font-bold text-[#1F3A5F] tracking-wide">
                  Starter Package
                </h3>
                <span className="text-xs font-mono font-bold text-[#5F7D6E] block uppercase tracking-wider">
                  + fees ($10/hr)
                </span>
                <p className="text-[10px] text-[#5B6777] italic pt-1 font-sans">
                  * Additional: Setup & maintenance fee applies
                </p>
              </div>

              <div className="w-full h-px bg-[#5B6777]/10" />

              {/* Best For section */}
              <div className="space-y-1.5">
                <span className="text-[9px] uppercase tracking-wider font-bold text-[#1F3A5F] block font-sans">
                  Ideal Workspace Match:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {['Solo Entrepreneur', 'Small Business Owners', 'Therapists', 'Teachers', 'Coaches'].map((tag) => (
                    <span key={tag} className="bg-[#F8F9FA] px-2 py-0.5 border border-[#5B6777]/10 text-[9px] text-[#5B6777] font-sans rounded-none font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Scannable primary highlights */}
              <div className="space-y-2">
                <span className="text-[9px] uppercase tracking-wider font-bold text-[#1F3A5F] block font-sans">
                  Included Highlights:
                </span>
                <ul className="space-y-1.5 text-xs text-[#5B6777] list-none pl-0 font-sans">
                  <li className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 bg-[#5F7D6E] shrink-0" />
                    <span>Admin tasks</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 bg-[#5F7D6E] shrink-0" />
                    <span>Social media management</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 bg-[#5F7D6E] shrink-0" />
                    <span>Personal tasks</span>
                  </li>
                </ul>
              </div>

              {/* Deliverable Anchor Link */}
              <div className="pt-2">
                <button
                  type="button"
                  onClick={scrollToCompleteComparison}
                  className="text-[10px] font-sans font-bold text-[#5F7D6E] hover:text-[#1F3A5F] flex items-center space-x-1 uppercase tracking-wide cursor-pointer focus:outline-none"
                >
                  <span>View Complete Deliverables</span>
                  <ArrowDown className="w-3 h-3 text-[#5F7D6E]" />
                </button>
              </div>
            </div>

            {/* CTA action bottom */}
            <div className="pt-8">
              <button
                type="button"
                onClick={() => handleSelect('Starter Package', '$1,100')}
                className="w-full py-3 bg-white hover:bg-gray-50 border border-[#1F3A5F] text-[#1F3A5F] text-xs uppercase tracking-wider font-bold transition-all cursor-pointer rounded-full text-center block focus:outline-none"
              >
                Get Started
              </button>
            </div>
          </div>

          {/* PACKAGE 2: GROWTH PLAN (FEATURED - HIGHLIGHTED) */}
          <div 
            id="pricing-card-growth"
            className="bg-white border-2 border-[#1F3A5F] rounded-xl shadow-lg flex flex-col justify-between transition-all duration-300 hover:shadow-xl lg:scale-[1.03] p-10 text-left relative z-10"
          >
            {/* Featured Badge */}
            <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#5F7D6E] text-white text-[9px] font-bold tracking-widest uppercase py-1 px-4 rounded-full">
              MOST POPULAR ✨
            </span>

            <div className="space-y-6">
              {/* Pricing amount & Title */}
              <div className="space-y-1">
                <div className="text-6xl font-sans font-extrabold text-[#1F3A5F] tracking-tight">
                  $2,500
                </div>
                <h3 className="text-xl font-sans font-bold text-[#1F3A5F] tracking-wide flex items-center justify-between">
                  <span>Growth Package</span>
                </h3>
                <span className="text-xs font-mono font-bold text-[#5F7D6E] block uppercase tracking-wider">
                  Flat Rate - No Setup Fees!
                </span>
                <p className="text-[10px] text-[#5F7D6E] font-sans font-semibold pt-1">
                  ★ High priority matched cohort support
                </p>
              </div>

              <div className="w-full h-px bg-[#1F3A5F]/20" />

              {/* Best For section */}
              <div className="space-y-1.5">
                <span className="text-[9px] uppercase tracking-wider font-bold text-[#1F3A5F] block font-sans">
                  Ideal Workspace Match:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {['Growing Businesses', 'E-commerce Stores', 'Content Creators', 'Coaches', 'Marketing Teams'].map((tag) => (
                    <span key={tag} className="bg-[#1F3A5F]/5 px-2 py-0.5 border border-[#1F3A5F]/15 text-[9px] text-[#1f3a5f] font-sans rounded-none font-bold">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Scannable primary highlights */}
              <div className="space-y-2">
                <span className="text-[9px] uppercase tracking-wider font-bold text-[#1F3A5F] block font-sans">
                  Included Highlights:
                </span>
                <ul className="space-y-1.5 text-xs text-[#5B6777] list-none pl-0 font-sans font-medium">
                  <li className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 bg-[#1F3A5F] shrink-0 animate-pulse" />
                    <span>Admin tasks</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 bg-[#1F3A5F] shrink-0 animate-pulse" />
                    <span>Booking calls</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 bg-[#1F3A5F] shrink-0 animate-pulse" />
                    <span>Customer service</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 bg-[#1F3A5F] shrink-0 animate-pulse" />
                    <span>CMS management</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 bg-[#1F3A5F] shrink-0 animate-pulse" />
                    <span>E-commerce management</span>
                  </li>
                </ul>
              </div>

              {/* Deliverable Anchor Link */}
              <div className="pt-2">
                <button
                  type="button"
                  onClick={scrollToCompleteComparison}
                  className="text-[10px] font-sans font-bold text-[#1F3A5F] hover:text-[#5F7D6E] flex items-center space-x-1 uppercase tracking-wide cursor-pointer focus:outline-none"
                >
                  <span>View Complete Deliverables</span>
                  <ArrowDown className="w-3 h-3 text-[#1F3A5F]" />
                </button>
              </div>
            </div>

            {/* CTA action bottom */}
            <div className="pt-8">
              <button
                type="button"
                onClick={() => handleSelect('Growth Package', '$2,500')}
                className="w-full py-3.5 bg-[#1F3A5F] hover:bg-[#152842] text-white text-xs uppercase tracking-wider font-bold transition-all cursor-pointer rounded-full text-center block focus:outline-none shadow-md"
              >
                Choose Growth Package
              </button>
            </div>
          </div>

          {/* PACKAGE 3: ENTERPRISE PLAN */}
          <div 
            id="pricing-card-enterprise"
            className="bg-white border border-[#5B6777]/15 rounded-xl shadow-sm flex flex-col justify-between transition-all duration-300 hover:shadow-md hover:border-[#1F3A5F]/30 p-8 text-left relative"
          >
            <div className="space-y-6">
              {/* Placement Buffer to offset highlighted Featured plan height */}
              <div className="h-6" />

              {/* Pricing amount & Title */}
              <div className="space-y-1">
                <div className="text-5xl font-sans font-extrabold text-[#1F3A5F] tracking-tight">
                  $3,500
                </div>
                <h3 className="text-lg font-sans font-bold text-[#1F3A5F] tracking-wide">
                  Enterprise Package
                </h3>
                <span className="text-xs font-mono font-bold text-[#5F7D6E] block uppercase tracking-wider">
                  Flat Rate - No Setup Fees!
                </span>
                <p className="text-[10px] text-[#5B6777] italic pt-1 font-sans">
                  * Dedicated primary administrative leader
                </p>
              </div>

              <div className="w-full h-px bg-[#5B6777]/10" />

              {/* Best For section */}
              <div className="space-y-1.5">
                <span className="text-[9px] uppercase tracking-wider font-bold text-[#1F3A5F] block font-sans">
                  Ideal Workspace Match:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {['Large Teams', 'Scaling Enterprises', 'SMS Support', 'High-volume Operations', 'Complex Projects'].map((tag) => (
                    <span key={tag} className="bg-[#F8F9FA] px-2 py-0.5 border border-[#5B6777]/10 text-[9px] text-[#5B6777] font-sans rounded-none font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Scannable primary highlights */}
              <div className="space-y-2">
                <span className="text-[9px] uppercase tracking-wider font-bold text-[#1F3A5F] block font-sans">
                  Included Highlights:
                </span>
                <ul className="space-y-1.5 text-xs text-[#5B6777] list-none pl-0 font-sans">
                  <li className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 bg-[#5F7D6E] shrink-0" />
                    <span>Project management</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 bg-[#5F7D6E] shrink-0" />
                    <span>Operational management</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 bg-[#5F7D6E] shrink-0" />
                    <span>Meeting scheduling</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 bg-[#5F7D6E] shrink-0" />
                    <span>Internal document management</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 bg-[#5F7D6E] shrink-0" />
                    <span>Meeting minutes</span>
                  </li>
                </ul>
              </div>

              {/* Deliverable Anchor Link */}
              <div className="pt-2">
                <button
                  type="button"
                  onClick={scrollToCompleteComparison}
                  className="text-[10px] font-sans font-bold text-[#5F7D6E] hover:text-[#1F3A5F] flex items-center space-x-1 uppercase tracking-wide cursor-pointer focus:outline-none"
                >
                  <span>View Complete Deliverables</span>
                  <ArrowDown className="w-3 h-3 text-[#5F7D6E]" />
                </button>
              </div>
            </div>

            {/* CTA action bottom */}
            <div className="pt-8">
              <button
                type="button"
                onClick={() => handleSelect('Enterprise Package', '$3,500')}
                className="w-full py-3 bg-white hover:bg-gray-50 border border-[#1F3A5F] text-[#1F3A5F] text-xs uppercase tracking-wider font-bold transition-all cursor-pointer rounded-full text-center block focus:outline-none"
              >
                Contact Us
              </button>
            </div>
          </div>

        </div>

        {/* DETAILED DELIVERABLES COMPARISON PANEL */}
        <div id="complete-deliverables" className="mt-16 pt-12 border-t border-[#5B6777]/15">
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
            <h3 className="text-2xl font-sans font-bold text-[#1F3A5F]">
              Complete Deliverables Comparison
            </h3>
            <p className="text-xs text-[#5B6777] font-sans">
              Compare everything included in each package before making your decision.
            </p>
          </div>

          <div className="space-y-4 max-w-4xl mx-auto text-left">
            
            {/* STARTER PACKAGE DETAIL */}
            <div className="border border-[#5B6777]/15 bg-white rounded-xl overflow-hidden shadow-sm">
              <button
                type="button"
                onClick={() => setExpandedStarter(!expandedStarter)}
                className="w-full px-6 py-4 flex items-center justify-between text-[#1F3A5F] hover:text-[#5F7D6E] transition-colors focus:outline-none cursor-pointer"
              >
                <div className="flex items-center space-x-3">
                  <span className="w-2.5 h-2.5 bg-gray-300 rounded-full" />
                  <span className="text-sm font-sans font-bold uppercase tracking-wider">Starter Package - Detailed Ledger</span>
                </div>
                {expandedStarter ? <ChevronUp className="w-4 h-4 text-[#5F7D6E]" /> : <ChevronDown className="w-4 h-4 text-[#1F3A5F]" />}
              </button>
              
              {expandedStarter && (
                <div className="px-8 pb-6 pt-2 border-t border-dashed border-[#5B6777]/10 bg-[#F8F9FA]/50">
                  <p className="text-[11px] uppercase tracking-wider font-bold text-[#1F3A5F] mb-3">All Standard Scope Inclusions:</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-[#5B6777] font-sans">
                    <div className="flex items-start space-x-2">
                      <span className="text-[#5F7D6E] font-bold mt-0.5">✓</span>
                      <span><strong>Admin tasks</strong>: Dedicated email filing, response drafts, and dynamic calendar matching.</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <span className="text-[#5F7D6E] font-bold mt-0.5">✓</span>
                      <span><strong>Social media management</strong>: Posting ready visual drafts, scheduling calendars, logging reach metrics.</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <span className="text-[#5F7D6E] font-bold mt-0.5">✓</span>
                      <span><strong>Personal tasks</strong>: Family coordinate travel booking, gift logs, and routine dynamic notifications.</span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* GROWTH PACKAGE DETAIL */}
            <div className="border border-[#1F3A5F] bg-white rounded-xl overflow-hidden shadow-sm">
              <button
                type="button"
                onClick={() => setExpandedGrowth(!expandedGrowth)}
                className="w-full px-6 py-4 flex items-center justify-between text-[#1F3A5F] hover:text-[#5F7D6E] transition-colors focus:outline-none cursor-pointer"
              >
                <div className="flex items-center space-x-3">
                  <span className="w-2.5 h-2.5 bg-[#5F7D6E] rounded-full" />
                  <span className="text-sm font-sans font-bold uppercase tracking-wider text-[#1F3A5F]">Growth Package - Detailed Ledger</span>
                </div>
                {expandedGrowth ? <ChevronUp className="w-4 h-4 text-[#5F7D6E]" /> : <ChevronDown className="w-4 h-4 text-[#1F3A5F]" />}
              </button>
              
              {expandedGrowth && (
                <div className="px-8 pb-6 pt-2 border-t border-dashed border-[#1F3A5F]/15 bg-[#1F3A5F]/5">
                  <p className="text-[11px] uppercase tracking-wider font-bold text-[#1F3A5F] mb-3">All Standard Scope Inclusions:</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-[#1F3A5F]/90 font-sans">
                    <div className="flex items-start space-x-2">
                      <span className="text-[#5F7D6E] font-bold mt-0.5">✓</span>
                      <span><strong>Admin tasks</strong>: Full file structure setup, correspondence priority filters, and multi-inbox control.</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <span className="text-[#5F7D6E] font-bold mt-0.5">✓</span>
                      <span><strong>Booking calls</strong>: Direct outreach sequences, coordinate negotiations, scheduling buffers integration.</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <span className="text-[#5F7D6E] font-bold mt-0.5">✓</span>
                      <span><strong>Customer service</strong>: Core ticketing triaging, live FAQ responses, client record entry validations.</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <span className="text-[#5F7D6E] font-bold mt-0.5">✓</span>
                      <span><strong>CMS management</strong>: Article edits, layout checks, asset upload coordination, updates tracking.</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <span className="text-[#5F7D6E] font-bold mt-0.5">✓</span>
                      <span><strong>E-commerce management</strong>: Order validation logs, return tracking, inventory reports, client disputes routing.</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <span className="text-[#5F7D6E] font-bold mt-0.5">✓</span>
                      <span><strong>Content creation</strong>: Basic copywriting drafts, outline structuring, coordinating design hand-offs.</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <span className="text-[#5F7D6E] font-bold mt-0.5">✓</span>
                      <span><strong>Social media management</strong>: Multi-channel scheduling, asset tagging, comments monitoring.</span>
                    </div>
                  </div>

                  <div className="mt-5 p-3.5 bg-white border-l-2 border-[#5F7D6E] text-xs font-sans text-[#1F3A5F] rounded-r-lg">
                    We handle everything for you to keep things simple!
                  </div>
                </div>
              )}
            </div>

            {/* ENTERPRISE PACKAGE DETAIL */}
            <div className="border border-[#5B6777]/15 bg-white rounded-xl overflow-hidden shadow-sm">
              <button
                type="button"
                onClick={() => setExpandedEnterprise(!expandedEnterprise)}
                className="w-full px-6 py-4 flex items-center justify-between text-[#1F3A5F] hover:text-[#5F7D6E] transition-colors focus:outline-none cursor-pointer"
              >
                <div className="flex items-center space-x-3">
                  <span className="w-2.5 h-2.5 bg-[#1F3A5F] rounded-full" />
                  <span className="text-sm font-sans font-bold uppercase tracking-wider">Enterprise Package - Detailed Ledger</span>
                </div>
                {expandedEnterprise ? <ChevronUp className="w-4 h-4 text-[#5F7D6E]" /> : <ChevronDown className="w-4 h-4 text-[#1F3A5F]" />}
              </button>
              
              {expandedEnterprise && (
                <div className="px-8 pb-6 pt-2 border-t border-dashed border-[#5B6777]/10 bg-[#F8F9FA]/50">
                  <p className="text-[11px] uppercase tracking-wider font-bold text-[#1F3A5F] mb-3">All Standard Scope Inclusions:</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-[#5B6777] font-sans">
                    <div className="flex items-start space-x-2">
                      <span className="text-[#5F7D6E] font-bold mt-0.5">✓</span>
                      <span><strong>All tasks from Growth Package</strong>: Standard administrative, CMS updates, order logs, social reach tools.</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <span className="text-[#5F7D6E] font-bold mt-0.5">✓</span>
                      <span><strong>Project management</strong>: Milestone scheduling, deadline alarms, resources coordination, board updates.</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <span className="text-[#5F7D6E] font-bold mt-0.5">✓</span>
                      <span><strong>Operational management</strong>: Audit procedures, SOP construction, cohort tools access administration.</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <span className="text-[#5F7D6E] font-bold mt-0.5">✓</span>
                      <span><strong>Meeting scheduling</strong>: Coordinate cross-timezone rosters, setup meeting channels, calendar invite matching.</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <span className="text-[#5F7D6E] font-bold mt-0.5">✓</span>
                      <span><strong>Internal document management</strong>: Dynamic spreadsheets models, central knowledge directories.</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <span className="text-[#5F7D6E] font-bold mt-0.5">✓</span>
                      <span><strong>Meeting minutes</strong>: Real-time transcript triaging, log action bullet highlights, email action alerts.</span>
                    </div>
                  </div>

                  <div className="mt-5 space-y-2.5">
                    <div className="p-3.5 bg-white border-l-2 border-[#1F3A5F] text-xs font-sans text-[#1F3A5F] leading-relaxed rounded-r-lg">
                      Includes personalized booking helpers and customizable templates unique to your team.
                    </div>
                  </div>
                </div>
              )}
            </div>

          </div>
        </div>

        {/* BOTTOM CTA RECRUITING & DISCUSSION BLOCK */}
        <div className="mt-16 bg-white border border-[#5B6777]/10 rounded-2xl p-8 sm:p-12 text-center max-w-4xl mx-auto space-y-6 shadow-md hover:shadow-lg transition-shadow">
          <div className="space-y-2.5">
            <span className="text-[10px] uppercase tracking-[0.15em] text-[#5F7D6E] font-bold block">
              Let's chat
            </span>
            <h4 className="text-2xl font-sans font-bold text-[#1F3A5F]">
              Not sure which package fits your needs?
            </h4>
            <p className="text-sm text-[#5B6777] font-sans max-w-lg mx-auto leading-relaxed">
              We are here to help! Get in touch with us, and we'll help identify the perfect support match for your daily workflow.
            </p>
          </div>

          <div className="pt-2">
            <button
              type="button"
              onClick={handleScrollToContact}
              className="px-8 py-3 bg-[#1F3A5F] hover:bg-[#152842] text-white text-xs uppercase tracking-wider font-bold font-sans transition-colors cursor-pointer rounded-full inline-flex items-center space-x-2 focus:outline-none shadow"
            >
              <span>Talk with Us</span>
              <ArrowRight className="w-4 h-4 text-white" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}

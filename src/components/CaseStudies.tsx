import React, { useState } from 'react';
import { Sparkles, Calendar, TrendingUp, Clock, FileText, ArrowRight } from 'lucide-react';

interface CaseStudy {
  id: string;
  client: string;
  industry: string;
  image: string;
  problem: string;
  solution: string;
  resultMetric: string;
  resultLabel: string;
  narrative: string;
  keyAids: string[];
}

export default function CaseStudies() {
  const [activeStudy, setActiveStudy] = useState<string>("case-1");

  const studies: CaseStudy[] = [
    {
      id: "case-1",
      client: "Meridian Creative Ventures",
      industry: "SaaS & Brand Consultancy",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=600",
      problem: "The founder was spending 18+ hours per week triaging customer tickets, scheduling sales demos, and manually updating Notion boards.",
      solution: "Assistense matched a dedicated virtual administrative assistant who established automated Freshdesk triage rules, managed the direct calendar matching, and acted as secondary coordinator on general queries.",
      resultMetric: "18 Hours Saved",
      resultLabel: "Released weekly for strategic product engineering and venture pitches.",
      narrative: "By implementing the Active Inbox Triage system, the founder regained undivided attention blocks, allowing them to close a seed investment round ahead of schedule.",
      keyAids: ["Freshdesk Triage Setup", "Customer Service Logs", "Multi-timezone Scheduling"]
    },
    {
      id: "case-2",
      client: "Vance & Sterling LLP",
      industry: "Family Law Practice",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=600",
      problem: "Senior associates were bogged down writing intake summaries, sorting travel coordinates, and setting up routine calendar alerts manually.",
      solution: "An Assistense professional integrated client CRM entries, organized automated billing outlines, and took formal meeting minutes during complex depositions.",
      resultMetric: "35% Intake Speedup",
      resultLabel: "Reduction in client onboarding latency and calendar conflict events.",
      narrative: "The legal assistants acted as direct liaisons, transforming client filings into pre-formatted lawyer brief reviews inside 10 minutes of intake completion.",
      keyAids: ["Legal CRM Integrations", "Client Ingestion Management", "Meeting Minutes Ledger"]
    },
    {
      id: "case-3",
      client: "Flora & Fawn Goods",
      industry: "Boutique E-commerce Brand",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=600",
      problem: "Backlog of Shopify custom queries and order tracking disputes caused high review friction during holiday sales periods.",
      solution: "Matched eCommerce specialist handled direct Shopify fulfillment tracking, updated CMS promo copy, and responded to customer Instagram chat sequences.",
      resultMetric: "94% CSAT Rating",
      resultLabel: "Up from 71% with standard, automated chatbot fallbacks.",
      narrative: "Human empathy coupled with rapid response templates resolved order concerns, driving high customer loyalty and improving lifetime sales metrics.",
      keyAids: ["Shopify Console Tracking", "IG Chat Triage Service", "Promo Copwriting Updates"]
    }
  ];

  const currentStudy = studies.find(s => s.id === activeStudy) || studies[0];

  return (
    <div className="bg-[#F8F9FA] min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-[10px] uppercase tracking-[0.15em] text-[#5F7D6E] font-bold block">
            Success Stories
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1F3A5F] tracking-tight">
            Client success stories
          </h2>
          <div className="w-16 h-[1px] bg-[#5F7D6E]/40 mx-auto" />
          <p className="text-sm text-[#5B6777] leading-relaxed font-sans">
            Real support impacts. See how helpful business partners and creative team leaders save hours with friendly Assistense matching.
          </p>
        </div>

        {/* Bento Grid layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch max-w-5xl mx-auto text-left">
          
          {/* List Selector Side */}
          <div className="lg:col-span-4 flex flex-col justify-start space-y-4">
            <span className="text-[10px] font-sans tracking-widest font-bold uppercase text-[#1F3A5F] block">
              Case Directories
            </span>
            <div className="space-y-2.5">
              {studies.map((s) => {
                const isActive = s.id === activeStudy;
                return (
                  <button
                    key={s.id}
                    type="button"
                    onClick={() => setActiveStudy(s.id)}
                    className={`w-full text-left p-5 border transition-all duration-300 rounded-2xl cursor-pointer focus:outline-none ${
                      isActive
                        ? 'bg-white border-[#5F7D6E] border-l-4 border-l-[#5F7D6E] shadow-sm'
                        : 'bg-white/40 border-[#5B6777]/10 hover:border-[#1F3A5F]'
                    }`}
                  >
                    <div className="space-y-1">
                      <span className="text-[9px] font-sans tracking-wider font-bold uppercase text-[#5F7D6E] block">
                        {s.industry}
                      </span>
                      <h4 className="text-xs font-sans font-bold text-[#1F3A5F]">
                        {s.client}
                      </h4>
                    </div>
                  </button>
                );
              })}
            </div>

            <div className="p-6 bg-white border border-[#5B6777]/10 rounded-2xl space-y-4 mt-6 shadow-sm">
              <h5 className="text-xs font-sans font-bold text-[#1F3A5F]" id="performance-metric-title">Performance Metrics</h5>
              <div className="flex items-center space-x-3 text-xs text-[#5B6777] font-sans">
                <Clock className="w-4 h-4 text-[#5F7D6E]" />
                <span>Average match time: 48 hours</span>
              </div>
              <div className="flex items-center space-x-3 text-xs text-[#5B6777] font-sans">
                <TrendingUp className="w-4 h-4 text-[#5F7D6E]" />
                <span>Client satisfaction: 98% Happy</span>
              </div>
            </div>
          </div>

          {/* Active Detail Side */}
          <div className="lg:col-span-8 bg-white border border-[#5B6777]/10 rounded-2xl p-6 sm:p-10 flex flex-col justify-between shadow-sm">
            
            <div className="space-y-6">
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-[#5B6777]/10 pb-4 gap-2">
                <div>
                  <span className="text-[10px] font-sans tracking-widest uppercase text-[#5F7D6E] font-bold">Client Impact Report</span>
                  <h3 className="text-xl font-sans font-bold text-[#1F3A5F]">{currentStudy.client}</h3>
                </div>
                <div className="text-left sm:text-right bg-[#1F3A5F]/5 border border-[#1F3A5F]/10 px-3 py-1 rounded-full">
                  <span className="text-[9px] font-sans text-[#1F3A5F] block font-bold uppercase">{currentStudy.industry}</span>
                </div>
              </div>

              {/* Graphic Metric Block */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 bg-[#F8F9FA] p-6 border border-[#5B6777]/10 rounded-2xl shadow-inner">
                <div className="space-y-1 text-left">
                  <span className="text-[9px] uppercase tracking-wider font-bold text-[#5B6777] block font-sans">Core Improvement:</span>
                  <div className="text-3xl font-sans font-extrabold text-[#1F3A5F] leading-none shrink-0 tracking-tight">
                    {currentStudy.resultMetric}
                  </div>
                  <p className="text-[10px] font-sans text-[#5B6777] leading-tight pt-1">
                    {currentStudy.resultLabel}
                  </p>
                </div>

                <div className="p-2 border border-white/50 bg-white rounded-xl shadow-sm">
                  <img
                    src={currentStudy.image}
                    alt={currentStudy.client}
                    referrerPolicy="no-referrer"
                    className="w-full h-24 object-cover filter brightness-95 rounded-lg"
                  />
                </div>
              </div>

              {/* Narrative Bullet points */}
              <div className="space-y-4 text-xs text-[#5B6777] leading-relaxed">
                <div>
                  <strong className="text-xs uppercase font-bold tracking-wider font-sans text-[#1F3A5F] block mb-1">The Challenge:</strong>
                  <p className="font-sans">{currentStudy.problem}</p>
                </div>
                <div>
                  <strong className="text-xs uppercase font-bold tracking-wider font-sans text-[#1F3A5F] block mb-1">Our Strategy:</strong>
                  <p className="font-sans">{currentStudy.solution}</p>
                </div>
                <div>
                  <strong className="text-xs uppercase font-bold tracking-wider font-sans text-[#1F3A5F] block mb-1">The Narrative Result:</strong>
                  <p className="font-sans">{currentStudy.narrative}</p>
                </div>
              </div>
            </div>

            {/* Bottom Actions and Tools */}
            <div className="pt-8 border-t border-[#5B6777]/10 mt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex flex-wrap gap-1.5">
                {currentStudy.keyAids.map((aid) => (
                  <span key={aid} className="bg-[#1F3A5F]/5 border border-[#1F3A5F]/10 text-[9px] font-sans text-[#1F3A5F] px-2.5 py-1 rounded-full font-bold">
                    {aid}
                  </span>
                ))}
              </div>
              <a
                href="#contact"
                className="text-xs font-sans font-bold text-[#5F7D6E] hover:text-[#1F3A5F] uppercase tracking-wider flex items-center space-x-1 border-b border-[#5F7D6E]/20 pb-0.5 shrink-0"
              >
                <span>Request Case Plan</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}

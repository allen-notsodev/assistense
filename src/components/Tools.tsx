import React, { useState } from 'react';
import { Layers, CheckCircle2, Cpu, Workflow, Shield, Monitor } from 'lucide-react';

interface ToolCategory {
  category: string;
  description: string;
  items: string[];
}

export default function Tools() {
  const [activeTab, setActiveTab] = useState<number>(0);

  const categories: ToolCategory[] = [
    {
      category: "Office & Writing",
      description: "Standard document triaging, spreadsheet models, and visual client communications.",
      items: ["Google Workspace (GMail, Sheets, Docs, Drive)", "Microsoft 365 (Outlook, Excel, Word)", "Adobe Acrobat PDF Editor", "DocuSign / HelloSign", "Canva Pro (Branding Assets)"]
    },
    {
      category: "Tasks & Projects",
      description: "Managing standard board pipelines and keeping track of deliverables transparently.",
      items: ["Asana (Task Design)", "Trello (Kanban Flows)", "Notion (Workspace SOPs)", "ClickUp", "Monday.com"]
    },
    {
      category: "CRM & Platforms",
      description: "Keeping your client data pristine and logging customer followups flawlessly.",
      items: ["HubSpot CRM", "Salesforce Essentials", "Clio Support (Legal Practice)", "Jane App (Dental & Medical)", "ActiveCampaign"]
    },
    {
      category: "Sync & Comms",
      description: "Seamless real-time notifications and keeping your professional calendars organized.",
      items: ["Slack & Microsoft Teams", "Zoom & Google Meet", "Calendly / Acuity Scheduling", "Loom Video Reporting", "1Password & LastPass Security"]
    }
  ];

  return (
    <section id="tools" className="bg-[#F8F9FA] py-16 md:py-24 border-t border-[#5B6777]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-[10px] uppercase tracking-[0.15em] text-[#5F7D6E] font-bold block">
            Software Competence
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1F3A5F] tracking-tight">
            Seamless tool compatibility
          </h2>
          <div className="w-16 h-[1px] bg-[#5F7D6E]/40 mx-auto" />
          <p className="text-sm text-[#5B6777] leading-relaxed font-sans">
            Our support specialists arrive pre-tested on the key platforms you use daily. They easily drop right into your operations stack as helpful partners.
          </p>
        </div>

        {/* Tab layout plus side description */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Category List Tab controls */}
          <div className="lg:col-span-4 space-y-2.5">
            <span className="text-[10px] font-sans tracking-widest font-bold uppercase text-[#1F3A5F] block mb-4">
              Select Category
            </span>
            <div className="flex flex-col space-y-2.5">
              {categories.map((cat, idx) => {
                const isActive = activeTab === idx;
                return (
                  <button
                    key={cat.category}
                    type="button"
                    onClick={() => setActiveTab(idx)}
                    id={`tools-tab-control-${idx}`}
                    className={`w-full text-left px-5 py-4 border transition-all duration-300 flex items-center justify-between cursor-pointer rounded-2xl ${
                      isActive
                        ? 'bg-[#1F3A5F] text-white border-[#1F3A5F] shadow-md'
                        : 'bg-white text-[#5B6777] border-[#5B6777]/10 hover:border-[#1F3A5F] shadow-sm'
                    }`}
                  >
                    <span className="text-xs font-sans font-bold tracking-wider uppercase">
                      {cat.category}
                    </span>
                    <span className={`text-[10px] font-sans font-bold ${isActive ? 'text-emerald-300' : 'text-gray-400'}`}>
                      {cat.items.length} Tools
                    </span>
                  </button>
                );
              })}
            </div>

            <div className="p-5 bg-white rounded-2xl border border-[#5B6777]/10 text-xs text-[#5B6777] font-sans leading-relaxed mt-6 shadow-sm">
              💡 <strong>Support & Setup Included</strong>: If your practice uses custom software suites, our matching managers help train your assistant for up to 5 hours on your custom procedures at no additional development charge.
            </div>
          </div>

          {/* Right Active tab items list showcase */}
          <div className="lg:col-span-8 bg-white p-6 sm:p-10 border border-[#5B6777]/10 rounded-2xl text-left flex flex-col justify-between min-h-[380px] shadow-sm">
            <div className="space-y-6">
              <div className="space-y-2 pb-4 border-b border-[#5B6777]/10">
                <span className="text-[9px] font-sans font-bold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-100 uppercase tracking-widest inline-block">
                  Verified Stack
                </span>
                <h3 className="text-xl font-sans font-extrabold text-[#1F3A5F]">
                  {categories[activeTab].category} Mastery
                </h3>
                <p className="text-sm font-sans text-[#5B6777] leading-relaxed">
                  {categories[activeTab].description}
                </p>
              </div>

              {/* Items bullet cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {categories[activeTab].items.map((item, index) => (
                  <div 
                    key={index} 
                    className="bg-[#F8F9FA] p-4 border border-[#5B6777]/10 flex items-center space-x-3 rounded-2xl transition-transform hover:-translate-y-0.5 duration-200 shadow-sm"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#5F7D6E] shrink-0" />
                    <span className="text-xs font-sans text-[#1F3A5F] font-bold leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Micro badge indicator */}
            <div className="pt-8 border-t border-[#5B6777]/10 flex flex-wrap items-center justify-between gap-4 text-[10px] font-sans text-[#5B6777]">
              <div className="flex items-center space-x-2">
                <Cpu className="w-3.5 h-3.5 text-[#5F7D6E]" />
                <span>Quick match starting</span>
              </div>
              <div className="flex items-center space-x-2">
                <Workflow className="w-3.5 h-3.5 text-[#5F7D6E]" />
                <span>100% Native tool integration</span>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="w-3.5 h-3.5 text-[#5F7D6E]" />
                <span>Protected shared credential vaults</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

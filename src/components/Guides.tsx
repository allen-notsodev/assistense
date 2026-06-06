import React, { useState } from 'react';
import { Download, FileText, CheckCircle, ShieldAlert, ArrowRight, Zap, Play } from 'lucide-react';

interface GuidePlaybook {
  id: string;
  title: string;
  sub: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  estimatedTime: string;
  steps: string[];
  tips: string[];
}

export default function Guides() {
  const [selectedGuide, setSelectedGuide] = useState<string | null>("guide-1");

  const playbooks: GuidePlaybook[] = [
    {
      id: "guide-1",
      title: "The 10-Minute Credential Delegation Playbook",
      sub: "Secure, credential-hidden setups to grant your matched virtual assistant access to your primary CRM and schedules.",
      difficulty: "Beginner",
      estimatedTime: "10 mins",
      steps: [
        "Select your password manager database: We strongly recommend 1Password, LastPass, or Dashlane.",
        "Create a compartmentalized shared folder inside your vault (e.g. 'VA Shared Credentials').",
        "Invite your matched Assistense professional's corporate email address (which uses our strict encryption policies) to this folder.",
        "Add needed access credentials to the folder. Ensure the 'Hide Password' or 'Hidden' toggle is active. This allows your assistant to auto-fill the login form without viewing the plain-text password details.",
        "Test verification: Watch your assistant log in via a screen share workspace session to confirm absolute credential protection."
      ],
      tips: [
        "Never send plain-text credentials over email or SMS messages.",
        "Set up an absolute revoke protocol in case of offline status emergencies.",
        "Create restricted user profiles instead of sharing master administrative handles."
      ]
    },
    {
      id: "guide-2",
      title: "The Perfect Calendar Audit & Strategy Protocol",
      sub: "Identify scheduling errors and clear 10 to 15 hours of unnecessary meetings from your system per week.",
      difficulty: "Intermediate",
      estimatedTime: "25 mins",
      steps: [
        "Export your calendar log for the past 60 days into a spreadsheet structure.",
        "Assign a category label to each calendar slot: 'High Value (Sales/Strategy)', 'Operational Maintenance', or 'Low Urgency Status Report'.",
        "Sum up total hours per category. If 'Operational Maintenance' and 'Low Urgency' exceed 40% of your total work week, you are in the Danger Zone.",
        "Instruct your virtual assistant to set up structured daily buffers: Auto-block 9:00 AM to 11:00 AM as closed deep-focus hours.",
        "Mandate that all external booking links strictly adhere to 'The 15-Minute Rule' by shortening default times."
      ],
      tips: [
        "Never let external scheduling tools override your core deep-focus boundaries.",
        "Delegate daily follow-up reminders to your virtual assistant directly rather than joining status meetings.",
        "Always define a clear, 3-bullet agenda for any call scheduled past 15 minutes."
      ]
    },
    {
      id: "guide-3",
      title: "Active Triage & Inbox Management SOP Settings",
      sub: "Set up priority inbox systems to filter out spam, auto-draft responses, and highlight critical business deals.",
      difficulty: "Advanced",
      estimatedTime: "45 mins",
      steps: [
        "Set up three primary tags in GMail or Outlook: '🚨 Action-Needed', '⏳ For-Review', and '📰 Archive-SOP'.",
        "Enable native delegation settings inside your workspace. This grants access to folders without requiring your master credentials.",
        "Instruct your virtual assistant to review your incoming mail three times daily (e.g., 9:00 AM, 1:00 PM, and 4:00 PM).",
        "Your assistant archives routine receipts, templates-answers standard customer support claims, and drafts delicate responses.",
        "When logging in, your focus goes exclusively to the 'Action-Needed' folder, making calendar management a 15-minute breeze."
      ],
      tips: [
        "Review drafted responses in your drafts folder once daily to maintain oversight.",
        "Provide explicit template examples for common inquiries (such as pricing, availability, and partnerships).",
        "Continuously expand your FAQ document to make your template catalog bulletproof."
      ]
    }
  ];

  const currentPlaybook = playbooks.find(p => p.id === selectedGuide) || playbooks[0];

  return (
    <div className="bg-[#F8F9FA] min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-[10px] uppercase tracking-[0.15em] text-[#5F7D6E] font-bold block">
            Expert Blueprints & Guides
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1F3A5F] tracking-tight">
            Operational Playbooks
          </h2>
          <div className="w-16 h-[1px] bg-[#5F7D6E]/40 mx-auto" />
          <p className="text-sm text-[#5B6777] leading-relaxed font-sans">
            Ready-to-use step-by-step guides developed by Assistense specialists to simplify everyday tasks and delegate safely.
          </p>
        </div>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-5xl mx-auto text-left">
          
          {/* Left Navigation */}
          <div className="lg:col-span-4 space-y-3">
            <span className="text-[10px] font-sans tracking-widest font-bold uppercase text-[#1F3A5F] block mb-2">
              Select Guide Blueprint
            </span>
            {playbooks.map((p) => {
              const isSelected = p.id === selectedGuide;
              return (
                <button
                  key={p.id}
                  type="button"
                  onClick={() => setSelectedGuide(p.id)}
                  className={`w-full text-left p-4 border transition-all duration-300 rounded-2xl cursor-pointer focus:outline-none ${
                    isSelected
                      ? 'bg-white border-[#5F7D6E] border-l-4 border-l-[#5F7D6E] shadow-sm'
                      : 'bg-white/40 border-[#5B6777]/15 hover:border-[#1F3A5F]'
                  }`}
                >
                  <div className="space-y-1">
                    <div className="flex items-center justify-between">
                      <span className={`text-[9px] font-sans font-bold uppercase px-2.5 py-1 rounded-full ${
                        p.difficulty === 'Beginner' ? 'bg-emerald-50 text-emerald-800' :
                        p.difficulty === 'Intermediate' ? 'bg-amber-50 text-amber-800' : 'bg-red-50 text-red-800'
                      }`}>
                        {p.difficulty}
                      </span>
                      <span className="text-[10px] font-sans font-medium text-[#5B6777]">{p.estimatedTime}</span>
                    </div>
                    <h3 className="text-xs font-sans font-bold text-[#1F3A5F] line-clamp-2">
                      {p.title}
                    </h3>
                  </div>
                </button>
              );
            })}

            <div className="p-6 bg-[#1F3A5F] text-white space-y-4 rounded-2xl mt-6 shadow-md">
              <div className="flex items-center space-x-2">
                <Zap className="w-4 h-4 text-emerald-300" />
                <span className="text-[10px] font-sans font-bold uppercase tracking-wider text-emerald-300">Custom Playbooks</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed font-sans">
                Establish handy step-by-step operational checklists customized perfectly for your workflow with Assistense.
              </p>
              <a
                href="#contact"
                className="w-full text-center bg-white text-[#1F3A5F] py-2.5 text-[10px] uppercase tracking-wider font-bold font-sans hover:bg-gray-100 rounded-full block transition-colors shadow-sm"
              >
                Schedule Consultation
              </a>
            </div>
          </div>

          {/* Right Active Playbook Display */}
          <div className="lg:col-span-8 bg-white border border-[#5B6777]/10 p-6 sm:p-10 space-y-6 rounded-2xl shadow-sm min-h-[500px]">
            
            <div className="space-y-2 pb-4 border-b border-[#5B6777]/10">
              <div className="flex items-center space-x-2 text-[10px] text-[#5F7D6E] font-sans font-bold uppercase">
                <FileText className="w-4 h-4" />
                <span>Interactive Walkthrough Playbook</span>
              </div>
              <h3 className="text-xl font-sans font-bold text-[#1F3A5F]">
                {currentPlaybook.title}
              </h3>
              <p className="text-xs text-[#5B6777] font-sans leading-relaxed">
                {currentPlaybook.sub}
              </p>
            </div>

            {/* Playbook Steps */}
            <div className="space-y-4">
              <span className="text-[9px] uppercase tracking-widest font-bold text-[#1F3A5F] block font-sans">
                Step-by-Step Instructions
              </span>
              <div className="space-y-3">
                {currentPlaybook.steps.map((step, idx) => (
                  <div key={idx} className="flex items-start space-x-3.5 bg-[#F8F9FA] p-4 border border-[#5B6777]/10 rounded-2xl shadow-sm">
                    <span className="w-6 h-6 rounded-full border border-[#1F3A5F]/20 flex items-center justify-center bg-white text-xs font-sans font-bold text-[#1F3A5F] shrink-0">
                      {idx + 1}
                    </span>
                    <p className="text-xs font-sans text-[#5B6777] leading-relaxed">
                      {step}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Practical Advice Tips */}
            <div className="p-6 border border-dashed border-[#5F7D6E]/40 bg-[#5F7D6E]/5 space-y-3 rounded-2xl">
              <div className="flex items-center space-x-2 text-xs font-sans font-bold text-[#1F3A5F]">
                <ShieldAlert className="w-4 h-4 text-[#5F7D6E]" />
                <span>Security Guidelines & Pro-Tips</span>
              </div>
              <ul className="space-y-1.5 list-none pl-0">
                {currentPlaybook.tips.map((tip, idx) => (
                  <li key={idx} className="flex items-start space-x-2 text-xs font-sans text-[#5B6777]">
                    <span className="text-[#5F7D6E] font-bold shrink-0 mt-0.5">•</span>
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Interactive check confirmation */}
            <div className="pt-6 border-t border-[#5B6777]/10 flex flex-col sm:flex-row items-center justify-between text-xs text-[#5B6777] gap-4 font-sans">
              <span>Ready to hand off operations to supportive assistants?</span>
              <a
                href="#contact"
                className="text-xs font-sans font-bold text-[#1F3A5F] hover:text-[#5F7D6E] uppercase tracking-wider flex items-center space-x-1.5 border-b border-[#1F3A5F]/20 hover:border-[#5F7D6E] pb-0.5"
              >
                <span>Find an Assistant</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}

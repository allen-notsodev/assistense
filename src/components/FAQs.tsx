import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp, MessageCircle } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqData: FAQItem[] = [
    {
      question: "What services does Assistense provide?",
      answer: "Our specialized experience offers comprehensive remote support including calendar administration, email inbox triage, client relationship management updates, basic file organization, content scheduling, travel arrangements, and basic data entry. They are trained to integrate directly into your daily routines to handle repeatable administrative tasks."
    },
    {
      question: "How are Virtual Assistants matched?",
      answer: "We perform a detailed audit of your business tasks and daily workflows. Based on that operational diagnostic, we review our active, certified virtual assistant cohort to select a match whose system experience, specific CRM knowledge, and general communication style align perfectly with your exact operational requirements."
    },
    {
      question: "What are your pricing plans?",
      answer: "Our services run on transparent, predictable flat monthly subscription tiers based on the specific number of dedicated hours you require each week. We hold no hidden fees, and there are never any long-term contracts—you can seamlessly adjust your allocation or pause next cycle's billing with a simple 10-day notice."
    },
    {
      question: "How quickly can I start?",
      answer: "You can begin in under 48 hours. Once you register and complete our onboarding operational diagnostic, our team identifies your matched assistant. Then, we coordinate a quick 15-minute introduction to hand over system access codes and launch your active operations immediately."
    },
    {
      question: "What if I’m not satisfied?",
      answer: "Your complete peace of mind is vital. If your matched assistant is not meeting your exact performance expectations or communication pace, notify your client success manager. We will immediately diagnose the misalignment and transition you to a new virtual assistant at no additional onboarding cost."
    },
    {
      question: "Is my data secure?",
      answer: "We employ industry-standard safety protocols to guarantee complete privacy. All our specialists undergo comprehensive background screening and sign binding non-disclosure agreements (NDAs). We never request or store raw passwords, preferring to route credential handshakes securely through secure password managers."
    }
  ];

  const toggleFAQ = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faqs" className="bg-[#F8F9FA] py-16 md:py-24 border-t border-[#5B6777]/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-[10px] uppercase tracking-[0.15em] text-[#5F7D6E] font-bold block">
            Common Questions
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1F3A5F] tracking-tight">
            Frequently asked questions
          </h2>
          <div className="w-16 h-[1px] bg-[#5F7D6E]/40 mx-auto" />
          <p className="text-sm text-[#5B6777] leading-relaxed font-sans">
            Have questions about terms, matching, or how we support our virtual workspace experts? Read our honest answers here.
          </p>
        </div>

        {/* FAQs Accordion Block */}
        <div className="space-y-3 font-sans">
          {faqData.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div 
                key={idx}
                id={`faq-accordion-item-${idx}`}
                className="bg-white border border-[#5B6777]/10 rounded-2xl overflow-hidden shadow-sm transition-all duration-300"
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(idx)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between text-[#1F3A5F] hover:text-[#5F7D6E] transition-colors focus:outline-none cursor-pointer"
                >
                  <span className="text-sm font-sans font-bold pr-4">
                    {item.question}
                  </span>
                  {isOpen ? (
                    <ChevronUp className="w-4 h-4 text-[#5F7D6E] shrink-0" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-[#5B6777] shrink-0" />
                  )}
                </button>

                {isOpen && (
                  <div className="px-6 pb-5 pt-1 border-t border-dashed border-[#5B6777]/10 bg-gray-50/30">
                    <p className="text-xs font-sans text-[#5B6777] leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom micro CTA */}
        <div className="mt-12 text-center p-6 bg-white border border-[#5B6777]/10 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm font-sans">
          <div className="flex items-center space-x-3 text-left">
            <div className="w-10 h-10 rounded-full border border-[#5B6777]/10 flex items-center justify-center bg-[#F8F9FA] text-[#5F7D6E] shrink-0">
              <MessageCircle className="w-4 h-4 text-[#5F7D6E]" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-[#1F3A5F]">Have a custom question?</h4>
              <p className="text-xs text-[#5B6777]">We are happy to chat and answer any bespoke setup questions you might have.</p>
            </div>
          </div>
          <a
            href="#contact"
            id="faq-custom-cta"
            className="text-xs font-sans font-bold text-[#1F3A5F] hover:text-[#5F7D6E] uppercase tracking-wider border-b border-[#1F3A5F]/20 hover:border-[#5F7D6E] py-0.5"
          >
            Ask Us Directly
          </a>
        </div>

      </div>
    </section>
  );
}

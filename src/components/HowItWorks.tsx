/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { BookOpen, UserCheck, MessageSquare, ArrowRight, Play } from 'lucide-react';

interface SimpleStep {
  num: string;
  title: string;
  description: string;
  details: string;
  icon: string;
}

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState<number>(0);

  const stepsList: SimpleStep[] = [
    {
      num: '01',
      title: 'Say Hello',
      description: 'Book a brief, friendly 15-minute chat to get to know each other.',
      details: 'We will talk about what you need help with, how many hours you would love to reclaim each week, and what tools we can manage to make your life easier.',
      icon: 'phone'
    },
    {
      num: '02',
      title: 'Share Your Style',
      description: 'Tell us about your favorite tools and how you like things done.',
      details: 'Whether you use Google Workspace, Notion, Canva, or have a custom workflow, we will note down your preferences so we can match you perfectly.',
      icon: 'file'
    },
    {
      num: '03',
      title: 'Meet Your Match',
      description: 'Meet your dedicated virtual assistant who is excited to help.',
      details: 'We will introduce you to your supportive assistant. We will organize a warm 30-minute kick-off call to say hello, hand over passwords safely, and assign your first tasks together.',
      icon: 'user'
    },
    {
      num: '04',
      title: 'Relax & Delegate',
      description: 'Sit back and watch your daily to-do list disappear.',
      details: 'Your friendly dedicated assistant hops in to take care of the details. You will get helpful, transparent updates of actions taken, giving you complete peace of mind.',
      icon: 'check'
    }
  ];

  return (
    <section id="how-it-works" className="bg-white py-16 md:py-24 border-t border-[#5B6777]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header container */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-[10px] uppercase tracking-[0.15em] text-[#5F7D6E] font-bold block">
            Easy Onboarding
          </span>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-[#1F3A5F] tracking-tight">
            How it works
          </h3>
          <div className="w-16 h-[1px] bg-[#5F7D6E]/40 mx-auto" />
          <p className="text-base text-[#5B6777] leading-relaxed font-sans">
            Transitioning your daily work to a supportive helper should feel simple, safe, and stress-free. We match you meticulously in four straightforward steps.
          </p>
        </div>

        {/* Process Stepper Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
          {/* Connector dashed line for desktop */}
          <div className="hidden md:block absolute top-[24px] left-[12.5%] right-[12.5%] h-0.5 border-t border-[#5B6777]/10 -z-10" />

          {stepsList.map((step, idx) => {
            const isSelected = activeStep === idx;
            return (
              <button
                key={step.num}
                type="button"
                onClick={() => setActiveStep(idx)}
                id={`how-it-works-step-${idx}`}
                className="text-left w-full focus:outline-none cursor-pointer flex flex-col items-center md:items-start space-y-4 group"
              >
                {/* Step indicator circle */}
                <div
                  className={`w-12 h-12 flex items-center justify-center font-sans font-bold text-base border transition-all duration-300 rounded-full ${
                    isSelected
                      ? 'bg-[#1F3A5F] text-white border-[#1F3A5F] scale-105 shadow-sm'
                      : 'bg-white text-[#5B6777] border-[#5B6777]/20 group-hover:border-[#5F7D6E] group-hover:text-[#5F7D6E]'
                  }`}
                >
                  {step.num}
                </div>

                {/* Step Title Label */}
                <div className="text-center md:text-left">
                  <h4
                    className={`font-sans text-base font-bold transition-colors ${
                      isSelected ? 'text-[#1F3A5F]' : 'text-[#5B6777] group-hover:text-[#1F3A5F]'
                    }`}
                  >
                    {step.title}
                  </h4>
                  <p className="text-sm font-sans text-[#5B6777]/90 leading-relaxed mt-1">
                    {step.description}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Interactive Active-Step Details Card */}
        <div className="mt-12 bg-[#F8F9FA] rounded-2xl border border-[#5B6777]/10 p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-sm">
          <div className="space-y-2">
            <span className="text-[9px] font-sans font-bold text-[#5F7D6E] bg-[#5F7D6E]/10 px-2.5 py-1 rounded-full uppercase tracking-wider">
              Step {stepsList[activeStep].num} Deep Dive
            </span>
            <h4 className="text-lg font-sans font-bold text-[#1F3A5F]">
              {stepsList[activeStep].title} – Essential Insight
            </h4>
            <p className="text-sm font-sans text-[#5B6777] leading-relaxed max-w-3xl">
              {stepsList[activeStep].details}
            </p>
          </div>
          <div className="flex shrink-0 space-x-1.5 self-end md:self-center">
            {stepsList.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setActiveStep(idx)}
                aria-label={`Go to details for step ${idx + 1}`}
                className={`w-3 h-3 transition-colors rounded-full ${
                  activeStep === idx ? 'bg-[#5F7D6E]' : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

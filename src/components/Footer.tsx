/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { HelpingHand, ArrowUp, Send, Facebook, Linkedin, Twitter } from 'lucide-react';

interface FooterProps {
  onOpenBooking: () => void;
  onNavigateSection?: (section: string) => void;
}

export default function Footer({ onOpenBooking, onNavigateSection }: FooterProps) {
  const [newsEmail, setNewsEmail] = React.useState('');
  const [newsSubmitted, setNewsSubmitted] = React.useState(false);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>, sectionName: string) => {
    e.preventDefault();
    if (onNavigateSection) {
      onNavigateSection(sectionName);
    } else {
      const element = document.querySelector(`#${sectionName}`);
      if (element) {
        const offset = 80;
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = element.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
  };

  return (
    <footer id="app-footer" className="bg-[#1F3A5F] text-white pt-16 pb-12 border-t border-[#5F7D6E]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 pb-12 border-b border-white/10 text-left">
          
          {/* Column 1: Company Logo Accent and Intro */}
          <div className="col-span-12 md:col-span-4 space-y-4 text-left">
            <button
              onClick={(e) => handleNavClick(e, 'home')}
              className="flex items-center space-x-3.5 w-max focus:outline-none cursor-pointer group"
            >
              <div className="w-9 h-9 rounded-none bg-white flex items-center justify-center transition-all duration-300 group-hover:bg-emerald-300 group-hover:scale-105 shadow-sm">
                <HelpingHand className="w-5 h-5 text-[#1F3A5F] transition-colors stroke-[1.5]" />
              </div>
              <span className="text-xl font-poppins font-bold tracking-tight text-white lowercase group-hover:text-emerald-300 transition-colors">
                assistense
              </span>
            </button>
            <p className="text-xs text-gray-300 leading-relaxed max-w-sm font-sans">
              Helpful, friendly virtual assistants providing reliable administration support, scheduling help, and day-to-day back-office love to busy independent creators and growing teams.
            </p>
            
            {/* Social channels */}
            <div className="flex items-center space-x-3 pt-2">
              <a href="#linkedin" className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/15 flex items-center justify-center transition-colors border border-white/10 text-gray-200" aria-label="Visit LinkedIn channel">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#twitter" className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/15 flex items-center justify-center transition-colors border border-white/10 text-gray-200" aria-label="Visit Twitter channel">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#facebook" className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/15 flex items-center justify-center transition-colors border border-white/10 text-gray-200" aria-label="Visit Facebook channel">
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="col-span-6 md:col-span-2 text-left">
            <h4 className="text-[10px] uppercase tracking-[0.2em] text-[#5F7D6E] font-bold block mb-4">
              Explore
            </h4>
            <ul className="space-y-2 text-xs text-gray-300 list-none pl-0 font-sans">
              <li>
                <button onClick={(e) => handleNavClick(e, 'home')} className="hover:text-white transition-colors block py-0.5 text-left w-full cursor-pointer">
                  Home
                </button>
              </li>
              <li>
                <button onClick={(e) => handleNavClick(e, 'services')} className="hover:text-white transition-colors block py-0.5 text-left w-full cursor-pointer">
                  Services
                </button>
              </li>
              <li>
                <button onClick={(e) => handleNavClick(e, 'pricing')} className="hover:text-white transition-colors block py-0.5 text-left w-full cursor-pointer">
                  Pricing
                </button>
              </li>
            </ul>
          </div>

          {/* Column 2b: Resources Links */}
          <div className="col-span-6 md:col-span-2 text-left">
            <h4 className="text-[10px] uppercase tracking-[0.2em] text-[#5F7D6E] font-bold block mb-4">
              Resources
            </h4>
            <ul className="space-y-2 text-xs text-gray-300 list-none pl-0 font-sans">
              <li>
                <button onClick={(e) => handleNavClick(e, 'blog')} className="hover:text-white transition-colors block py-0.5 text-left w-full cursor-pointer">
                  Blog
                </button>
              </li>
              <li>
                <button onClick={(e) => handleNavClick(e, 'guides')} className="hover:text-white transition-colors block py-0.5 text-left w-full cursor-pointer">
                  Guides / Insights
                </button>
              </li>
              <li>
                <button onClick={(e) => handleNavClick(e, 'customer-stories')} className="hover:text-white transition-colors block py-0.5 text-left w-full cursor-pointer">
                  Customer Stories
                </button>
              </li>
              <li>
                <button onClick={(e) => handleNavClick(e, 'faqs')} className="hover:text-white transition-colors block py-0.5 text-left w-full cursor-pointer">
                  FAQs
                </button>
              </li>
              <li>
                <button onClick={(e) => handleNavClick(e, 'case-studies')} className="hover:text-[#5F7D6E] transition-colors block py-0.5 text-left w-full cursor-pointer">
                  Case Studies
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Company Links */}
          <div className="col-span-6 md:col-span-2 text-left">
            <h4 className="text-[10px] uppercase tracking-[0.2em] text-[#5F7D6E] font-bold block mb-4 font-sans">
              Company
            </h4>
            <ul className="space-y-2 text-xs text-gray-300 list-none pl-0 font-sans">
              <li>
                <button onClick={(e) => handleNavClick(e, 'about')} className="hover:text-white transition-colors block py-0.5 text-left w-full cursor-pointer">
                  About
                </button>
              </li>
              <li>
                <button onClick={(e) => handleNavClick(e, 'careers')} className="hover:text-white transition-colors block py-0.5 text-left w-full cursor-pointer">
                  Careers
                </button>
              </li>
              <li>
                <button onClick={(e) => handleNavClick(e, 'contact')} className="hover:text-white transition-colors block py-0.5 text-left w-full cursor-pointer">
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Immediate CTA newsletter */}
          <div className="col-span-12 md:col-span-2 text-left space-y-4">
            <h4 className="text-[10px] uppercase tracking-[0.2em] text-[#5F7D6E] font-bold block">
              Keep in touch
            </h4>
            <p className="text-[11px] text-gray-300 leading-relaxed font-sans">
              Join our briefs representing delegation SOPs and work systems.
            </p>

            {!newsSubmitted ? (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  if (newsEmail) {
                    setNewsSubmitted(true);
                  }
                }}
                className="flex items-center bg-white/5 rounded-full border border-white/10 p-1 pl-3"
              >
                <input
                  required
                  type="email"
                  value={newsEmail}
                  onChange={(e) => setNewsEmail(e.target.value)}
                  placeholder="hello@workspace.com"
                  className="bg-transparent text-[10px] text-white py-1.5 focus:outline-none flex-1 font-sans placeholder-white/30 w-full"
                />
                <button
                  type="submit"
                  className="bg-white hover:bg-emerald-50 text-[#1F3A5F] p-1.5 rounded-full transition-colors cursor-pointer"
                  aria-label="Subscribe email address"
                >
                  <Send className="w-3 h-3" />
                </button>
              </form>
            ) : (
              <p className="text-[10px] text-emerald-300 font-medium">
                ✓ Enabled for {newsEmail}
              </p>
            )}
          </div>

        </div>

        {/* Legal Footer Bottom Section */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-gray-400 font-sans">
          
          <div className="flex flex-col sm:flex-row items-center space-y-1 sm:space-y-0 sm:space-x-4 text-left">
            <span>© Assistense {new Date().getFullYear()}. All rights reserved.</span>
            <div className="hidden sm:block w-1 h-1 rounded-none bg-white/10" />
            <a href="#privacy" className="hover:text-white transition-colors">Privacy Policy</a>
            <div className="hidden sm:block w-1 h-1 rounded-none bg-white/10" />
            <a href="#terms" className="hover:text-white transition-colors">Terms of Service</a>
          </div>

          <button
            type="button"
            onClick={scrollUp}
            className="group flex items-center space-x-1.5 hover:text-white transition-colors focus:outline-none cursor-pointer bg-white/5 hover:bg-white/10 border border-white/10 py-1.5 px-4 rounded-full text-xs uppercase tracking-wider"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

      </div>
    </footer>
  );
}

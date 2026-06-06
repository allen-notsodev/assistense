/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, BookOpen, FileText, HelpCircle, FileClock, Info, Briefcase, Mail, HelpingHand } from 'lucide-react';

interface HeaderProps {
  onOpenBooking: () => void;
  activeSection: string;
  onNavigateSection?: (section: string) => void;
}

export default function Header({ onOpenBooking, activeSection, onNavigateSection }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Mobile accordion toggle states
  const [mobileResourcesOpen, setMobileResourcesOpen] = useState(false);
  const [mobileCompanyOpen, setMobileCompanyOpen] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    }
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>, section: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    if (onNavigateSection) {
      onNavigateSection(section);
    } else {
      const element = document.querySelector(`#${section}`);
      if (element) {
        const offset = 80; // height of sticky header
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

  const resourcesItems = [
    { label: 'Blog', section: 'blog', desc: 'Expert delegation briefs', icon: BookOpen },
    { label: 'Guides / Insights', section: 'guides', desc: 'Interactive step playbooks', icon: FileText },
    { label: 'Customer Stories', section: 'customer-stories', desc: 'Trusted client success journeys', icon: FileText },
    { label: 'FAQs', section: 'faqs', desc: 'Answers to common queries', icon: HelpCircle },
    { label: 'Case Studies', section: 'case-studies', desc: 'Real operational metrics', icon: FileClock },
  ];

  const companyItems = [
    { label: 'About', section: 'about', desc: 'Our team and workspace philosophy', icon: Info },
    { label: 'Careers', section: 'careers', desc: 'Join our trusted matches program', icon: Briefcase },
    { label: 'Contact', section: 'contact', desc: 'Book direct alignment discovery', icon: Mail },
  ];

  // Helper check to see if dropdown contents are currently active
  const isResourcesActive = resourcesItems.some(item => activeSection === item.section);
  const isCompanyActive = companyItems.some(item => activeSection === item.section);

  return (
    <header
      id="app-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        isScrolled
          ? 'bg-white shadow-sm border-[#5B6777]/10 py-3'
          : 'bg-[#F8F9FA]/90 backdrop-blur-md border-[#5B6777]/5 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo Area */}
          <a
            id="brand-logo-container"
            href="#home"
            onClick={(e) => handleNavClick(e, 'home')}
            className="flex items-center space-x-3.5 group focus:outline-none"
          >
            <div className="w-9 h-9 rounded-none bg-[#1F3A5F] flex items-center justify-center transition-all duration-300 group-hover:bg-[#5F7D6E] group-hover:scale-105 shadow-sm">
              <HelpingHand className="w-5 h-5 text-white stroke-[1.5]" />
            </div>
            <span
              id="brand-name-display"
              className="text-xl sm:text-2xl font-poppins font-bold tracking-tight text-[#1F3A5F] hover:text-[#5F7D6E] transition-colors lowercase"
            >
              assistense
            </span>
          </a>

          {/* Desktop Navigation Menu (Maximum 5 items, clean modern spacing) */}
          <nav id="desktop-navigation-menu" className="hidden md:flex items-center gap-6 lg:gap-8 text-[11px] uppercase tracking-widest font-bold text-[#5B6777]">
            
            {/* 1. Home */}
            <a
              id="nav-link-home"
              href="#home"
              onClick={(e) => handleNavClick(e, 'home')}
              className={`transition-colors hover:text-[#1F3A5F] py-2 border-b-2 flex items-center text-[11px] uppercase tracking-widest font-bold cursor-pointer ${
                activeSection === 'home'
                  ? 'text-[#1F3A5F] border-[#1F3A5F]'
                  : 'text-[#5B6777] border-transparent hover:border-[#1F3A5F]/20'
              }`}
            >
              Home
            </a>

            {/* 2. Services */}
            <a
              id="nav-link-services"
              href="#services"
              onClick={(e) => handleNavClick(e, 'services')}
              className={`transition-colors hover:text-[#1F3A5F] py-2 border-b-2 flex items-center text-[11px] uppercase tracking-widest font-bold cursor-pointer ${
                activeSection === 'services'
                  ? 'text-[#1F3A5F] border-[#1F3A5F]'
                  : 'text-[#5B6777] border-transparent hover:border-[#1F3A5F]/20'
              }`}
            >
              Services
            </a>

            {/* 3. Pricing */}
            <a
              id="nav-link-pricing"
              href="#pricing"
              onClick={(e) => handleNavClick(e, 'pricing')}
              className={`transition-colors hover:text-[#1F3A5F] py-2 border-b-2 flex items-center text-[11px] uppercase tracking-widest font-bold cursor-pointer ${
                activeSection === 'pricing'
                  ? 'text-[#1F3A5F] border-[#1F3A5F]'
                  : 'text-[#5B6777] border-transparent hover:border-[#1F3A5F]/20'
              }`}
            >
              Pricing
            </a>

            {/* 4. Resources (Dropdown on hover) */}
            <div className="relative group/resources">
              <button
                type="button"
                className={`transition-colors hover:text-[#1F3A5F] uppercase font-bold tracking-widest text-[11px] flex items-center space-x-1 outline-none focus:outline-none cursor-pointer py-2 border-b-2 ${
                  isResourcesActive
                    ? 'text-[#1F3A5F] border-[#1F3A5F]'
                    : 'text-[#5B6777] border-transparent hover:border-[#1F3A5F]/20'
                }`}
              >
                <span>Resources</span>
                <ChevronDown className="w-3.5 h-3.5 transition-transform group-hover/resources:rotate-180" />
              </button>
              
              {/* Dropdown Box */}
              <div className="absolute left-1/2 -translate-x-1/2 top-full hidden group-hover/resources:block w-64 bg-white border border-[#5B6777]/15 shadow-lg p-2 z-50 text-left rounded-lg duration-300 animate-slideUp">
                <div className="space-y-1">
                  {resourcesItems.map((item) => {
                    const Icon = item.icon;
                    return (
                      <button
                        key={item.section}
                        onClick={(e) => handleNavClick(e, item.section)}
                        className={`w-full text-left px-3 py-2 flex items-start space-x-3 transition-colors hover:bg-[#F8F9FA] ${
                          activeSection === item.section ? 'bg-gray-50' : ''
                        }`}
                      >
                        <Icon className="w-4 h-4 text-[#5F7D6E] shrink-0 mt-0.5" />
                        <div>
                          <p className="text-[10px] font-sans font-bold text-[#1F3A5F] normal-case tracking-normal">{item.label}</p>
                          <p className="text-[9px] text-[#5B6777] font-sans normal-case tracking-normal font-medium">{item.desc}</p>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* 5. Company (Dropdown on hover) */}
            <div className="relative group/company">
              <button
                type="button"
                className={`transition-colors hover:text-[#1F3A5F] uppercase font-bold tracking-widest text-[11px] flex items-center space-x-1 outline-none focus:outline-none cursor-pointer py-2 border-b-2 ${
                  isCompanyActive
                    ? 'text-[#1F3A5F] border-[#1F3A5F]'
                    : 'text-[#5B6777] border-transparent hover:border-[#1F3A5F]/20'
                }`}
              >
                <span>Company</span>
                <ChevronDown className="w-3.5 h-3.5 transition-transform group-hover/company:rotate-180" />
              </button>
              
              {/* Dropdown Box */}
              <div className="absolute left-1/2 -translate-x-1/2 top-full hidden group-hover/company:block w-64 bg-white border border-[#5B6777]/15 shadow-lg p-2 z-50 text-left rounded-lg duration-300 animate-slideUp">
                <div className="space-y-1">
                  {companyItems.map((item) => {
                    const Icon = item.icon;
                    return (
                      <button
                        key={item.section}
                        onClick={(e) => handleNavClick(e, item.section)}
                        className={`w-full text-left px-3 py-2 flex items-start space-x-3 transition-colors hover:bg-[#F8F9FA] ${
                          activeSection === item.section ? 'bg-gray-50' : ''
                        }`}
                      >
                        <Icon className="w-4 h-4 text-[#5F7D6E] shrink-0 mt-0.5" />
                        <div>
                          <p className="text-[10px] font-sans font-bold text-[#1F3A5F] normal-case tracking-normal">{item.label}</p>
                          <p className="text-[9px] text-[#5B6777] font-sans normal-case tracking-normal font-medium">{item.desc}</p>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

          </nav>

          {/* Top-right Book A Discovery Call CTA */}
          <div className="hidden md:flex items-center">
            <button
              id="header-cta-button"
              type="button"
              onClick={onOpenBooking}
              className="px-5 py-2.5 bg-[#1F3A5F] text-white text-[11px] uppercase tracking-wider font-bold hover:bg-[#1F3A5F]/90 transition-all cursor-pointer rounded-full"
            >
              Get Started
            </button>
          </div>

          {/* Mobile menu toggle */}
          <div className="md:hidden flex items-center">
            <button
              id="mobile-nav-toggle-button"
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded text-[#1F3A5F] hover:bg-gray-100 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {mobileMenuOpen && (
        <div id="mobile-navigation-overlay" className="md:hidden bg-white border-b border-gray-100 shadow-lg px-4 pt-3 pb-6 space-y-3">
          <div className="flex flex-col space-y-1">
            
            {/* Mobile Home */}
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, 'home')}
              className={`px-3 py-2 rounded text-sm font-sans font-medium transition-colors ${
                activeSection === 'home'
                  ? 'bg-[#F8F9FA] text-[#1F3A5F] font-semibold border-l-4 border-[#5F7D6E]'
                  : 'text-[#5B6777] hover:bg-gray-50 hover:text-[#1F3A5F]'
              }`}
            >
              Home
            </a>

            {/* Mobile Services */}
            <a
              href="#services"
              onClick={(e) => handleNavClick(e, 'services')}
              className={`px-3 py-2 rounded text-sm font-sans font-medium transition-colors ${
                activeSection === 'services'
                  ? 'bg-[#F8F9FA] text-[#1F3A5F] font-semibold border-l-4 border-[#5F7D6E]'
                  : 'text-[#5B6777] hover:bg-gray-50 hover:text-[#1F3A5F]'
              }`}
            >
              Services
            </a>

            {/* Mobile Pricing */}
            <a
              href="#pricing"
              onClick={(e) => handleNavClick(e, 'pricing')}
              className={`px-3 py-2 rounded text-sm font-sans font-medium transition-colors ${
                activeSection === 'pricing'
                  ? 'bg-[#F8F9FA] text-[#1F3A5F] font-semibold border-l-4 border-[#5F7D6E]'
                  : 'text-[#5B6777] hover:bg-gray-50 hover:text-[#1F3A5F]'
              }`}
            >
              Pricing
            </a>

            {/* Mobile Resources Collapsible Accordion */}
            <div className="border-t border-gray-100 pt-1">
              <button
                type="button"
                onClick={() => setMobileResourcesOpen(!mobileResourcesOpen)}
                className="w-full flex items-center justify-between px-3 py-2 text-sm font-sans font-medium text-[#5B6777] hover:text-[#1F3A5F]"
              >
                <span className={isResourcesActive ? 'text-[#1F3A5F] font-semibold' : ''}>Resources</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${mobileResourcesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {mobileResourcesOpen && (
                <div className="bg-[#F8F9FA] pl-4 py-1 space-y-1">
                  {resourcesItems.map((item) => (
                    <button
                      key={item.section}
                      onClick={(e) => handleNavClick(e, item.section)}
                      className={`w-full text-left px-3 py-1.5 text-xs font-sans font-medium block ${
                        activeSection === item.section ? 'text-[#1F3A5F] font-bold' : 'text-[#5B6777]'
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Company Collapsible Accordion */}
            <div className="border-t border-gray-100 pt-1">
              <button
                type="button"
                onClick={() => setMobileCompanyOpen(!mobileCompanyOpen)}
                className="w-full flex items-center justify-between px-3 py-2 text-sm font-sans font-medium text-[#5B6777] hover:text-[#1F3A5F]"
              >
                <span className={isCompanyActive ? 'text-[#1F3A5F] font-semibold' : ''}>Company</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${mobileCompanyOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {mobileCompanyOpen && (
                <div className="bg-[#F8F9FA] pl-4 py-1 space-y-1">
                  {companyItems.map((item) => (
                    <button
                      key={item.section}
                      onClick={(e) => handleNavClick(e, item.section)}
                      className={`w-full text-left px-3 py-1.5 text-xs font-sans font-medium block ${
                        activeSection === item.section ? 'text-[#1F3A5F] font-bold' : 'text-[#5B6777]'
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

          </div>

          <div className="pt-3 border-t border-gray-100">
            <button
              id="mobile-header-cta-button"
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full text-center bg-[#1F3A5F] hover:bg-[#152842] text-white px-5 py-3 rounded-full text-base font-sans font-semibold transition-colors cursor-pointer"
            >
              Get Started
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

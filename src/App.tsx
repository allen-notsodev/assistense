/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import WhyAssistense from './components/WhyAssistense';
import Services from './components/Services';
import HowItWorks from './components/HowItWorks';
import Pricing from './components/Pricing';
import WhyClientsChooseUs from './components/WhyClientsChooseUs';
import About from './components/About';
import Careers from './components/Careers';
import Contact from './components/Contact';
import FAQs from './components/FAQs';
import Tools from './components/Tools';
import Blog from './components/Blog';
import Guides from './components/Guides';
import CaseStudies from './components/CaseStudies';
import CustomerStories from './components/CustomerStories';
import VideoTestimonials from './components/VideoTestimonials';
import Footer from './components/Footer';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [selectedService, setSelectedService] = useState<string>('');
  const [selectedPlan, setSelectedPlan] = useState<string>('');
  const [activeSection, setActiveSection] = useState<string>('home');

  // Change section and scroll to top automatically for segregated views
  const handleNavigateSection = (section: string) => {
    setActiveSection(section);
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleOpenDiscoveryBooking = () => {
    handleNavigateSection('contact');
  };

  const handleSelectService = (serviceTitle: string) => {
    setSelectedService(serviceTitle);
    handleNavigateSection('contact');
  };

  const handleSelectPlan = (planName: string, price: string) => {
    setSelectedPlan(`${planName} Plan (${price})`);
    handleNavigateSection('contact');
  };

  return (
    <div id="app-viewport-root" className="min-h-screen bg-[#F8F9FA] text-[#1F3A5F] flex flex-col justify-between overflow-x-hidden antialiased selection:bg-[#5F7D6E]/20">
      
      {/* 1. Navigation Header bar */}
      <Header
        activeSection={activeSection}
        onOpenBooking={handleOpenDiscoveryBooking}
        onNavigateSection={handleNavigateSection}
      />

      {/* Main Sections container */}
      <main className="flex-1 pt-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSection}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            {activeSection === 'home' && (
              <>
                <Hero onOpenBooking={handleOpenDiscoveryBooking} />
                <TrustBar />
                <WhyAssistense />
                <WhyClientsChooseUs />
                <VideoTestimonials />
              </>
            )}

            {activeSection === 'services' && (
              <>
                <Services onSelectService={handleSelectService} />
                <Tools />
              </>
            )}

            {activeSection === 'tools' && (
              <Tools />
            )}

            {activeSection === 'how-it-works' && (
              <HowItWorks />
            )}

            {activeSection === 'pricing' && (
              <Pricing onSelectPlan={handleSelectPlan} />
            )}

            {activeSection === 'blog' && (
              <Blog />
            )}

            {activeSection === 'guides' && (
              <Guides />
            )}

            {activeSection === 'case-studies' && (
              <CaseStudies />
            )}

            {activeSection === 'customer-stories' && (
              <CustomerStories />
            )}

            {activeSection === 'faqs' && (
              <FAQs />
            )}

            {activeSection === 'about' && (
              <About />
            )}

            {activeSection === 'careers' && (
              <Careers />
            )}

            {activeSection === 'contact' && (
              <Contact
                selectedServiceInterest={selectedService}
                selectedPricingPlan={selectedPlan}
              />
            )}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* FOOTER */}
      <Footer 
        onOpenBooking={handleOpenDiscoveryBooking} 
        onNavigateSection={handleNavigateSection}
      />

    </div>
  );
}

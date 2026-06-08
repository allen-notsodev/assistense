/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ArrowRight, CheckCircle2, Upload } from 'lucide-react';

interface HeroProps {
  onOpenBooking: () => void;
}

export default function Hero({ onOpenBooking }: HeroProps) {
  const fileInputRef = React.useRef<HTMLInputElement>(null);
  const [imageSrc, setImageSrc] = React.useState("/src/assets/images/customer_assistant_hero_1780733993869.png");
  const [isDragging, setIsDragging] = React.useState(false);

  const handleScrollToHow = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const element = document.querySelector('#how-it-works');
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
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    
    const files = e.dataTransfer.files;
    if (files && files.length > 0) {
      const file = files[0];
      if (file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onload = (event) => {
          if (event.target?.result) {
            setImageSrc(event.target.result as string);
          }
        };
        reader.readAsDataURL(file);
      }
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      const file = files[0];
      if (file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onload = (event) => {
          if (event.target?.result) {
            setImageSrc(event.target.result as string);
          }
        };
        reader.readAsDataURL(file);
      }
    }
  };

  const handleContainerClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <section
      id="home"
      className="relative pt-28 md:pt-36 pb-16 md:pb-24 bg-gradient-to-b from-[#1F3A5F] to-[#152842] text-white overflow-hidden"
    >
      {/* Decorative background overlay elements */}
      <div className="absolute inset-0 opacity-15 pointer-events-none">
        <div className="absolute top-10 left-10 w-96 h-96 rounded-full bg-[#5F7D6E] blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-emerald-500 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Headline and Copy */}
          <div className="lg:col-span-7 space-y-6 md:space-y-8 text-left max-w-2xl">
            <div className="inline-block px-3 py-1 bg-white/10 text-emerald-300 border border-white/10 text-[10px] uppercase tracking-[0.15em] font-bold rounded-full">
              Your Warm & Supportive Helper Team
            </div>

            <h1
              id="hero-main-title"
              className="text-4xl sm:text-5xl lg:text-5xl font-extrabold leading-tight tracking-tight text-white animate-fade-in"
            >
              Get a <span className="text-emerald-300 drop-shadow-sm">helping hand</span> for your everyday tasks
            </h1>

            <p
              id="hero-sub-description"
              className="text-base sm:text-lg md:text-xl font-sans text-gray-200 leading-relaxed font-light"
            >
              We connect busy freelancers, small business owners, creators, and teams with friendly, skilled virtual assistants. Let us handle the details so you can focus on what you love.
            </p>

            {/* Quick value flags */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              <div className="flex items-start space-x-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-300 shrink-0 mt-1" />
                <span className="text-sm font-sans font-medium text-gray-100">Warm & Capable Assistants</span>
              </div>
              <div className="flex items-start space-x-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-300 shrink-0 mt-1" />
                <span className="text-sm font-sans font-medium text-gray-100">Fair Wages & Great Workplaces</span>
              </div>
              <div className="flex items-start space-x-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-300 shrink-0 mt-1" />
                <span className="text-sm font-sans font-medium text-gray-100">Supportive Training for VAs</span>
              </div>
              <div className="flex items-start space-x-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-300 shrink-0 mt-1" />
                <span className="text-sm font-sans font-medium text-gray-100">Friendly 14-day Trial offer</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
              <button
                id="hero-primary-cta"
                type="button"
                onClick={onOpenBooking}
                className="bg-white hover:bg-gray-100 text-[#1F3A5F] px-8 py-3.5 text-xs uppercase tracking-wider font-bold transition-all flex items-center justify-center space-x-2 cursor-pointer rounded-full shadow-md"
              >
                <span>Chat with Us</span>
                <ArrowRight className="w-4 h-4 text-[#1F3A5F]" />
              </button>
              <button
                id="hero-secondary-cta"
                type="button"
                onClick={handleScrollToHow}
                className="bg-transparent hover:bg-white/10 text-white border border-white/30 px-8 py-3.5 text-xs uppercase tracking-wider font-bold transition-colors flex items-center justify-center cursor-pointer rounded-full"
              >
                How We Can Help
              </button>
            </div>
          </div>

          {/* Hero Illustration Graphic Area */}
          <div className="lg:col-span-5 flex justify-center items-center w-full">
            <input 
              type="file"
              ref={fileInputRef}
              onChange={handleFileChange}
              accept="image/*"
              className="hidden"
            />
            <div 
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
              onClick={handleContainerClick}
              className={`relative w-full max-w-sm lg:max-w-none aspect-[3/4] overflow-hidden rounded-3xl shadow-2xl border-4 bg-[#152842] group cursor-pointer transition-all duration-300 ${
                isDragging ? 'border-emerald-400 scale-102 ring-4 ring-emerald-400/20 shadow-emerald-400/10' : 'border-white/10 hover:border-emerald-300/30'
              }`}
            >
              {/* Decorative accent element */}
              <div className="absolute -top-3 -right-3 w-20 h-20 bg-[#5F7D6E]/20 rounded-full blur-xl -z-10" />
              <div className="absolute -bottom-3 -left-3 w-32 h-32 bg-[#1F3A5F]/30 rounded-full blur-2xl -z-10" />

              <img
                src={imageSrc}
                alt="Professional virtual assistant delivering flawless delegation support to a business owner"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-[center_35%] select-none animate-fade-in"
                onError={(e) => {
                  // If image fails to load, show a neutral gradient background instead of a broken image symbol
                  e.currentTarget.style.display = 'none';
                  const fallback = document.getElementById('hero-img-fallback');
                  if (fallback) fallback.classList.remove('hidden');
                }}
              />

              {/* Overlay on hover to clarify action */}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-5 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-left z-10 pointer-events-none">
                <div className="flex items-center space-x-2 text-white">
                  <Upload className="w-4 h-4 text-emerald-300 stroke-[2.5]" />
                  <span className="text-xs font-sans font-bold uppercase tracking-wider">Drag & Drop or Click to Replace</span>
                </div>
                <span className="text-[10px] text-gray-300 mt-1">PNG, JPG, or WEBP. Instantly updates mockup.</span>
              </div>

              {/* Special interactive dragging overlay state */}
              {isDragging && (
                <div className="absolute inset-0 bg-[#1F3A5F]/85 backdrop-blur-xs flex flex-col items-center justify-center text-center p-6 z-25 pointer-events-none transition-all duration-300">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 flex items-center justify-center mb-3 text-emerald-300 animate-bounce">
                    <Upload className="w-8 h-8 stroke-[2.5]" />
                  </div>
                  <p className="text-sm font-bold text-white uppercase tracking-wider">Drop your image here</p>
                  <p className="text-[10px] text-emerald-300/80 mt-1">Release to replace homepage hero cover</p>
                </div>
              )}

              {/* Robust modern vector backup skeleton fallback */}
              <div
                id="hero-img-fallback"
                className="hidden h-full w-full bg-gradient-to-tr from-[#1F3A5F]/20 to-[#5F7D6E]/20 rounded-2xl flex flex-col justify-between p-6 overflow-hidden relative"
              >
                <div className="space-y-2">
                  <div className="w-16 h-2.5 bg-[#1F3A5F]/40 rounded-full" />
                  <div className="w-28 h-4 bg-[#1F3A5F] rounded-full" />
                </div>
                
                {/* Visual conceptual representation of delegation */}
                <div className="flex items-center justify-between my-auto relative px-8">
                  <div className="w-16 h-16 rounded-xl bg-white shadow-sm flex items-center justify-center border border-gray-100">
                    <span className="text-xl">💼</span>
                  </div>
                  <div className="flex-1 border-t-2 border-dashed border-[#5F7D6E] mx-4 relative">
                    <span className="absolute -top-3 right-1/2 translate-x-1/2 text-xs bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full font-mono font-bold">
                      ASSIGN
                    </span>
                  </div>
                  <div className="w-16 h-16 rounded-xl bg-white shadow-sm flex items-center justify-center border border-gray-100">
                    <span className="text-xl">👩‍💻</span>
                  </div>
                </div>

                <div className="flex justify-between items-center text-[10px] font-mono text-gray-500">
                  <span>Client Dashboard</span>
                  <span>Active Dedicated Specialist</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

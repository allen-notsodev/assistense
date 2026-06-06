/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useRef, useEffect } from 'react';
import { Play, Volume2, VolumeX, Maximize2, X, Sparkles, CheckCircle, TrendingUp } from 'lucide-react';

interface VideoTestimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  metric: string;
  quote: string;
  videoUrl: string;
  thumbnail: string;
  duration: string;
}

const TESTIMONIALS: VideoTestimonial[] = [
  {
    id: 'vid-1',
    name: 'Sarah Connor',
    role: 'Tech Founder',
    company: 'Skye Solutions',
    metric: '25 Hours Saved / wk',
    quote: 'Assistense completely cleared our inbox bottlenecks and customer scheduling within 48 hours. The match was absolutely perfect.',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-woman-working-on-a-laptop-at-home-42337-large.mp4',
    thumbnail: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600',
    duration: '0:48'
  },
  {
    id: 'vid-2',
    name: 'James Wu',
    role: 'Managing Partner',
    company: 'Wu & Associates',
    metric: 'Weekends Restored',
    quote: 'We operate under highly confidential boundaries. Our virtual professional came pre-vetted with CRM and secure login training.',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-businessman-working-on-his-laptop-in-the-office-42777-large.mp4',
    thumbnail: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=600',
    duration: '1:12'
  },
  {
    id: 'vid-3',
    name: 'Chloe Martinez',
    role: 'Agency Director',
    company: 'Bloom Design',
    metric: '2.4x Team Velocity',
    quote: 'Calendaring across three continents is brutal. Having a proactive, trusted virtual partner managing our briefs keeps clients happy.',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-female-freelancer-working-on-a-laptop-42171-large.mp4',
    thumbnail: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=600',
    duration: '0:55'
  },
  {
    id: 'vid-4',
    name: 'Dr. Evelyn Vance',
    role: 'Clinical Lead',
    company: 'Elixir Medical',
    metric: '99% Schedule Accuracy',
    quote: 'Patient data and diagnostic surveys are tightly synchronized now. Assistense behaves with the complete care our medical practice expects.',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-woman-physician-working-at-office-desk-43132-large.mp4',
    thumbnail: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=600',
    duration: '1:05'
  },
  {
    id: 'vid-5',
    name: 'Marcus Chen',
    role: 'Growth Partner',
    company: 'Chen Advisory',
    metric: '4 Core Deals Closed',
    quote: 'Our partner did not just organize emails; they built out spreadsheet patterns that simplified raw customer followups forever.',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-man-working-behind-a-desk-with-a-laptop-42939-large.mp4',
    thumbnail: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=600',
    duration: '0:42'
  },
  {
    id: 'vid-6',
    name: 'Amanda Reyes',
    role: 'Health Franchise Owner',
    company: 'FitLife Global',
    metric: 'No Staffing Overhead',
    quote: 'We avoided expensive local coordinator hiring completely. Assistense manages gym rosters, memberships, and invoicing flawlessly.',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-young-woman-working-at-home-with-laptop-43183-large.mp4',
    thumbnail: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=600',
    duration: '1:20'
  }
];

export default function VideoTestimonials() {
  const [activeVideo, setActiveVideo] = useState<VideoTestimonial | null>(null);
  const [isMuted, setIsMuted] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Double the list to support perfect continuous infinite scrolling marquee
  const slidingTestimonials = [...TESTIMONIALS, ...TESTIMONIALS, ...TESTIMONIALS];

  const handleOpenVideo = (testimonial: VideoTestimonial) => {
    setActiveVideo(testimonial);
  };

  const handleCloseVideo = () => {
    setActiveVideo(null);
  };

  const toggleModalMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  // Close modal on escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') handleCloseVideo();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <section id="video-testimonials-marquee" className="bg-[#F8F9FA] py-20 relative overflow-hidden border-t border-b border-gray-200 text-[#1F3A5F]">
      
      {/* Self-contained styling for the left-to-right looping marquee */}
      <style>{`
        @keyframes slide-right-to-left-custom {
          0% {
            transform: translateX(-33.3333%);
          }
          100% {
            transform: translateX(0%);
          }
        }
        .marquee-track-custom {
          display: flex;
          width: max-content;
          animation: slide-right-to-left-custom 35s linear infinite;
        }
        .marquee-track-custom:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* Decorative background overlay elements */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 right-1/4 w-96 h-96 rounded-full bg-[#5F7D6E]/20 blur-3xl" />
        <div className="absolute bottom-0 left-10 w-80 h-80 rounded-full bg-emerald-200 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-12 text-center md:text-left">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3 max-w-xl text-left">
            <span id="video-badge-header" className="inline-flex items-center space-x-2 px-3 py-1 bg-[#1F3A5F]/10 border border-[#1F3A5F]/15 text-[#5F7D6E] text-[10px] sm:text-xs font-sans font-bold uppercase tracking-widest rounded-full">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Real Customer Videos</span>
            </span>
            <h2 id="video-heading-text" className="text-3xl sm:text-4xl font-poppins font-bold tracking-tight text-[#1F3A5F] leading-tight">
              A partnership that pays for itself
            </h2>
            <p className="text-sm text-[#5B6777] font-sans max-w-lg">
              Watch real, unscripted reviews from professionals who scaled operations, reclaimed private hours, and automated logistics with Assistense.
            </p>
          </div>
          
          <div className="shrink-0 flex items-center space-x-6 text-[#5F7D6E] text-xs font-sans font-bold uppercase tracking-widest bg-white border border-gray-250 shadow-sm py-3.5 px-6 rounded-2xl">
            <div className="flex items-center space-x-2 text-[#1F3A5F]">
              <CheckCircle className="w-4 h-4 text-[#5F7D6E] stroke-[2]" />
              <span>No Retainers</span>
            </div>
            <div className="w-1.5 h-1.5 bg-[#5F7D6E] rounded-full" />
            <div className="flex items-center space-x-2 text-[#1F3A5F]">
              <TrendingUp className="w-4 h-4 text-[#5F7D6E] stroke-[2]" />
              <span>Scale Safely</span>
            </div>
          </div>
        </div>
      </div>

      {/* Infinite scrolling carousel - Left to Right */}
      <div id="video-marquee-container" className="relative w-full overflow-hidden select-none py-2">
        
        {/* Soft edge gradients for smooth presentation transition */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-[#F8F9FA] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-[#F8F9FA] to-transparent z-10 pointer-events-none" />

        <div className="marquee-track-custom">
          {slidingTestimonials.map((testimonial, index) => (
            <div
              key={`${testimonial.id}-index-${index}`}
              onClick={() => handleOpenVideo(testimonial)}
              className="w-[300px] sm:w-[365px] shrink-0 mx-3 sm:mx-4.5 bg-white hover:bg-white border border-gray-100/90 rounded-2xl overflow-hidden cursor-pointer group transition-all duration-300 transform hover:-translate-y-1 hover:shadow-md flex flex-col justify-between"
              style={{ height: '360px' }}
            >
              
              {/* Top Section: Video Poster with Overlay */}
              <div className="relative h-[210px] w-full overflow-hidden bg-slate-900">
                <img
                  src={testimonial.thumbnail}
                  alt={`${testimonial.name} Poster`}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover opacity-85 group-hover:scale-105 transition-transform duration-550"
                />
                
                {/* Dynamic Gradient Shade */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/35 group-hover:from-black/90 transition-all duration-300" />

                {/* Duration bubble badge */}
                <span className="absolute bottom-3.5 right-3.5 px-2.5 py-0.5 bg-black/75 backdrop-blur-md rounded-md text-[10px] font-sans font-semibold tracking-wider text-white">
                  {testimonial.duration}
                </span>

                {/* Star rating marker */}
                <span className="absolute top-3.5 left-3.5 px-2 py-0.5 bg-emerald-500/95 text-white rounded-md text-[9px] font-sans font-bold tracking-widest uppercase flex items-center space-x-1">
                  <span>★ 5.0 Rating</span>
                </span>

                {/* Pulsing Play icon container */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-13 h-13 rounded-full bg-white text-[#1F3A5F] flex items-center justify-center shadow-lg group-hover:bg-[#5F7D6E] group-hover:text-white group-hover:scale-110 transition-all duration-300 relative">
                    <Play className="w-5 h-5 fill-current ml-0.5" />
                    <span className="absolute inset-0 rounded-full border border-white group-hover:border-[#5F7D6E] animate-ping opacity-25" />
                  </div>
                </div>

                {/* Metric Overlaid on bottom left */}
                <div className="absolute bottom-3.5 left-3.5 space-y-0.5">
                  <span className="text-[10px] uppercase font-sans font-bold tracking-wider text-emerald-300">
                    Validated Metric
                  </span>
                  <p className="text-sm font-sans font-bold text-white leading-none">
                    {testimonial.metric}
                  </p>
                </div>

              </div>

              {/* Bottom Section: Client Details and Custom Quote (Single Height) */}
              <div className="p-4.5 flex-1 flex flex-col justify-between align-stretch text-left">
                
                <p className="text-[11px] sm:text-xs text-[#5B6777] line-clamp-2 italic leading-relaxed font-sans font-medium">
                  "{testimonial.quote}"
                </p>

                <div className="flex items-center justify-between pt-3.5 border-t border-gray-100">
                  <div className="min-w-0">
                    <h4 className="text-xs sm:text-sm font-sans font-bold text-[#1F3A5F] truncate leading-none mb-1">
                      {testimonial.name}
                    </h4>
                    <span className="text-[10px] text-[#5B6777] font-sans tracking-wide block truncate">
                      {testimonial.role}, <span className="text-[#5F7D6E] font-medium">{testimonial.company}</span>
                    </span>
                  </div>
                  
                  <span className="text-[10px] text-[#5F7D6E] font-sans font-bold uppercase tracking-wider group-hover:underline">
                    Watch Story
                  </span>
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Floating Interactive Video Player Modal */}
      {activeVideo && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div
            id="video-player-modal"
            className="bg-[#152842] border border-white/10 w-full max-w-3xl rounded-2xl overflow-hidden relative shadow-2xl flex flex-col text-left"
          >
            {/* Close handler */}
            <button
              onClick={handleCloseVideo}
              className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-black/65 hover:bg-black/85 text-white flex items-center justify-center border border-white/10 transition-colors cursor-pointer"
              aria-label="Close video player"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Cinematic Video Aspect Block */}
            <div className="relative aspect-video bg-black flex items-center justify-center">
              <video
                ref={videoRef}
                src={activeVideo.videoUrl}
                autoPlay
                controls
                playsInline
                className="w-full h-full object-contain"
              />
            </div>

            {/* Video Meta segment */}
            <div className="p-6 space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                <div>
                  <span className="text-[10px] uppercase font-sans tracking-widest font-bold text-[#5F7D6E]">
                    Member Case Video
                  </span>
                  <h3 className="text-lg sm:text-xl font-poppins font-bold text-white">
                    {activeVideo.name} — {activeVideo.role}
                  </h3>
                  <p className="text-xs text-gray-400 font-sans">
                    With <span className="text-white font-medium">{activeVideo.company}</span> • Operational Metric: <span className="text-emerald-300 font-semibold">{activeVideo.metric}</span>
                  </p>
                </div>

                <div className="flex items-center space-x-2 shrink-0">
                  <button
                    onClick={toggleModalMute}
                    className="p-2.5 bg-white/5 hover:bg-white/10 rounded-xl text-gray-300 hover:text-white border border-white/5 transition-colors cursor-pointer flex items-center space-x-1.5 text-xs font-sans font-medium"
                  >
                    {isMuted ? (
                      <>
                        <VolumeX className="w-4 h-4 text-emerald-400" />
                        <span>Unmute Video</span>
                      </>
                    ) : (
                      <>
                        <Volume2 className="w-4 h-4" />
                        <span>Mute Audio</span>
                      </>
                    )}
                  </button>
                  
                  <span className="text-[10px] font-sans px-3 py-1.5 bg-emerald-500/10 text-emerald-300 border border-emerald-500/20 rounded-xl font-bold uppercase tracking-wider">
                    Verified Match
                  </span>
                </div>
              </div>

              <div className="p-4 bg-white/5 rounded-xl border border-white/5">
                <p className="text-xs sm:text-sm text-gray-200 leading-relaxed font-sans italic">
                  "{activeVideo.quote}"
                </p>
              </div>

              {/* Call to action embedded in player */}
              <div className="pt-2 flex items-center justify-between gap-4">
                <span className="text-[11px] text-gray-400 font-sans">
                  Ready for a similar outcome? Setup your matching interview in under 48 hours.
                </span>
                <a
                  href="#contact"
                  onClick={handleCloseVideo}
                  className="px-4.5 py-2 bg-emerald-400 hover:bg-emerald-500 text-[#1F3A5F] font-sans text-xs font-bold uppercase tracking-wider rounded-xl transition-colors shrink-0"
                >
                  Book Free Call
                </a>
              </div>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}

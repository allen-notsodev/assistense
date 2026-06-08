/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ArrowRight, CheckCircle2, Play, Pause, Volume2, VolumeX, RotateCcw, Captions, Sparkles } from 'lucide-react';

interface HeroProps {
  onOpenBooking: () => void;
}

interface Caption {
  start: number;
  end: number;
  text: string;
}

const VSL_CAPTIONS: Caption[] = [
  { start: 0, end: 3, text: "ooogaaa boooogaaaa" },
  { start: 3, end: 7, text: "booooooo" },
  { start: 7, end: 11, text: "crazy yapping" },
  { start: 11, end: 16, text: "Man gtfo" },
  { start: 16, end: 21, text: "Whatever" },
  { start: 21, end: 25, text: "stfu" }
];

export default function Hero({ onOpenBooking }: HeroProps) {
  const videoRef = React.useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = React.useState(true);
  const [isMuted, setIsMuted] = React.useState(true);
  const [currentTime, setCurrentTime] = React.useState(0);
  const [duration, setDuration] = React.useState(25); // Simulated duration limit or actual video length
  const [currentCaption, setCurrentCaption] = React.useState("");
  const [showCaptions, setShowCaptions] = React.useState(true);

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

  // Handle video playback events
  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const time = videoRef.current.currentTime;
      setCurrentTime(time);
      
      // Update subtitle captions based on current time
      const match = VSL_CAPTIONS.find(c => time >= c.start && time <= c.end);
      setCurrentCaption(match ? match.text : "");
    }
  };

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setDuration(videoRef.current.duration || 25);
    }
  };

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play().catch(() => {});
        setIsPlaying(true);
      }
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleRestart = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => {});
      setIsPlaying(true);
    }
  };

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (videoRef.current) {
      const rect = e.currentTarget.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const percentage = clickX / rect.width;
      videoRef.current.currentTime = percentage * duration;
    }
  };

  // Formatted seconds helper (e.g. 0:12)
  const formatTime = (time: number) => {
    const mins = Math.floor(time / 60);
    const secs = Math.floor(time % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
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

          {/* Hero Video Sales Letter Graphic Area */}
          <div className="lg:col-span-5 flex flex-col justify-center items-center w-full">
            {/* Header label for VSL */}
            <div className="mb-3 flex items-center space-x-2 self-start lg:self-center bg-[#5F7D6E]/30 backdrop-blur-md border border-[#5F7D6E]/20 px-3.5 py-1.5 rounded-full text-xs animate-pulse">
              <Sparkles className="w-3.5 h-3.5 text-emerald-300" />
              <span className="font-sans font-semibold text-emerald-200 tracking-wide">Video Sales Letter: How It Works</span>
            </div>

            <div className="relative w-full max-w-md lg:max-w-none aspect-[16/10] sm:aspect-[4/3] md:aspect-[16/10] overflow-hidden rounded-3xl shadow-2xl border-4 border-white/10 bg-black group shadow-[#1F3A5F]/45">
              {/* Actual Video Playback */}
              <video
                ref={videoRef}
                src="/videos/hero-video.mp4"
                className="w-full h-full object-cover select-none"
                autoPlay
                muted={isMuted}
                loop
                playsInline
                onTimeUpdate={handleTimeUpdate}
                onLoadedMetadata={handleLoadedMetadata}
                onClick={togglePlay}
              />

              {/* Glowing Warm Play Button when Paused */}
              {!isPlaying && (
                <button
                  onClick={togglePlay}
                  className="absolute inset-0 m-auto w-16 h-16 rounded-full bg-[#5F7D6E] hover:bg-emerald-500 text-white flex items-center justify-center transition-all duration-300 shadow-lg scale-105 group-hover:scale-110 z-20 cursor-pointer animate-fade-in"
                >
                  <Play className="w-7 h-7 fill-white translate-x-0.5" />
                </button>
              )}

              {/* Mute status pulsing help banner on startup */}
              {isMuted && isPlaying && (
                <button
                  onClick={toggleMute}
                  className="absolute top-4 left-4 right-4 bg-[#1F3A5F]/95 backdrop-blur-md border border-white/15 px-3 py-2 rounded-xl text-xs flex items-center justify-between z-20 text-emerald-200 hover:text-white transition-all cursor-pointer shadow-md animate-bounce"
                >
                  <span className="flex items-center space-x-2 font-medium">
                    <VolumeX className="w-4 h-4 text-emerald-300 stroke-[2.5]" />
                    <span>Video status: Muted. Click to unmute and hear audio script!</span>
                  </span>
                  <span className="bg-[#5F7D6E] text-white px-2 py-0.5 rounded-md text-[9px] font-bold uppercase">
                    UNMUTE
                  </span>
                </button>
              )}

              {/* Subtitles Overlay */}
              {showCaptions && currentCaption && (
                <div className="absolute bottom-14 left-4 right-4 flex justify-center text-center z-10 pointer-events-none transition-all duration-300">
                  <span className="bg-black/85 text-white/95 px-3 py-1.5 rounded-lg text-xs md:text-sm font-sans font-medium border border-white/5 shadow-md leading-snug">
                    {currentCaption}
                  </span>
                </div>
              )}

              {/* Fully functional customized VSL UI overlay tray */}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-3.5 flex flex-col space-y-2 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300 z-20 text-left">
                
                {/* Advanced progress bar scrubber */}
                <div 
                  onClick={handleProgressClick}
                  className="w-full h-1.5 bg-white/20 hover:h-2 rounded-full cursor-pointer transition-all relative"
                >
                  <div 
                    className="h-full bg-[#5F7D6E] rounded-full transition-all relative"
                    style={{ width: `${(currentTime / duration) * 100}%` }}
                  >
                    <div className="absolute -right-1 -top-1 w-3 h-3 rounded-full bg-white shadow-md border border-[#5F7D6E]" />
                  </div>
                </div>

                {/* Subtitle toggle button & indicators */}
                <div className="flex items-center justify-between text-white text-xs">
                  <div className="flex items-center space-x-3.5">
                    {/* Play / Pause */}
                    <button 
                      onClick={togglePlay} 
                      className="hover:text-emerald-300 transition-colors cursor-pointer"
                      title={isPlaying ? "Pause" : "Play"}
                    >
                      {isPlaying ? <Pause className="w-4 h-4 stroke-[2.5]" /> : <Play className="w-4 h-4 stroke-[2.5]" />}
                    </button>

                    {/* Restart */}
                    <button 
                      onClick={handleRestart} 
                      className="hover:text-emerald-300 transition-colors cursor-pointer"
                      title="Restart Video"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                    </button>

                    {/* Mute / Unmute */}
                    <button 
                      onClick={toggleMute} 
                      className="hover:text-emerald-300 transition-colors flex items-center space-x-1 cursor-pointer"
                      title={isMuted ? "Unmute" : "Mute"}
                    >
                      {isMuted ? <VolumeX className="w-4 h-4 stroke-[2.5]" /> : <Volume2 className="w-4 h-4 stroke-[2.5]" />}
                    </button>

                    {/* Runtime Tracker */}
                    <span className="text-[10px] font-mono text-gray-300">
                      {formatTime(currentTime)} / {formatTime(duration)}
                    </span>
                  </div>

                  <div className="flex items-center space-x-3">
                    {/* Captions Toggle */}
                    <button 
                      onClick={() => setShowCaptions(!showCaptions)} 
                      className={`transition-colors flex items-center space-x-1 cursor-pointer ${showCaptions ? 'text-emerald-300' : 'text-gray-400 hover:text-white'}`}
                      title="Toggle Captions"
                    >
                      <Captions className="w-4 h-4" />
                      <span className="text-[9px] font-bold uppercase tracking-wider hidden sm:inline">CC</span>
                    </button>

                    <span className="text-[9px] bg-red-600/90 text-white font-bold px-1.5 py-0.5 rounded uppercase tracking-wider font-sans">
                      LIVE DEMO
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom helper text */}
            <p className="text-[11px] text-gray-400 mt-2 text-center max-w-sm font-sans">
              Play induction video to see how easily your team delegates inboxes, scheduling, and admin.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

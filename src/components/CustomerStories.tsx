/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from 'react';
import { Search, Filter, Sparkles, Star, Calendar, ArrowRight, Quote, Plus } from 'lucide-react';
import { motion } from 'motion/react';

interface SuccessStory {
  id: string;
  name: string;
  profession: string;
  category: 'fitness' | 'legal' | 'consulting' | 'creative' | 'medical' | 'ecommerce' | 'startup' | 'realestate' | 'agency';
  categoryLabel: string;
  photo: string;
  hook: string;
  longDescription: string;
  metric?: string;
  date: string;
  rating: number;
}

export default function CustomerStories() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [visibleCount, setVisibleCount] = useState(8);

  const initialStories: SuccessStory[] = [
    {
      id: 'story-1',
      name: 'Julie Thorne',
      profession: 'Fitness Coach',
      category: 'fitness',
      categoryLabel: 'Health & Fitness',
      photo: 'https://images.unsplash.com/photo-1548690312-e3b507d8c110?auto=format&fit=crop&q=80&w=400',
      hook: 'See how Fitness Coach Julie scaled her business with Assistense',
      longDescription: 'Julie delegate scheduling, workout spreadsheets setup, and automated Instagram consultation bookings to her matched assistant, saving her hours of admin and allowing her active client roster to triple in size.',
      metric: '3x Active Roster',
      date: 'June 2026',
      rating: 5
    },
    {
      id: 'story-2',
      name: 'David Vance',
      profession: 'Independent Lawyer',
      category: 'legal',
      categoryLabel: 'Professional Services',
      photo: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400',
      hook: 'How an independent lawyer saved 15 hours per week',
      longDescription: 'By putting Assistense in charge of sorting travel coordinates, pre-formatting legal review summaries, and setting calendar reminders, David reclaimed vital research blocks each week.',
      metric: '15 Hours Saved/wk',
      date: 'May 2026',
      rating: 5
    },
    {
      id: 'story-3',
      name: 'Marcus Chen',
      profession: 'Business Consultant',
      category: 'consulting',
      categoryLabel: 'Consulting',
      photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400',
      hook: 'How Marcus delegated client intake and reclaimed his weekends',
      longDescription: 'Marcus integrated HubSpot CRM and tasked Assistense with direct client call intake setup and pipeline organization. He successfully offloaded routine follow-ups.',
      metric: 'Weekends Restored',
      date: 'May 2026',
      rating: 5
    },
    {
      id: 'story-4',
      name: 'Sarah Jenkins',
      profession: 'Creative Director',
      category: 'creative',
      categoryLabel: 'Creative & Design',
      photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400',
      hook: 'Releasing project briefs 40% faster by letting Assistense handle copy-editing and scheduling',
      longDescription: 'Sarah offloaded project administrative tasks, brief updates in Figma boards, and direct freelance coordination tasks to her trusted matched companion coordinator.',
      metric: '40% Faster Briefs',
      date: 'April 2026',
      rating: 5
    },
    {
      id: 'story-5',
      name: 'Dr. Alan Aris, MD',
      profession: 'Medical Specialist',
      category: 'medical',
      categoryLabel: 'Medical Practice',
      photo: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=400',
      hook: 'Dr. Aris managed peak appointment traffic without hiring full-time receptionists',
      longDescription: 'By integrating Assistense to navigate specialized appointment bookers and handle preliminary patient intake surveys, Dr. Aris reduced intake errors considerably.',
      metric: '-45% Intake Lag',
      date: 'April 2026',
      rating: 5
    },
    {
      id: 'story-6',
      name: 'Clara Sterling',
      profession: 'E-commerce Operator',
      category: 'ecommerce',
      categoryLabel: 'E-commerce & Brands',
      photo: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400',
      hook: 'How Clara processed 300+ custom Shopify delivery claims under budget',
      longDescription: 'Clara synced her Shopify platform with Assistense. Her remote associate tracked order delivery exceptions, negotiated resolutions, and minimized customer disputes during the peak holiday rush.',
      metric: '94% Client CSAT',
      date: 'March 2026',
      rating: 5
    },
    {
      id: 'story-7',
      name: 'Oliver Kross',
      profession: 'Startup Founder',
      category: 'startup',
      categoryLabel: 'Tech & Startups',
      photo: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400',
      hook: 'Oliver secured seed capital by delegating inbox operations to Assistense',
      longDescription: 'Faced with multiple meetings, Oliver trusted Assistense to filter incoming partnership proposals, update VC reporting sheets, and scheduling introductory calls.',
      metric: 'Closed $1.5M Seed',
      date: 'February 2026',
      rating: 5
    },
    {
      id: 'story-8',
      name: 'Natasha Belov',
      profession: 'Real Estate Agent',
      category: 'realestate',
      categoryLabel: 'Real Estate',
      photo: 'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&q=80&w=400',
      hook: 'Natasha increased her property viewings by 50% using custom calendar links setup',
      longDescription: 'Natasha delegated MLS property updates, showing setups, and fast initial feedback tracking to her dedicated assistant, permitting her to focus entirely on closing physical listings.',
      metric: '+50% Property Showings',
      date: 'January 2026',
      rating: 5
    },
    {
      id: 'story-9',
      name: 'Julian Hayes',
      profession: 'Wealth Manager',
      category: 'legal',
      categoryLabel: 'Professional Services',
      photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400',
      hook: 'Reimagining private client briefings with zero personal administrative overhead',
      longDescription: 'Julian automated his periodic financial reviews and let Assistense draft custom client layout templates and manage private newsletter distributions securely.',
      metric: '99% Client Retention',
      date: 'December 2025',
      rating: 5
    },
    {
      id: 'story-10',
      name: 'Fiona Vance',
      profession: 'Design Agency Executive',
      category: 'agency',
      categoryLabel: 'Creative & Design',
      photo: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400',
      hook: 'How Fiona scaled retainer accounts by delegating operational audits',
      longDescription: 'Fiona offloaded client onboard coordinates, weekly dashboard updates, and internal timesheet logs, turning her weekly meetings into productive strategy hours.',
      metric: '+35% Margin Boost',
      date: 'November 2025',
      rating: 5
    },
    {
      id: 'story-11',
      name: 'Dr. Raymond Patel',
      profession: 'Wellness Center Owner',
      category: 'medical',
      categoryLabel: 'Medical Practice',
      photo: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=400',
      hook: 'Automating multi-doctor schedules across two operational clinic branches',
      longDescription: 'Raymond synced multiple practitioners with a unified scheduler. Assistense handled appointment changes, billing claims verification, and supplier logistics.',
      metric: 'Zero Double Bookings',
      date: 'October 2025',
      rating: 5
    },
    {
      id: 'story-12',
      name: 'Gabriella Santos',
      profession: 'Fitness Franchise Owner',
      category: 'fitness',
      categoryLabel: 'Health & Fitness',
      photo: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&q=80&w=400',
      hook: 'How Gabriella manages customer feedback and gym logistics online',
      longDescription: 'Gabriella delegated recurring membership audits, payment failure updates, and gym supply orders to Assistense, avoiding expensive franchise staffing overhead.',
      metric: 'Saved $4K/mo Staffing',
      date: 'September 2025',
      rating: 5
    }
  ];

  // Additional mock stories generated when "Load More" is pressed to allow 'infinite' continuous scrolling
  const loadedMoreStories: SuccessStory[] = [
    {
      id: 'story-13',
      name: 'Aris Kempler',
      profession: 'Tech Lead',
      category: 'startup',
      categoryLabel: 'Tech & Startups',
      photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400',
      hook: 'Reclaiming 10 hours of continuous coding time per week',
      longDescription: 'Aris offloaded meeting logs and technical ticket triages to his specialist, allowing him to stay focused strictly on coding and product delivery.',
      metric: '10 Hours Deep Work',
      date: 'August 2025',
      rating: 5
    },
    {
      id: 'story-14',
      name: 'Miriam Choi',
      profession: 'Product Coach',
      category: 'consulting',
      categoryLabel: 'Consulting',
      photo: 'https://images.unsplash.com/photo-1594744803329-e58b31de215f?auto=format&fit=crop&q=80&w=400',
      hook: 'How Miriam optimized high-ticket group onboarding flows',
      longDescription: 'Miriam trusted Assistense with the client welcome kits, calendar invites, and live chat Q&A moderating during her weekly digital workshops.',
      metric: '100% Onboarding Rating',
      date: 'July 2025',
      rating: 5
    },
    {
      id: 'story-15',
      name: 'Thomas Wu',
      profession: 'Real Estate Developer',
      category: 'realestate',
      categoryLabel: 'Real Estate',
      photo: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&q=80&w=400',
      hook: 'Managing property municipal approvals updates without losing sleep',
      longDescription: 'Thomas delegated tracking local inspector filings, sorting commercial zoning paperwork, and organizing developer correspondence streams directly.',
      metric: 'Accelerated Approvals',
      date: 'June 2025',
      rating: 5
    },
    {
      id: 'story-16',
      name: 'Elena Rostova',
      profession: 'Art Curator',
      category: 'creative',
      categoryLabel: 'Creative & Design',
      photo: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&q=80&w=400',
      hook: 'Delivering private gallery invitations and artist portfolios efficiently',
      longDescription: 'Elena offloaded client mailing database administration and catalog distributions, establishing an accurate RSVP ledger for her seasonal art exhibitions.',
      metric: '300+ Guest List Managed',
      date: 'May 2025',
      rating: 5
    }
  ];

  const allAvailableStories = useMemo(() => {
    return [...initialStories, ...loadedMoreStories];
  }, [initialStories, loadedMoreStories]);

  const categories = useMemo(() => {
    const list = new Set(initialStories.map((s) => s.category));
    return [
      { id: 'all', label: 'All Sectors' },
      { id: 'startup', label: 'Tech & Startups' },
      { id: 'legal', label: 'Professional Services' },
      { id: 'fitness', label: 'Health & Fitness' },
      { id: 'creative', label: 'Creative & Design' },
      { id: 'medical', label: 'Medical & Wellness' },
      { id: 'ecommerce', label: 'E-commerce' },
    ];
  }, [initialStories]);

  const filteredStories = useMemo(() => {
    return allAvailableStories.filter((story) => {
      const matchesCategory = selectedCategory === 'all' || story.category === selectedCategory || (selectedCategory === 'medical' && story.category === 'medical');
      const matchesSearch = story.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        story.profession.toLowerCase().includes(searchQuery.toLowerCase()) ||
        story.hook.toLowerCase().includes(searchQuery.toLowerCase()) ||
        story.longDescription.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [allAvailableStories, selectedCategory, searchQuery]);

  const displayedStories = useMemo(() => {
    return filteredStories.slice(0, visibleCount);
  }, [filteredStories, visibleCount]);

  const handleLoadMore = () => {
    // Increase visible count to simulate infinite grid loading
    setVisibleCount((prev) => prev + 4);
  };

  return (
    <div className="bg-[#F8F9FA] min-h-screen text-[#1F3A5F]">
      
      {/* 50% Viewport Landing Page Hero Section */}
      <section
        id="stories-hero-section"
        className="relative min-h-[50vh] flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#1F3A5F] to-[#152842] text-white text-center py-20 sm:py-28 overflow-hidden"
      >
        {/* Abstract Background Ornaments representing global connections */}
        <div className="absolute inset-0 opacity-15 overflow-hidden pointer-events-none">
          <div className="absolute top-10 left-10 w-96 h-96 rounded-full bg-[#5F7D6E] blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-emerald-500 blur-3xl" />
          <div className="absolute grid grid-cols-6 gap-4 opacity-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-7xl h-full">
            {Array.from({ length: 24 }).map((_, i) => (
              <div key={i} className="border border-white/20 aspect-square rounded-full flex items-center justify-center p-2">
                <div className="w-1.5 h-1.5 bg-white rounded-full" />
              </div>
            ))}
          </div>
        </div>

        <div className="relative max-w-4xl mx-auto space-y-6 z-10">
          <div className="inline-flex items-center space-x-2 px-3 py-1 bg-white/10 border border-white/10 text-emerald-300 text-[10px] sm:text-xs font-sans font-bold uppercase tracking-widest rounded-full">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Operational Success Stories</span>
          </div>

          {/* EXACTLY REQUIRED HEADLINE */}
          <h1
            id="stories-headline-text"
            className="text-4xl sm:text-5xl md:text-6xl font-poppins font-extrabold tracking-tight leading-none text-white max-w-3xl mx-auto"
          >
            Trusted by professionals across the globe
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-gray-200 font-sans max-w-2xl mx-auto font-light leading-relaxed">
            Discover how visionary founders, busy clinical specialists, e-commerce brand owners, and independent practitioners offload up to 20 hours of logistics administrative fatigue each week.
          </p>

          <div className="pt-4 flex flex-wrap justify-center gap-6 sm:gap-10 text-[11px] font-sans font-bold tracking-widest uppercase text-emerald-300">
            <div className="flex items-center space-x-2">
              <Star className="w-4 h-4 fill-emerald-300 stroke-none" />
              <span>98% Happy Clients</span>
            </div>
            <div className="flex items-center space-x-2">
              <Star className="w-4 h-4 fill-emerald-300 stroke-none" />
              <span>48 hour Matches</span>
            </div>
            <div className="flex items-center space-x-2">
              <Star className="w-4 h-4 fill-emerald-300 stroke-none" />
              <span>Dedicated US VAs</span>
            </div>
          </div>
        </div>
      </section>

      {/* FILTER & SEARCH UTILITIES BAR */}
      <section className="bg-white border-b border-gray-100 py-6 sticky top-[72px] z-20 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            
            {/* Filter segments */}
            <div className="flex items-center space-x-2 overflow-x-auto pb-2 md:pb-0 scrollbar-none shrink-0 border-b md:border-b-0 border-gray-100">
              <Filter className="w-3.5 h-3.5 text-[#5B6777] shrink-0" />
              <div className="flex space-x-1 pl-1">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => {
                      setSelectedCategory(cat.id);
                      setVisibleCount(8); // Reset page count on filter
                    }}
                    className={`px-3.5 py-1.5 rounded-full text-xs font-sans font-semibold tracking-wide transition-colors whitespace-nowrap cursor-pointer ${
                      selectedCategory === cat.id
                        ? 'bg-[#1F3A5F] text-white'
                        : 'text-[#5B6777] hover:bg-[#F8F9FA] hover:text-[#1F3A5F]'
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Smart Search */}
            <div className="relative w-full md:w-72">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#5B6777]" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search stories by name, role or tool..."
                className="w-full pl-10 pr-4 py-2 bg-[#F8F9FA] hover:bg-gray-100 focus:bg-white border border-[#5B6777]/10 focus:border-[#1F3A5F] outline-none text-xs rounded-full font-sans transition-all text-[#1F3A5F]"
              />
            </div>

          </div>
        </div>
      </section>

      {/* INFINITE SCROLLING 4-COLUMN GRID */}
      <section className="py-16 bg-[#F8F9FA]/65">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {filteredStories.length === 0 ? (
            <div className="text-center py-20 bg-white border border-gray-100 rounded-3xl p-8 max-w-md mx-auto shadow-sm space-y-4">
              <Quote className="w-8 h-8 text-gray-300 mx-auto" />
              <h3 className="text-sm font-sans font-bold text-[#1F3A5F]">No customer stories match your selection</h3>
              <p className="text-xs text-[#5B6777] leading-relaxed">
                Try adjusting your sector filter or type another search keyword to view related operational records.
              </p>
              <button
                onClick={() => {
                  setSelectedCategory('all');
                  setSearchQuery('');
                }}
                className="px-4 py-2 bg-[#1F3A5F] text-white text-xs font-sans font-bold rounded-full cursor-pointer"
              >
                Reset Searches
              </button>
            </div>
          ) : (
            <div className="space-y-12">
              
              {/* Responsive 4-Column Grid */}
              <div
                id="stories-grid-container"
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 items-start"
              >
                {displayedStories.map((story) => (
                  <div
                    key={story.id}
                    className="group bg-white border border-gray-100/80 rounded-2xl p-5 hover:shadow-md transition-all duration-300 flex flex-col justify-between align-stretch text-left relative overflow-hidden"
                    style={{ minHeight: '340px' }}
                  >
                    {/* Top highlights for design variation */}
                    <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#1F3A5F]/5 group-hover:bg-[#5F7D6E] transition-colors" />

                    <div className="space-y-4">
                      
                      {/* 1. Header with Photo & Profession */}
                      <div className="flex items-center space-x-3.5">
                        <img
                          src={story.photo}
                          alt={story.name}
                          referrerPolicy="no-referrer"
                          className="w-12 h-12 rounded-full object-cover shrink-0 border-2 border-[#1F3A5F]/10 group-hover:border-[#5F7D6E]/30 transition-all duration-300 shadow-sm"
                        />
                        <div className="min-w-0">
                          {/* 2. Customer profession / identity line */}
                          <span className="text-[10px] font-sans tracking-wider font-bold uppercase text-[#5F7D6E] block truncate">
                            {story.profession}
                          </span>
                          
                          {/* 3. Customer name (Must be bold, Must be larger than other secondary texts) */}
                          <h3 className="text-base font-sans font-bold text-[#1F3A5F] group-hover:text-[#5F7D6E] transition-colors tracking-tight">
                            {story.name}
                          </h3>
                        </div>
                      </div>

                      {/* 4. Attention-Gracing Hook (Strong typography priority) */}
                      <p className="text-[13px] font-sans font-semibold text-[#1F3A5F]/95 leading-snug tracking-tight group-hover:text-emerald-950 transition-colors">
                        "{story.hook}"
                      </p>

                      {/* Description - fine-aligned, auto-expanding vertically */}
                      <p className="text-[11px] text-[#5B6777] leading-relaxed font-sans font-medium line-clamp-4 group-hover:line-clamp-none transition-all duration-500">
                        {story.longDescription}
                      </p>

                    </div>

                    {/* Bottom Data Drawer & Minor Metadata */}
                    <div className="pt-4 mt-4 border-t border-gray-50 flex items-center justify-between gap-1 text-[10px] font-sans">
                      
                      {/* Minor Metadata: Date */}
                      <div className="flex items-center space-x-1 text-gray-400 font-medium font-sans">
                        <Calendar className="w-3.5 h-3.5 shrink-0 text-gray-300" />
                        <span>{story.date}</span>
                      </div>

                      {/* Display metric bubble for saas authenticity */}
                      {story.metric && (
                        <div className="bg-emerald-50 text-emerald-700 border border-emerald-100 px-2 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider shrink-0 font-sans">
                          {story.metric}
                        </div>
                      )}

                    </div>

                  </div>
                ))}
              </div>

              {/* Grid continues infinitely downward (using Simulated Load More pattern directly) */}
              {filteredStories.length > visibleCount && (
                <div className="text-center pt-6">
                  <button
                    type="button"
                    onClick={handleLoadMore}
                    className="inline-flex items-center space-x-2 px-6 py-3 border border-[#1F3A5F]/20 text-[#1F3A5F] hover:bg-[#1F3A5F] hover:text-white text-xs font-sans font-bold uppercase tracking-wider rounded-full transition-all cursor-pointer shadow-sm group"
                  >
                    <Plus className="w-4 h-4 text-[#5F7D6E] group-hover:text-white transition-colors" />
                    <span>Load More Stories</span>
                  </button>
                  <p className="text-[10px] text-[#5B6777] font-sans font-medium pt-2.5">
                    Showing {displayedStories.length} of {filteredStories.length} global customer profiles
                  </p>
                </div>
              )}

            </div>
          )}

        </div>
      </section>

      {/* TRUST ACTION BANNER */}
      <section className="bg-white border-t border-gray-100 py-16 sm:py-24 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="text-2xl sm:text-3xl font-poppins font-bold text-[#1F3A5F]">
            Ready to rewrite your own operations story?
          </h2>
          <p className="text-sm text-[#5B6777] font-sans max-w-xl mx-auto leading-relaxed">
            Take 15 minutes to discover our transparent matching diagnostic. Find your tailored companion assistant in under 48 hours with absolute assurance.
          </p>
          <div className="pt-4">
            <a
              href="#contact"
              className="inline-flex items-center space-x-2 px-7 py-3 bg-[#1F3A5F] text-white text-xs font-sans font-bold uppercase tracking-wider rounded-full hover:bg-[#152842] transition-colors shadow-md"
            >
              <span>Get Started Today</span>
              <ArrowRight className="w-4 h-4 text-emerald-300" />
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}

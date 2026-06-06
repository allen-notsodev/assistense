import React, { useState } from 'react';
import { BookOpen, Clock, User, ArrowRight, Search, Tag } from 'lucide-react';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  content: string[];
}

export default function Blog() {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Productivity', 'Calendar Strategy', 'Delegation', 'Security'];

  const posts: BlogPost[] = [
    {
      id: "blog-1",
      title: "How to Delegate Your Inbox Without Losing Control",
      excerpt: "Sharing access to your email doesn't have to be nerve-wracking. Learn how to set up clear triaging labels, drafts protocols, and review schedules.",
      category: "Delegation",
      date: "June 3, 2026",
      readTime: "6 min read",
      author: {
        name: "Clara Vincent",
        role: "Lead Operations Manager",
        avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=120"
      },
      content: [
        "Many company executives and solo entrepreneurs list their email inbox as the single largest bottleneck in their day-to-day work. Yet, the hesitation to delegate email is completely understandable. Your inbox contains private client correspondence, sensitive agreements, and personal messages.",
        "The secret to successful inbox delegation lies in establishing a structured framework before handing over access. Here is the exact system our executive virtual assistants utilize:",
        "1. Setting Up the Triage Folder Structure: Rather than letting an assistant delete or reply to items immediately, establish three core folders: [Action Needed], [For Review], and [Archive]. Your assistant reads incoming mail, applies categorized tags, and drops urgent items into Action Needed.",
        "2. The Drafts Protocol: For standard inquiries, booking proposals, or meeting coordinations, your assistant drafts the complete email response directly in your mailbox. When you log in, you simply skim the Drafts folder and hit 'Send'. This creates instant turnaround speed while giving you absolute final sign-off.",
        "3. Security through Delegation Tools: Never share your raw Google or Outlook password. Use official native inbox delegation settings, or share session cookies securely via access managers like 1Password."
      ]
    },
    {
      id: "blog-2",
      title: "The 15-Minute Rule: Calendar Buffer Strategies for Founders",
      excerpt: "Back-to-back meetings are the silent killer of creative focus. Discover how our virtual assistants build bulletproof scheduling systems with built-in buffers.",
      category: "Calendar Strategy",
      date: "May 28, 2026",
      readTime: "4 min read",
      author: {
        name: "David Sterling",
        role: "Client Operations Director",
        avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=120"
      },
      content: [
        "If you look at a highly structured executive's calendar, you will rarely see two major meetings touching at the edges. Back-to-back calls induce cognitive fatigue and guarantee that any slight overrun will derail your entire afternoon.",
        "Our scheduling virtual assistants enforce a strict '15-Minute Rule' on behalf of our clients to protect their high-value deep focus blocks.",
        "1. Automatic Call Downscaling: A requested 30-minute meeting is automatically scheduled as a 20-minute call. A requested 1-hour session is booked for 45 minutes. This creates a psychological constraint that helps both parties stay brief, and leaves a built-in cushion.",
        "2. Guarding the Transition Windows: We ensure no scheduling tool automatically books slots right before or after a major client presentation. Transition windows are actively blocked off to allow for note-taking, hydration, and immediate task formulation.",
        "3. Timezone Shielding: Operating complex cross-border businesses means constantly fighting timezone errors. Our assistants build client matrices that strictly prohibit external bookings outside of pre-approved localized windows, regardless of how much pressure an external coordinator applies."
      ]
    },
    {
      id: "blog-3",
      title: "Securing Client Data in Virtual Administrative Teams",
      excerpt: "How to use zero-trust password policies, compartmentalized access, and mobile multi-factor authentication with offsite team members.",
      category: "Security",
      date: "May 15, 2026",
      readTime: "8 min read",
      author: {
        name: "Marcus Ward",
        role: "Information Security Lead",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=120"
      },
      content: [
        "Outsource security should never be an afterthought. In an era where database leaks and phishing attempts represent permanent existential threats, your external partners must uphold identical security benchmarks to your internal software engineers.",
        "At Assistense, we maintain a strict Zero-Raw-Credentials mandate. This means our virtual professionals never receive raw, plain-text passwords or master keys. Instead, we train our clients and assistants on secure, tokenized asset sharing:",
        "1. Active Login Hiding: By using tools like LastPass, 1Password, or Dashlane, you can share access to your Stripe, CRM, or email manager without showing the actual text password. The assistant logs in with a secure browser extension. When the engagement ends, you simply revoke access instantly.",
        "2. Compartmentalized Sub-Accounts: Never share a primary admin login. We guide you in creating separate user accounts for your matched virtual assistant with granular permission tiers (e.g., 'Editor' instead of 'Owner' or 'Billing Administrator').",
        "3. Session Expiration Policies: We enforce multi-factor hardware keys and hourly session time-outs for our assistants' offsite devices, protecting client directories in case of hardware losses."
      ]
    },
    {
      id: "blog-4",
      title: "Why High-Turnover Agency Work is Costing You Money",
      excerpt: "Standard outsourcing companies hire low-cost, short-term talent. Our mutual-respect model proves that long-term retainer retention yields better operations.",
      category: "Productivity",
      date: "April 30, 2026",
      readTime: "5 min read",
      author: {
        name: "Clara Vincent",
        role: "Lead Operations Manager",
        avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=120"
      },
      content: [
        "If you've ever signed up with a standard high-volume virtual assistant portal, you might have noticed a frustrating trend: every 4 to 6 months, you find yourself training a brand new assistant because your previous match suddenly shifted roles or exited the company.",
        "This high turnover represents a massive, hidden financial drain on your business operations. Every time you have to re-explain your folders structure, re-share credentials, and re-establish your tone of voice, you waste hours of leadership energy.",
        "Assistense was founded to break this cycle. By providing stable livelihoods, legal benefits, and comfortable workspaces to our virtual professionals, we retain our cohort members for years. This means your operational memory is safely preserved inside our team, helping your business run smoother.",
        "Investment in stable, well-compensated administrative professionals isn't just an ethical choice — it is a smart, direct operational strategy that saves hundreds of hours of retraining overhead annually."
      ]
    }
  ];

  const filteredPosts = posts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });  return (
    <div className="bg-[#F8F9FA] min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-[10px] uppercase tracking-[0.15em] text-[#5F7D6E] font-bold block">
            Our Blog
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1F3A5F] tracking-tight">
            The operational insights
          </h2>
          <div className="w-16 h-[1px] bg-[#5F7D6E]/40 mx-auto" />
          <p className="text-sm text-[#5B6777] leading-relaxed font-sans">
            Actionable strategies, warm advice, and clear guides on delegation, calendar styles, and work management.
          </p>
        </div>

        {/* If viewing a single post detail */}
        {selectedPost ? (
          <div className="max-w-3xl mx-auto bg-white border border-[#5B6777]/10 rounded-2xl p-8 sm:p-12 space-y-6 shadow-sm">
            <button
              onClick={() => setSelectedPost(null)}
              className="text-xs font-sans font-bold text-[#5F7D6E] hover:text-[#1F3A5F] flex items-center space-x-2 focus:outline-none uppercase tracking-wider"
            >
              ← Back to Insights
            </button>
            
            <div className="space-y-4 text-left">
              <span className="text-[10px] font-sans font-bold bg-[#1F3A5F]/5 text-[#1F3A5F] px-3 py-1 rounded-full uppercase tracking-wider border border-[#1F3A5F]/10">
                {selectedPost.category}
              </span>
              <h1 className="text-2xl sm:text-3xl font-sans font-bold text-[#1F3A5F] leading-tight">
                {selectedPost.title}
              </h1>
              
              <div className="flex items-center space-x-4 py-4 border-y border-[#5B6777]/10">
                <img
                  src={selectedPost.author.avatar}
                  alt={selectedPost.author.name}
                  referrerPolicy="no-referrer"
                  className="w-10 h-10 rounded-full object-cover border border-[#5B6777]/10"
                />
                <div className="text-left">
                  <p className="text-xs font-sans font-bold text-[#1F3A5F]">{selectedPost.author.name}</p>
                  <p className="text-[10px] uppercase tracking-wider text-[#5B6777] font-sans">{selectedPost.author.role}</p>
                </div>
                <div className="ml-auto text-right text-[10px] font-sans text-[#5B6777] space-y-0.5">
                  <p>{selectedPost.date}</p>
                  <p className="flex items-center justify-end"><Clock className="w-3 h-3 mr-1" /> {selectedPost.readTime}</p>
                </div>
              </div>
            </div>

            <div className="space-y-4 text-sm font-sans text-[#5B6777] leading-relaxed text-left pt-2">
              {selectedPost.content.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>

            <div className="pt-8 border-t border-[#5B6777]/10 flex flex-col sm:flex-row justify-between items-center bg-[#F8F9FA] rounded-2xl p-6 mt-12 gap-4">
              <div className="text-left">
                <h4 className="text-sm font-sans font-bold text-[#1F3A5F]">Need help implementing this system?</h4>
                <p className="text-xs text-[#5B6777]">Our virtual assistants are ready and happy to help you coordinate these systems.</p>
              </div>
              <a
                href="#contact"
                className="px-6 py-2.5 bg-[#1F3A5F] hover:bg-[#152842] text-white text-[10px] uppercase tracking-wider font-bold font-sans transition-colors cursor-pointer rounded-full inline-block text-center shadow"
              >
                Hire Us
              </a>
            </div>
          </div>
        ) : (
          <div className="space-y-8">
            {/* Search and Category Filter Block */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 bg-white p-4 border border-[#5B6777]/10 rounded-2xl max-w-4xl mx-auto shadow-sm">
              <div className="relative w-full md:w-72">
                <Search className="absolute left-3.5 top-2.5 w-4 h-4 text-[#5B6777]/50" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-1.5 bg-[#F8F9FA] border border-[#5B6777]/10 focus:outline-none focus:border-[#5F7D6E] text-xs font-sans placeholder-[#5B6777]/50 rounded-full"
                />
              </div>

              {/* Categories buttons */}
              <div className="flex flex-wrap gap-1.5 w-full md:w-auto justify-start md:justify-end">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-4 py-1.5 text-[10px] font-sans font-bold tracking-wider uppercase transition-colors rounded-full ${
                      selectedCategory === cat
                        ? 'bg-[#1F3A5F] text-white border border-[#1F3A5F]'
                        : 'bg-[#F8F9FA] text-[#5B6777] border border-[#5B6777]/10 hover:border-[#1F3A5F]'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Grid display */}
            {filteredPosts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto text-left">
                {filteredPosts.map((post) => (
                  <article
                    key={post.id}
                    className="bg-white border border-[#5B6777]/10 p-6 flex flex-col justify-between hover:border-[#5F7D6E] transition-all duration-300 rounded-2xl shadow-sm hover:shadow-md group"
                  >
                    <div className="space-y-4">
                      {/* Author and metadata */}
                      <div className="flex items-center space-x-3">
                        <span className="text-[10px] font-sans font-bold bg-[#1F3A5F]/5 text-[#1F3A5F] px-2.5 py-1 rounded-full border border-[#1F3A5F]/10">
                          {post.category}
                        </span>
                        <div className="ml-auto text-[10px] font-sans text-[#5B6777]">
                          {post.date}
                        </div>
                      </div>

                      <h3 className="text-lg font-sans font-bold text-[#1F3A5F] group-hover:text-[#5F7D6E] transition-colors leading-snug">
                        {post.title}
                      </h3>

                      <p className="text-xs font-sans text-[#5B6777] leading-relaxed">
                        {post.excerpt}
                      </p>
                    </div>

                    <div className="pt-6 mt-6 border-t border-[#5B6777]/10 flex items-center justify-between">
                      <div className="flex items-center space-x-2.5">
                        <img
                          src={post.author.avatar}
                          alt={post.author.name}
                          referrerPolicy="no-referrer"
                          className="w-7 h-7 rounded-full object-cover border border-[#5B6777]/10"
                        />
                        <span className="text-[10px] font-sans font-bold text-[#1F3A5F]">
                          {post.author.name}
                        </span>
                      </div>
                      <button
                        onClick={() => setSelectedPost(post)}
                        className="text-[10px] font-sans font-bold text-[#5F7D6E] group-hover:text-[#1F3A5F] flex items-center space-x-1 uppercase tracking-wider focus:outline-none"
                      >
                         <span>Read More</span>
                        <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5" />
                      </button>
                    </div>
                  </article>
                ))}
              </div>
            ) : (
              <div className="bg-white border border-[#5B6777]/10 p-12 text-center max-w-xl mx-auto space-y-2 rounded-2xl shadow-sm">
                <BookOpen className="w-8 h-8 text-[#5B6777]/30 mx-auto" />
                <p className="font-sans font-bold text-sm text-[#1F3A5F]">No matching insights found</p>
                <p className="text-xs text-[#5B6777]">Try adjusting your search criteria or selecting a different folder.</p>
              </div>
            )}
          </div>
        )}

      </div>
    </div>
  );
}

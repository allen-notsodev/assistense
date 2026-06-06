/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useRef } from 'react';
import { Briefcase, Upload, CheckCircle2, ShieldCheck, Heart, GraduationCap } from 'lucide-react';
import { CareerFormInput } from '../types';

export default function Careers() {
  const [form, setForm] = useState<CareerFormInput>({
    fullName: '',
    email: '',
    phone: '',
    role: 'Executive Virtual Assistant',
    experience: '3-5 Years',
    about: '',
    resumeUrl: ''
  });

  const [dragActive, setDragActive] = useState(false);
  const [uploadingProgress, setUploadingProgress] = useState<number | null>(null);
  const [fileName, setFileName] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const simulateUpload = (name: string) => {
    setFileName(name);
    setUploadingProgress(10);
    const interval = setInterval(() => {
      setUploadingProgress((prev) => {
        if (prev !== null && prev >= 100) {
          clearInterval(interval);
          setForm(f => ({ ...f, resumeUrl: `https://assistense.com/resumes/${name}` }));
          return 100;
        }
        return (prev || 0) + 15;
      });
    }, 120);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      simulateUpload(e.dataTransfer.files[0].name);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      simulateUpload(e.target.files[0].name);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.fullName || !form.email) return;

    setSubmitting(true);
    
    // Simulate API network latency
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);

      // Save to local storage for persistent visual checks
      const existing = localStorage.getItem('assistense_careers');
      const apps = existing ? JSON.parse(existing) : [];
      apps.push({
        ...form,
        id: `APP-${Date.now()}`,
        submittedAt: new Date().toISOString()
      });
      localStorage.setItem('assistense_careers', JSON.stringify(apps));
    }, 1250);
  };

  const handleReset = () => {
    setForm({
      fullName: '',
      email: '',
      phone: '',
      role: 'Executive Virtual Assistant',
      experience: '3-5 Years',
      about: '',
      resumeUrl: ''
    });
    setFileName(null);
    setUploadingProgress(null);
    setSubmitted(false);
  };

  return (
    <section id="careers" className="bg-white py-16 md:py-24 border-t border-[#5B6777]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column Information Area */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <span className="text-[10px] uppercase tracking-[0.15em] text-[#5F7D6E] font-bold block">
              Now Hiring
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1F3A5F] tracking-tight leading-tight">
              Build a career of <span className="text-[#5F7D6E]">respect & growth</span>
            </h2>
            <div className="w-16 h-[1px] bg-[#5F7D6E]/40" />
            
            <p className="text-sm text-[#5B6777] leading-relaxed font-sans">
              Are you an experienced administrative assistant, executive virtual assistant, or operations expert looking for a reliable, supportive workspace? We are always on the lookout for outstanding talent.
            </p>

            {/* Careers features list */}
            <div className="space-y-4 pt-2 font-sans">
              <div className="flex items-start space-x-3.5">
                <div className="w-9 h-9 rounded-xl bg-[#5F7D6E]/10 flex items-center justify-center shrink-0">
                  <GraduationCap className="w-4 h-4 text-[#5F7D6E]" />
                </div>
                <div className="space-y-0.5">
                  <h4 className="text-sm font-bold text-[#1F3A5F]">Continuous Upskilling</h4>
                  <p className="text-xs text-[#5B6777]">Free courses in project management, HubSpot, Canva, and modern workflow design.</p>
                </div>
              </div>

              <div className="flex items-start space-x-3.5">
                <div className="w-9 h-9 rounded-xl bg-[#5F7D6E]/10 flex items-center justify-center shrink-0">
                  <Heart className="w-4 h-4 text-[#5F7D6E]" />
                </div>
                <div className="space-y-0.5">
                  <h4 className="text-sm font-bold text-[#1F3A5F]">Highly Supportive Community</h4>
                  <p className="text-xs text-[#5B6777]">Never work in isolation. Benefit from warm weekly check-ins, peer groups, and active mentoring.</p>
                </div>
              </div>

              <div className="flex items-start space-x-3.5">
                <div className="w-9 h-9 rounded-xl bg-[#5F7D6E]/10 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-4 h-4 text-[#5F7D6E]" />
                </div>
                <div className="space-y-0.5">
                  <h4 className="text-sm font-bold text-[#1F3A5F]">Fair Opportunities & Pay</h4>
                  <p className="text-xs text-[#5B6777]">Competitive baseline pay, predictable hours matching, paid PTO, and honest career growth paths.</p>
                </div>
              </div>
            </div>

            <div className="p-4 bg-[#F8F9FA] rounded-2xl border border-[#5B6777]/10 text-xs text-[#5B6777] leading-relaxed font-sans shadow-sm">
              💡 <strong>Note to applicants</strong>: We evaluate portfolios based on care, tool competence, clear communication, and helpful workflow logic. Our onboarding involves a friendly paid testing cycle.
            </div>
          </div>

          {/* Right Column Custom Dynamic Application form Box */}
          <div className="lg:col-span-7 bg-[#F8F9FA] p-6 sm:p-8 rounded-2xl border border-[#5B6777]/10 text-left shadow-sm">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h3 className="text-lg font-sans font-bold text-[#1F3A5F]">
                  Join Our Support Cohort
                </h3>
                <p className="text-xs font-sans text-[#5B6777]">
                  Submit your details below to join our next pairing list. All applications are warmly reviewed within 48 business hours.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label htmlFor="fullName" className="text-xs font-sans font-bold text-[#1F3A5F] uppercase tracking-wide">Full Name *</label>
                    <input
                      id="fullName"
                      required
                      type="text"
                      value={form.fullName}
                      onChange={(e) => setForm({ ...form, fullName: e.target.value })}
                      className="w-full bg-white px-3 py-2 text-sm rounded-xl border border-[#5B6777]/20 focus:outline-none focus:border-[#5F7D6E] text-[#1F3A5F]"
                      placeholder="Jane Doe"
                    />
                  </div>

                  <div className="space-y-1">
                    <label htmlFor="email" className="text-xs font-sans font-bold text-[#1F3A5F] uppercase tracking-wide">Email Address *</label>
                    <input
                      id="email"
                      required
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full bg-white px-3 py-2 text-sm rounded-xl border border-[#5B6777]/20 focus:outline-none focus:border-[#5F7D6E] text-[#1F3A5F]"
                      placeholder="jane@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label htmlFor="phone" className="text-xs font-sans font-bold text-[#1F3A5F] uppercase tracking-wide">Phone Number</label>
                    <input
                      id="phone"
                      type="tel"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full bg-white px-3 py-2 text-sm rounded-xl border border-[#5B6777]/20 focus:outline-none focus:border-[#5F7D6E] text-[#1F3A5F]"
                      placeholder="+1 (555) 012-3456"
                    />
                  </div>

                  <div className="space-y-1">
                    <label htmlFor="role" className="text-xs font-sans font-bold text-[#1F3A5F] uppercase tracking-wide">Target Role</label>
                    <select
                      id="role"
                      value={form.role}
                      onChange={(e) => setForm({ ...form, role: e.target.value })}
                      className="w-full bg-white px-3 py-2 text-sm rounded-xl border border-[#5B6777]/20 focus:outline-none focus:border-[#5F7D6E] text-[#1F3A5F]"
                    >
                      <option value="Executive Virtual Assistant">Executive Virtual Assistant</option>
                      <option value="Database & Spreadsheet Specialist">Database & Spreadsheet Specialist</option>
                      <option value="Client Relationship Coordinator">Client Relationship Coordinator</option>
                      <option value="General Admin Support Specialist">General Admin Support Specialist</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1">
                  <label htmlFor="experience" className="text-xs font-sans font-bold text-[#1F3A5F] uppercase tracking-wide">Experience Level</label>
                  <div className="flex flex-wrap gap-3">
                    {['Under 1 Year', '1-2 Years', '3-5 Years', '5+ Years'].map((exp) => (
                      <label key={exp} className="inline-flex items-center space-x-1.5 cursor-pointer">
                        <input
                          type="radio"
                          id={`radio-exp-${exp.replace(' ', '')}`}
                          name="experience"
                          value={exp}
                          checked={form.experience === exp}
                          onChange={() => setForm({ ...form, experience: exp })}
                          className="text-[#1F3A5F] focus:ring-[#5F7D6E]"
                        />
                        <span className="text-xs text-[#1F3A5F] font-sans">{exp}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="space-y-1">
                  <label htmlFor="about" className="text-xs font-sans font-bold text-[#1F3A5F] uppercase tracking-wide">Tell Us About Yourself & Key Tool Familiarity</label>
                  <textarea
                    id="about"
                    rows={3}
                    value={form.about}
                    onChange={(e) => setForm({ ...form, about: e.target.value })}
                    className="w-full bg-white px-3 py-2 text-sm rounded-xl border border-[#5B6777]/20 focus:outline-none focus:border-[#5F7D6E] text-[#1F3A5F] resize-none"
                    placeholder="Tell us what administrative or helper tools you are comfortable utilizing..."
                  />
                </div>

                {/* Resume upload area */}
                <div className="space-y-1">
                  <span className="text-xs font-sans font-bold text-[#1F3A5F] block uppercase tracking-wide">Upload Resume/CV</span>
                  
                  <div
                    onDragEnter={handleDrag}
                    onDragLeave={handleDrag}
                    onDragOver={handleDrag}
                    onDrop={handleDrop}
                    onClick={() => fileInputRef.current?.click()}
                    className={`border border-dashed rounded-2xl p-6 text-center cursor-pointer transition-all duration-200 ${
                      dragActive 
                        ? 'border-[#5F7D6E] bg-[#5F7D6E]/5' 
                        : 'border-[#5B6777]/20 hover:border-[#5F7D6E] bg-white'
                    }`}
                  >
                    <input
                      ref={fileInputRef}
                      type="file"
                      id="resume-file-picker"
                      className="hidden"
                      accept=".pdf,.docx,.doc"
                      onChange={handleFileChange}
                    />
                    
                    {!fileName ? (
                      <div className="space-y-1.5 flex flex-col items-center justify-center">
                        <Upload className="w-8 h-8 text-[#5B6777] stroke-[1]" />
                        <span className="text-xs font-bold text-[#1F3A5F] uppercase tracking-wider">Click to browse files or drag & drop</span>
                        <span className="text-[10px] text-gray-400 font-sans">Max size 10MB • PDF, DOCX supported</span>
                      </div>
                    ) : (
                      <div className="space-y-2 text-left">
                        <div className="flex items-center justify-between text-xs">
                          <span className="font-semibold text-[#1F3A5F] truncate max-w-xs">📎 {fileName}</span>
                          <span className="text-[#5F7D6E] font-mono">
                            {uploadingProgress === 100 ? 'Completed' : `Uploading: ${uploadingProgress}%`}
                          </span>
                        </div>
                        {uploadingProgress !== null && (
                          <div className="w-full h-[2px] bg-gray-150 overflow-hidden">
                            <div 
                              className="h-full bg-[#5F7D6E] transition-all duration-150"
                              style={{ width: `${uploadingProgress}%` }}
                            />
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>

                <button
                  id="careers-submit-button"
                  type="submit"
                  disabled={submitting}
                  className="w-full bg-[#1F3A5F] hover:bg-[#152842] disabled:bg-gray-400 text-white py-3.5 rounded-full text-xs uppercase tracking-wider font-bold transition-colors cursor-pointer flex items-center justify-center space-x-2 shadow-md"
                >
                  {submitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white animate-spin" />
                      <span>Submitting Details...</span>
                    </>
                  ) : (
                    <span>Submit my Application</span>
                  )}
                </button>
              </form>
            ) : (
              <div className="text-center py-10 space-y-4 flex flex-col items-center justify-center font-sans">
                <div className="w-16 h-16 rounded-full border border-[#5B6777]/10 flex items-center justify-center bg-white shadow-sm">
                  <CheckCircle2 className="w-9 h-9 text-[#5F7D6E] stroke-[1.5]" />
                </div>
                <h3 className="text-2xl font-bold text-[#1F3A5F]">
                  Profile logged successfully!
                </h3>
                <p className="text-sm text-[#5B6777] max-w-sm mx-auto leading-relaxed font-sans">
                  Thank you, <strong>{form.fullName}</strong>. Your application details are logged with our friendly recruiting team.
                </p>
                <div className="p-5 bg-white rounded-2xl border border-[#5B6777]/10 max-w-md w-full text-left space-y-2 text-xs text-[#5B6777] shadow-sm">
                  <p>• <strong>Temporary Application ID</strong>: ID-{Math.random().toString(36).substr(2, 9).toUpperCase()}</p>
                  <p>• <strong>Next Step</strong>: We will email you within 24 hours to schedule our quick intro chat.</p>
                </div>
                <button
                  type="button"
                  onClick={handleReset}
                  className="text-xs uppercase tracking-wider font-bold text-[#1F3A5F] hover:text-[#5F7D6E] cursor-pointer border-b border-[#1F3A5F]/20 pt-2"
                >
                  Submit Another Application
                </button>
              </div>
            )}
          </div>
          
        </div>
      </div>
    </section>
  );
}

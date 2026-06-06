/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Calendar as CalendarIcon, Clock, Check, CheckSquare, Sparkles, MapPin, Mail, Phone, CalendarCheck } from 'lucide-react';
import { ContactFormInput, BookingTimeSlot } from '../types';

interface ContactProps {
  selectedServiceInterest: string;
  selectedPricingPlan: string;
}

export default function Contact({ selectedServiceInterest, selectedPricingPlan }: ContactProps) {
  const [form, setForm] = useState<ContactFormInput>({
    name: '',
    company: '',
    email: '',
    phone: '',
    message: '',
    serviceInterest: 'General Business Coordination'
  });

  const [selectedDate, setSelectedDate] = useState<number>(15); // Default to June 15th
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<string>('10:30 AM');
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [bookingConfirmed, setBookingConfirmed] = useState(false);

  // Sync service interest if parent passes selectedServiceInterest
  useEffect(() => {
    if (selectedServiceInterest) {
      setForm(f => ({ ...f, serviceInterest: selectedServiceInterest }));
    }
  }, [selectedServiceInterest]);

  // Sync pricing plans inside message if user clicked a plan
  useEffect(() => {
    if (selectedPricingPlan) {
      setForm(f => ({
        ...f,
        message: `I would like to inquire about getting matched with an assistant under the ${selectedPricingPlan} plan.`
      }));
    }
  }, [selectedPricingPlan]);

  const daysInMonth = Array.from({ length: 30 }, (_, i) => i + 1); // 30 days of June 2026
  const availableSlots = ['09:00 AM', '10:30 AM', '01:00 PM', '02:30 PM', '04:00 PM'];

  // Current year/month references matching local time
  const targetMonthYear = 'June 2026';

  const checkDayOfWeekOffset = (day: number) => {
    // June 1st, 2026 is a Monday (1)
    // Return empty cells for calendar align if needed. Let's start Monday
    return (day + 0) % 7;
  };

  const handleBookingConfirm = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email) return;

    setSubmitting(true);

    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);

      // Persist to local storage
      const existing = localStorage.getItem('assistense_appointments');
      const appointments = existing ? JSON.parse(existing) : [];
      appointments.push({
        id: `APT-${Date.now()}`,
        client: form,
        booking: {
          date: `June ${selectedDate}, 2026`,
          time: selectedTimeSlot
        },
        matchedPlan: selectedPricingPlan || 'None Specified'
      });
      localStorage.setItem('assistense_appointments', JSON.stringify(appointments));
    }, 1100);
  };

  const resetForm = () => {
    setForm({
      name: '',
      company: '',
      email: '',
      phone: '',
      message: '',
      serviceInterest: 'General Business Coordination'
    });
    setSelectedDate(15);
    setSelectedTimeSlot('10:30 AM');
    setSubmitted(false);
  };

  return (
    <section id="contact" className="bg-white py-16 md:py-24 border-t border-[#5B6777]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-[10px] uppercase tracking-[0.15em] text-[#5F7D6E] font-bold block">
            Let's Speak
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1F3A5F] tracking-tight">
            Schedule Your <span className="text-[#5F7D6E]">Discovery Call</span>
          </h2>
          <div className="w-16 h-[1px] bg-[#5F7D6E]/40 mx-auto" />
          <p className="text-sm text-[#5B6777] leading-relaxed font-sans">
            Take the first step to reclaiming your free time. Book a direct focus call on our simple calendar widget, and fill out your details below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Visual Calendar Booking Scheduler */}
          <div className="lg:col-span-5 bg-[#F8F9FA] rounded-2xl border border-[#5B6777]/10 p-6 sm:p-8 space-y-6">
            <div className="space-y-1.5 text-left">
              <span className="text-[9px] font-sans tracking-widest font-bold text-[#5F7D6E] bg-[#5F7D6E]/10 px-2.5 py-1 rounded-full inline-block uppercase">
                Interactive Scheduler
              </span>
              <h3 className="text-lg font-sans font-bold text-[#1F3A5F]">
                1. Select Date & Time
              </h3>
              <p className="text-xs text-[#5B6777] font-sans">
                Choose your target date and time below. Days highlighted with a green indicator maintain active hours.
              </p>
            </div>

            {/* Calendar Widget Shell */}
            <div className="bg-white border border-[#5B6777]/10 rounded-2xl p-4 text-center shadow-sm">
              <div className="flex items-center justify-between font-sans px-2 mb-3">
                <span className="text-sm font-bold text-[#1F3A5F]">{targetMonthYear}</span>
                <span className="text-[9px] font-sans font-bold bg-[#5F7D6E]/10 px-2.5 py-1 text-[#5F7D6E] rounded-full">
                  Active
                </span>
              </div>

              {/* Day headers */}
              <div className="grid grid-cols-7 gap-1 text-[11px] font-sans font-semibold text-gray-400 uppercase mb-2">
                <span>Mo</span>
                <span>Tu</span>
                <span>We</span>
                <span>Th</span>
                <span>Fr</span>
                <span>Sa</span>
                <span>Su</span>
              </div>

              {/* Day cells June 2026 starts on Monday */}
              <div className="grid grid-cols-7 gap-1">
                {daysInMonth.map((day) => {
                  const isSatsun = (day % 7 === 6) || (day % 7 === 0);
                  const isSelected = selectedDate === day;
                  return (
                    <button
                      key={day}
                      id={`calendar-day-button-${day}`}
                      type="button"
                      disabled={isSatsun}
                      onClick={() => setSelectedDate(day)}
                      className={`h-9 rounded-xl font-sans text-xs font-semibold relative flex items-center justify-center cursor-pointer transition-colors ${
                        isSatsun
                          ? 'text-gray-300 pointer-events-none'
                          : isSelected
                          ? 'bg-[#1F3A5F] text-white shadow-sm'
                          : 'bg-white hover:bg-gray-100 text-[#1F3A5F] border border-gray-50'
                      }`}
                    >
                      {day}
                      {!isSatsun && !isSelected && (
                        <span className="absolute bottom-1 w-1.5 h-1.5 rounded-full bg-[#5F7D6E]" />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Time Slot Picker */}
            <div className="space-y-2 text-left">
              <span className="text-xs font-sans font-bold text-[#1F3A5F] block">
                Available Times on June {selectedDate} (EST Zone):
              </span>
              <div className="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-3 gap-2">
                {availableSlots.map((slot) => {
                  const isSlotSelected = selectedTimeSlot === slot;
                  return (
                    <button
                      key={slot}
                      id={`time-slot-picker-${slot.replace(':', '').replace(' ', '')}`}
                      type="button"
                      onClick={() => setSelectedTimeSlot(slot)}
                      className={`py-2 text-xs font-sans font-bold rounded-full border text-center transition-colors cursor-pointer ${
                        isSlotSelected
                          ? 'bg-[#5F7D6E] text-white border-[#5F7D6E] shadow-sm'
                          : 'bg-white hover:bg-gray-50 text-[#1F3A5F] border-[#5B6777]/20 shadow-sm'
                      }`}
                    >
                      {slot}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Live selected visualization block */}
            <div className="p-3 bg-white text-[#5F7D6E] border border-[#5B6777]/10 rounded-2xl text-xs text-left flex items-start space-x-2 shadow-sm">
              <CalendarCheck className="w-4 h-4 mt-0.5 shrink-0" />
              <div className="space-y-0.5 font-sans">
                <span className="font-bold block text-emerald-950 uppercase tracking-widest text-[9px]">Meeting Allocation Set</span>
                <p className="text-[#5B6777]">June {selectedDate}, 2026 at {selectedTimeSlot} (EST)</p>
              </div>
            </div>

            <div className="pt-4 border-t border-[#5B6777]/10 space-y-2 text-xs text-[#5B6777] text-left font-sans">
              <div className="flex items-center space-x-2">
                <Mail className="w-3.5 h-3.5 text-[#5F7D6E]" />
                <span className="font-bold text-[#1F3A5F]">support@assistense.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-3.5 h-3.5 text-[#5F7D6E]" />
                <span className="font-bold text-[#1F3A5F]">+1 (800) 555-0199</span>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Detail Forms */}
          <div className="lg:col-span-7 text-left bg-white p-2 md:p-6 rounded-2xl">
            {!submitted ? (
              <form onSubmit={handleBookingConfirm} className="space-y-6">
                <div className="space-y-1.5">
                  <h3 className="text-lg font-sans font-bold text-[#1F3A5F]">
                    2. Share Your Coordinates
                  </h3>
                  <p className="text-xs text-[#5B6777] font-sans">
                    Complete details below to finalise secure routing parameters. We prepare a brief diagnostics checklist for our call.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label htmlFor="contact-name" className="text-xs font-sans font-bold text-[#1F3A5F] uppercase tracking-wide">Your Name *</label>
                    <input
                      id="contact-name"
                      required
                      type="text"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full bg-[#F8F9FA] px-3.5 py-2.5 text-sm rounded-xl border border-[#5B6777]/20 focus:outline-none focus:border-[#5F7D6E] text-[#1F3A5F] shadow-sm"
                      placeholder="David Vance"
                    />
                  </div>

                  <div className="space-y-1">
                    <label htmlFor="contact-company" className="text-xs font-sans font-bold text-[#1F3A5F] uppercase tracking-wide">Company Name</label>
                    <input
                      id="contact-company"
                      type="text"
                      value={form.company}
                      onChange={(e) => setForm({ ...form, company: e.target.value })}
                      className="w-full bg-[#F8F9FA] px-3.5 py-2.5 text-sm rounded-xl border border-[#5B6777]/20 focus:outline-none focus:border-[#5F7D6E] text-[#1F3A5F] shadow-sm"
                      placeholder="Vance Legal LLC"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label htmlFor="contact-email" className="text-xs font-sans font-bold text-[#1F3A5F] uppercase tracking-wide">Email Address *</label>
                    <input
                      id="contact-email"
                      required
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full bg-[#F8F9FA] px-3.5 py-2.5 text-sm rounded-xl border border-[#5B6777]/20 focus:outline-none focus:border-[#5F7D6E] text-[#1F3A5F] shadow-sm"
                      placeholder="david@vance-legal.com"
                    />
                  </div>

                  <div className="space-y-1">
                    <label htmlFor="contact-phone" className="text-xs font-sans font-bold text-[#1F3A5F] uppercase tracking-wide">Phone Number *</label>
                    <input
                      id="contact-phone"
                      required
                      type="tel"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full bg-[#F8F9FA] px-3.5 py-2.5 text-sm rounded-xl border border-[#5B6777]/20 focus:outline-none focus:border-[#5F7D6E] text-[#1F3A5F] shadow-sm"
                      placeholder="+1 (555) 791-0182"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label htmlFor="contact-service-interest" className="text-xs font-sans font-bold text-[#1F3A5F] uppercase tracking-wide">Core Service Interest</label>
                  <select
                    id="contact-service-interest"
                    value={form.serviceInterest}
                    onChange={(e) => setForm({ ...form, serviceInterest: e.target.value })}
                    className="w-full bg-[#F8F9FA] px-3.5 py-2.5 text-sm rounded-xl border border-[#5B6777]/20 focus:outline-none focus:border-[#5F7D6E] text-[#1F3A5F] shadow-sm"
                  >
                    <option value="Email & Inbox Management">Email & Inbox Management</option>
                    <option value="Calendar & Proactive Scheduling">Calendar & Proactive Scheduling</option>
                    <option value="Appointment Booking Support">Appointment Booking Support</option>
                    <option value="Client Relationship & Followups">Client Relationship & Followups</option>
                    <option value="Specialized Back Office Tasks">Specialized Back Office Tasks</option>
                    <option value="Research & Database Entry">Research & Database Entry</option>
                    <option value="Custom Complex Multi-SOP Workflows">Custom Complex Multi-SOP Workflows</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label htmlFor="contact-message" className="text-xs font-sans font-bold text-[#1F3A5F] uppercase tracking-wide">Briefly Detail Your Administrative Slowdowns</label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full bg-[#F8F9FA] px-3.5 py-2.5 text-sm rounded-xl border border-[#5B6777]/20 focus:outline-none focus:border-[#5F7D6E] text-[#1F3A5F] resize-none shadow-sm"
                    placeholder="E.g., I spend 2 hours matching client follow-up letters in GMail daily..."
                  />
                </div>

                <button
                  id="contact-confirm-button"
                  type="submit"
                  disabled={submitting}
                  className="w-full bg-[#1F3A5F] hover:bg-[#152842] disabled:bg-gray-400 text-white py-3.5 rounded-full text-xs uppercase tracking-wider font-bold transition-colors cursor-pointer flex items-center justify-center space-x-2 shadow-md"
                >
                  {submitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white animate-spin" />
                      <span>Securing Slot June {selectedDate}...</span>
                    </>
                  ) : (
                    <span>Confirm Call Booking</span>
                  )}
                </button>
              </form>
            ) : (
              <div className="text-center py-12 space-y-4 flex flex-col items-center justify-center font-sans">
                <div className="w-16 h-16 rounded-full border border-[#5B6777]/10 flex items-center justify-center bg-white shadow-sm">
                  <CheckSquare className="w-9 h-9 text-[#5F7D6E] stroke-[1.5]" />
                </div>
                <h3 className="text-2xl font-bold text-[#1F3A5F]">
                  Booking Confirmed
                </h3>
                <p className="text-sm text-[#5B6777] max-w-md mx-auto leading-relaxed">
                  Thank you, <strong>{form.name}</strong>. Your 15-minute operational audit has been scheduled on:
                </p>
                <div className="p-5 bg-[#F8F9FA] rounded-2xl border border-[#5B6777]/10 max-w-md w-full text-left space-y-2 shadow-sm">
                  <span className="text-[9px] font-sans uppercase font-bold tracking-wider text-[#5F7D6E]">
                    Live Session Details:
                  </span>
                  <div className="text-sm font-sans font-bold text-[#1F3A5F] flex items-center space-x-2">
                    <span className="text-emerald-800">📅</span>
                    <span>June {selectedDate}, 2026 at {selectedTimeSlot} (EST)</span>
                  </div>
                  <div className="text-xs text-[#5B6777] font-sans">
                    <p>• <strong>Dedicated Partner</strong>: Matching coordinator assignment pending...</p>
                    <p>• <strong>Coordinates</strong>: Registered <strong>{form.email}</strong> under <strong>{form.serviceInterest}</strong>.</p>
                  </div>
                </div>
                <p className="text-xs text-gray-400 leading-relaxed max-w-sm">
                  We sent a calendar invite containing the direct conference web meeting and introductory survey to your email. 
                </p>
                <button
                  type="button"
                  onClick={resetForm}
                  className="text-xs uppercase tracking-wider font-bold text-[#1F3A5F] hover:text-[#5F7D6E] cursor-pointer border-b border-[#1F3A5F]/20 pt-2"
                >
                  Schedule Another Slot / Clear Form
                </button>
              </div>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}

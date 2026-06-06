/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Service {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface PricingPlan {
  name: string;
  price: string;
  period: string;
  popular: boolean;
  tagline: string;
  deliverables: string[];
  features: string[];
}

export interface TrustMetric {
  label: string;
  value: string;
  suffix?: string;
  description: string;
}

export interface FeatureBenefit {
  title: string;
  description: string;
}

export interface ContactFormInput {
  name: string;
  company: string;
  email: string;
  phone: string;
  message: string;
  serviceInterest: string;
}

export interface CareerFormInput {
  fullName: string;
  email: string;
  phone: string;
  role: string;
  experience: string;
  about: string;
  resumeUrl: string;
}

export interface BookingTimeSlot {
  date: string;
  time: string;
}

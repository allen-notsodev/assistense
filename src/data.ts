/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Service, PricingPlan, TrustMetric, FeatureBenefit } from './types';

export const TRUST_METRICS: TrustMetric[] = [
  {
    label: 'Clients Supported',
    value: '250',
    suffix: '+',
    description: 'Active professional businesses trust our team.'
  },
  {
    label: 'Tasks Completed',
    value: '180,000',
    suffix: '+',
    description: 'Successful administrative & operations tasks logged.'
  },
  {
    label: 'Hours Reclaimed',
    value: '45,000',
    suffix: ' hrs',
    description: 'Time given back to lawyers, dentists & consultants.'
  },
  {
    label: 'Assistant Retention',
    value: '94',
    suffix: '%',
    description: 'Industry-leading tenure because we treat people fairly.'
  }
];

export const VALUE_PROPS = [
  {
    title: 'Reliable Support',
    description: 'Work with trained, dedicated assistants who integrate into your workflow and keep your business running smoothly day in, day out.'
  },
  {
    title: 'More Time for Growth',
    description: 'Focus entirely on your high-value expertise while administrative friction, routine follow-ups, and calendar details are expertly handled.'
  },
  {
    title: 'Built Around People',
    description: 'We believe great client service starts from within. We treat our assistants with great professional respect, fair pay, and a supportive environment.'
  }
];

export const SERVICES: Service[] = [
  {
    id: 'email-mgt',
    title: 'Email Management',
    description: 'Inbox triage, sorting, spam filtering, and drafting standard replies so you only see what is critical.',
    iconName: 'Mail'
  },
  {
    id: 'cal-mgt',
    title: 'Calendar Management',
    description: 'Proactive scheduling, avoiding double bookings, setting buffers, and coordinating internal schedules elegantly.',
    iconName: 'Calendar'
  },
  {
    id: 'appt-scheduling',
    title: 'Appointment Scheduling',
    description: 'Booking patient appointments, client consultations, discovery calls, and managing zoom setup or confirmations.',
    iconName: 'Clock'
  },
  {
    id: 'follow-ups',
    title: 'Client Follow-Ups',
    description: 'Reaching out to prospective clients for paperwork, following up on invoices, and securing post-session reviews.',
    iconName: 'MessageSquareText'
  },
  {
    id: 'admin-supp',
    title: 'Administrative Support',
    description: 'Document formatting, PDF compiling, digital filing, travel coordination, and standard back-office tasks.',
    iconName: 'FileText'
  },
  {
    id: 'research-data',
    title: 'Research and Data Entry',
    description: 'Industry reports, competitive analysis, updating customer profiles, CRM entry, and spreadsheet maintenance.',
    iconName: 'Database'
  },
  {
    id: 'customer-comm',
    title: 'Customer Communication',
    description: 'Handling incoming phone calls, responding to web messages, chat support, and managing client queries warmly.',
    iconName: 'PhoneCall'
  },
  {
    id: 'biz-coordination',
    title: 'Business Coordination',
    description: 'Liaising with vendors, billing followups, managing team assignments, projects tracking, and organizing files.',
    iconName: 'Layers'
  }
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    name: 'Starter',
    price: '$950',
    period: '/month',
    popular: false,
    tagline: 'Ideal for solo professionals needing focused daily email & calendar support.',
    deliverables: [
      'Up to 10 hours of active support per week',
      'Shared virtual assistant (maximum of 2 clients)',
      'Direct communication channel (Slack / email)',
      'Standard next-day turnaround time'
    ],
    features: [
      'Email triage & drafting',
      'Calendar scheduling',
      'Standard data entry',
      'End-of-day daily digest summary'
    ]
  },
  {
    name: 'Professional',
    price: '$1,850',
    period: '/month',
    popular: true,
    tagline: 'Most popular. Ideal for growing firms and active consulting practices.',
    deliverables: [
      'Up to 20 hours of active support per week',
      'Dedicated primary assistant + backups',
      'Dedicated local phone line forwarding setup',
      'Same-day priority turnaround (within 4 hours)'
    ],
    features: [
      'Everything in Starter',
      'Client follow-ups & CRM logging',
      'Invoice creation & simple billing follows',
      'Basic travel scheduling',
      'Weekly strategy check-ins'
    ]
  },
  {
    name: 'Dedicated',
    price: '$3,400',
    period: '/month',
    popular: false,
    tagline: 'A full-time supportive extension of your growing company operations.',
    deliverables: [
      'Up to 40 hours of full-time dedicated support',
      'Fully exclusive, dedicated virtual assistant',
      'Guaranteed immediate response window during business hours',
      'Direct systems integration matching'
    ],
    features: [
      'Everything in Professional',
      'Vendor & third-party management',
      'Advanced executive support & project coordination',
      'Comprehensive data research & custom reporting',
      'Direct customer phone & text handling'
    ]
  }
];

export const CLIENTS_CHOOSE_US_BENEFITS: FeatureBenefit[] = [
  {
    title: 'Dedicated Support',
    description: 'You work with the details, timezone, and personality-matched assistant who understands your unique business, industry jargon, and client preferences.'
  },
  {
    title: 'Consistent Communication',
    description: 'Establish predictable response times. Benefit from seamless daily updates, clear documentation of operational hand-offs, and dependable coverage.'
  },
  {
    title: 'Flexible Engagement',
    description: 'No long-term lock-in contracts. Scale hours up or down based on your seasonal demand with direct transparent tracking logs.'
  },
  {
    title: 'Professional Assistants',
    description: 'Every Assistense professional is carefully vetted, trained in standard tools (Slack, HubSpot, GSuite, Notion), and backed by senior operational leadership.'
  },
  {
    title: 'Transparent Processes',
    description: 'Know exactly what is completed, how your hours are invested, and access standard SOPs built and adapted precisely for you.'
  },
  {
    title: 'Fair Treatment of Assistants',
    description: 'We match industry-best compensations, establish healthy operational guardrails against burnout, and provide continuous mentorship. Happy assistants equal premium quality.'
  }
];

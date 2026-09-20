"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  MessageSquare,
  Compass,
  Sparkles,
  Zap,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Send,
  Building2,
  Users,
  Layers,
  PhoneCall,
  Globe2,
} from "lucide-react";

export default function HomePage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    inquiryType: "CRM & Omnichannel Inbox",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-emerald-500/20 selection:text-emerald-400">
      {/* Navigation */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-slate-950/80 border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-500 to-teal-400 flex items-center justify-center font-bold text-slate-950 text-xl shadow-lg shadow-emerald-500/20">
              P
            </div>
            <span className="text-xl font-bold tracking-tight text-white">
              Plegmo
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
            <a href="#solutions" className="hover:text-emerald-400 transition-colors">
              Solutions
            </a>
            <a href="#crm" className="hover:text-emerald-400 transition-colors">
              Plegmo Desk
            </a>
            <a href="#architecture" className="hover:text-emerald-400 transition-colors">
              Enterprise Tech
            </a>
            <a href="#about" className="hover:text-emerald-400 transition-colors">
              About Plegmo
            </a>
          </nav>

          <div className="flex items-center gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold text-sm transition-all shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40"
            >
              Contact Sales
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-24 pb-20 md:pt-32 md:pb-28 overflow-hidden">
        {/* Ambient Gradient Glows */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-tr from-emerald-600/20 to-teal-500/10 blur-[120px] pointer-events-none rounded-full" />

        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/90 border border-emerald-500/30 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-8 shadow-inner">
            <Sparkles className="w-3.5 h-3.5" />
            Software &amp; Digital Infrastructure for Travel
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white max-w-5xl mx-auto leading-[1.1] mb-6">
            Intelligent Software Engineered for the{" "}
            <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
              Travel &amp; Tourism Industry
            </span>
          </h1>

          <p className="max-w-3xl mx-auto text-lg sm:text-xl text-slate-400 leading-relaxed mb-10">
            Plegmo builds high-performance operational systems, omnichannel conversational CRMs, and automated acquisition infrastructure that help travel agencies and tour operators scale seamlessly.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
            <a
              href="#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-base transition-all shadow-xl shadow-emerald-500/25"
            >
              Get in Touch
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#solutions"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-850 border border-slate-800 text-slate-200 font-semibold text-base transition-all hover:border-slate-700"
            >
              Explore Solutions
            </a>
          </div>

          {/* Social Proof Strip */}
          <div className="mt-16 pt-10 border-t border-slate-900 flex flex-wrap items-center justify-center gap-8 md:gap-14 text-slate-400 text-xs sm:text-sm font-medium">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-emerald-400" />
              <span>Official Meta Tech Provider Architecture</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-emerald-400" />
              <span>Sub-Second Omnichannel Webhooks</span>
            </div>
            <div className="flex items-center gap-2">
              <Building2 className="w-5 h-5 text-emerald-400" />
              <span>Enterprise Isolation &amp; Security</span>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solutions" className="py-24 bg-slate-900/40 border-y border-slate-900 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-xs font-bold uppercase tracking-widest text-emerald-400 mb-3">
              What We Build
            </h2>
            <p className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              A Connected Suite for Modern Travel Enterprises
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1: Plegmo Desk */}
            <div
              id="crm"
              className="group p-8 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-emerald-500/40 transition-all duration-300 flex flex-col justify-between hover:shadow-2xl hover:shadow-emerald-500/5"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Plegmo Desk</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  The unified omnichannel CRM inbox for travel agents. Seamlessly connects WhatsApp Cloud API, Instagram Direct, and Messenger into a synchronized agent workspace with zero message loss.
                </p>
                <ul className="space-y-2.5 text-sm text-slate-300 mb-8">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>WhatsApp Coexistence support</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Travel stage pipeline (New to Booked)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Real-time agent oversight &amp; QA</span>
                  </li>
                </ul>
              </div>
              <div className="pt-4 border-t border-slate-800/80 text-emerald-400 text-sm font-semibold flex items-center gap-1.5">
                Core CRM Product <ArrowRight className="w-4 h-4" />
              </div>
            </div>

            {/* Card 2: Discovery & Demand Engine */}
            <div className="group p-8 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-emerald-500/40 transition-all duration-300 flex flex-col justify-between hover:shadow-2xl hover:shadow-emerald-500/5">
              <div>
                <div className="w-12 h-12 rounded-xl bg-teal-500/10 border border-teal-500/20 text-teal-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Compass className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Lead Discovery Engine</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  Automated intelligence pipeline that discovers, parses, and scores high-intent travel inquiries across digital ecosystems, turning casual inquiries into booked itineraries.
                </p>
                <ul className="space-y-2.5 text-sm text-slate-300 mb-8">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" />
                    <span>Automated traveler intent scoring</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" />
                    <span>Destination demand intelligence</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" />
                    <span>Direct CRM pipeline routing</span>
                  </li>
                </ul>
              </div>
              <div className="pt-4 border-t border-slate-800/80 text-teal-400 text-sm font-semibold flex items-center gap-1.5">
                Growth Infrastructure <ArrowRight className="w-4 h-4" />
              </div>
            </div>

            {/* Card 3: Enterprise Travel Tech */}
            <div className="group p-8 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-emerald-500/40 transition-all duration-300 flex flex-col justify-between hover:shadow-2xl hover:shadow-emerald-500/5">
              <div>
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Globe2 className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Custom Digital Architecture</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  Bespoke, high-speed digital platforms and booking engines engineered specifically for tour operators and safari providers with complex inventory and localized payment flows.
                </p>
                <ul className="space-y-2.5 text-sm text-slate-300 mb-8">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>High-converting web experiences</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>Custom itinerary &amp; quotation generators</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>Full localized currency &amp; payment support</span>
                  </li>
                </ul>
              </div>
              <div className="pt-4 border-t border-slate-800/80 text-cyan-400 text-sm font-semibold flex items-center gap-1.5">
                Engineering Services <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology & Architecture Highlights */}
      <section id="architecture" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-4">
                Enterprise Reliability
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-6">
                Built to Support Millions of Customer Conversations
              </h2>
              <p className="text-slate-400 leading-relaxed mb-8">
                In travel operations, a delayed response is a lost booking. Plegmo operates as a verified Tech Provider, orchestrating direct Meta Cloud APIs with zero intermediary lock-in.
              </p>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="p-3 bg-slate-900 border border-slate-800 rounded-xl text-emerald-400 shrink-0 h-fit">
                    <Layers className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-1">Non-Destructive WhatsApp Coexistence</h4>
                    <p className="text-sm text-slate-400 leading-relaxed">
                      Agencies maintain their existing phone numbers and active mobile WhatsApp Business apps while running simultaneously on our cloud infrastructure with 6-month historical sync.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="p-3 bg-slate-900 border border-slate-800 rounded-xl text-teal-400 shrink-0 h-fit">
                    <PhoneCall className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-1">Per-Channel Compliance Automation</h4>
                    <p className="text-sm text-slate-400 leading-relaxed">
                      Automated 24-hour service window calculation for WhatsApp and 7-day human-agent tagging for Messenger and Instagram Direct.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="p-3 bg-slate-900 border border-slate-800 rounded-xl text-cyan-400 shrink-0 h-fit">
                    <Users className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-1">Conversation Attribution &amp; Audit Logs</h4>
                    <p className="text-sm text-slate-400 leading-relaxed">
                      Complete visibility into response times, agent handover status, quote delivery rates, and customer sentiment.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Visual Architecture Box */}
            <div className="p-8 rounded-3xl bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800 shadow-2xl relative">
              <div className="text-xs font-mono text-emerald-400 uppercase tracking-wider mb-6 flex items-center justify-between">
                <span>// Plegmo Systems Architecture</span>
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  Live Cluster
                </span>
              </div>

              <div className="space-y-4 font-mono text-xs">
                <div className="p-4 rounded-xl bg-slate-950 border border-slate-850">
                  <div className="text-slate-500 mb-1">Omnichannel Input Layer</div>
                  <div className="text-white font-medium flex items-center justify-between">
                    <span>Meta Cloud API (WhatsApp + IG + FB)</span>
                    <span className="text-emerald-400">Webhook Sync</span>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-950 border border-slate-850">
                  <div className="text-slate-500 mb-1">Orchestration &amp; Dispatch</div>
                  <div className="text-white font-medium flex items-center justify-between">
                    <span>Plegmo Core Router + Task Workers</span>
                    <span className="text-teal-400">&lt; 50ms Latency</span>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-950 border border-slate-850">
                  <div className="text-slate-500 mb-1">Operational State &amp; Storage</div>
                  <div className="text-white font-medium flex items-center justify-between">
                    <span>Dedicated Isolated Databases (PostgreSQL 16)</span>
                    <span className="text-cyan-400">Encrypted</span>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-950 border border-slate-850">
                  <div className="text-slate-500 mb-1">User Surface</div>
                  <div className="text-white font-medium flex items-center justify-between">
                    <span>Plegmo Desk React 19 Workspace</span>
                    <span className="text-emerald-400">Realtime SSE</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-slate-900/30 border-t border-slate-900">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-xs font-bold uppercase tracking-widest text-emerald-400 mb-3">
            About Plegmo
          </h2>
          <p className="text-3xl font-bold text-white tracking-tight mb-6">
            Empowering the Next Generation of Tourism Companies
          </p>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed mb-6">
            Headquartered in Egypt and serving regional travel leaders, Plegmo was founded with a singular purpose: replacing fragmented phone messaging and spreadsheet chaos with enterprise-grade travel operating software.
          </p>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            From premier desert safari operators to international destination management companies, we design tools that respect how travel teams actually work on the ground.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 relative">
        <div className="max-w-3xl mx-auto px-6">
          <div className="p-8 sm:p-12 rounded-3xl bg-slate-900 border border-slate-800 shadow-2xl">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-white tracking-tight mb-3">
                Partner with Plegmo
              </h2>
              <p className="text-slate-400 text-sm sm:text-base">
                Ready to upgrade your agency&apos;s messaging, lead generation, or custom digital infrastructure? Send us a message.
              </p>
            </div>

            {submitted ? (
              <div className="p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center">
                <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto mb-3" />
                <h3 className="text-xl font-bold text-white mb-2">Message Sent Successfully</h3>
                <p className="text-sm text-slate-300">
                  Thank you for reaching out. Our engineering and solutions team will contact you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Ziad Tareq"
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-600 focus:outline-none focus:border-emerald-500 transition-colors text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                      Work Email
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="ziad@company.com"
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-600 focus:outline-none focus:border-emerald-500 transition-colors text-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                      Company / Travel Agency
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="e.g. Dahab Toura"
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-600 focus:outline-none focus:border-emerald-500 transition-colors text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                      Solution of Interest
                    </label>
                    <select
                      value={formData.inquiryType}
                      onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white focus:outline-none focus:border-emerald-500 transition-colors text-sm"
                    >
                      <option>Plegmo Desk (Travel CRM)</option>
                      <option>Lead Discovery Engine</option>
                      <option>Custom Travel Website / Booking Engine</option>
                      <option>General Tech Provider Partnership</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                    Message or Project Scope
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your team size, messaging volume, or current tech needs..."
                    className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-600 focus:outline-none focus:border-emerald-500 transition-colors text-sm"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm sm:text-base transition-all flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/25"
                >
                  <Send className="w-4 h-4" />
                  Submit Inquiry
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-900 bg-slate-950 py-12 text-sm text-slate-500">
        <div className="max-w-7xl mx-auto px-6 space-y-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-emerald-500 flex items-center justify-center font-bold text-slate-950 text-base">
                P
              </div>
              <span className="font-semibold text-white">Plegmo</span>
              <span className="text-slate-600">|</span>
              <span>Software &amp; Digital Infrastructure</span>
            </div>

            <div className="flex items-center gap-6 text-slate-400">
              <Link href="/privacy" className="hover:text-emerald-400 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/data-deletion" className="hover:text-emerald-400 transition-colors">
                Data Deletion
              </Link>
              <Link href="/terms" className="hover:text-emerald-400 transition-colors">
                Terms of Service
              </Link>
              <a href="mailto:contact@plegmo.com" className="hover:text-emerald-400 transition-colors">
                contact@plegmo.com
              </a>
            </div>

            <div>
              &copy; {new Date().getFullYear()} Plegmo. All rights reserved.
            </div>
          </div>

          <div className="border-t border-slate-900/80 pt-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 text-xs text-slate-400">
            <div>
              <span className="text-slate-300 font-medium">Legal Entity: </span>
              مصطفي محمود احمد محمود وشركاه - ابناء النيل لانشاء المطاعم والتجارة العامة والتوريدات (Abnaa El Nile for Restaurants, General Trading &amp; Supplies)
            </div>
            <div className="flex flex-wrap items-center gap-4 text-slate-400">
              <span>
                <strong className="text-slate-300 font-medium">Address: </strong>
                159 حي الملتقى العربي، مساكن الشيراتون، النزهة، القاهرة (159 Arab Forum, Sheraton, Cairo)
              </span>
              <span>
                <strong className="text-slate-300 font-medium">Tax ID: </strong>
                553-212-044
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

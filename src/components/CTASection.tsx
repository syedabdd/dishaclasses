"use client";

import { ArrowRight, Zap, Star, Shield, Clock } from "lucide-react";
import Link from "next/link";

const benefits = [
  { icon: "🎓", text: "Expert Faculty" },
  { icon: "📱", text: "Mobile App Access" },
  { icon: "🏆", text: "Certified Courses" },
  { icon: "💬", text: "24/7 Support" },
];

export default function CTASection() {

  return (
    <section className="py-24 relative overflow-hidden bg-[var(--bg-color)]">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-brand-blue)]/5 to-[var(--color-brand-red)]/5" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--color-brand-blue)]/30 to-transparent" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Live indicator */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-300 text-sm font-medium mb-8">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
          Enrollments Open — Limited Seats Available
        </div>

        {/* Heading */}
        <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black text-[var(--fg-color)] leading-tight mb-6">
          Your Dream Career
          <br />
          is <span className="text-[var(--color-brand-blue)]">One Step Away</span>
        </h2>

        <p className="text-xl text-[var(--text-muted)] max-w-2xl mx-auto mb-10 leading-relaxed font-semibold">
          Join thousands of students who made the smart choice. Expert guidance,
          structured learning, and proven results — all in one place.
        </p>

        {/* Benefits */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
          {benefits.map((b, i) => (
            <div
              key={i}
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[var(--card-bg)] border border-[var(--card-border)] text-[var(--fg-color)] text-sm font-semibold"
            >
              <span>{b.icon}</span>
              <span className="font-semibold">{b.text}</span>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <Link
            id="cta-enroll-btn"
            href="/contact"
            className="btn-primary group flex items-center gap-3 px-10 py-5 rounded-xl text-white font-black text-xl w-full sm:w-auto justify-center shadow-md"
          >
            <Zap className="w-6 h-6" />
            Enroll Now — Free Trial
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>

          <Link
            id="cta-counseling-btn"
            href="/contact"
            className="group flex items-center gap-3 px-10 py-5 rounded-xl bg-[var(--card-bg)] border border-[var(--card-border)] text-[var(--fg-color)] font-bold text-lg hover:border-[var(--color-brand-blue)] transition-all duration-300 w-full sm:w-auto justify-center shadow-sm"
          >
            Book Free Counseling
          </Link>
        </div>

        {/* Trust signals */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-[var(--text-muted)] text-sm font-semibold">
          <div className="flex items-center gap-1.5">
            <Shield className="w-4 h-4 text-emerald-500" />
            <span>30-Day Money Back Guarantee</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Star className="w-4 h-4 text-amber-500" />
            <span>4.9/5 Average Rating</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Clock className="w-4 h-4 text-[var(--color-brand-blue)]" />
            <span>Instant Access After Enrollment</span>
          </div>
        </div>
      </div>
    </section>
  );
}

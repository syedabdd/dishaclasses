"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Award, Shield, Users, CheckCircle, Target, BookOpen } from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[var(--bg-color)] py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
          
          {/* Top Banner */}
          <div className="text-center mb-16">
            <span className="px-3 py-1 bg-[var(--color-brand-blue)]/10 text-[var(--color-brand-blue-light)] text-xs font-bold uppercase rounded-lg">
              Who We Are
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[var(--fg-color)] tracking-tight mt-4 mb-6">
              Empowering Students <br />
              <span className="text-[var(--color-brand-blue)]">Since 2016</span>
            </h1>
            <p className="text-lg text-[var(--text-muted)] font-medium leading-relaxed max-w-3xl mx-auto">
              Disha Online Classes is India's leading digital academy, providing structured online learning programs across competitive exams, academics, and professional development.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-[var(--card-bg)] border border-[var(--card-border)] rounded-3xl p-8 shadow-sm">
              <div className="w-12 h-12 rounded-2xl bg-[var(--color-brand-blue)]/10 text-[var(--color-brand-blue-light)] flex items-center justify-center mb-6">
                <Target className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-black text-[var(--fg-color)] mb-3">Our Mission</h2>
              <p className="text-sm text-[var(--text-muted)] leading-relaxed font-semibold">
                To democratize premium exam preparation and skill coaching, making top-tier educators from IITs, IIMs, and civil services accessible to every single student across India at an affordable investment.
              </p>
            </div>

            <div className="bg-[var(--card-bg)] border border-[var(--card-border)] rounded-3xl p-8 shadow-sm">
              <div className="w-12 h-12 rounded-2xl bg-[var(--color-brand-red)]/10 text-[var(--color-brand-red-light)] flex items-center justify-center mb-6">
                <BookOpen className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-black text-[var(--fg-color)] mb-3">Our Vision</h2>
              <p className="text-sm text-[var(--text-muted)] leading-relaxed font-semibold">
                To foster an outcome-based digital learning ecosystems where self-paced study plans, comprehensive mock evaluations, and personal mentors synergize to unlock student capabilities.
              </p>
            </div>
          </div>

          {/* Key pillars */}
          <div className="bg-[var(--card-bg)] border border-[var(--card-border)] rounded-3xl p-8 md:p-12 shadow-sm mb-16">
            <h2 className="text-3xl font-black text-[var(--fg-color)] text-center mb-10">Our Core Pillars</h2>
            
            <div className="grid sm:grid-cols-3 gap-8">
              <div className="text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center mx-auto shadow-sm">
                  <Shield className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-lg text-[var(--fg-color)]">Absolute Integrity</h3>
                <p className="text-xs text-[var(--text-muted)] leading-relaxed font-medium">We deliver exactly what we promise—comprehensive syllabus maps, live interactions, and timely evaluations.</p>
              </div>

              <div className="text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-[var(--color-brand-blue)]/10 text-[var(--color-brand-blue-light)] flex items-center justify-center mx-auto shadow-sm">
                  <Users className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-lg text-[var(--fg-color)]">Expert Faculty</h3>
                <p className="text-xs text-[var(--text-muted)] leading-relaxed font-medium">Mentors hold doctorates, IIT/AIIMS degrees, or professional credentials, ensuring expert-level subject mastery.</p>
              </div>

              <div className="text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-[var(--color-brand-red)]/10 text-[var(--color-brand-red-light)] flex items-center justify-center mx-auto shadow-sm">
                  <Award className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-lg text-[var(--fg-color)]">Outcome Focused</h3>
                <p className="text-xs text-[var(--text-muted)] leading-relaxed font-medium">Our mock series are fully aligned with current exam dynamics to track and maximize actual results.</p>
              </div>
            </div>
          </div>

          {/* CTA Banner */}
          <div className="text-center bg-gradient-to-r from-[var(--color-brand-blue)]/5 to-[var(--color-brand-red)]/5 border border-[var(--card-border)] rounded-3xl p-8 md:p-12">
            <h2 className="text-2xl sm:text-3xl font-black text-[var(--fg-color)] mb-4">
              Ready to Advance Your Goals?
            </h2>
            <p className="text-sm text-[var(--text-muted)] font-medium mb-8 max-w-xl mx-auto">
              Join 50,000+ active students pursuing IAS, JEE, NEET, or specialized professional career bundles.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/courses" className="btn-primary px-8 py-3.5 rounded-xl font-bold text-sm text-center">
                Explore Courses
              </Link>
              <Link href="/contact" className="px-8 py-3.5 rounded-xl border border-[var(--card-border)] bg-[var(--card-bg)] text-[var(--fg-color)] hover:border-[var(--color-brand-blue)] font-bold text-sm text-center transition-all">
                Contact Counselor
              </Link>
            </div>
          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}

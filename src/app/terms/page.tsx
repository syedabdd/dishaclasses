"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FileText, Shield, Sparkles, Scale } from "lucide-react";

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[var(--bg-color)] py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
          
          <div className="text-center mb-12">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[var(--fg-color)] tracking-tight">
              Terms of <span className="text-[var(--color-brand-blue)]">Service</span>
            </h1>
            <p className="text-xs text-[var(--text-muted)] font-bold mt-2 uppercase tracking-widest">
              Last Updated: May 2026
            </p>
          </div>

          <div className="bg-[var(--card-bg)] border border-[var(--card-border)] rounded-3xl p-6 md:p-10 shadow-sm space-y-8">
            <div className="prose dark:prose-invert max-w-none text-sm text-[var(--fg-color)] leading-relaxed space-y-6">
              
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-[var(--color-brand-blue)]/10 text-[var(--color-brand-blue-light)] flex items-center justify-center flex-shrink-0">
                  <FileText className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-[var(--fg-color)] mb-2">1. Terms Acceptance</h2>
                  <p className="text-[var(--text-muted)] font-semibold">
                    By registering at Disha Online Classes, enrolling in our standard, crash, or bundle packages, you verify that you agree to all structural parameters outlined on this platform.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-[var(--color-brand-red)]/10 text-[var(--color-brand-red-light)] flex items-center justify-center flex-shrink-0">
                  <Shield className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-[var(--fg-color)] mb-2">2. Usage Rules</h2>
                  <p className="text-[var(--text-muted)] font-semibold">
                    All lectures, study notes, mind maps, and mock examinations are licensed only for personal, academic use. Recording, redistribution, or illegal reproduction of proprietary curriculum violates standard terms.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-500 flex items-center justify-center flex-shrink-0">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-[var(--fg-color)] mb-2">3. Online Conduct</h2>
                  <p className="text-[var(--text-muted)] font-semibold">
                    Students are expected to maintain professional conduct during interactive live sessions, chat boards, and group discussions. Disruptive behavior may lead to temporary suspension without compensation.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center flex-shrink-0">
                  <Scale className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-[var(--fg-color)] mb-2">4. Disclaimers</h2>
                  <p className="text-[var(--text-muted)] font-semibold">
                    While we supply industry-leading mock series, IIT/IAS mentors, and comprehensive coverage, passing rates depend strictly on the individual effort, self-study commitment, and execution.
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}

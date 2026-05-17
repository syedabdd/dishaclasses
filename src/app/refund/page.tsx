"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { BadgeCheck, RefreshCcw, Landmark, ShieldAlert } from "lucide-react";

export default function RefundPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[var(--bg-color)] py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
          
          <div className="text-center mb-12">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[var(--fg-color)] tracking-tight">
              Refund & Cancellation <span className="text-[var(--color-brand-blue)]">Policy</span>
            </h1>
            <p className="text-xs text-[var(--text-muted)] font-bold mt-2 uppercase tracking-widest">
              Last Updated: May 2026
            </p>
          </div>

          <div className="bg-[var(--card-bg)] border border-[var(--card-border)] rounded-3xl p-6 md:p-10 shadow-sm space-y-8">
            <div className="prose dark:prose-invert max-w-none text-sm text-[var(--fg-color)] leading-relaxed space-y-6">
              
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-[var(--color-brand-blue)]/10 text-[var(--color-brand-blue-light)] flex items-center justify-center flex-shrink-0">
                  <BadgeCheck className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-[var(--fg-color)] mb-2">1. 30-Day Guarantee</h2>
                  <p className="text-[var(--text-muted)] font-semibold">
                    We offer a 30-day risk-free money-back guarantee on all our standard courses. If you are not fully satisfied with our live sessions, study materials, or coaching, you can submit a query.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-[var(--color-brand-red)]/10 text-[var(--color-brand-red-light)] flex items-center justify-center flex-shrink-0">
                  <RefreshCcw className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-[var(--fg-color)] mb-2">2. Processing Period</h2>
                  <p className="text-[var(--text-muted)] font-semibold">
                    Once a refund request is approved, the funds will be credited back to your original payment method (UPI, bank account, or credit card) within 5-7 working days.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-500 flex items-center justify-center flex-shrink-0">
                  <Landmark className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-[var(--fg-color)] mb-2">3. Exceptions</h2>
                  <p className="text-[var(--text-muted)] font-semibold">
                    Refunds are not applicable if more than 20% of the structured course curriculum has been watched or if the student has downloaded more than 10 premium PDF books/notes resources.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center flex-shrink-0">
                  <ShieldAlert className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-[var(--fg-color)] mb-2">4. Support Queries</h2>
                  <p className="text-[var(--text-muted)] font-semibold">
                    For all cancellation queries, please contact our support desk directly at support@dishaclasses.in or message us at +91 98765 43210.
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

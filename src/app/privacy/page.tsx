"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ShieldAlert, Eye, Lock, FileCheck } from "lucide-react";

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[var(--bg-color)] py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
          
          <div className="text-center mb-12">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[var(--fg-color)] tracking-tight">
              Privacy <span className="text-[var(--color-brand-blue)]">Policy</span>
            </h1>
            <p className="text-xs text-[var(--text-muted)] font-bold mt-2 uppercase tracking-widest">
              Last Updated: May 2026
            </p>
          </div>

          <div className="bg-[var(--card-bg)] border border-[var(--card-border)] rounded-3xl p-6 md:p-10 shadow-sm space-y-8">
            <div className="prose dark:prose-invert max-w-none text-sm text-[var(--fg-color)] leading-relaxed space-y-6">
              
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-[var(--color-brand-blue)]/10 text-[var(--color-brand-blue-light)] flex items-center justify-center flex-shrink-0">
                  <Eye className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-[var(--fg-color)] mb-2">1. Data We Collect</h2>
                  <p className="text-[var(--text-muted)] font-semibold">
                    We collect personal information necessary to deliver our educational services, including name, email, phone number, and selected academic goals when you register or submit a query.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-[var(--color-brand-red)]/10 text-[var(--color-brand-red-light)] flex items-center justify-center flex-shrink-0">
                  <Lock className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-[var(--fg-color)] mb-2">2. Security Compliance</h2>
                  <p className="text-[var(--text-muted)] font-semibold">
                    All payment credentials, registration data, and mock assessment logs are processed using industry-standard encrypted gateways. We implement strict security tokens to safeguard user accounts.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center flex-shrink-0">
                  <FileCheck className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-[var(--fg-color)] mb-2">3. Third-party Links</h2>
                  <p className="text-[var(--text-muted)] font-semibold">
                    We do not sell, rent, or lease our student database to third parties. Data is utilized exclusively by Disha Online Classes counselors to assist your course onboarding.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-500 flex items-center justify-center flex-shrink-0">
                  <ShieldAlert className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-[var(--fg-color)] mb-2">4. Your Rights</h2>
                  <p className="text-[var(--text-muted)] font-semibold">
                    Students retain full authority to request data deletion, updates, or query history records at any point by sending an inquiry to our support email at support@dishaclasses.in.
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

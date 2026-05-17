"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[var(--bg-color)] py-10">
        <div className="mt-10">
          <ContactSection />
        </div>
      </main>
      <Footer />
    </>
  );
}

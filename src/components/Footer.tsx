"use client";

import { BookOpen, Heart, ArrowUp } from "lucide-react";
import { toast } from "react-hot-toast";

const footerLinks = {
  Company: [
    { label: "About Us", href: "/about" },
    { label: "Our Mission", href: "/about" },
    { label: "Careers", href: "/about" },
    // { label: "Blog", href: "/" },
    // { label: "Press", href: "/" },
  ],
  Courses: [
    { label: "Bihar Board 12th", href: "/courses" },
    { label: "Bihar Board 11th", href: "/courses" },
    { label: "Bihar Board 10th", href: "/courses" },
    { label: "Bihar Board 9th", href: "/courses" },
    { label: "Foundation Courses", href: "/courses" },
  ],
  Support: [
    { label: "Contact Us", href: "/#contact" },
    { label: "Help Center", href: "/" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
    { label: "Refund Policy", href: "/refund" },
    // { label: "Cookie Policy", href: "/privacy" },
  ],
};

const socials = [
  { emoji: "▶️", href: "/", color: "hover:text-red-400", label: "YouTube" },
  { emoji: "📷", href: "/", color: "hover:text-pink-400", label: "Instagram" },
  { emoji: "𝕏", href: "/", color: "hover:text-sky-400", label: "Twitter" },
  { emoji: "f", href: "/", color: "hover:text-blue-400", label: "Facebook" },
  { emoji: "in", href: "/", color: "hover:text-blue-500", label: "LinkedIn" },
];

import Link from "next/link";

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative bg-[var(--card-bg)] border-t border-[var(--card-border)] mt-auto">
      {/* Top gradient line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer content */}
        <div className="py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            {/* Logo */}
            <div className="flex items-center gap-3 mb-5">
              <div className="relative">
                <div className="w-10 h-10 rounded-full overflow-hidden shadow-lg border-2 border-white dark:border-gray-800 bg-white">
                  <img src="/disha.webp" alt="Disha Online Classes Logo" className="w-full h-full object-cover scale-[1.25] transform" />
                </div>
              </div>
              <div>
                <span className="text-xl font-black text-[var(--color-brand-red)]">Disha</span>
                <span className="text-xl font-black text-[var(--color-brand-blue)] dark:text-blue-400"> Online</span>
                <div className="text-[10px] text-[var(--text-muted)] font-extrabold tracking-[0.2em] uppercase">
                  Classes
                </div>
              </div>
            </div>

            <p className="text-[var(--text-muted)] text-sm leading-relaxed mb-6">
              Empowering students across India with world-class online education.
              Expert faculty, structured courses, and proven results since 2015.
            </p>

            {/* Socials */}
            <div className="flex items-center gap-3 mb-6">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className={`w-9 h-9 rounded-xl bg-[var(--bg-color)] border border-[var(--card-border)] flex items-center justify-center text-[var(--text-muted)] transition-all duration-300 hover:scale-110 hover:border-[var(--color-brand-blue-light)] hover:text-[var(--color-brand-blue-light)] text-sm font-bold`}
                >
                  {social.emoji}
                </a>
              ))}
            </div>

            {/* App badges */}
            <div className="flex flex-col gap-2">
              <p className="text-[var(--text-muted)] text-xs font-semibold mb-1">
                Download Our App
              </p>
              <div className="flex gap-2">
                <button className="px-4 py-2 rounded-xl bg-[var(--bg-color)] border border-[var(--card-border)] flex items-center gap-2 hover:border-[var(--color-brand-blue-light)] transition-colors duration-300 cursor-pointer">
                  <span className="text-lg">📱</span>
                  <div className="text-left">
                    <p className="text-[var(--text-muted)] text-[10px]">Download on</p>
                    <p className="text-[var(--fg-color)] text-xs font-bold">App Store</p>
                  </div>
                </button>
                <button className="px-4 py-2 rounded-xl bg-[var(--bg-color)] border border-[var(--card-border)] flex items-center gap-2 hover:border-[var(--color-brand-blue-light)] transition-colors duration-300 cursor-pointer">
                  <span className="text-lg">🤖</span>
                  <div className="text-left">
                    <p className="text-[var(--text-muted)] text-[10px]">Get it on</p>
                    <p className="text-[var(--fg-color)] text-xs font-bold">Google Play</p>
                  </div>
                </button>
              </div>
            </div>
          </div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-[var(--fg-color)] font-bold text-sm mb-5 uppercase tracking-widest">
                {category}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-[var(--text-muted)] text-sm hover:text-[var(--color-brand-blue-light)] hover:translate-x-1 transition-all duration-300 block"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter */}
        <div className="py-8 border-t border-[var(--card-border)]">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h4 className="text-[var(--fg-color)] font-bold text-lg mb-1">
                Stay Updated 📬
              </h4>
              <p className="text-[var(--text-muted)] text-sm">
                Get study tips, exam alerts, and offers directly in your inbox.
              </p>
            </div>
            <div className="flex gap-3 w-full md:w-auto">
              <input
                id="newsletter-email"
                type="email"
                placeholder="Enter your email"
                className="flex-1 md:w-64 px-4 py-3 rounded-xl bg-transparent border border-[var(--card-border)] text-[var(--fg-color)] placeholder-[var(--text-muted)] text-sm input-focus"
              />
              <button
                onClick={() => toast.success("Subscribed successfully! 🚀")}
                className="btn-primary px-5 py-3 rounded-xl text-white font-semibold text-sm flex-shrink-0 cursor-pointer"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-[var(--card-border)] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[var(--text-muted)] text-sm flex items-center gap-1.5">
            Made with{" "}
            <Heart className="w-4 h-4 text-red-500 fill-red-500" /> for students
            across India. Copyright © 2026 Sanjay Kumar's Educational Classes Private Limited. All
            rights reserved.
          </p>

          {/* Scroll to top */}
          <button
            id="scroll-to-top"
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[var(--bg-color)] border border-[var(--card-border)] text-[var(--text-muted)] hover:text-[var(--fg-color)] hover:border-[var(--color-brand-blue)] transition-all duration-300 text-sm cursor-pointer"
          >
            <ArrowUp className="w-4 h-4" />
            Back to Top
          </button>
        </div>
      </div>
    </footer>
  );
}

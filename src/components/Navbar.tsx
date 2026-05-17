"use client";

import { useState, useEffect } from "react";
import { Menu, X, BookOpen, ChevronDown } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "./ThemeToggle";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Courses", href: "/courses" },
  { label: "Faculty", href: "/#faculty" },
  { label: "Testimonials", href: "/#testimonials" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "py-3 bg-[var(--bg-color)]/90 backdrop-blur-xl border-b border-[var(--card-border)] shadow-sm"
          : "py-5 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/">
            <div className="flex items-center gap-3 group cursor-pointer">
              <div className="relative">
                <div className="w-10 h-10 rounded-full overflow-hidden shadow-lg group-hover:shadow-[var(--color-brand-red)]/40 transition-all duration-300 group-hover:scale-110 border-2 border-white dark:border-gray-800 bg-white">
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
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-2 bg-[var(--card-bg)] rounded-full px-2 py-1 border border-[var(--card-border)] shadow-sm">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer ${
                    isActive
                      ? "text-[var(--color-brand-blue-light)] bg-[var(--color-brand-blue)]/10"
                      : "text-[var(--text-muted)] hover:text-[var(--fg-color)] hover:bg-[var(--card-border)]"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* CTA & Theme Button */}
          <div className="hidden md:flex items-center gap-3">
            <ThemeToggle />
            <Link
              href="/courses"
              className="btn-primary px-5 py-2.5 rounded-xl text-sm font-semibold text-white cursor-pointer"
            >
              Enroll Now
            </Link>
          </div>

          <div className="hidden items-center md:flex" />
          <div className="flex md:hidden items-center gap-2">
            <ThemeToggle />
            {/* Mobile Menu Button */}
            <button
              id="mobile-menu-btn"
              className="p-2 rounded-lg text-[var(--text-muted)] hover:text-[var(--fg-color)] hover:bg-[var(--card-border)] transition-all duration-300"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 menu-slide">
            <div className="card-premium rounded-2xl p-4 space-y-1">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`block w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                      isActive
                        ? "text-[var(--color-brand-blue-light)] bg-[var(--color-brand-blue)]/10"
                        : "text-[var(--text-muted)] hover:text-[var(--fg-color)] hover:bg-[var(--card-border)]"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <div className="pt-2">
                <Link
                  href="/courses"
                  onClick={() => setIsOpen(false)}
                  className="btn-primary block w-full text-center py-3 rounded-xl text-sm font-semibold text-white"
                >
                  Enroll Now
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

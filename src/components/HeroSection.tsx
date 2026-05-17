"use client";

import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  Play,
  Star,
  Users,
  Award,
  BookOpen,
  ChevronDown,
} from "lucide-react";
import Link from "next/link";

const stats = [
  { label: "App Downloads", value: "2M+", icon: Users },
  { label: "Free Lectures", value: "10K+", icon: BookOpen },
  { label: "Total Views", value: "1.5B+", icon: Star },
  { label: "Registered Users", value: "2M+", icon: Award },
];

const floatingBadges = [
  {
    icon: "🏆",
    text: "Top Rated",
    sub: "4.9/5 Stars",
    color: "from-amber-500/20 to-orange-500/20 border-amber-500/30",
    pos: "top-[15%] right-[5%] md:right-[8%]",
  },
  {
    icon: "🎯",
    text: "95% Success",
    sub: "Selection Rate",
    color: "from-emerald-500/20 to-teal-500/20 border-emerald-500/30",
    pos: "bottom-[25%] left-[2%] md:left-[5%]",
  },
  {
    icon: "⚡",
    text: "Live Classes",
    sub: "Daily Sessions",
    color: "from-indigo-500/20 to-purple-500/20 border-indigo-500/30",
    pos: "top-[35%] left-[2%] md:left-[5%]",
  },
];

export default function HeroSection() {
  const [count, setCount] = useState({ students: 0, faculty: 0, courses: 0 });
  const heroRef = useRef<HTMLDivElement>(null);

  // Animated counter
  useEffect(() => {
    const timer = setTimeout(() => {
      const duration = 2000;
      const steps = 60;
      const interval = duration / steps;
      let step = 0;

      const counter = setInterval(() => {
        step++;
        const progress = step / steps;
        const eased = 1 - Math.pow(1 - progress, 3);

        setCount({
          students: Math.floor(50000 * eased),
          faculty: Math.floor(120 * eased),
          courses: Math.floor(300 * eased),
        });

        if (step >= steps) clearInterval(counter);
      }, interval);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  const handleScroll = () => {
    const el = document.getElementById("courses");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Clean Background Pattern */}
      <div className="absolute inset-0 bg-[var(--bg-color)] -z-20" />
      <div
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] -z-10"
        style={{
          backgroundImage: `linear-gradient(var(--fg-color) 1px, transparent 1px), linear-gradient(90deg, var(--fg-color) 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />
      <div className="absolute top-0 left-0 right-0 h-96 bg-gradient-to-b from-[var(--color-brand-blue)]/5 to-transparent -z-10" />

      {/* Floating Badges */}
      {floatingBadges.map((badge, i) => (
        <div
          key={i}
          className={`absolute z-10 hidden sm:flex items-center gap-3 px-4 py-3 rounded-2xl glass border bg-gradient-to-r ${badge.color} ${badge.pos} float`}
          style={{ animationDelay: `${i * 0.7}s` }}
        >
          <span className="text-2xl">{badge.icon}</span>
          <div>
            <p className="text-white font-bold text-sm">{badge.text}</p>
            <p className="text-slate-400 text-xs">{badge.sub}</p>
          </div>
        </div>
      ))}

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-20">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--card-bg)] border border-[var(--color-brand-blue)]/20 text-[var(--color-brand-blue)] dark:text-blue-400 text-xs font-bold mb-8 tracking-wide uppercase shadow-sm">
            <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
            <span>India&apos;s #1 Online Learning Platform</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-black text-[var(--fg-color)] leading-[1.1] mb-6 tracking-tight">
            Welcome to <span className="text-[var(--color-brand-red)]">Disha</span>
            <br />
            <span className="text-[var(--color-brand-blue)] dark:text-blue-400">Online Classes!</span>
          </h1>

          {/* Description */}
          <p className="text-lg sm:text-xl text-[var(--text-muted)] mb-10 leading-relaxed font-medium px-4 max-w-3xl mx-auto">
            India's Best Online Classes for Class 9th, 10th, 11th & 12th (Arts, Science, Commerce). Special focus on <span className="text-[var(--color-brand-blue)] font-bold">Bihar Board (BSEB)</span>. Join expert-led classes to boost your clarity, confidence, and success.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
            <Link
              href="/contact"
              className="btn-primary group flex items-center gap-3 px-8 py-4 rounded-xl text-base w-full sm:w-auto justify-center"
            >
              Start Learning Today
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>

            <Link
              href="/courses"
              className="group flex items-center gap-3 px-8 py-4 rounded-xl bg-[var(--card-bg)] border border-[var(--card-border)] text-[var(--fg-color)] font-semibold text-base hover:border-[var(--color-brand-blue)] transition-all duration-300 w-full sm:w-auto justify-center shadow-sm"
            >
              <div className="w-8 h-8 rounded-full bg-[var(--color-brand-blue)]/10 text-[var(--color-brand-blue)] flex items-center justify-center transition-all duration-300 group-hover:bg-[var(--color-brand-blue)] group-hover:text-white">
                <Play className="w-3 h-3 ml-0.5 fill-current" />
              </div>
              Explore Courses
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {stats.map((stat, i) => (
              <div
                key={i}
                className="card-premium group rounded-2xl p-5 cursor-pointer"
                style={{ animationDelay: `${i * 0.15}s` }}
              >
                <div className="flex items-center justify-center mb-3">
                  <div className="w-10 h-10 rounded-xl bg-[var(--color-brand-blue)]/10 border border-[var(--color-brand-blue)]/25 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                    <stat.icon className="w-5 h-5 text-[var(--color-brand-blue)] block" />
                  </div>
                </div>
                <div className="text-2xl sm:text-3xl font-black text-[var(--fg-color)] mb-1">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm text-[var(--text-muted)] font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={handleScroll}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-slate-500 hover:text-indigo-400 transition-colors duration-300"
        aria-label="Scroll to courses"
      >
        <span className="text-xs font-medium tracking-widest uppercase">
          Scroll
        </span>
        <ChevronDown className="w-5 h-5 animate-bounce" />
      </button>
    </section>
  );
}

"use client";

import { useState } from "react";
import {
  Star,
  Quote,
  ChevronLeft,
  ChevronRight,
  MessageSquare,
  Trophy,
  ThumbsUp,
} from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Ravi Kumar",
    role: "BSEB Class 10th Topper",
    course: "Dream 450+ Batch",
    batch: "2026 Batch",
    rating: 5,
    text: "Disha Online Classes completely transformed my Bihar Board preparation. Sanjay Sir's guidance was exceptional. The structured approach and mock tests helped me score 470/500.",
    result: "Score: 470/500",
    resultColor: "bg-[var(--color-brand-red)]",
    location: "Patna, Bihar",
    avatar: "RK",
    avatarGrad: "from-[var(--color-brand-blue)] to-[var(--color-brand-blue-light)]",
  },
  {
    id: 2,
    name: "Priya Kumari",
    role: "BSEB Class 12th Science Topper",
    course: "12th Science Hindi Medium",
    batch: "2026 Batch",
    rating: 5,
    text: "I scored 465/500 in 12th Science after joining Disha! The live classes are simply mind-blowing. The PDF notes made remembering even complex topics super easy. Best decision of my life!",
    result: "Score: 465/500",
    resultColor: "bg-[var(--color-brand-blue)]",
    location: "Gaya, Bihar",
    avatar: "PK",
    avatarGrad: "from-[var(--color-brand-blue)] to-[var(--color-brand-blue-light)]",
  },
  {
    id: 3,
    name: "Amit Sharma",
    role: "BSEB Class 12th Arts",
    course: "Manzil Batch",
    batch: "2026 Batch",
    rating: 5,
    text: "The Arts course at Disha is incredibly comprehensive. The teachers made history and geography so interesting. Got 452/500 in my final exams. The doubt-clearing sessions were a lifesaver!",
    result: "Score: 452/500",
    resultColor: "bg-[var(--color-brand-red)]",
    location: "Bhagalpur, Bihar",
    avatar: "AS",
    avatarGrad: "from-[var(--color-brand-red)] to-[var(--color-brand-red-light)]",
  },
  {
    id: 4,
    name: "Neha Singh",
    role: "BSEB Class 11th Science",
    course: "Parivartan Batch",
    batch: "2026 Batch",
    rating: 5,
    text: "The conceptual clarity I got from Disha's Science classes is pure gold! I used to be terrible at Physics but the techniques made me love it. The daily practice tests are what make Disha stand out.",
    result: "Class 11th Topper",
    resultColor: "bg-[var(--color-brand-blue)]",
    location: "Muzaffarpur, Bihar",
    avatar: "NS",
    avatarGrad: "from-[var(--color-brand-blue)] to-[var(--color-brand-blue-light)]",
  },
];

const stats = [
  { value: "2.60M+", label: "YouTube Subscribers", icon: "▶️" },
  { value: "2M+", label: "App Downloads", icon: "📱" },
  { value: "1.5B+", label: "Total Views", icon: "👁️" },
  { value: "10K+", label: "Free Lectures", icon: "📚" },
];

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goTo = (index: number) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setActiveIndex(index);
      setIsAnimating(false);
    }, 300);
  };

  const prev = () =>
    goTo(activeIndex === 0 ? testimonials.length - 1 : activeIndex - 1);
  const next = () =>
    goTo(activeIndex === testimonials.length - 1 ? 0 : activeIndex + 1);

  return (
    <section id="testimonials" className="py-24 relative overflow-hidden bg-[var(--bg-color)]">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[var(--color-brand-blue)]/5" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--color-brand-blue)]/30 to-transparent" />

      {/* Decorative elements */}
      <div className="absolute right-10 top-20 text-[200px] opacity-[0.03] font-black text-[var(--fg-color)] select-none">
        &ldquo;
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--card-bg)] border border-[var(--color-brand-blue)]/20 text-[var(--color-brand-blue)] dark:text-blue-400 text-xs font-semibold mb-6 tracking-wide uppercase shadow-sm">
            <MessageSquare className="w-3.5 h-3.5" />
            The Champions Of Disha Classes 2026
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[var(--fg-color)] mb-6 tracking-tight">
            Creating history <span className="text-[var(--color-brand-blue)]">every year</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-[var(--text-muted)] font-medium">
            Meet our top achievers who trusted Disha Online Classes for their success.
          </p>
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="card-premium rounded-2xl p-5 text-center bg-[var(--card-bg)] border-[var(--card-border)]"
            >
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="text-2xl font-black text-[var(--fg-color)] tracking-tight">{stat.value}</div>
              <div className="text-[var(--text-muted)] text-sm mt-1 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Main Testimonial Carousel */}
        <div className="relative">
          {/* Featured testimonial */}
          <div
            className={`transition-all duration-300 ${isAnimating ? "opacity-0 scale-95" : "opacity-100 scale-100"}`}
          >
            <div className="card-premium rounded-3xl p-8 md:p-12 relative overflow-hidden bg-[var(--card-bg)]">
              {/* Background accent */}
              <div
                className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl ${testimonials[activeIndex].avatarGrad} opacity-[0.03] rounded-full blur-3xl`}
              />

              <div className="grid md:grid-cols-5 gap-8 items-center relative z-10">
                {/* Left - Profile */}
                <div className="md:col-span-2 text-center md:text-left">
                  {/* Avatar */}
                  <div
                    className={`w-20 h-20 rounded-3xl bg-gradient-to-br ${testimonials[activeIndex].avatarGrad} flex items-center justify-center text-2xl font-black text-white mx-auto md:mx-0 mb-4 shadow-md`}
                  >
                    {testimonials[activeIndex].avatar}
                  </div>

                  {/* Name */}
                  <h3 className="text-[var(--fg-color)] font-black text-xl mb-1">
                    {testimonials[activeIndex].name}
                  </h3>
                  <p className="text-[var(--text-muted)] text-sm mb-1">
                    {testimonials[activeIndex].role}
                  </p>
                  <p className="text-[var(--text-muted)] text-xs mb-3">
                    📍 {testimonials[activeIndex].location}
                  </p>

                  {/* Stars */}
                  <div className="flex items-center gap-1 justify-center md:justify-start mb-4">
                    {Array.from({ length: testimonials[activeIndex].rating }).map((_, j) => (
                      <Star
                        key={j}
                        className="w-4 h-4 text-amber-500 fill-amber-500"
                      />
                    ))}
                  </div>

                  {/* Result Badge */}
                  <div
                    className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-white text-sm font-bold ${testimonials[activeIndex].resultColor}`}
                  >
                    <Trophy className="w-4 h-4" />
                    {testimonials[activeIndex].result}
                  </div>

                  {/* Course */}
                  <div className="mt-3">
                    <span className="px-3 py-1.5 rounded-lg bg-[var(--bg-color)] border border-[var(--card-border)] text-[var(--text-muted)] text-xs font-semibold">
                      📚 {testimonials[activeIndex].course}
                    </span>
                  </div>
                </div>

                {/* Right - Testimonial */}
                <div className="md:col-span-3">
                  <Quote className="w-10 h-10 text-[var(--color-brand-blue-light)]/20 mb-4" />
                  <blockquote className="text-[var(--fg-color)] text-lg leading-relaxed font-semibold mb-6">
                    &ldquo;{testimonials[activeIndex].text}&rdquo;
                  </blockquote>
                  <div className="flex items-center gap-2">
                    <ThumbsUp className="w-4 h-4 text-emerald-500" />
                    <span className="text-[var(--text-muted)] text-sm font-semibold">
                      Batch: {testimonials[activeIndex].batch}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-8">
            <button
              id="testimonial-prev"
              onClick={prev}
              className="w-12 h-12 rounded-2xl bg-[var(--card-bg)] border border-[var(--card-border)] flex items-center justify-center text-[var(--text-muted)] hover:text-[var(--fg-color)] hover:border-[var(--color-brand-blue)] transition-all duration-300"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Dots */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  className={`rounded-full transition-all duration-300 ${i === activeIndex
                    ? "w-8 h-2.5 bg-[var(--color-brand-blue)]"
                    : "w-2.5 h-2.5 bg-[var(--card-border)] hover:bg-[var(--text-muted)]"
                    }`}
                />
              ))}
            </div>

            <button
              id="testimonial-next"
              onClick={next}
              className="w-12 h-12 rounded-2xl bg-[var(--card-bg)] border border-[var(--card-border)] flex items-center justify-center text-[var(--text-muted)] hover:text-[var(--fg-color)] hover:border-[var(--color-brand-blue)] transition-all duration-300"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Mini testimonial grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-12">
          {testimonials
            .filter((_, i) => i !== activeIndex)
            .slice(0, 3)
            .map((t, i) => (
              <button
                key={t.id}
                onClick={() => goTo(testimonials.findIndex((x) => x.id === t.id))}
                className="card-premium rounded-2xl p-6 text-left transition-all duration-300 hover:-translate-y-1 bg-[var(--card-bg)] border-[var(--card-border)]"
              >
                <div className="flex items-start gap-3 mb-4">
                  <div
                    className={`w-10 h-10 rounded-xl bg-gradient-to-br ${t.avatarGrad} flex items-center justify-center text-sm font-bold text-white flex-shrink-0`}
                  >
                    {t.avatar}
                  </div>
                  <div>
                    <p className="text-[var(--fg-color)] font-semibold text-sm">{t.name}</p>
                    <p className="text-[var(--text-muted)] text-xs">{t.role}</p>
                  </div>
                </div>
                <p className="text-[var(--text-muted)] text-sm line-clamp-2">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div
                  className={`mt-3 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-white text-xs font-semibold ${t.resultColor}`}
                >
                  <Trophy className="w-3 h-3" />
                  {t.result}
                </div>
              </button>
            ))}
        </div>
      </div>
    </section>
  );
}

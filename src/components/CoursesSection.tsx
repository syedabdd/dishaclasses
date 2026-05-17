"use client";

import { useState } from "react";
import {
  Clock,
  Users,
  Star,
  BookOpen,
  ArrowRight,
  Zap,
  Award,
  Video,
  FileText,
  CheckCircle,
  TrendingUp,
  Shield,
} from "lucide-react";
import Link from "next/link";

const categories = [
  "All Courses",
  "Class 12th",
  "Class 11th",
  "Class 10th",
  "Class 9th",
];

const courses = [
  {
    id: 1,
    title: "Bihar Board 12th Science (Hindi Medium) 2026-27",
    category: "Class 12th",
    badge: "Popular",
    badgeColor: "from-amber-500 to-orange-500",
    description: "Complete preparation for Bihar Board Class 12th Science (Hindi Medium) with Sanjay Sir.",
    instructor: "Sanjay Sir",
    rating: 4.9,
    reviews: 4500,
    students: "25,000+",
    duration: "12 Months",
    lessons: 450,
    level: "Class 12th",
    price: "₹2,499",
    originalPrice: "₹4,999",
    features: ["Live Classes", "Premium PDF Notes", "Doubt Solving", "Model Papers"],
    color: "from-indigo-500 to-blue-600",
    icon: "🔬",
    popular: true,
  },
  {
    id: 2,
    title: "Bihar Board Class 10th Dream 450+ 2026-27",
    category: "Class 10th",
    badge: "Bestseller",
    badgeColor: "from-emerald-500 to-teal-500",
    description: "Our flagship program to score 450+ in BSEB Matric 2027. Full syllabus coverage.",
    instructor: "Sanjay Sir",
    rating: 4.9,
    reviews: 5120,
    students: "30,000+",
    duration: "12 Months",
    lessons: 320,
    level: "Class 10th",
    price: "₹1,999",
    originalPrice: "₹3,999",
    features: ["All Subjects", "Chapter-wise Tests", "Question Bank", "PYQs"],
    color: "from-emerald-500 to-teal-600",
    icon: "🎯",
    popular: true,
  },
  {
    id: 3,
    title: "Bihar Board 11th Science Parivartan Batch 2026-27",
    category: "Class 11th",
    badge: "New Batch",
    badgeColor: "from-purple-500 to-pink-500",
    description: "Start your Class 11th journey strong with the Parivartan Batch for Science stream.",
    instructor: "Sanjay Sir & Team",
    rating: 4.8,
    reviews: 2100,
    students: "15,000+",
    duration: "12 Months",
    lessons: 380,
    level: "Class 11th",
    price: "₹2,199",
    originalPrice: "₹4,500",
    features: ["Live Sessions", "Study Material", "Weekly Quizzes", "Mentorship"],
    color: "from-purple-500 to-pink-600",
    icon: "🚀",
    popular: false,
  },
  {
    id: 4,
    title: "Bihar Board 12th Arts Manzil Batch 2026-27",
    category: "Class 12th",
    badge: "New Batch",
    badgeColor: "from-rose-500 to-red-500",
    description: "Complete full batch for BSEB Class 12th Arts to achieve top marks in board exams.",
    instructor: "Expert Faculty",
    rating: 4.8,
    reviews: 1800,
    students: "12,000+",
    duration: "12 Months",
    lessons: 300,
    level: "Class 12th",
    price: "₹1,999",
    originalPrice: "₹3,999",
    features: ["History/Geo/Pol", "Detailed Notes", "Mock Exams", "Answer Writing"],
    color: "from-rose-500 to-red-600",
    icon: "📚",
    popular: false,
  },
  {
    id: 5,
    title: "Bihar Board 11th Commerce Parivartan 2026-27",
    category: "Class 11th",
    badge: "Bilingual",
    badgeColor: "from-cyan-500 to-blue-500",
    description: "Master Accountancy, BST, and Economics with our expert Commerce faculty.",
    instructor: "Commerce Team",
    rating: 4.7,
    reviews: 1200,
    students: "8,500+",
    duration: "12 Months",
    lessons: 280,
    level: "Class 11th",
    price: "₹2,199",
    originalPrice: "₹4,500",
    features: ["Accounts Mastery", "Case Studies", "Live Doubt", "Revision Notes"],
    color: "from-cyan-500 to-blue-600",
    icon: "📊",
    popular: false,
  },
  {
    id: 6,
    title: "Bihar Board पहल Batch Class 9th 2026-27",
    category: "Class 9th",
    badge: "New Batch",
    badgeColor: "from-violet-500 to-purple-500",
    description: "Build a rock-solid foundation for board exams early with the Class 9th Pahal Batch.",
    instructor: "Foundation Team",
    rating: 4.9,
    reviews: 3100,
    students: "18,000+",
    duration: "12 Months",
    lessons: 250,
    level: "Class 9th",
    price: "₹1,499",
    originalPrice: "₹2,999",
    features: ["Basic to Advanced", "Interactive Learning", "Fun Quizzes", "Guidance"],
    popular: false,
  },
];

export default function CoursesSection() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const filteredCourses =
    activeCategory === "All"
      ? courses
      : courses.filter((c) => c.category === activeCategory);

  const handleEnroll = () => {
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="courses" className="py-24 relative overflow-hidden bg-[var(--bg-color)]">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-brand-blue)]/5 to-transparent" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--color-brand-blue)]/30 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--card-bg)] border border-[var(--color-brand-blue)]/20 text-[var(--color-brand-blue)] dark:text-blue-400 text-xs font-semibold mb-6 tracking-wide uppercase shadow-sm">
            <BookOpen className="w-3.5 h-3.5" />
            Our Courses
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[var(--fg-color)] mb-6 tracking-tight">
            Courses Designed for{" "}
            <span className="text-[var(--color-brand-blue)]">Your Success</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-[var(--text-muted)] font-medium">
            Expert-crafted curriculum, updated regularly, with real-world
            practice. Everything you need to achieve your goals.
          </p>
        </div>

        {/* Trust indicators */}
        <div className="flex flex-wrap items-center justify-center gap-6 mb-12">
          {[
            { icon: Shield, text: "Money-back Guarantee" },
            { icon: Video, text: "Lifetime Access" },
            { icon: Award, text: "Govt. Recognized Certificate" },
            { icon: TrendingUp, text: "Placement Support" },
          ].map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-2 text-[var(--text-muted)] text-sm"
            >
              <item.icon className="w-4 h-4 text-[var(--color-brand-blue)]" />
              <span>{item.text}</span>
            </div>
          ))}
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-[var(--color-brand-blue)] text-white shadow-md"
                  : "bg-[var(--card-bg)] text-[var(--text-muted)] hover:text-[var(--fg-color)] hover:border-[var(--color-brand-blue)] border border-[var(--card-border)]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Course Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.map((course, i) => (
            <Link
              href={`/courses/${course.id}`}
              key={course.id}
              id={`course-card-${course.id}`}
              onMouseEnter={() => setHoveredCard(course.id)}
              onMouseLeave={() => setHoveredCard(null)}
              className="card-premium relative rounded-3xl overflow-hidden group cursor-pointer bg-[var(--card-bg)] block"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              {/* Card Top Banner */}
              <div
                className={`relative h-44 ${
                  i % 2 === 0
                    ? "bg-[var(--color-brand-blue)]"
                    : "bg-[var(--color-brand-red)]"
                } p-6 flex flex-col justify-between overflow-hidden`}
              >
                {/* Decorative Pattern */}
                <div
                  className="absolute inset-0 opacity-[0.1]"
                  style={{
                    backgroundImage: `linear-gradient(45deg, rgba(255,255,255,1) 25%, transparent 25%, transparent 50%, rgba(255,255,255,1) 50%, rgba(255,255,255,1) 75%, transparent 75%, transparent)`,
                    backgroundSize: "20px 20px",
                  }}
                />

                <div className="relative z-10 flex justify-between items-start">
                  <div className="px-3 py-1 bg-white/20 backdrop-blur-md rounded-lg text-white text-xs font-bold uppercase tracking-wider">
                    {course.category}
                  </div>
                  {course.popular && (
                    <div className="flex items-center gap-1 px-3 py-1 bg-amber-500 text-white rounded-lg text-xs font-bold shadow-lg">
                      <Zap className="w-3.5 h-3.5 fill-current" /> Popular
                    </div>
                  )}
                </div>
                <div className="relative z-10">
                  <h3 className="text-2xl font-black text-white leading-tight">
                    {course.title}
                  </h3>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 relative">
                <p className="text-[var(--text-muted)] text-sm mb-4 leading-relaxed line-clamp-2">
                  {course.description}
                </p>

                {/* Meta info */}
                <div className="grid grid-cols-3 gap-3 mb-5 py-4 border-y border-[var(--card-border)]">
                  <div className="text-center">
                    <Clock className="w-4 h-4 text-[var(--color-brand-blue)] mx-auto mb-1" />
                    <p className="text-[var(--fg-color)] text-xs font-bold">
                      {course.duration}
                    </p>
                  </div>
                  <div className="text-center">
                    <FileText className="w-4 h-4 text-[var(--color-brand-red)] mx-auto mb-1" />
                    <p className="text-[var(--fg-color)] text-xs font-bold">
                      {course.lessons}+
                    </p>
                  </div>
                  <div className="text-center">
                    <Users className="w-4 h-4 text-amber-500 mx-auto mb-1" />
                    <p className="text-[var(--fg-color)] text-xs font-bold">
                      {course.students}
                    </p>
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-2 mb-6">
                  {course.features.map((feat, j) => (
                    <div key={j} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                      <span className="text-[var(--fg-color)] font-medium text-xs">
                        {feat}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Price and Action */}
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-[var(--card-border)]">
                  <div>
                    <div className="text-xs text-[var(--text-muted)] line-through mb-0.5">
                      {course.originalPrice}
                    </div>
                    <div className="text-2xl font-black text-[var(--fg-color)]">
                      {course.price}
                    </div>
                  </div>
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${
                      hoveredCard === course.id
                        ? "bg-[var(--color-brand-red)] text-white shadow-md translate-x-1"
                        : "bg-[var(--bg-color)] border border-[var(--card-border)] text-[var(--color-brand-blue)]"
                    }`}
                  >
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Link
            href="/courses"
            className="btn-primary inline-flex items-center gap-3 px-8 py-4 rounded-xl text-white font-bold text-lg shadow-sm"
          >
            <BookOpen className="w-5 h-5" />
            View All Courses
          </Link>
        </div>
      </div>
    </section>
  );
}

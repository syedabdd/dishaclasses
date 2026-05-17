"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Clock,
  Users,
  Star,
  BookOpen,
  ArrowRight,
  Zap,
  CheckCircle,
  FileText,
  Search,
} from "lucide-react";
import Link from "next/link";

const categories = [
  "All",
  "Class 12th",
  "Class 11th",
  "Class 10th",
  "Class 9th",
];

const courses = [
  {
    id: 1,
    title: "Bihar Board 11th Science परिवर्तन बैच (Hindi Medium) 2026-27",
    category: "Class 11th",
    badge: "New Batch",
    description: "Build a rock-solid foundation for BSEB Class 11th Science (Hindi Medium) Board Exam 2027. Prepared and delivered by Bihar's most trusted educators.",
    instructor: "Sanjay Sir & Team",
    rating: 4.9,
    reviews: 2154,
    students: "15,200+",
    duration: "14 Months",
    lessons: 450,
    level: "Class 11th",
    price: "₹1,500",
    originalPrice: "₹1,800",
    features: ["Live Interactive Class", "Smart PDF Notes", "Chapter wise Tests", "Panel PDF"],
    icon: "🔬",
  },
  {
    id: 2,
    title: "Bihar Board 11th Science Parivartan Batch (English Medium) 2026-27",
    category: "Class 11th",
    badge: "New Batch",
    description: "Build a solid foundation for your BSEB Class 11th Science Board Exam 2027 with Bihar's most trusted educators! Specially designed for English Medium students to prepare you thoroughly in all core Science subjects.",
    instructor: "Sanjay Sir & Team",
    rating: 4.9,
    reviews: 1845,
    students: "12,600+",
    duration: "14 Months",
    lessons: 480,
    level: "Class 11th",
    price: "₹1,500",
    originalPrice: "₹1,800",
    features: ["English Medium Sessions", "Concept Notes", "Doubt Solving", "Daily Worksheets"],
    icon: "🧪",
  },
  {
    id: 3,
    title: "Bihar Board 11th Commerce परिवर्तन बैच (Bilingual) 2026-27",
    category: "Class 11th",
    badge: "New Batch",
    description: "Prepare comprehensively for BSEB 11th Commerce. Get complete guidance on Accountancy, BST, Economics and Language papers.",
    instructor: "Commerce Team",
    rating: 4.8,
    reviews: 954,
    students: "8,200+",
    duration: "14 Months",
    lessons: 380,
    level: "Class 11th",
    price: "₹1,500",
    originalPrice: "₹1,800",
    features: ["Case Study Lessons", "Formula Sheets", "Interactive Doubt", "Bilingual Support"],
    icon: "📊",
  },
  {
    id: 4,
    title: "Bihar Board 11th Arts परिवर्तन बैच (Full बैच) 2026-27",
    category: "Class 11th",
    badge: "New Batch",
    description: "Full batch preparation for Class 11th Arts. Master History, Geography, Civics, and languages with dynamic topper concepts.",
    instructor: "Sanjay Sir & Team",
    rating: 4.8,
    reviews: 1245,
    students: "10,800+",
    duration: "14 Months",
    lessons: 400,
    level: "Class 11th",
    price: "₹1,500",
    originalPrice: "₹1,800",
    features: ["History & Geography", "Civics & Economics", "Answer Writing Keys", "Chapter Notes"],
    icon: "📚",
  },
  {
    id: 5,
    title: "Bihar Board Class 10th Dream 450+ (Full Course : 2026-27)",
    category: "Class 10th",
    badge: "Popular",
    description: "Bihar's most popular board exam course! Join Sanjay Sir's flagship Dream 450+ batch for Class 10th Matric to score 450+ marks with proven toppers strategies.",
    instructor: "Sanjay Sir & Team",
    rating: 5.0,
    reviews: 8456,
    students: "35,000+",
    duration: "12 Months",
    lessons: 650,
    level: "Class 10th",
    price: "₹799",
    originalPrice: "₹1,499",
    features: ["Flagship Topper Strategy", "10 Years Question Bank", "All Subjects", "Weekly Mock Tests"],
    icon: "🎯",
  },
  {
    id: 6,
    title: "Bihar Board पहल बैच Class 9th (2026-27)",
    category: "Class 9th",
    badge: "New Batch",
    description: "Build an outstanding early foundation for Class 10th boards. Master Class 9th syllabus with comprehensive interactive live classes.",
    instructor: "Foundation Team",
    rating: 4.9,
    reviews: 1450,
    students: "11,500+",
    duration: "12 Months",
    lessons: 300,
    level: "Class 9th",
    price: "₹499",
    originalPrice: "₹999",
    features: ["Fun Basic Classes", "Foundation Exams", "Smart Revision Kits", "Direct Guidance"],
    icon: "🌟",
  },
  {
    id: 7,
    title: "Bihar Board 12th Science - हिंदी माध्यम (2026-2027)",
    category: "Class 12th",
    badge: "Popular",
    description: "The ultimate Class 12th Intermediate Science preparation batch in Hindi Medium. Highly intensive, topper strategies, and rigorous answer-writing mentorship.",
    instructor: "Sanjay Sir & Team",
    rating: 4.9,
    reviews: 5410,
    students: "28,500+",
    duration: "14 Months",
    lessons: 580,
    level: "Class 12th",
    price: "₹1,800",
    originalPrice: "₹2,499",
    features: ["Target 2027 Boards", "Handwritten Topper Notes", "Daily Doubt Solving", "Full Syllabus PYQs"],
    icon: "🔬",
  },
  {
    id: 8,
    title: "Bihar Board 12th Science - English Medium (2026-2027)",
    category: "Class 12th",
    badge: "New Batch",
    description: "The complete BSEB Class 12th Intermediate Science program in English Medium. Outstanding core concepts, smart PDF sheets, and live doubt resolutions.",
    instructor: "Sanjay Sir & Team",
    rating: 4.8,
    reviews: 2120,
    students: "14,800+",
    duration: "14 Months",
    lessons: 600,
    level: "Class 12th",
    price: "₹1,800",
    originalPrice: "₹2,499",
    features: ["100% English Content", "Formula Sheets", "Interactive Quizzes", "Teacher Board PDFs"],
    icon: "🧪",
  },
  {
    id: 9,
    title: "Bihar Board 12th Arts मंजिल (Full बैच)-2026 -27",
    category: "Class 12th",
    badge: "New Batch",
    description: "Master Class 12th Arts (Manzil Batch). Score highest in BSEB Humanities with Sanjay Sir's proven model answers and concept flow charts.",
    instructor: "Sanjay Sir & Team",
    rating: 4.9,
    reviews: 3100,
    students: "19,500+",
    duration: "14 Months",
    lessons: 480,
    level: "Class 12th",
    price: "₹1,800",
    originalPrice: "₹2,499",
    features: ["Visual Geography Maps", "Civics Essay Keys", "History Flowcharts", "Smart Mock Exams"],
    icon: "📚",
  },
  {
    id: 10,
    title: "Bihar Board 12th Commerce मंजिल (Full बैच)-2026 -27",
    category: "Class 12th",
    badge: "New Batch",
    description: "Complete Class 12th Intermediate Commerce Manzil Batch. Score top grades in BSEB Accountancy and Business Economics.",
    instructor: "Commerce Team",
    rating: 4.8,
    reviews: 840,
    students: "6,900+",
    duration: "14 Months",
    lessons: 420,
    level: "Class 12th",
    price: "₹1,800",
    originalPrice: "₹2,499",
    features: ["Accountancy Ledgers", "Business Studies Formulas", "Economics Notes", "Live Worksheets"],
    icon: "📊",
  },
  {
    id: 11,
    title: "Bihar Board 12th स्कोरिंग (Hindi And English Full Batch) - 2026-27",
    category: "Class 12th",
    badge: "New Batch",
    description: "Specialized scoring program for BSEB Class 12th languages. Secure a flawless 100/100 score in Hindi and English Literature & Grammar.",
    instructor: "Sanjay Sir & Yuvraj Sir",
    rating: 4.9,
    reviews: 4120,
    students: "22,000+",
    duration: "12 Months",
    lessons: 220,
    level: "Class 12th",
    price: "₹599",
    originalPrice: "₹1,200",
    features: ["Grammar Logical Keys", "Chapter Wise Summaries", "Model Paper Solutions", "100/100 Strategy"],
    icon: "✍️",
  },
];

export default function CoursesPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCourses = courses.filter((c) => {
    const matchesCategory = activeCategory === "All" || c.category === activeCategory;
    const matchesSearch = c.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.instructor.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[var(--bg-color)] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
          {/* Header Block */}
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[var(--fg-color)] tracking-tight mb-4">
              Explore Our <span className="text-[var(--color-brand-blue)]">Premium Courses</span>
            </h1>
            <p className="max-w-2xl mx-auto text-lg text-[var(--text-muted)] font-medium">
              Choose from our curated catalog of standard, high-yield coaching packages designed to help you clear exams and land roles.
            </p>
          </div>

          {/* Filters and Search */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12">
            {/* Category Filter */}
            <div className="flex flex-wrap items-center gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-5 py-2.5 rounded-xl text-sm font-bold transition-all duration-300 ${
                    activeCategory === cat
                      ? "bg-[var(--color-brand-blue)] text-white shadow-md"
                      : "bg-[var(--card-bg)] text-[var(--text-muted)] hover:text-[var(--fg-color)] border border-[var(--card-border)] hover:border-[var(--color-brand-blue)]"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Search Bar */}
            <div className="relative w-full md:w-80">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--text-muted)]">
                <Search className="w-4 h-4" />
              </span>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search courses..."
                className="w-full pl-11 pr-4 py-3 bg-[var(--card-bg)] border border-[var(--card-border)] rounded-xl text-[var(--fg-color)] placeholder-slate-500 text-sm focus:border-[var(--color-brand-blue)] outline-none transition-all duration-300 font-semibold"
              />
            </div>
          </div>

          {/* Grid Layout */}
          {filteredCourses.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredCourses.map((course, i) => (
                <Link
                  href={`/courses/${course.id}`}
                  key={course.id}
                  className="card-premium relative rounded-3xl overflow-hidden group cursor-pointer bg-[var(--card-bg)] border border-[var(--card-border)] hover:shadow-xl transition-all duration-300 block"
                >
                  {/* Banner */}
                  <div
                    className={`relative h-48 ${
                      i % 2 === 0
                        ? "bg-[var(--color-brand-blue)]"
                        : "bg-[var(--color-brand-red)]"
                    } p-6 flex flex-col justify-between overflow-hidden`}
                  >
                    <div
                      className="absolute inset-0 opacity-[0.08]"
                      style={{
                        backgroundImage: `linear-gradient(45deg, rgba(255,255,255,1) 25%, transparent 25%, transparent 50%, rgba(255,255,255,1) 50%, rgba(255,255,255,1) 75%, transparent 75%, transparent)`,
                        backgroundSize: "20px 20px",
                      }}
                    />

                    <div className="relative z-10 flex justify-between items-start">
                      <span className="px-3 py-1 bg-white/20 backdrop-blur-md rounded-lg text-white text-xs font-bold uppercase tracking-wider">
                        {course.category}
                      </span>
                      {course.badge && (
                        <span className="flex items-center gap-1 px-3 py-1 bg-amber-500 text-white rounded-lg text-xs font-bold shadow-md">
                          <Zap className="w-3.5 h-3.5 fill-current" /> {course.badge}
                        </span>
                      )}
                    </div>

                    <div className="relative z-10 flex items-center gap-3">
                      <div className="text-3xl bg-white/10 p-2 rounded-xl backdrop-blur-sm">
                        {course.icon}
                      </div>
                      <h3 className="text-xl sm:text-2xl font-black text-white leading-tight">
                        {course.title}
                      </h3>
                    </div>
                  </div>

                  {/* Body */}
                  <div className="p-6">
                    <p className="text-[var(--text-muted)] text-sm mb-4 leading-relaxed line-clamp-3 font-medium">
                      {course.description}
                    </p>

                    <p className="text-xs text-[var(--text-muted)] font-bold mb-4">
                      Instructor: <span className="text-[var(--fg-color)]">{course.instructor}</span>
                    </p>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-2 mb-5 py-4 border-y border-[var(--card-border)]">
                      <div className="text-center">
                        <Clock className="w-4 h-4 text-[var(--color-brand-blue)] mx-auto mb-1" />
                        <p className="text-[var(--fg-color)] text-xs font-black">
                          {course.duration}
                        </p>
                        <p className="text-[var(--text-muted)] text-[10px]">Duration</p>
                      </div>
                      <div className="text-center">
                        <FileText className="w-4 h-4 text-[var(--color-brand-red)] mx-auto mb-1" />
                        <p className="text-[var(--fg-color)] text-xs font-black">
                          {course.lessons} Lectures
                        </p>
                        <p className="text-[var(--text-muted)] text-[10px]">Lessons</p>
                      </div>
                      <div className="text-center">
                        <Users className="w-4 h-4 text-amber-500 mx-auto mb-1" />
                        <p className="text-[var(--fg-color)] text-xs font-black">
                          {course.students}
                        </p>
                        <p className="text-[var(--text-muted)] text-[10px]">Students</p>
                      </div>
                    </div>

                    {/* Checkbox features */}
                    <div className="space-y-2.5 mb-6">
                      {course.features.map((feat, j) => (
                        <div key={j} className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                          <span className="text-[var(--fg-color)] font-semibold text-xs">
                            {feat}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Price banner */}
                    <div className="flex items-center justify-between pt-4 border-t border-[var(--card-border)]">
                      <div>
                        <div className="text-xs text-[var(--text-muted)] line-through mb-0.5 font-bold">
                          {course.originalPrice}
                        </div>
                        <div className="text-2xl font-black text-[var(--fg-color)]">
                          {course.price}
                        </div>
                      </div>
                      <div className="flex items-center gap-1 bg-[var(--bg-color)] border border-[var(--card-border)] text-[var(--color-brand-blue)] px-4 py-2.5 rounded-xl text-xs font-bold group-hover:bg-[var(--color-brand-red)] group-hover:text-white group-hover:border-transparent transition-all duration-300">
                        View Course
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-[var(--card-bg)] border border-[var(--card-border)] rounded-3xl">
              <p className="text-lg text-[var(--text-muted)] font-semibold mb-4">No courses matched your filters.</p>
              <button
                onClick={() => {
                  setActiveCategory("All");
                  setSearchQuery("");
                }}
                className="btn-primary px-6 py-3 rounded-xl text-white font-bold"
              >
                Reset All Filters
              </button>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}

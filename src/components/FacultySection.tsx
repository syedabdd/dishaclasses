"use client";

import { useState } from "react";
import {
  Award,
  BookOpen,
  Users,
  Star,
  ExternalLink,
  GraduationCap,
  Briefcase,
  Play,
  X,
} from "lucide-react";

const faculty = [
  {
    id: 1,
    name: "Sanjay Sir",
    title: "Founder & Master Educator",
    subject: "Mathematics & Hindi",
    experience: "10+ Years",
    students: "100,000+",
    rating: 5.0,
    reviews: 8421,
    courses: 11,
    qualification: "B.Ed, Senior BSEB Specialist",
    bio: "Founder of Disha Online Classes. Mentor to multiple state rank 1 holders. Loved by millions of BSEB students for his simple, high-yield explanations of mathematics and Hindi.",
    achievements: [
      "Mentored Class 10th BSEB State Toppers",
      "2.6M+ YouTube Subscribers",
      "Most Trusted Educator of Bihar",
    ],
    gradient: "from-blue-500 to-indigo-600",
    bgGlow: "from-blue-500/10 to-indigo-500/10",
    emoji: "🙏",
    initials: "SS",
    specialization: ["Matric Math", "Hindi Grammar", "BSEB Board Strategy"],
    social: { youtube: "#", linkedin: "#" },
  },
  {
    id: 2,
    name: "krishnanandan Sir",
    title: "Senior Physics Faculty",
    subject: "Physics",
    experience: "8+ Years",
    students: "45,000+",
    rating: 4.9,
    reviews: 3120,
    courses: 6,
    qualification: "M.Sc. Physics",
    bio: "Specialist in Intermediate and Matric physics. Expert at breaking down complex mechanics, electromagnetism, and optics using practical visualization and board-specific shortcuts.",
    achievements: [
      "5000+ Students Scored 90+ in Physics",
      "BSEB Physics Pattern Specialist",
      "Concept Map Inventor",
    ],
    gradient: "from-amber-500 to-orange-600",
    bgGlow: "from-amber-500/10 to-orange-500/10",
    emoji: "🔬",
    initials: "KS",
    specialization: ["Intermediate Physics", "Mechanics", "Optics"],
    social: { youtube: "#", linkedin: "#" },
  },
  {
    id: 3,
    name: "Raj Sir",
    title: "Senior Chemistry Faculty",
    subject: "Chemistry",
    experience: "7+ Years",
    students: "38,000+",
    rating: 4.9,
    reviews: 2840,
    courses: 6,
    qualification: "M.Sc. Chemistry",
    bio: "Dedicated chemistry expert specializing in Physical, Organic, and Inorganic Chemistry. Known for high-yield chemical equation revision sheets and memorization tricks.",
    achievements: [
      "Designed Special Chemistry Mind Maps",
      "98% Success Rate in BSEB Board Exams",
      "Best Teacher Award for conceptual clarity",
    ],
    gradient: "from-yellow-500 to-amber-600",
    bgGlow: "from-yellow-500/10 to-amber-500/10",
    emoji: "🧪",
    initials: "RS",
    specialization: ["Organic Chemistry", "Inorganic Reactions", "Physical Equil."],
    social: { youtube: "#", linkedin: "#" },
  },
  {
    id: 4,
    name: "Brijesh Sir",
    title: "Senior Biology Faculty",
    subject: "Biology",
    experience: "6+ Years",
    students: "32,000+",
    rating: 4.9,
    reviews: 2150,
    courses: 5,
    qualification: "M.Sc. Life Sciences",
    bio: "Passionate biology mentor. Known for simplifying complex anatomical diagrams, genetics, and physiology using engaging illustrations and simplified smart notes.",
    achievements: [
      "High-yield NCERT Syllabus Breakdown",
      "Topper-rated Biology PDF Notes",
      "Diagram-Drawing Masterclass specialist",
    ],
    gradient: "from-emerald-500 to-teal-600",
    bgGlow: "from-emerald-500/10 to-teal-600/10",
    emoji: "🌿",
    initials: "BS",
    specialization: ["Genetics & Evolution", "Human Physiology", "Botany"],
    social: { youtube: "#", linkedin: "#" },
  },
  {
    id: 5,
    name: "Yuvraj Sir",
    title: "Senior English Faculty",
    subject: "English Literature & Grammar",
    experience: "8+ Years",
    students: "50,000+",
    rating: 4.9,
    reviews: 3820,
    courses: 5,
    qualification: "M.A. English Literature",
    bio: "Language and literature mentor. Expert at training students for flawless English grammar, summary writing, and board-level answers to score a perfect 100/100.",
    achievements: [
      "1.06M+ YouTube Channel Lead Partner",
      "10,000+ English Scoring selections",
      "Grammar Logic Specialist",
    ],
    gradient: "from-purple-500 to-indigo-600",
    bgGlow: "from-purple-500/10 to-indigo-500/10",
    emoji: "✍️",
    initials: "YS",
    specialization: ["English Grammar", "BSEB Prose & Poetry", "Answer Writing Keys"],
    social: { youtube: "#", linkedin: "#" },
  },
];

export default function FacultySection() {
  const [selectedMember, setSelectedMember] = useState<typeof faculty[0] | null>(null);

  return (
    <section id="faculty" className="py-24 relative overflow-hidden bg-[var(--bg-color)]">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[var(--color-brand-blue)]/5" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--color-brand-blue)]/30 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--card-bg)] border border-[var(--color-brand-blue)]/20 text-[var(--color-brand-blue)] dark:text-blue-400 text-xs font-semibold mb-6 tracking-wide uppercase shadow-sm">
            <GraduationCap className="w-3.5 h-3.5" />
            Meet Our Faculty
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[var(--fg-color)] mb-6 tracking-tight">
            Learn from the{" "}
            <span className="text-[var(--color-brand-blue)]">Best in the Field</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-[var(--text-muted)] font-medium">
            Our faculty includes IIT/IIM graduates, IAS officers, AIIMS doctors,
            and industry veterans — all passionate about your success.
          </p>
        </div>

        {/* Faculty Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {faculty.map((member, i) => (
            <div
              key={member.id}
              onClick={() => setSelectedMember(member)}
              className="card-premium relative rounded-3xl overflow-hidden group cursor-pointer bg-[var(--card-bg)]"
              style={{ animationDelay: `${i * 0.12}s` }}
            >
              {/* Top section */}
              <div className="relative p-6 pb-0">
                {/* Avatar */}
                <div className="relative mb-4">
                  <div
                    className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${member.gradient} flex items-center justify-center text-2xl font-black text-white shadow-lg mx-auto transform group-hover:scale-105 transition-all duration-300`}
                  >
                    {member.initials}
                  </div>
                  <div className="absolute -bottom-2 -right-2 left-1/2 w-fit mx-auto">
                    <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-amber-500/20 border border-amber-500/30">
                      <Star className="w-3 h-3 text-amber-500 fill-amber-500" />
                      <span className="text-amber-600 dark:text-amber-300 text-xs font-bold">
                        {member.rating}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Name & title */}
                <div className="text-center mt-4">
                  <h3 className="text-[var(--fg-color)] font-bold text-lg leading-tight mb-1 group-hover:text-[var(--color-brand-blue-light)] transition-all duration-300">
                    {member.name}
                  </h3>
                  <p className="text-sm font-semibold text-[var(--color-brand-blue-light)]">
                    {member.title}
                  </p>
                  <p className="text-[var(--text-muted)] text-xs mt-1">
                    {member.qualification}
                  </p>
                </div>

                {/* Stats row */}
                <div className="grid grid-cols-3 gap-2 my-5 py-4 border-y border-[var(--card-border)]">
                  <div className="text-center">
                    <Briefcase className="w-4 h-4 text-[var(--color-brand-blue-light)] mx-auto mb-1" />
                    <p className="text-[var(--fg-color)] text-sm font-bold">
                      {member.experience}
                    </p>
                    <p className="text-[var(--text-muted)] text-[10px]">Experience</p>
                  </div>
                  <div className="text-center">
                    <Users className="w-4 h-4 text-emerald-500 mx-auto mb-1" />
                    <p className="text-[var(--fg-color)] text-sm font-bold">
                      {member.students}
                    </p>
                    <p className="text-[var(--text-muted)] text-[10px]">Students</p>
                  </div>
                  <div className="text-center">
                    <BookOpen className="w-4 h-4 text-[var(--color-brand-red-light)] mx-auto mb-1" />
                    <p className="text-[var(--fg-color)] text-sm font-bold">
                      {member.courses}
                    </p>
                    <p className="text-[var(--text-muted)] text-[10px]">Courses</p>
                  </div>
                </div>
              </div>

              {/* Bio */}
              <div className="px-6">
                <p className="text-[var(--text-muted)] text-xs leading-relaxed line-clamp-3">
                  {member.bio}
                </p>
              </div>

              {/* Specializations */}
              <div className="px-6 my-4">
                <div className="flex flex-wrap gap-1.5">
                  {member.specialization.slice(0, 2).map((spec, j) => (
                    <span
                      key={j}
                      className="px-2 py-0.5 rounded bg-[var(--color-brand-blue)]/10 text-[10px] font-semibold text-[var(--color-brand-blue-light)]"
                    >
                      {spec}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="px-6 pb-6 mt-auto pt-4">
                <button className="w-full py-3 rounded-xl btn-secondary text-xs font-extrabold text-center cursor-pointer">
                  View Profile
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-[var(--text-muted)] mb-4">
            120+ more expert faculty members across all subjects
          </p>
          <button
            onClick={() => {
              const el = document.getElementById("contact");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            className="btn-primary inline-flex items-center gap-3 px-8 py-4 rounded-xl text-white font-bold text-base shadow-sm"
          >
            <Users className="w-5 h-5" />
            Meet All Faculty
          </button>
        </div>
      </div>

      {/* Modal Popup */}
      {selectedMember && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md transition-opacity duration-300">
          <div className="relative w-full max-w-2xl bg-[var(--card-bg)] border border-[var(--card-border)] rounded-3xl p-6 md:p-8 shadow-2xl overflow-y-auto max-h-[90vh]">
            {/* Close Button */}
            <button
              onClick={() => setSelectedMember(null)}
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-[var(--bg-color)] text-[var(--text-muted)] hover:text-[var(--fg-color)] transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Modal Body */}
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="flex-shrink-0 mx-auto md:mx-0">
                <div className={`w-24 h-24 rounded-2xl bg-gradient-to-br ${selectedMember.gradient} flex items-center justify-center text-3xl font-black text-white shadow-md`}>
                  {selectedMember.initials}
                </div>
              </div>

              <div className="flex-1 w-full">
                <h3 className="text-2xl font-black text-[var(--fg-color)] mb-1">
                  {selectedMember.name}
                </h3>
                <p className="text-sm font-bold text-[var(--color-brand-blue-light)] mb-2">
                  {selectedMember.title}
                </p>
                <p className="text-xs text-[var(--text-muted)] font-semibold mb-4">
                  {selectedMember.qualification}
                </p>

                <p className="text-sm text-[var(--fg-color)] leading-relaxed mb-6 font-medium">
                  {selectedMember.bio}
                </p>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 p-4 bg-[var(--bg-color)] border border-[var(--card-border)] rounded-2xl mb-6">
                  <div className="text-center">
                    <p className="text-[var(--fg-color)] font-extrabold text-sm">
                      {selectedMember.experience}
                    </p>
                    <p className="text-[10px] text-[var(--text-muted)] font-medium">Experience</p>
                  </div>
                  <div className="text-center">
                    <p className="text-[var(--fg-color)] font-extrabold text-sm">
                      {selectedMember.students}
                    </p>
                    <p className="text-[10px] text-[var(--text-muted)] font-medium">Students</p>
                  </div>
                  <div className="text-center">
                    <p className="text-[var(--fg-color)] font-extrabold text-sm">
                      {selectedMember.courses}
                    </p>
                    <p className="text-[10px] text-[var(--text-muted)] font-medium">Courses</p>
                  </div>
                </div>

                {/* Achievements */}
                <div className="mb-6">
                  <h4 className="text-sm font-bold text-[var(--fg-color)] mb-3">Key Achievements</h4>
                  <div className="space-y-2">
                    {selectedMember.achievements.map((ach, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <Award className="w-4 h-4 text-amber-500 fill-amber-500" />
                        <span className="text-xs text-[var(--fg-color)] font-medium">{ach}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Specialization */}
                <div className="mb-6">
                  <h4 className="text-sm font-bold text-[var(--fg-color)] mb-3 font-semibold">Specializations</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedMember.specialization.map((spec, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded-lg bg-[var(--color-brand-blue)]/10 text-xs font-semibold text-[var(--color-brand-blue-light)]"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3">
                  <button
                    onClick={() => {
                      setSelectedMember(null);
                      const el = document.getElementById("contact");
                      if (el) el.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="btn-primary flex-1 py-3 rounded-xl text-center text-sm font-bold shadow-sm cursor-pointer"
                  >
                    Book Free Consultation
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

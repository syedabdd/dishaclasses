"use client";

import {
  Video,
  MessageCircle,
  BarChart3,
  BookOpen,
  Globe,
  Trophy,
  Zap,
  Users,
  ShieldCheck,
  Headphones,
  Smartphone,
  Clock,
  Target,
  Award,
  MonitorPlay,
} from "lucide-react";

const features = [
  {
    icon: Trophy,
    title: "Bihar Board Best Online Classes",
    description:
      "Complete preparation 2027 with Sanjay Sir — chapter-wise revision, exam pattern analysis & proven topper strategies for BSEB 10th & 12th.",
    gradient: "from-indigo-500 to-blue-500",
    glow: "group-hover:shadow-indigo-500/30",
  },
  {
    icon: BookOpen,
    title: "Class 9th to 12th Preparation",
    description:
      "Complete BSEB 9th–12th Preparation at Disha Online Classes — full syllabus, model papers, PYQs & topper strategy for Science, Arts, Commerce.",
    gradient: "from-emerald-500 to-teal-500",
    glow: "group-hover:shadow-emerald-500/30",
  },
  {
    icon: Video,
    title: "Live Classes & Premium Notes",
    description:
      "BSEB 9th–12th Live Online Classes — doubt solving, smart premium PDF notes & exam-ready revision for high scores.",
    gradient: "from-purple-500 to-violet-500",
    glow: "group-hover:shadow-purple-500/30",
  },
  {
    icon: ShieldCheck,
    title: "Trusted Smart Study Resources",
    description:
      "A trusted platform for Board preparation — expert mentorship, real-time doubt solving, most expected questions & high-scoring mock tests.",
    gradient: "from-amber-500 to-orange-500",
    glow: "group-hover:shadow-amber-500/30",
  },
  {
    icon: Globe,
    title: "Hindi & English Medium",
    description:
      "Dedicated batches for both Hindi and English medium students to ensure there are no language barriers to your success.",
    gradient: "from-cyan-500 to-blue-500",
    glow: "group-hover:shadow-cyan-500/30",
  },
  {
    icon: ShieldCheck,
    title: "Govt. Recognized Certificate",
    description:
      "Earn certificates recognized by top organizations and universities. Boost your resume with verified credentials.",
    gradient: "from-rose-500 to-pink-500",
    glow: "group-hover:shadow-rose-500/30",
  },
  {
    icon: Smartphone,
    title: "Mobile Learning App",
    description:
      "Study on the go with our feature-rich mobile app. Download content for offline learning and study without internet.",
    gradient: "from-violet-500 to-purple-500",
    glow: "group-hover:shadow-violet-500/30",
  },
  {
    icon: Headphones,
    title: "Personal Mentor Assigned",
    description:
      "Every student gets a dedicated mentor who monitors progress, provides feedback, and guides through the journey.",
    gradient: "from-teal-500 to-green-500",
    glow: "group-hover:shadow-teal-500/30",
  },
  {
    icon: Clock,
    title: "Flexible Schedule",
    description:
      "Study at your own pace. Our blended learning approach lets you balance studies with work, college, or other commitments.",
    gradient: "from-orange-500 to-amber-500",
    glow: "group-hover:shadow-orange-500/30",
  },
];

const metrics = [
  { label: "App Downloads", value: "2M+", icon: Users, color: "text-[var(--color-brand-blue)]" },
  { label: "Total Views", value: "1.5B+", icon: Target, color: "text-[var(--color-brand-red)]" },
  { label: "Registered Users", value: "2M+", icon: Award, color: "text-[var(--color-brand-blue)]" },
  { label: "Free Lectures", value: "10k+", icon: MonitorPlay, color: "text-[var(--color-brand-red)]" },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="py-24 relative overflow-hidden bg-[var(--bg-color)]">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[var(--color-brand-blue)]/5" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--card-bg)] border border-[var(--color-brand-red)]/20 text-[var(--color-brand-red)] text-xs font-semibold mb-6 tracking-wide uppercase shadow-sm">
            <Zap className="w-3.5 h-3.5" />
            Why Choose Disha Online Classes
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[var(--fg-color)] mb-6 tracking-tight">
            Everything You Need{" "}
            <span className="text-[var(--color-brand-blue)]">to Succeed</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-[var(--text-muted)] font-medium">
            We&apos;ve built India&apos;s most complete online learning ecosystem so
            you can focus on one thing — achieving your goals.
          </p>
        </div>

        {/* Metrics Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
          {metrics.map((m, i) => (
            <div
              key={i}
              className="card-premium rounded-2xl p-6 text-center group flex flex-col items-center justify-center bg-[var(--card-bg)] border-[var(--card-border)]"
            >
              <div className="w-12 h-12 rounded-xl bg-[var(--bg-color)] border border-[var(--card-border)] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <m.icon className={`block w-6 h-6 ${m.color}`} />
              </div>
              <p className="text-3xl font-black text-[var(--fg-color)] mb-1 tracking-tight">{m.value}</p>
              <p className="text-[var(--text-muted)] text-sm font-medium">{m.label}</p>
            </div>
          ))}
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <div
              key={i}
              className="card-premium relative p-8 rounded-3xl group overflow-hidden bg-[var(--card-bg)]"
            >
              {/* Icon */}
              <div
                className={`w-14 h-14 rounded-2xl bg-[var(--bg-color)] border border-[var(--card-border)] flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300 relative z-10`}
              >
                <feature.icon className="block w-6 h-6 text-[var(--color-brand-blue)]" />
              </div>

              {/* Content */}
              <h3 className="text-[var(--fg-color)] font-bold text-xl mb-3 group-hover:text-[var(--color-brand-blue-light)] transition-colors duration-300 relative z-10">
                {feature.title}
              </h3>
              <p className="text-[var(--text-muted)] text-sm leading-relaxed relative z-10 font-medium">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

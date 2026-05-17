"use client";

import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle,
  MessageCircle,
  Clock,
  Loader2,
} from "lucide-react";

const contactInfo = [
  {
    icon: Phone,
    label: "Call Us",
    value: "+91 7700879453",
    sub: "Mon - Sat, 8 AM to 8 PM",
    color: "from-[var(--color-brand-blue)] to-[var(--color-brand-blue-light)]",
    bg: "bg-[var(--color-brand-blue)]/10",
  },
  {
    icon: Mail,
    label: "Email Us",
    value: "support@dishaonlineclasses.com",
    sub: "We reply within 2 hours",
    color: "from-[var(--color-brand-red)] to-[var(--color-brand-red-light)]",
    bg: "bg-[var(--color-brand-red)]/10",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "+91 7700879453",
    sub: "Chat with us anytime",
    color: "from-[var(--color-brand-blue)] to-[var(--color-brand-blue-light)]",
    bg: "bg-[var(--color-brand-blue)]/10",
  },
  {
    icon: MapPin,
    label: "Visit Us",
    value: "Bihar, India",
    sub: "Head Office",
    color: "from-[var(--color-brand-red)] to-[var(--color-brand-red-light)]",
    bg: "bg-[var(--color-brand-red)]/10",
  },
];

const courses = [
  "Bihar Board 11th Science",
  "Bihar Board 11th Commerce",
  "Bihar Board 11th Arts",
  "Bihar Board Class 10th Dream 450+",
  "Bihar Board Class 9th",
  "Bihar Board 12th Science",
  "Bihar Board 12th Arts",
  "Bihar Board 12th Commerce",
];

const faq = [
  {
    q: "When will my course start?",
    a: "Your access begins immediately after enrollment. Live classes follow a fixed schedule shared at the time of joining.",
  },
  {
    q: "Is there an EMI option available?",
    a: "Yes! We offer 0% interest EMI options through major banks and UPI apps for all courses above ₹5,000.",
  },
  {
    q: "What if I miss a live class?",
    a: "All live sessions are recorded and available within 24 hours. You have lifetime access to all recordings.",
  },
  {
    q: "Do you provide study material?",
    a: "Yes, all courses include comprehensive PDF notes, practice sets, and previous year question banks.",
  },
];

export default function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email))
      newErrors.email = "Valid email is required";
    if (!form.phone.trim() || !/^\d{10}$/.test(form.phone.replace(/\D/g, "").slice(-10)))
      newErrors.phone = "Valid 10-digit phone is required";
    if (!form.course) newErrors.course = "Please select a course";
    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setLoading(true);
    setErrors({});
    // Simulate API call
    await new Promise((r) => setTimeout(r, 2000));
    setLoading(false);
    setSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-[var(--bg-color)]">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[var(--color-brand-blue)]/5" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--color-brand-blue)]/30 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--card-bg)] border border-[var(--color-brand-blue)]/20 text-[var(--color-brand-blue)] dark:text-blue-400 text-xs font-semibold mb-6 tracking-wide uppercase shadow-sm">
            <Mail className="w-3.5 h-3.5" />
            Contact & Enroll
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[var(--fg-color)] mb-6 tracking-tight">
            Start Your Learning{" "}
            <span className="text-[var(--color-brand-blue)]">Journey Today</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-[var(--text-muted)] font-medium">
            Fill out the form and our counselor will reach out within 2 hours
            to help you choose the perfect course.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Left Panel */}
          <div className="lg:col-span-2 space-y-4">
            {/* Contact info cards */}
            {contactInfo.map((info, i) => (
              <div
                key={i}
                className={`flex items-center gap-4 p-5 rounded-2xl card-premium bg-[var(--card-bg)] border border-[var(--card-border)] ${info.bg}`}
              >
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${info.color} flex items-center justify-center flex-shrink-0 shadow-sm`}
                >
                  <info.icon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-[var(--text-muted)] text-xs font-semibold mb-0.5">
                    {info.label}
                  </p>
                  <p className="text-[var(--fg-color)] font-bold">{info.value}</p>
                  <div className="flex items-center gap-1.5 mt-0.5">
                    <Clock className="w-3 h-3 text-[var(--text-muted)]" />
                    <p className="text-[var(--text-muted)] text-xs font-medium">{info.sub}</p>
                  </div>
                </div>
              </div>
            ))}

            {/* FAQ */}
            <div className="card-premium rounded-2xl p-6 bg-[var(--card-bg)] border border-[var(--card-border)]">
              <h3 className="text-[var(--fg-color)] font-bold text-lg mb-4">
                Quick Answers
              </h3>
              <div className="space-y-3">
                {faq.map((item, i) => (
                  <div key={i}>
                    <button
                      onClick={() =>
                        setExpandedFaq(expandedFaq === i ? null : i)
                      }
                      className="w-full text-left flex items-center justify-between gap-2"
                    >
                      <span className="text-[var(--fg-color)] text-sm font-semibold">
                        {item.q}
                      </span>
                      <span
                        className={`text-[var(--color-brand-blue-light)] text-lg transition-transform duration-300 flex-shrink-0 ${expandedFaq === i ? "rotate-45" : ""}`}
                      >
                        +
                      </span>
                    </button>
                    {expandedFaq === i && (
                      <p className="text-[var(--text-muted)] text-sm mt-2 pl-2 border-l-2 border-[var(--color-brand-blue)] font-medium">
                        {item.a}
                      </p>
                    )}
                    {i < faq.length - 1 && (
                      <div className="mt-3 border-t border-[var(--card-border)]" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Panel - Form */}
          <div className="lg:col-span-3">
            {submitted ? (
              <div className="h-full card-premium border border-emerald-500/20 bg-[var(--card-bg)] rounded-3xl flex flex-col items-center justify-center p-12 text-center">
                <div className="w-20 h-20 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center mb-6">
                  <CheckCircle className="w-10 h-10 text-emerald-500" />
                </div>
                <h3 className="text-[var(--fg-color)] font-black text-2xl mb-3">
                  We&apos;ve Got Your Request! 🎉
                </h3>
                <p className="text-[var(--text-muted)] text-base mb-2 font-medium">
                  Thank you, <span className="text-[var(--fg-color)] font-semibold">{form.name}</span>!
                </p>
                <p className="text-[var(--text-muted)] mb-6 font-medium">
                  Our counselor will contact you at{" "}
                  <span className="text-[var(--color-brand-blue-light)] font-bold">{form.phone}</span> within 2
                  hours.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setForm({ name: "", email: "", phone: "", course: "", message: "" });
                  }}
                  className="btn-primary px-6 py-3 rounded-xl text-white font-semibold"
                >
                  Submit Another Query
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="card-premium rounded-3xl p-8 bg-[var(--card-bg)] border border-[var(--card-border)]"
                noValidate
              >
                <h3 className="text-[var(--fg-color)] font-black text-2xl mb-2">
                  Free Counseling Session
                </h3>
                <p className="text-[var(--text-muted)] text-sm mb-8 font-medium">
                  Get expert guidance on course selection — completely free!
                </p>

                <div className="space-y-5">
                  {/* Name & Email */}
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="contact-name"
                        className="block text-[var(--fg-color)] text-sm font-semibold mb-2"
                      >
                        Full Name *
                      </label>
                      <input
                        id="contact-name"
                        name="name"
                        type="text"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Rahul Sharma"
                        className={`w-full px-4 py-3.5 rounded-xl bg-[var(--bg-color)] border text-[var(--fg-color)] placeholder-slate-500 text-sm focus:border-[var(--color-brand-blue)] outline-none transition-all duration-300 font-semibold ${
                          errors.name ? "border-red-500/50" : "border-[var(--card-border)]"
                        }`}
                      />
                      {errors.name && (
                        <p className="text-red-500 text-xs mt-1 font-semibold">{errors.name}</p>
                      )}
                    </div>
                    <div>
                      <label
                        htmlFor="contact-email"
                        className="block text-[var(--fg-color)] text-sm font-semibold mb-2"
                      >
                        Email Address *
                      </label>
                      <input
                        id="contact-email"
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="rahul@example.com"
                        className={`w-full px-4 py-3.5 rounded-xl bg-[var(--bg-color)] border text-[var(--fg-color)] placeholder-slate-500 text-sm focus:border-[var(--color-brand-blue)] outline-none transition-all duration-300 font-semibold ${
                          errors.email ? "border-red-500/50" : "border-[var(--card-border)]"
                        }`}
                      />
                      {errors.email && (
                        <p className="text-red-500 text-xs mt-1 font-semibold">{errors.email}</p>
                      )}
                    </div>
                  </div>

                  {/* Phone */}
                  <div>
                    <label
                      htmlFor="contact-phone"
                      className="block text-[var(--fg-color)] text-sm font-semibold mb-2"
                    >
                      Phone Number *
                    </label>
                    <div className="relative">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--text-muted)] text-sm font-bold">
                        +91
                      </span>
                      <input
                        id="contact-phone"
                        name="phone"
                        type="tel"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="9876543210"
                        className={`w-full pl-14 pr-4 py-3.5 rounded-xl bg-[var(--bg-color)] border text-[var(--fg-color)] placeholder-slate-500 text-sm focus:border-[var(--color-brand-blue)] outline-none transition-all duration-300 font-semibold ${
                          errors.phone ? "border-red-500/50" : "border-[var(--card-border)]"
                        }`}
                      />
                    </div>
                    {errors.phone && (
                      <p className="text-red-500 text-xs mt-1 font-semibold">{errors.phone}</p>
                    )}
                  </div>

                  {/* Course Selection */}
                  <div>
                    <label
                      htmlFor="contact-course"
                      className="block text-[var(--fg-color)] text-sm font-semibold mb-2"
                    >
                      Interested Course *
                    </label>
                    <select
                      id="contact-course"
                      name="course"
                      value={form.course}
                      onChange={handleChange}
                      className={`w-full px-4 py-3.5 rounded-xl bg-[var(--bg-color)] border text-sm focus:border-[var(--color-brand-blue)] outline-none transition-all duration-300 font-semibold cursor-pointer ${
                        errors.course ? "border-red-500/50" : "border-[var(--card-border)]"
                      } ${form.course ? "text-[var(--fg-color)]" : "text-slate-500"}`}
                    >
                      <option value="" disabled className="bg-[var(--card-bg)] text-[var(--text-muted)]">
                        Select a course...
                      </option>
                      {courses.map((c) => (
                        <option key={c} value={c} className="bg-[var(--card-bg)] text-[var(--fg-color)]">
                          {c}
                        </option>
                      ))}
                    </select>
                    {errors.course && (
                      <p className="text-red-500 text-xs mt-1 font-semibold">{errors.course}</p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="contact-message"
                      className="block text-[var(--fg-color)] text-sm font-semibold mb-2"
                    >
                      Message (Optional)
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={4}
                      placeholder="Tell us about your goals, current preparation level, or any questions..."
                      className="w-full px-4 py-3.5 rounded-xl bg-[var(--bg-color)] border border-[var(--card-border)] text-[var(--fg-color)] placeholder-slate-500 text-sm focus:border-[var(--color-brand-blue)] outline-none transition-all duration-300 resize-none font-semibold"
                    />
                  </div>

                  {/* Submit */}
                  <button
                    id="contact-submit-btn"
                    type="submit"
                    disabled={loading}
                    className="btn-primary w-full py-4 rounded-xl text-white font-bold text-base flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Book Free Counseling Session
                      </>
                    )}
                  </button>

                  <p className="text-center text-[var(--text-muted)] text-xs font-semibold">
                    By submitting, you agree to be contacted by our counselors.
                    <br />
                    No spam, ever. We respect your privacy. 🔒
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

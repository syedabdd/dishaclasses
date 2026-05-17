"use client";

import { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Clock,
  Users,
  Star,
  BookOpen,
  CheckCircle,
  FileText,
  Shield,
  Award,
  Video,
  ChevronDown,
  ChevronUp,
  User,
  Phone,
  Mail,
  Lock,
  X,
  CreditCard,
  QrCode,
} from "lucide-react";
import Link from "next/link";

// Real Course Data List matching your catalog exactly!
const coursesData = [
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
    price: "₹1500/-",
    originalPrice: "₹1800/-",
    regStart: "03 Apr 2026",
    classStart: "15 Apr 2026",
    lang: "Hindi Medium",
    subjects: ["Physics", "Chemistry", "Biology", "Math", "Hindi", "English"],
    features: [
      "🔴 Live Batch: Attend daily interactive Live classes with expert faculty.",
      "🎥 Recorded Batch: Unlimited revision anytime, anywhere.",
      "📝 Chapter Wise Notes: Easy-to-understand comprehensive PDF notes.",
      "📊 Chapter Wise Test: Regular mock exams and test evaluations.",
      "📄 Panel PDF: Quick revision of daily handwritten whiteboard notes."
    ],
    teachers: [
      { name: "Sanjay Sir", role: "Hindi/Maths" },
      { name: "krishnanandan Sir", role: "Physics" },
      { name: "Raj Sir", role: "Chemistry" },
      { name: "Brijesh Sir", role: "Biology" },
      { name: "Yuvraj Sir", role: "English" }
    ],
    faqs: [
      { q: "क्या Disha Online Classes में लाइव और रिकॉर्डेड दोनों प्रकार की क्लासेस मिलती हैं?", a: "हाँ, यहाँ आपको सभी विषयों की लाइव क्लासेज मिलेंगी और यदि आप किसी लाइव क्लास को मिस करते हैं तो रिकॉर्डेड वीडियो लेक्चर भी हमेशा उपलब्ध रहेंगे।" },
      { q: "क्या Chapter-wise Objective और Subjective प्रश्न उपलब्ध हैं?", a: "हाँ, हर चैप्टर के अंत में महत्वपूर्ण बहुविकल्पीय (Objective) और वर्णनात्मक (Subjective) प्रश्नों का पूरा संकलन दिया जाता है।" },
      { q: "क्या Question Bank Solution मिलता है क्या?", a: "बिल्कुल! बिहार बोर्ड के पिछले 10 वर्षों के हल सहित संपूर्ण प्रश्न बैंक सलूशन बैच के साथ प्रदान किए जाते हैं।" },
      { q: "क्या Notes भी दिए जाते हैं?", a: "हाँ, सभी लाइव क्लास के पैनल पीडीएफ के साथ-साथ विशेष रूप से तैयार किए गए चैप्टर-वाइज हस्तलिखित और डिजिटल स्मार्ट नोट्स दिए जाते हैं।" }
    ]
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
    price: "₹1500/-",
    originalPrice: "₹1800/-",
    regStart: "03 Apr 2026",
    classStart: "15 Apr 2026",
    lang: "English Medium",
    subjects: ["Physics", "Chemistry", "Biology", "Math", "Hindi", "English"],
    features: [
      "🔴 Live Batch: Daily interactive Live classes with expert faculty.",
      "🎥 Recorded Batch: Watch recordings anytime for multiple revisions.",
      "📝 Chapter Wise Notes: Smart comprehensive PDF study notes.",
      "📊 Chapter Wise Test: Assess your preparation level with regular tests.",
      "📄 Panel PDF: Access teacher board slides instantly."
    ],
    teachers: [
      { name: "Sanjay Sir", role: "Hindi/Maths" },
      { name: "krishnanandan Sir", role: "Physics" },
      { name: "Raj Sir", role: "Chemistry" },
      { name: "Brijesh Sir", role: "Biology" },
      { name: "Yuvraj Sir", role: "English" }
    ],
    faqs: [
      { q: "Do we get both Live and Recorded classes?", a: "Yes! All classes are conducted live, and their high-quality recordings are immediately saved for your lifetime access." },
      { q: "Are notes provided in English?", a: "Yes, this is an English medium batch, so all standard class notes, panel PDFs, and test series are formatted in English." },
      { q: "Will Sanjay Sir teach Hindi?", a: "Yes, Sanjay Sir will guide all students through Hindi and Maths syllabus with his proven topper strategy." }
    ]
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
    price: "₹1500/-",
    originalPrice: "₹1800/-",
    regStart: "03 Apr 2026",
    classStart: "15 Apr 2026",
    lang: "Bilingual (Hindi/English)",
    subjects: ["Accountancy", "Business Studies", "Economics", "E.P.S", "Hindi", "English"],
    features: [
      "🔴 Live Batch: Interactive business case study based live sessions.",
      "📝 Chapter Wise Notes: Smart notes on formulas and definitions.",
      "📊 Chapter Wise Test: Multiple choice and long answer model practice."
    ],
    teachers: [
      { name: "Commerce Expert", role: "Accounts & BST" },
      { name: "Sanjay Sir", role: "Hindi Medium Support" },
      { name: "Yuvraj Sir", role: "English & Business Comm." }
    ],
    faqs: [
      { q: "क्या हिंदी और इंग्लिश दोनों भाषा में समझाया जाएगा?", a: "हाँ, यह बैच द्विभाषी (Bilingual) है ताकि दोनों ही माध्यम के विद्यार्थियों को समझने में कोई कठिनाई न हो।" }
    ]
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
    price: "₹1500/-",
    originalPrice: "₹1800/-",
    regStart: "03 Apr 2026",
    classStart: "15 Apr 2026",
    lang: "Hindi Medium",
    subjects: ["History", "Geography", "Political Science", "Economics", "Hindi", "English"],
    features: [
      "🔴 Live Batch: Concept visualization for history & maps.",
      "📝 Chapter Wise Notes: Highly structured answer-writing points.",
      "📄 Panel PDF: Access to daily board board-notes."
    ],
    teachers: [
      { name: "Sanjay Sir", role: "Hindi & Guidance" },
      { name: "Arts Specialist", role: "History & Geography" },
      { name: "Yuvraj Sir", role: "English" }
    ],
    faqs: [
      { q: "क्या बोर्ड परीक्षा के उत्तर लेखन की तैयारी कराई जाएगी?", a: "हाँ! आर्ट्स में अच्छे अंक लाने के लिए बेहतरीन आंसर राइटिंग प्रैक्टिस कराई जाती है।" }
    ]
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
    price: "₹799/-",
    originalPrice: "₹1499/-",
    regStart: "10 Feb 2026",
    classStart: "25 Feb 2026",
    lang: "Hindi / Sanskrit / Urdu",
    subjects: ["Math", "Science", "Social Science", "Hindi", "Sanskrit", "Non-Hindi", "Urdu", "Maithili"],
    features: [
      "🔴 Full Live Batch: All matriculation subjects covered from basics.",
      "📚 Study Materials: Premium Question Bank solutions and PYQs.",
      "🎓 Special Mentorship: Direct study tips and motivation from Sanjay Sir.",
      "📈 Mock Tests: Real examination environment test papers."
    ],
    teachers: [
      { name: "Sanjay Sir", role: "Maths, Hindi & Sanskrit" },
      { name: "krishnanandan Sir", role: "Science" },
      { name: "Arts Team", role: "Social Science" }
    ],
    faqs: [
      { q: "क्या इस कोर्स से पढ़कर टॉपर बन सकते हैं?", a: "बिहार बोर्ड 10वीं के पिछले कई सालों के स्टेट टॉपर्स ने इसी 'Dream 450+' बैच से अपनी पढ़ाई पूरी की थी!" }
    ]
  },
  {
    id: 6,
    title: "Bihar Board पहल बैच Class 9th (2026-27)",
    category: "Class 9th",
    badge: "New Batch",
    description: "Build an outstanding early foundation for Class 10th boards. Master Class 9th syllabus with comprehensive interactive live classes.",
    instructor: "Disha Foundation Team",
    rating: 4.9,
    reviews: 1450,
    students: "11,500+",
    duration: "12 Months",
    lessons: 300,
    price: "₹499/-",
    originalPrice: "₹999/-",
    regStart: "10 Feb 2026",
    classStart: "25 Feb 2026",
    lang: "Hindi / English",
    subjects: ["Math", "Science", "Social Science", "Hindi", "Sanskrit", "English"],
    features: [
      "🔴 Live Interactive Sessions: Fun, easy learning framework.",
      "📝 Basic-to-Advanced Notes: Ideal revision resource.",
      "🎯 Objective Question Practice: High score preparation."
    ],
    teachers: [
      { name: "Sanjay Sir", role: "Mentor & Hindi" },
      { name: "Foundation Specialists", role: "Science & Maths" }
    ],
    faqs: [
      { q: "क्या क्लास 9वीं के साथ 10वीं की भी कुछ तैयारी होगी?", a: "हाँ, नौवीं कक्षा के कोर कांसेप्ट को इस तरह मजबूत किया जाएगा ताकि 10वीं बोर्ड में आपको बहुत आसानी हो।" }
    ]
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
    price: "₹1800/-",
    originalPrice: "₹2499/-",
    regStart: "01 Feb 2026",
    classStart: "15 Feb 2026",
    lang: "Hindi Medium",
    subjects: ["Physics", "Chemistry", "Biology", "Math", "Hindi", "English"],
    features: [
      "🔴 Live Interactive Class: Daily high-yield board targeted coaching.",
      "📝 Premium PDF Notes: Comprehensive hand-crafted subject books.",
      "📅 Model Paper Solution: Complete coverage of official BSEB papers."
    ],
    teachers: [
      { name: "Sanjay Sir", role: "Hindi & Guidance" },
      { name: "krishnanandan Sir", role: "Physics" },
      { name: "Raj Sir", role: "Chemistry" },
      { name: "Brijesh Sir", role: "Biology" },
      { name: "Yuvraj Sir", role: "English" }
    ],
    faqs: [
      { q: "क्या इसमें पूरा सिलेबस पढ़ाया जायेगा?", a: "हाँ, भौतिक विज्ञान, रसायन विज्ञान, जीव विज्ञान, गणित, हिंदी और अंग्रेजी का संपूर्ण कोर्स विस्तार से कराया जाएगा।" }
    ]
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
    price: "₹1800/-",
    originalPrice: "₹2499/-",
    regStart: "01 Feb 2026",
    classStart: "15 Feb 2026",
    lang: "English Medium",
    subjects: ["Physics", "Chemistry", "Biology", "Math", "Hindi", "English"],
    features: [
      "🔴 English Medium Lectures: Concepts broken down step-by-step.",
      "📝 SMART Exam Notes: Fully prepared printable PDFs.",
      "📄 Panel PDFs: Review daily class slides instantly."
    ],
    teachers: [
      { name: "Sanjay Sir", role: "Hindi & Mentor" },
      { name: "krishnanandan Sir", role: "Physics" },
      { name: "Raj Sir", role: "Chemistry" },
      { name: "Brijesh Sir", role: "Biology" },
      { name: "Yuvraj Sir", role: "English" }
    ],
    faqs: [
      { q: "Are standard definitions taught as per BSEB English standard?", a: "Yes, all lessons, written answers, definition lists, and mock keys are completely in standard English." }
    ]
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
    price: "₹1800/-",
    originalPrice: "₹2499/-",
    regStart: "01 Feb 2026",
    classStart: "15 Feb 2026",
    lang: "Hindi Medium",
    subjects: ["History", "Geography", "Political Science", "Economics", "Hindi", "English"],
    features: [
      "🔴 Live Interactive Class: Dynamic analysis of historical epochs & maps.",
      "📝 Answer Writing Masterclass: Techniques to score maximum marks.",
      "📚 Question Bank: Decades of solved papers."
    ],
    teachers: [
      { name: "Sanjay Sir", role: "Hindi & Mentor" },
      { name: "Arts Specialists", role: "History & Geography" },
      { name: "Yuvraj Sir", role: "English" }
    ],
    faqs: [
      { q: "आर्ट्स की क्लास कब-कब चलेंगी?", a: "बैच ज्वाइन करने के तुरंत बाद आपको विस्तृत समय सारणी (Time Table) प्रदान की जाएगी।" }
    ]
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
    price: "₹1800/-",
    originalPrice: "₹2499/-",
    regStart: "01 Feb 2026",
    classStart: "15 Feb 2026",
    lang: "Bilingual (Hindi/English)",
    subjects: ["Accountancy", "Business Studies", "Economics", "E.P.S", "Hindi", "English"],
    features: [
      "🔴 Commerce Live: Interactive Accountancy ledger exercises.",
      "📝 Chapter Wise Formula Notes: Excellent rapid-review notes.",
      "📄 Live doubt sessions: Resolve query sheets immediately."
    ],
    teachers: [
      { name: "Commerce Specialist", role: "Accounts & Business studies" },
      { name: "Sanjay Sir", role: "Hindi Guidance" },
      { name: "Yuvraj Sir", role: "English" }
    ],
    faqs: [
      { q: "क्या प्रैक्टिकल एकाउंट्स के पूरे सवाल लगवाए जाते हैं?", a: "हाँ, बैच में एकाउंटेंसी की प्रत्येक बुक के सभी महत्वपूर्ण आंकिक प्रश्न हल कराए जाते हैं।" }
    ]
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
    price: "₹599/-",
    originalPrice: "₹1200/-",
    regStart: "01 Feb 2026",
    classStart: "15 Feb 2026",
    lang: "Bilingual",
    subjects: ["Hindi Literature", "Hindi Grammar", "English Literature", "English Grammar"],
    features: [
      "🔴 Live Language Batch: Interactive grammar logic sessions.",
      "📝 Hand-crafted summaries: Rapid chapter summaries & objective kits.",
      "📄 Panel PDFs: Board notes ready for immediate print."
    ],
    teachers: [
      { name: "Sanjay Sir", role: "Hindi Grammar & Lit." },
      { name: "Yuvraj Sir", role: "English Grammar & Lit." }
    ],
    faqs: [
      { q: "क्या केवल व्याकरण की पढ़ाई होगी?", a: "नहीं, व्याकरण (Grammar) और बुक लिटरेचर दोनों के सभी चैप्टर्स विस्तारपूर्वक पढ़ाए जाएंगे।" }
    ]
  }
];

export default function CourseDetailPage() {
  const params = useParams();
  const router = useRouter();

  const id = Number(params?.id);
  // Default to course with id 2 if invalid
  const course = coursesData.find((c) => c.id === id) || coursesData[1];

  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);

  // Payment Modal States
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState<"upi" | "card" | "netbanking">("upi");
  const [upiId, setUpiId] = useState("");
  const [isUpiVerified, setIsUpiVerified] = useState(false);
  const [cardNumber, setCardNumber] = useState("");
  const [cardExpiry, setCardExpiry] = useState("");
  const [cardCvv, setCardCvv] = useState("");
  const [cardName, setCardName] = useState("");
  const [paymentStage, setPaymentStage] = useState<"form" | "processing" | "success">("form");
  const [orderId, setOrderId] = useState("");

  const handlePayOnline = () => {
    setOrderId(`DOPB-${Math.floor(Math.random() * 900000 + 100000)}`);
    setPaymentStage("form");
    setIsUpiVerified(false);
    setUpiId("");
    setCardNumber("");
    setCardExpiry("");
    setCardCvv("");
    setCardName("");
    setShowPaymentModal(true);
  };

  const handleSubmitPayment = (e: React.FormEvent) => {
    e.preventDefault();
    setPaymentStage("processing");
    setTimeout(() => {
      setPaymentStage("success");
    }, 2500);
  };

  // Dynamic WhatsApp link using course specific title
  const whatsappUrl = `https://wa.me/917700879453?text=Namaste%20Sanjay%20Sir,%20mujhe%20apke%20"${encodeURIComponent(course.title)}"%20me%20admission%20lena%20hai.%20Please%20guide%20me.`;

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[var(--bg-color)] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
          
          {/* Breadcrumb */}
          <div className="mb-6">
            <Link
              href="/courses"
              className="text-sm font-semibold text-[var(--color-brand-blue-light)] hover:underline flex items-center gap-1"
            >
              ← Back to Courses
            </Link>
          </div>

          {/* Heading Section */}
          <div className="mb-8">
            <div className="flex flex-wrap gap-2 mb-3">
              <span className="px-3 py-1 bg-[var(--color-brand-blue)]/10 text-[var(--color-brand-blue-light)] text-xs font-bold uppercase rounded-lg">
                {course.category}
              </span>
              <span className="px-3 py-1 bg-emerald-500/10 text-emerald-500 text-xs font-bold uppercase rounded-lg flex items-center gap-1">
                ★ {course.badge}
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[var(--fg-color)] tracking-tight leading-tight mb-4">
              {course.title}
            </h1>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 items-start">
            
            {/* Left Content Area */}
            <div className="lg:col-span-2 space-y-8">
              
              {/* Course Detail Card */}
              <div className="bg-[var(--card-bg)] border border-[var(--card-border)] rounded-3xl p-6 md:p-8 shadow-sm">
                <h2 className="text-2xl font-black text-[var(--fg-color)] mb-4">Description</h2>
                <p className="text-base sm:text-lg text-[var(--text-muted)] font-medium leading-relaxed mb-6">
                  {course.description}
                </p>
                
                {/* Dynamic Subjects Grid */}
                <h3 className="text-lg font-bold text-[var(--fg-color)] mb-3">📚 Subjects Covered:</h3>
                <div className="flex flex-wrap gap-2">
                  {course.subjects.map((sub, idx) => (
                    <span key={idx} className="bg-[var(--bg-color)] border border-[var(--card-border)] px-4 py-2 rounded-xl text-sm font-bold text-[var(--fg-color)]">
                      ✔️ {sub}
                    </span>
                  ))}
                </div>
              </div>

              {/* What You Get / Features Section */}
              <div className="bg-[var(--card-bg)] border border-[var(--card-border)] rounded-3xl p-6 md:p-8 shadow-sm">
                <h2 className="text-2xl font-black text-[var(--fg-color)] mb-6">🌟 Key Features of the Course (What You Get)</h2>
                <div className="space-y-4">
                  {course.features.map((feat, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                      <p className="text-sm sm:text-base font-semibold text-[var(--fg-color)]">{feat}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Teachers / Faculty */}
              <div className="bg-[var(--card-bg)] border border-[var(--card-border)] rounded-3xl p-6 md:p-8 shadow-sm">
                <h2 className="text-2xl font-black text-[var(--fg-color)] mb-6">👨‍🏫 Expert Teachers</h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {course.teachers.map((teach, i) => (
                    <div key={i} className="p-4 bg-[var(--bg-color)] border border-[var(--card-border)] rounded-2xl flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-[var(--color-brand-blue)]/10 text-[var(--color-brand-blue-light)] flex items-center justify-center font-black">
                        {teach.name[0]}
                      </div>
                      <div>
                        <p className="text-sm font-black text-[var(--fg-color)]">{teach.name}</p>
                        <p className="text-xs text-[var(--text-muted)] font-medium">{teach.role}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Frequently Asked Questions */}
              <div className="bg-[var(--card-bg)] border border-[var(--card-border)] rounded-3xl p-6 md:p-8 shadow-sm">
                <h2 className="text-2xl font-black text-[var(--fg-color)] mb-6">❓ FAQ's</h2>
                <div className="space-y-4">
                  {course.faqs.map((faq, i) => (
                    <div key={i} className="border border-[var(--card-border)] rounded-2xl overflow-hidden">
                      <button
                        onClick={() => setExpandedFAQ(expandedFAQ === i ? null : i)}
                        className="w-full flex items-center justify-between p-5 bg-[var(--bg-color)] text-left hover:bg-[var(--card-border)] transition-colors"
                      >
                        <span className="text-sm font-bold text-[var(--fg-color)]">{faq.q}</span>
                        {expandedFAQ === i ? (
                          <ChevronUp className="w-5 h-5 text-[var(--text-muted)]" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-[var(--text-muted)]" />
                        )}
                      </button>
                      {expandedFAQ === i && (
                        <div className="p-5 border-t border-[var(--card-border)] bg-[var(--card-bg)] text-sm text-[var(--text-muted)] font-medium leading-relaxed">
                          {faq.a}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Right Interactive Checkout Panel */}
            <div className="space-y-6">
              
              {/* What's Included Meta Card */}
              <div className="bg-[var(--card-bg)] border border-[var(--card-border)] rounded-3xl p-6 shadow-sm space-y-4">
                <h3 className="text-lg font-black text-[var(--fg-color)] pb-2 border-b border-[var(--card-border)]">📋 What's Included</h3>
                
                <div className="space-y-3 text-sm font-semibold">
                  <div className="flex justify-between">
                    <span className="text-[var(--text-muted)]">📅 Reg. Start:</span>
                    <span className="text-[var(--fg-color)] font-extrabold">{course.regStart}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[var(--text-muted)]">🚀 Class Start:</span>
                    <span className="text-[var(--fg-color)] font-extrabold">{course.classStart}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[var(--text-muted)]">⏳ Validity:</span>
                    <span className="text-[var(--fg-color)] font-extrabold">{course.duration}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[var(--text-muted)]">🌐 Lang:</span>
                    <span className="text-[var(--fg-color)] font-extrabold">{course.lang}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[var(--text-muted)]">💻 Class Type:</span>
                    <span className="text-emerald-500 font-extrabold">Hybrid (Live + Recorded)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[var(--text-muted)]">📥 Downloadable:</span>
                    <span className="text-[var(--fg-color)] font-extrabold">Yes</span>
                  </div>
                </div>
              </div>

              {/* Purchase Card */}
              <div className="bg-[var(--card-bg)] border border-[var(--card-border)] rounded-3xl p-6 md:p-8 shadow-md sticky top-24">
                <div className="mb-6">
                  <span className="text-xs font-bold text-[var(--text-muted)] uppercase tracking-wider block mb-1">
                    COURSE OFFER PRICE
                  </span>
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-black text-[var(--color-brand-red)]">{course.price}</span>
                    <span className="text-lg text-[var(--text-muted)] line-through font-semibold">
                      {course.originalPrice}
                    </span>
                  </div>
                  <p className="text-xs text-emerald-500 font-extrabold bg-emerald-500/10 px-2.5 py-1 rounded-lg inline-block mt-2">
                    🔥 Special Enrollment Discount Active
                  </p>
                </div>

                {/* Purchase Button options */}
                <div className="space-y-3">
                  {/* Option 1: Buy Now on WhatsApp */}
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3.5 bg-emerald-500 hover:bg-emerald-600 active:scale-95 text-white font-extrabold text-base rounded-2xl flex items-center justify-center gap-2.5 shadow-lg shadow-emerald-500/10 transition-all cursor-pointer text-center"
                  >
                    {/* WhatsApp SVG Icon */}
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.705 1.459h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    Buy Now on WhatsApp
                  </a>

                  {/* Option 2: Pay Online / Instantly */}
                  <button
                    onClick={handlePayOnline}
                    className="w-full py-3.5 bg-gradient-to-r from-[var(--color-brand-blue)] to-[var(--color-brand-blue-light)] hover:opacity-95 active:scale-95 text-white font-extrabold text-base rounded-2xl flex items-center justify-center gap-2.5 shadow-lg shadow-blue-500/10 transition-all cursor-pointer text-center"
                  >
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z"/>
                    </svg>
                    Pay Online / Card / UPI
                  </button>
                </div>

                {/* Extra security guarantees */}
                <div className="mt-6 space-y-3 text-[11px] text-[var(--text-muted)] font-bold">
                  <div className="flex items-center gap-2">
                    <Shield className="w-4 h-4 text-emerald-500" />
                    <span>30-Day Risk-Free Money Back Guarantee</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Award className="w-4 h-4 text-[var(--color-brand-blue)]" />
                    <span>Access on App, Web & Windows instantly</span>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </main>
      <Footer />

      {/* Interactive Simulated Payment Modal */}
      {showPaymentModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md">
          <div className="relative w-full max-w-lg bg-[var(--card-bg)] border border-[var(--card-border)] rounded-3xl p-6 md:p-8 shadow-2xl overflow-y-auto max-h-[90vh]">
            
            {/* Close Button */}
            {paymentStage !== "processing" && (
              <button
                onClick={() => setShowPaymentModal(false)}
                className="absolute top-4 right-4 p-2 rounded-full hover:bg-[var(--bg-color)] text-[var(--text-muted)] hover:text-[var(--fg-color)] transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            )}

            {/* Stage 1: Form Selection */}
            {paymentStage === "form" && (
              <form onSubmit={handleSubmitPayment} className="space-y-6">
                
                {/* Header */}
                <div className="text-center pb-4 border-b border-[var(--card-border)]">
                  <div className="flex justify-center items-center gap-2 mb-2">
                    <img src="https://play-lh.googleusercontent.com/qehJs6Z2N_dU2jPRFX7Hut4P9WNWtPzS4rqZ6KPduRAg7FgCx7_5lfFXceCdeUReM9o=w480-h960-rw" alt="Logo" className="w-8 h-8 rounded-full" />
                    <span className="font-black text-lg text-[var(--fg-color)]">Disha Secure Pay</span>
                  </div>
                  <p className="text-xs text-[var(--text-muted)] font-semibold uppercase tracking-wider">Order ID: {orderId}</p>
                </div>

                {/* Course Summary */}
                <div className="p-4 bg-[var(--bg-color)] rounded-2xl border border-[var(--card-border)] flex justify-between items-center">
                  <div className="text-left">
                    <h4 className="text-sm font-black text-[var(--fg-color)] line-clamp-1">{course.title}</h4>
                    <p className="text-xs text-[var(--text-muted)] font-bold">{course.category}</p>
                  </div>
                  <span className="text-xl font-black text-[var(--color-brand-red)]">{course.price}</span>
                </div>

                {/* Method Selector Tabs */}
                <div className="grid grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() => setPaymentMethod("upi")}
                    className={`py-3 px-1 rounded-xl border text-xs font-black transition-all flex flex-col items-center gap-1.5 cursor-pointer ${
                      paymentMethod === "upi"
                        ? "border-[var(--color-brand-blue)] bg-[var(--color-brand-blue)]/5 text-[var(--color-brand-blue-light)]"
                        : "border-[var(--card-border)] hover:bg-[var(--bg-color)] text-[var(--text-muted)]"
                    }`}
                  >
                    <span>⚡</span>
                    <span>UPI / QR</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setPaymentMethod("card")}
                    className={`py-3 px-1 rounded-xl border text-xs font-black transition-all flex flex-col items-center gap-1.5 cursor-pointer ${
                      paymentMethod === "card"
                        ? "border-[var(--color-brand-blue)] bg-[var(--color-brand-blue)]/5 text-[var(--color-brand-blue-light)]"
                        : "border-[var(--card-border)] hover:bg-[var(--bg-color)] text-[var(--text-muted)]"
                    }`}
                  >
                    <span>💳</span>
                    <span>Card Pay</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setPaymentMethod("netbanking")}
                    className={`py-3 px-1 rounded-xl border text-xs font-black transition-all flex flex-col items-center gap-1.5 cursor-pointer ${
                      paymentMethod === "netbanking"
                        ? "border-[var(--color-brand-blue)] bg-[var(--color-brand-blue)]/5 text-[var(--color-brand-blue-light)]"
                        : "border-[var(--card-border)] hover:bg-[var(--bg-color)] text-[var(--text-muted)]"
                    }`}
                  >
                    <span>🏦</span>
                    <span>Netbanking</span>
                  </button>
                </div>

                {/* Mode Contents */}
                <div className="space-y-4 pt-1">
                  {paymentMethod === "upi" && (
                    <div className="space-y-4">
                      {/* Fake QR Scanner Grid */}
                      <div className="p-4 bg-white dark:bg-gray-900 border border-[var(--card-border)] rounded-2xl flex flex-col items-center text-center">
                        <div className="w-36 h-36 bg-slate-900 rounded-xl p-2.5 border-2 border-dashed border-[var(--color-brand-blue-light)] flex items-center justify-center relative">
                          <div className="w-full h-full bg-slate-950 grid grid-cols-8 gap-0.5 p-1 rounded">
                            {Array.from({ length: 64 }).map((_, idx) => (
                              <div
                                key={idx}
                                className={`rounded-[1px] ${
                                  (idx % 3 === 0 || idx % 7 === 0 || idx < 12 || idx > 52 || (idx % 8 === 0 && idx > 24))
                                    ? "bg-white"
                                    : "bg-transparent"
                                }`}
                              />
                            ))}
                          </div>
                          <div className="absolute inset-0 flex items-center justify-center bg-transparent pointer-events-none">
                            <div className="w-8 h-8 rounded-full bg-emerald-500 text-white font-extrabold flex items-center justify-center shadow-lg text-xs">
                              ₹
                            </div>
                          </div>
                        </div>
                        <p className="text-[11px] text-[var(--text-muted)] mt-2.5 font-bold">
                          Scan BHIM QR using GPay, PhonePe, Paytm, or BHIM UPI
                        </p>
                      </div>

                      <div className="text-left">
                        <label className="block text-xs font-bold text-[var(--fg-color)] mb-1.5 uppercase tracking-wide">Enter UPI ID</label>
                        <div className="flex gap-2">
                          <input
                            type="text"
                            placeholder="example@okaxis"
                            value={upiId}
                            onChange={(e) => {
                              setUpiId(e.target.value);
                              setIsUpiVerified(false);
                            }}
                            className="flex-1 px-4 py-3 rounded-xl border border-[var(--card-border)] bg-[var(--bg-color)] text-[var(--fg-color)] text-sm font-bold placeholder:text-gray-500 focus:outline-none focus:border-[var(--color-brand-blue)]"
                          />
                          <button
                            type="button"
                            onClick={() => {
                              if (upiId.includes("@")) {
                                setIsUpiVerified(true);
                              } else {
                                alert("Please enter a valid UPI ID (e.g. name@upi)");
                              }
                            }}
                            className={`px-4 py-3 rounded-xl text-xs font-black transition-all cursor-pointer ${
                              isUpiVerified
                                ? "bg-emerald-500/15 text-emerald-500 border border-emerald-500/20"
                                : "bg-[var(--card-border)] text-[var(--fg-color)] hover:bg-[var(--card-border)]/80 border border-transparent"
                            }`}
                          >
                            {isUpiVerified ? "✓ Verified" : "Verify UPI"}
                          </button>
                        </div>
                      </div>
                    </div>
                  )}

                  {paymentMethod === "card" && (
                    <div className="space-y-4 text-left">
                      <div>
                        <label className="block text-xs font-bold text-[var(--fg-color)] mb-1.5 uppercase tracking-wide">Cardholder Name</label>
                        <input
                          type="text"
                          required
                          placeholder="Sanjay Kumar"
                          value={cardName}
                          onChange={(e) => setCardName(e.target.value)}
                          className="w-full px-4 py-3 rounded-xl border border-[var(--card-border)] bg-[var(--bg-color)] text-[var(--fg-color)] text-sm font-bold placeholder:text-gray-500 focus:outline-none focus:border-[var(--color-brand-blue)]"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-[var(--fg-color)] mb-1.5 uppercase tracking-wide">Card Number</label>
                        <input
                          type="text"
                          required
                          maxLength={19}
                          placeholder="4321 0987 6543 2109"
                          value={cardNumber}
                          onChange={(e) => {
                            const val = e.target.value.replace(/\s?/g, '').replace(/(\d{4})/g, '$1 ').trim();
                            setCardNumber(val);
                          }}
                          className="w-full px-4 py-3 rounded-xl border border-[var(--card-border)] bg-[var(--bg-color)] text-[var(--fg-color)] text-sm font-bold placeholder:text-gray-500 focus:outline-none focus:border-[var(--color-brand-blue)]"
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-bold text-[var(--fg-color)] mb-1.5 uppercase tracking-wide">Expiry (MM/YY)</label>
                          <input
                            type="text"
                            required
                            maxLength={5}
                            placeholder="12/28"
                            value={cardExpiry}
                            onChange={(e) => {
                              let val = e.target.value.replace(/\//g, "");
                              if (val.length > 2) {
                                val = val.substring(0, 2) + "/" + val.substring(2);
                              }
                              setCardExpiry(val);
                            }}
                            className="w-full px-4 py-3 rounded-xl border border-[var(--card-border)] bg-[var(--bg-color)] text-[var(--fg-color)] text-sm font-bold placeholder:text-gray-500 focus:outline-none focus:border-[var(--color-brand-blue)]"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-bold text-[var(--fg-color)] mb-1.5 uppercase tracking-wide">CVV / CVC</label>
                          <input
                            type="password"
                            required
                            maxLength={3}
                            placeholder="•••"
                            value={cardCvv}
                            onChange={(e) => setCardCvv(e.target.value.replace(/\D/g, ""))}
                            className="w-full px-4 py-3 rounded-xl border border-[var(--card-border)] bg-[var(--bg-color)] text-[var(--fg-color)] text-sm font-bold placeholder:text-gray-500 focus:outline-none focus:border-[var(--color-brand-blue)]"
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {paymentMethod === "netbanking" && (
                    <div className="space-y-4 text-left">
                      <label className="block text-xs font-bold text-[var(--fg-color)] mb-1.5 uppercase tracking-wide">Select Popular Bank</label>
                      <div className="grid grid-cols-2 gap-2">
                        {["State Bank of India", "HDFC Bank", "ICICI Bank", "Axis Bank", "Punjab National Bank", "Kotak Mahindra Bank"].map((bank) => (
                          <button
                            key={bank}
                            type="submit"
                            className="p-3 border border-[var(--card-border)] hover:border-[var(--color-brand-blue)] rounded-xl text-xs font-bold text-[var(--fg-color)] text-left hover:bg-[var(--bg-color)] transition-all flex items-center gap-2 cursor-pointer"
                          >
                            <span>🏦</span>
                            <span className="line-clamp-1">{bank}</span>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Secure Seal */}
                <div className="flex items-center gap-2 text-[10px] text-[var(--text-muted)] justify-center font-bold">
                  <Shield className="w-3.5 h-3.5 text-emerald-500" />
                  <span>SSL Encrypted Connection • 100% Secure Checkout</span>
                </div>

                {/* Primary Button */}
                <button
                  type="submit"
                  disabled={paymentMethod === "upi" && !isUpiVerified}
                  className={`w-full py-3.5 rounded-2xl font-extrabold text-base text-white shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer ${
                    paymentMethod === "upi" && !isUpiVerified
                      ? "bg-gray-400 dark:bg-gray-800 cursor-not-allowed shadow-none text-gray-500"
                      : "bg-gradient-to-r from-[var(--color-brand-blue)] to-[var(--color-brand-blue-light)] hover:opacity-95"
                  }`}
                >
                  <Lock className="w-4 h-4" />
                  Pay {course.price} Securely
                </button>
              </form>
            )}

            {/* Stage 2: Processing Payment State */}
            {paymentStage === "processing" && (
              <div className="py-12 flex flex-col items-center text-center space-y-6">
                <div className="relative w-16 h-16">
                  <div className="absolute inset-0 rounded-full border-4 border-[var(--card-border)]" />
                  <div className="absolute inset-0 rounded-full border-4 border-t-[var(--color-brand-blue-light)] animate-spin" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-black text-[var(--fg-color)]">Verifying Payment...</h3>
                  <p className="text-xs text-[var(--text-muted)] font-semibold max-w-xs mx-auto leading-relaxed">
                    Please do not close this modal or refresh the page. We are securely validating your credentials with your bank network...
                  </p>
                </div>
              </div>
            )}

            {/* Stage 3: Success Screen */}
            {paymentStage === "success" && (
              <div className="py-8 flex flex-col items-center text-center space-y-6">
                <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/25 flex items-center justify-center shadow-inner animate-bounce">
                  <CheckCircle className="w-8 h-8 text-emerald-500" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-black text-emerald-500">Payment Successful! 🎉</h3>
                  <p className="text-[10px] text-[var(--text-muted)] font-extrabold uppercase tracking-widest bg-[var(--bg-color)] border border-[var(--card-border)] px-3 py-1.5 rounded-xl inline-block mt-1">
                    Receipt ID: {orderId}
                  </p>
                  <p className="text-sm text-[var(--fg-color)] font-medium max-w-sm mx-auto leading-relaxed pt-2">
                    Congratulations! Your admission to <span className="font-extrabold text-[var(--color-brand-blue-light)]">"{course.title}"</span> is confirmed.
                  </p>
                  <div className="p-4 bg-emerald-500/5 border border-emerald-500/10 rounded-2xl text-[11px] text-emerald-600 dark:text-emerald-400 font-bold max-w-xs mx-auto leading-relaxed mt-4">
                    ✨ You will receive your Student Portal Login details, online study portal credentials, and private batch WhatsApp Group link via SMS/WhatsApp within 10 minutes.
                  </div>
                </div>

                <button
                  onClick={() => setShowPaymentModal(false)}
                  className="px-8 py-3 bg-[var(--fg-color)] hover:bg-[var(--fg-color)]/90 text-[var(--bg-color)] font-black text-xs rounded-xl transition-all cursor-pointer"
                >
                  Done & Go to Portal
                </button>
              </div>
            )}

          </div>
        </div>
      )}
    </>
  );
}

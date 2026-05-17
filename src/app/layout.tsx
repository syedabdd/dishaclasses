import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Toaster } from "react-hot-toast";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Disha Online Classes | Premier Online Education Platform",
  description:
    "Join Disha Online Classes for expert-led courses in competitive exams, academics, and skill development. Learn from top faculty with proven results.",
  keywords:
    "Disha Online Classes, online courses, competitive exam coaching, UPSC, SSC, banking, JEE, NEET, online education India",
  authors: [{ name: "Disha Online Classes" }],
  openGraph: {
    title: "Disha Online Classes | Premier Online Education Platform",
    description:
      "Transform your career with Disha Online Classes. Expert faculty, structured courses, live sessions & 24/7 doubt support.",
    type: "website",
    locale: "en_IN",
    siteName: "Disha Online Classes",
  },
  twitter: {
    card: "summary_large_image",
    title: "Disha Online Classes | Premier Online Education Platform",
    description:
      "Join thousands of successful students. Expert-led courses for competitive exams and skill development.",
  },
  viewport: "width=device-width, initial-scale=1",
};

// import { WhatsAppFloat } from "@/components/WhatsAppFloat";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                if (localStorage.theme === 'dark') {
                  document.documentElement.classList.add('dark')
                } else {
                  document.documentElement.classList.remove('dark')
                }
              } catch (_) {}
            `,
          }}
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased min-h-screen flex flex-col`}>
        <ThemeProvider>
          {children}
          <Toaster position="bottom-right" toastOptions={{ duration: 4000, style: { background: 'var(--card-bg)', color: 'var(--fg-color)', border: '1px solid var(--card-border)' } }} />
          {/* <WhatsAppFloat /> */}
        </ThemeProvider>
      </body>
    </html>
  );
}

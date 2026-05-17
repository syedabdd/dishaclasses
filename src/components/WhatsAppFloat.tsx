"use client";

import { useState, useEffect } from "react";
import { MessageSquare, X } from "lucide-react";

export function WhatsAppFloat() {
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    // Show tooltip after 3 seconds
    const timer = setTimeout(() => {
      setShowTooltip(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2 pointer-events-none">
      {/* Tooltip Popup */}
      {showTooltip && (
        <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-2xl rounded-2xl p-4 max-w-[280px] pointer-events-auto animate-fade-in relative transition-all duration-300">
          <button
            onClick={() => setShowTooltip(false)}
            className="absolute top-2 right-2 text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-300 p-0.5 rounded-full transition-colors"
          >
            <X className="w-4 h-4" />
          </button>

          <div className="flex gap-3 items-start">
            <div className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center flex-shrink-0 text-white font-bold text-sm">
              S
            </div>
            <div>
              <p className="text-xs font-bold text-zinc-800 dark:text-zinc-100">Sanjay Sir</p>
              <p className="text-[10px] text-emerald-500 font-semibold mb-1">Online • Expert Guidance</p>
              <p className="text-xs text-zinc-500 dark:text-zinc-400 font-medium">
                👋 Namaste! Aapko kaunse batch me admission lena hai? Chat karein!
              </p>
            </div>
          </div>

          <a
            href="https://wa.me/917700879453?text=Namaste%20Sanjay%20Sir,%20mujhe%20Disha%20Online%20Classes%20ke%20batch%20me%20admission%20lena%20hai."
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setShowTooltip(false)}
            className="mt-3 block text-center bg-emerald-500 hover:bg-emerald-600 text-white text-xs font-bold py-2 px-3 rounded-xl transition-colors"
          >
            Chat on WhatsApp
          </a>
        </div>
      )}

      {/* Floating Button */}
      <a
        href="https://wa.me/917700879453?text=Namaste%20Sanjay%20Sir,%20mujhe%20Disha%20Online%20Classes%20ke%20batch%20me%20admission%20lena%20hai."
        target="_blank"
        rel="noopener noreferrer"
        className="pointer-events-auto group relative w-14 h-14 bg-emerald-500 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-emerald-500/30 hover:scale-110 active:scale-95 transition-all duration-300 cursor-pointer"
        aria-label="Chat on WhatsApp"
        onClick={() => setShowTooltip(false)}
      >
        {/* Pulse effect */}
        <span className="absolute inset-0 rounded-full bg-emerald-500 animate-ping opacity-30 group-hover:opacity-0 transition-opacity duration-300"></span>

        {/* WhatsApp Icon Path */}
        <svg
          className="w-7 h-7 fill-current relative z-10"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.705 1.459h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </a>
    </div>
  );
}

import React from "react";

const ContactSection = () => {
  return (
    <section className="relative z-10 w-full bg-[#0C0B10] py-20 px-4 md:px-0 flex flex-col items-center justify-center">
      <div className="container flex flex-col items-center gap-16">
        {/* Main Contact Block */}
        <div className="flex flex-col items-center gap-6 text-center max-w-2xl w-full">
          <span className="text-[#B3CCFF] text-sm font-semibold tracking-widest uppercase mb-2">
            Contact
          </span>
          <h2 className="text-white text-4xl md:text-6xl font-bold uppercase mb-2">
            let&apos;s achieve your goals together
          </h2>
          <p className="text-white/90 text-base md:text-lg mb-4">
            Tell us about your desires
          </p>
          <button className="mt-2 flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm uppercase tracking-wider px-8 py-4 rounded-2xl shadow-lg transition-all duration-200">
            <svg
              width="24"
              height="24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <circle
                cx="12"
                cy="12"
                r="10"
                stroke="#fff"
                strokeWidth="2"
                fill="none"
              />
              <path
                d="M12 8v4l2 2"
                stroke="#fff"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
            Share your idea NOW
            <svg
              width="24"
              height="24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>

        <div className="text-xs text-gray-400 mt-8 text-center">
          © 2025 Hubcom. All rights reserved.
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
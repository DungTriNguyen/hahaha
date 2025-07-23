import Image from "next/image";
import React from "react";

const ContactSection = () => {
  return (
    <section className="relative z-10 w-full bg-[#0C0B10] text-white">
      <div className="container flex flex-col items-center justify-center gap-16 pt-44 pb-24 px-4 md:px-0">
        {/* Main Contact Block */}
        <div className="flex flex-col items-center gap-9 text-center max-w-4xl w-full">
          <div className="flex flex-col gap-2">
            <span className="text-[#B3CCFF] text-sm font-semibold tracking-widest uppercase">
              Contact
            </span>
            <h2 className="text-white text-4xl md:text-6xl lg:text-7xl font-bold font-coda uppercase">
              let&apos;s achieve your goals together
            </h2>
          </div>
          <p className="text-white/90 text-lg max-w-2xl">
            Tell us about your desires
          </p>
          <div className="bg-[#2468FF] text-white rounded-2xl flex items-center justify-between p-2 w-fit">
            <span className="px-6 py-4 font-semibold tracking-widest uppercase">
              Share your idea NOW
            </span>
            <div className="p-3 rounded-xl bg-[#1A4CD8]">
              <Image
                src="/light.svg"
                alt="light"
                width={26}
                height={26}
                className="block hover:hidden"
              />
              <Image
                src="/right.svg"
                alt="arrow"
                width={8}
                height={16}
                className="hidden hover:block"
              />
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col items-center gap-6">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-4 text-white">
            <div className="flex items-center gap-4">
              <Image src="/phone.svg" width={20} height={20} alt="phone" />
              <span className="text-sm">[+84] 966 868 574</span>
            </div>
            <div className="hidden md:block w-px h-4 bg-gray-400" />
            <div className="flex items-center gap-4">
              <Image src="/email.svg" width={20} height={20} alt="email" />
              <span className="text-sm">contact@hubcom.tech</span>
            </div>
            <div className="hidden md:block w-px h-4 bg-gray-400" />
            <div className="flex items-center gap-4">
              <Image
                src="/marker_pin.svg"
                width={20}
                height={20}
                alt="location"
              />
              <span className="text-sm text-center md:text-left">
                5 No Trang Long St.,W7, Binh Thanh Dist., HCMC
              </span>
            </div>
          </div>

          <div className="text-sm text-gray-400 text-center">
            © 2025 Hubcom. All rights reserved.
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

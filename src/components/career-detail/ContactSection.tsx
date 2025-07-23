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
            Don't see your role listed?
            </h2>
          </div>
          <p className="text-white/90 text-lg max-w-2xl">
            “Got questions? Contact us at <a href="mailto:careers@hubcom.tech" className="underline text-[#2468FF]">careers@hubcom.tech</a>”
          </p>
          
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

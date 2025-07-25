import Image from "next/image";
import React from "react";

const ContactSection = () => {
  return (
    <section className="relative z-10 w-full bg-[#0C0B10] text-white">
      <div className="container flex flex-col items-center justify-center gap-16 py-30 lg:pt-44 lg:pb-24 px-4 md:px-0">
        <div className="flex flex-col items-center gap-9 text-center max-w-4xl w-full">
          <div className="flex flex-col gap-2">
            <h2 className="text-white max-w-[800px] text-4xl md:text-6xl lg:text-7xl font-coda uppercase">
              Don&apos;t see your role listed?
            </h2>
          </div>
          <p className="text-white/90 text-lg max-w-2xl">
            We’re always open to great people.
          </p>
          <div className="bg-[#2468FF] text-white rounded-2xl flex items-center justify-between p-2 w-fit group cursor-pointer transition-all duration-300 max-w-full">
            <span className="px-4 py-3 md:px-6 md:py-4 font-semibold tracking-widest uppercase text-sm md:text-base whitespace-nowrap">
              Send Open Application
            </span>
            <div className="p-2 md:p-3 rounded-xl bg-[#1A4CD8] relative w-12 h-12 md:w-[56px] md:h-[56px] overflow-hidden flex-shrink-0">
              <div className="absolute inset-0 flex items-center justify-center transition-all duration-300 ease-in-out group-hover:translate-x-full group-hover:opacity-0">
                <Image
                  src="/luggage.svg"
                  alt="luggage"
                  width={32}
                  height={32}
                  className="w-6 h-6 md:w-8 md:h-8"
                />
              </div>
              <div className="absolute inset-0 flex items-center justify-center transition-all duration-300 ease-in-out -translate-x-full opacity-0 group-hover:translate-x-0 group-hover:opacity-100">
                <Image
                  src="/right.svg"
                  alt="arrow"
                  width={32}
                  height={32}
                  className="w-6 h-6 md:w-8 md:h-8"
                />
              </div>
            </div>
          </div>
        </div>

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

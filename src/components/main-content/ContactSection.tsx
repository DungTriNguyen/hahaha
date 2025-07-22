import Image from "next/image";
import React from "react";

const ContactSection = () => {
  return (
    <section className="relative z-10 w-full bg-[#0C0B10] pb-20 px-4 md:px-0 flex flex-col items-center justify-center">
      <div className="container flex flex-col items-center gap-16 pt-72">
        {/* Main Contact Block */}
        <div className="flex flex-col items-center gap-6 text-center max-w-2xl w-full">
          <span className="text-[#B3CCFF] text-sm font-semibold tracking-widest uppercase mb-2">
            Contact
          </span>
          <h2 className="text-white text-4xl md:text-6xl font-bold --font-coda uppercase mb-2">
            let&apos;s achieve your goals together
          </h2>
          <p className="text-white/90 text-base md:text-lg mb-4">
            Tell us about your desires
          </p>
          <div className="bg-[#2468FF] text-white rounded-2xl w-[307px] flex items-center gap-8 p-2">
            <p className="ml-6">SHARE YOUR IDEA NOW</p>
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
                alt="logo"
                width={8}
                height={16}
                className="hidden hover:block"
              />
            </div>
          </div>
        </div>
        <div className="flex text-white">
          <div className="flex text-sm gap-4">
            <Image src="/phone.svg" width={20} height={20} alt="" />
            <p>[+84] 966 868 574</p>
          </div>{" "}
          <span className="px-4">/</span>
          <div className="flex text-sm gap-4">
            <Image src="/email.svg" width={20} height={20} alt="" />
            <p>contact@hubcom.tech</p>
          </div>
          <span className="px-4">/</span>
          <div className="flex text-sm gap-4">
            <Image src="/marker_pin.svg" width={20} height={20} alt="" />
            <p>5 No Trang Long St.,W7, Binh Thanh Dist., HCMC</p>
          </div>
        </div>

        <div className="text-xs text-gray-400 mt-8 text-center">
          © 2025 Hubcom. All rights reserved.
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

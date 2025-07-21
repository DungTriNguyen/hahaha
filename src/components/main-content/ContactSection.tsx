import Image from "next/image";
import Head from "next/head";

const ContactSection = () => {
  return (
    <>
      <Head>
        <title>Contact | Your Site Name</title>
      </Head>
      <section className="max-w-[1440px] mx-auto bg-black text-white py-16 font-coda">
        <div className="flex w-full flex-col items-center justify-center text-center gap-8">
          <p className="text-lg uppercase tracking-wider">CONTACT</p>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            Let&apos;s Achieve Your Goals Together
          </h2>
          <div className="flex w-[279px] h-[64px] items-center gap-8 rounded-2xl bg-[#2468FF]">
            <p className="pl-6">SHARE YOUR IDEA NOW</p>
            <div className="rounded-2xl p-3 bg-[#1A4CD8] h-auto">
              <Image src="/light.svg" width={32} height={32} alt="light icon" />
            </div>
          </div>
          <div className="flex gap-4 justify-center items-center flex-wrap">
            <div className="flex gap-4 items-center">
              <Image src="/phone.svg" width={20} height={20} alt="Phone icon" />
              <p>[+84] 966 868 574</p>
            </div>
            <span>/</span>
            <div className="flex gap-4 items-center">
              <Image src="/email.svg" width={20} height={20} alt="Email icon" />
              <p>contact@hubcom.tech</p>
            </div>
            <span>/</span>
            <div className="flex gap-4 items-center">
              <Image
                src="/marker_pin.svg"
                width={20}
                height={20}
                alt="Location pin icon"
              />
              <p>5 No Trang Long St., W7, Binh Thanh Dist., HCMC</p>
            </div>
          </div>
          <p className="mt-8 text-sm">© 2025 Hubcom. All rights reserved.</p>
        </div>
      </section>
    </>
  );
};

export default ContactSection;

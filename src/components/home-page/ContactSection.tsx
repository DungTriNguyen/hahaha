import Image from "next/image";
import Link from "next/link";
import React from "react";
import Button from "../ui/button";
import { ButtonProps } from "@/types/button";
import Title from "../ui/title";
import SubTitle from "../ui/sub-title";
import Description from "../ui/description";
import CardDescription from "../ui/card-description";

interface ContactSectionProps {
  title?: string;
  subtitle: string;
  description?: string;
  button?: ButtonProps;
  id?: string;
}
const ContactSection = ({
  title,
  subtitle,
  description,
  button,
  id,
}: ContactSectionProps) => {
  return (
    <section
      className="relative z-10 w-full bg-background text-white data-scroll-to"
      id={id}
    >
      <div className="container flex flex-col items-center justify-center gap-14 py-40 lg:pt-80 lg:pb-56 px-4 md:px-0">
        <div className="flex flex-col items-center gap-8 text-center w-full">
          <div className="flex flex-col gap-1">
            {title && <Title title={title} />}
            {subtitle && <SubTitle title={subtitle} as="h2" />}
          </div>
          {description && <Description description={description} />}
          {button && <Button {...button} className="tracking-tight" />}
        </div>
        <div className="flex flex-col items-center gap-6">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4  text-white">
            <Link href="tel:+84966868574">
              <div className="flex items-center lg:gap-4">
                <Image src="/icons/phone.svg" width={20} height={20} alt="phone" />
                <CardDescription description="[+84] 966 868 574" className="text-sm md:text-left text-white hover:underline"/>
              </div>
            </Link>
            <Image
              src="/icons/line.svg"
              width={7}
              height={25}
              alt="line"
              className="hidden lg:block"
            />
            <Link href="mailto:contact@hubcom.tech">
              <div className="flex items-center lg:gap-4">
                <Image src="/icons/email.svg" width={20} height={20} alt="email" />
                <CardDescription description="contact@hubcom.tech" className="text-sm md:text-left text-white hover:underline"/>
              </div>
            </Link>
            <Image
              src="/icons/line.svg"
              width={7}
              height={25}
              alt="line"
              className="hidden lg:block"
            />
            <Link href="https://maps.app.goo.gl/DXyB8WwwZN6TsKCS7">
              <div className="flex items-center lg:gap-4">
                <Image
                  src="/icons/marker_pin.svg"
                  width={20}
                  height={20}
                  alt="location"
                />
                <CardDescription description="5 No Trang Long St.,W7, Binh Thanh Dist., HCMC" className="text-sm text-center text-white hover:underline"/>
              </div>
            </Link>
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

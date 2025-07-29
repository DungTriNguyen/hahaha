import { ButtonProps } from "@/types/button";
import Image from "next/image";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

const Button = ({ text, href, icon1, icon2, className }: ButtonProps) => {
  return (
    <Link href={href}>
      <div
        className={twMerge(
          "bg-button text-white rounded-2xl flex items-center gap-8 justify-between p-1 w-fit group cursor-pointer transition-all duration-300 max-w-full",
          className
        )}
      >
        {text && (
          <span className="pl-4 font-semibold tracking-widest uppercase text-sm md:text-[15px] whitespace-nowrap">
            {text}
          </span>
        )}
        <div className="p-1 rounded-xl bg-buttonIcon relative w-12 h-12 md:w-[56px] md:h-[56px] overflow-hidden flex-shrink-0">
          <div className="absolute inset-0 flex items-center justify-center transition-all duration-300 ease-in-out group-hover:translate-x-full group-hover:opacity-0">
            <Image
              src={icon1 || ""}
              alt="icon1"
              width={32}
              height={32}
              className="w-6 h-6 md:w-8 md:h-8"
            />
          </div>

          <div className="absolute inset-0 flex items-center justify-center transition-all duration-300 ease-in-out -translate-x-full opacity-0 group-hover:translate-x-0 group-hover:opacity-100">
            <Image
              src={icon2 || ""}
              alt="icon2"
              width={32}
              height={32}
              className="w-6 h-6 md:w-8 md:h-8"
            />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Button;

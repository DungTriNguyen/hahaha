import React from "react";
import { twMerge } from "tailwind-merge";

interface SubTitleProps {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p";
  title: string;
  className?: string;
}

const SubTitle = ({ title, className, as = "h1" }: SubTitleProps) => {
  const Component = as;
  return (
    <Component
      className={twMerge(
        "text-white text-4xl  md:text-[72px] font-coda max-w-[800px] text-center leading-tight uppercase",
        className
      )}
    >
      {title}
    </Component>
  );
};

export default SubTitle;

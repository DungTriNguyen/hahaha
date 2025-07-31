import React from "react";
import { twMerge } from "tailwind-merge";

interface TitleProps {
  title: string;
  className?: string;
}

const Title = ({ title, className }: TitleProps) => {
  return (
    <span
      className={twMerge(
        "text-title text-xs md:text-sm font-semibold tracking-widest uppercase pb-2",
        className
      )}
    >
      {title}
    </span>
  );
};

export default Title;

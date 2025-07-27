import React from "react";
import { twMerge } from "tailwind-merge";

interface DescriptionProps {
  description: string;
  className?: string;
}

const Description = ({ description, className }: DescriptionProps) => {
  return (
    <p
      className={twMerge(
        "text-white text-base md:text-lg text-center leading-relaxed",
        className
      )}
      dangerouslySetInnerHTML={{ __html: description }}
    ></p>
  );
};

export default Description;

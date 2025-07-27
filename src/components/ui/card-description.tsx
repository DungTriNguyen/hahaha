import React from "react";
import { twMerge } from "tailwind-merge";

interface CardDescriptionProps {
  description: string;
  className?: string;
}

const CardDescription = ({ description, className }: CardDescriptionProps) => {
  return (
    <p
      className={twMerge(
        "text-base text-[#CCCCCC] leading-loose tracking-normal",
        className
      )}
      dangerouslySetInnerHTML={{ __html: description }}
    ></p>
  );
};

export default CardDescription;

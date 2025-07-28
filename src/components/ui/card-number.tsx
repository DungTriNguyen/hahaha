import React from "react";
import { twMerge } from "tailwind-merge";

interface CardNumberProps {
  number: string;
  className?: string;
}

const CardNumber = ({ number, className }: CardNumberProps) => {
  return (
    <span
      className={twMerge(
        "text-[var(--number-card)] group-hover:text-[var(--number-card-hover)] text-6xl lg:text-8xl xl:text-9xl font-coda font-normal",
        className
      )}
    >
      {number}
    </span>
  );
};

export default CardNumber;

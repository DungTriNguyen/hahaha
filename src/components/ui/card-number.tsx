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
        "text-numberCard group-hover:text-numberCardHover text-6xl lg:text-8xl font-coda font-normal",
        className
      )}
    >
      {number}
    </span>
  );
};

export default CardNumber;

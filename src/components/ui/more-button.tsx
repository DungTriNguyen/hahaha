import React from "react";
import { twMerge } from "tailwind-merge";

interface MoreButtonProps {
  className?: string;
}

const MoreButton = ({ className }: MoreButtonProps) => {
  return (
    <div
      className={twMerge(
        "relative w-fit group-hover:cursor-pointer",
        className
      )}
    >
      <div className="flex items-center gap-2 z-10 relative">
        <span className="sm:text-white lg:text-gray-400 group-hover:text-white text-sm font-semibold">
          More
        </span>
      </div>
      <span className="absolute bottom-0 left-0 h-0.5 bg-white w-0 group-hover:w-full transition-all duration-500 ease-in-out" />
    </div>
  );
};

export default MoreButton;

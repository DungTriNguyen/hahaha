import React from "react";
import { twMerge } from "tailwind-merge";

interface TagProps {
  title: string;
  className?: string;
}

const Tag = ({ title, className }: TagProps) => {
  return (
    <span className={twMerge("text-white text-sm font-semibold", className)}>
      {title}
    </span>
  );
};

export default Tag;

import { twMerge } from "tailwind-merge";
interface CardTitleProps {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p";
  title: string;
  className?: string;
}

const CardTitle = ({ title, className, as = "h3" }: CardTitleProps) => {
  const Component = as;
  return (
    <Component
      className={twMerge(
        "text-white text-2xl lg:text-[32px] font-coda font-normal leading-tight tracking-tight",
        className
      )}
    >
      {title}
    </Component>
  );
};

export default CardTitle;

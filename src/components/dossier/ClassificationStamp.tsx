import { cn } from "@/lib/utils";

interface Props {
  children: React.ReactNode;
  className?: string;
  variant?: "stamp" | "ink";
  size?: "sm" | "md" | "lg";
}

export const ClassificationStamp = ({
  children,
  className,
  variant = "stamp",
  size = "md",
}: Props) => {
  const sizeClasses = {
    sm: "text-xs px-2 py-0.5 border-2 tracking-widest",
    md: "text-base px-3 py-1 border-[3px] tracking-widest",
    lg: "text-2xl sm:text-4xl px-6 py-2 border-[6px] tracking-[0.2em]",
  };
  const colorClasses =
    variant === "stamp"
      ? "border-stamp text-stamp"
      : "border-ink text-ink";

  return (
    <span
      className={cn(
        "font-stamp font-bold uppercase inline-block mix-blend-multiply",
        sizeClasses[size],
        colorClasses,
        className,
      )}
    >
      {children}
    </span>
  );
};

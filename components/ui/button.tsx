import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "secondary" | "outline" | "ghost";
  asChild?: boolean;
  size?: "default" | "sm";
}

const buttonVariants = (
  variant: ButtonProps["variant"],
  size: ButtonProps["size"]
) =>
  cn(
    "inline-flex items-center justify-center rounded-lg text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 disabled:pointer-events-none disabled:opacity-50",
    size === "sm" ? "px-3 py-1.5" : "px-4 py-2",
    variant === "default" &&
      "bg-teal-600 text-white hover:bg-teal-700 dark:bg-teal-500 dark:hover:bg-teal-600",
    variant === "secondary" &&
      "bg-slate-100 text-slate-900 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700",
    variant === "outline" &&
      "border border-slate-300 bg-transparent hover:bg-slate-100 dark:border-slate-600 dark:hover:bg-slate-800",
    variant === "ghost" && "hover:bg-slate-100 dark:hover:bg-slate-800"
  );

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", asChild, ...props }, ref) => {
    const classes = cn(buttonVariants(variant, size), className);
    if (asChild && React.isValidElement(props.children)) {
      const child = props.children as React.ReactElement<{ className?: string }>;
      return React.cloneElement(child, {
        className: cn(classes, child.props?.className),
      });
    }
    return (
      <button className={classes} ref={ref} {...props} />
    );
  }
);
Button.displayName = "Button";

export { Button };

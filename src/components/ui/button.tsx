import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-semibold transition-[transform,background-color,box-shadow,border-color,color,opacity] duration-150 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:not-disabled:scale-[0.96]",
  {
    variants: {
      variant: {
        primary:
          "bg-primary text-dark-fg shadow-[0_14px_30px_rgb(109_40_217_/_0.28)] hover:bg-primary-bright",
        accent:
          "bg-accent text-dark hover:brightness-105 shadow-[0_10px_24px_rgb(20_184_166_/_0.28)]",
        outline:
          "border border-line bg-card text-fg hover:border-primary/30 hover:bg-primary-soft",
        ghost: "text-fg hover:bg-primary-soft",
        darkOutline:
          "border border-dark-fg/20 bg-dark-fg/8 text-dark-fg hover:bg-dark-fg/14",
        dark:
          "bg-dark text-dark-fg hover:bg-dark-2",
      },
      size: {
        sm: "h-10 rounded-md px-3.5 text-sm",
        md: "h-11 rounded-lg px-5 text-sm",
        lg: "h-12 rounded-lg px-6 text-[15px]",
        icon: "size-11 rounded-lg",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  };

export function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  );
}

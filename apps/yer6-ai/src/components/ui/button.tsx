import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex min-h-9 items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-45",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-[#efc867]",
        secondary: "border border-white/10 bg-white/[0.055] text-white hover:bg-white/10",
        ghost: "text-white/65 hover:bg-white/[0.055] hover:text-white",
        outline: "border border-primary/40 bg-transparent text-primary hover:bg-primary/10",
        destructive: "bg-red-500/15 text-red-300 hover:bg-red-500/25"
      },
      size: {
        default: "h-10 px-4",
        sm: "h-8 min-h-8 px-3 text-xs",
        lg: "h-11 px-5",
        icon: "size-9 min-h-9 shrink-0 p-0"
      }
    },
    defaultVariants: { variant: "default", size: "default" }
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  }
);
Button.displayName = "Button";

export { buttonVariants };

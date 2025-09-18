import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-smooth focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-node",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        outline: "border border-input bg-background hover:bg-hover hover:text-accent-foreground",
        ghost: "hover:bg-hover hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        // TechPath specific variants
        hero: "bg-gradient-hero text-white hover:scale-105 hover:shadow-glow transition-bounce font-semibold",
        tech: "bg-card hover:bg-card-hover border border-border text-card-foreground shadow-card transition-smooth",
        node: "bg-card hover:bg-card-hover border-2 border-primary/20 hover:border-primary text-card-foreground shadow-node hover:shadow-glow transition-bounce hover:scale-105",
        completed: "bg-node-completed text-white hover:bg-node-completed/90 shadow-node",
        beginner: "bg-node-beginner text-white hover:bg-node-beginner/90",
        intermediate: "bg-node-intermediate text-white hover:bg-node-intermediate/90",
        advanced: "bg-node-advanced text-white hover:bg-node-advanced/90",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };

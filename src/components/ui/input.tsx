import type {
  InputHTMLAttributes,
  LabelHTMLAttributes,
  SelectHTMLAttributes,
  TextareaHTMLAttributes,
} from "react";
import { cn } from "@/lib/utils";

export function Input({
  className,
  ...props
}: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={cn(
        "h-11 w-full rounded-md border border-line bg-card px-3.5 text-sm text-fg outline-none transition-[border-color,box-shadow] duration-150 placeholder:text-muted/70 focus:border-primary focus:ring-2 focus:ring-ring/20",
        className,
      )}
      {...props}
    />
  );
}

export function Textarea({
  className,
  ...props
}: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      className={cn(
        "min-h-24 w-full rounded-md border border-line bg-card px-3.5 py-3 text-sm text-fg outline-none transition-[border-color,box-shadow] duration-150 placeholder:text-muted/70 focus:border-primary focus:ring-2 focus:ring-ring/20",
        className,
      )}
      {...props}
    />
  );
}

export function SelectField({
  className,
  children,
  ...props
}: SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <select
      className={cn(
        "h-11 w-full rounded-md border border-line bg-card px-3.5 text-sm text-fg outline-none transition-[border-color,box-shadow] duration-150 focus:border-primary focus:ring-2 focus:ring-ring/20",
        className,
      )}
      {...props}
    >
      {children}
    </select>
  );
}

export function FieldLabel({
  className,
  ...props
}: LabelHTMLAttributes<HTMLLabelElement>) {
  return (
    <label
      className={cn("mb-1.5 block text-xs font-semibold text-fg", className)}
      {...props}
    />
  );
}

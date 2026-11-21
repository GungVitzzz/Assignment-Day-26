import { cn } from "@/lib/utils";

export default function Container({ className, ...props }) {
  return (
    <div
      className={cn("mx-auto w-full max-w-6xl px-4 sm:px-5", className)}
      {...props}
    />
  );
}

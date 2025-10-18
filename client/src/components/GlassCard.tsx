import { cn } from "@/lib/utils";

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

export default function GlassCard({ children, className, ...props }: GlassCardProps) {
  return (
    <div
      className={cn(
        "backdrop-blur-md bg-white/10 dark:bg-white/5 rounded-md border border-white/20",
        "shadow-[0_8px_32px_0_rgba(0,0,0,0.1)]",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

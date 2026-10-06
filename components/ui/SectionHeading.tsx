import { cn } from "@/lib/utils";

// One small English label per section, then a Korean serif heading.
export function SectionHeading({
  eyebrow,
  title,
  description,
  className,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("max-w-xl", className)}>
      {eyebrow ? (
        <p className="mb-5 font-body text-[11px] font-medium uppercase tracking-widest2 text-ink-light">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="font-display text-[1.75rem] leading-[1.35] tracking-[-0.01em] text-ink sm:text-[2.1rem]">
        {title}
      </h2>
      {description ? (
        <p className="mt-5 font-body text-[15px] leading-[1.9] text-ink-light">
          {description}
        </p>
      ) : null}
    </div>
  );
}

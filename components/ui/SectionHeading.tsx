import { cn } from "@/lib/utils";

// Korean myeongjo heading with an optional one-line description.
export function SectionHeading({
  title,
  description,
  className,
}: {
  title: React.ReactNode;
  description?: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("max-w-xl", className)}>
      <h2 className="font-display text-[1.6rem] font-medium leading-[1.4] tracking-[-0.02em] text-ink sm:text-[2rem]">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 font-body text-[15px] leading-[1.85] text-ink-light">
          {description}
        </p>
      ) : null}
    </div>
  );
}

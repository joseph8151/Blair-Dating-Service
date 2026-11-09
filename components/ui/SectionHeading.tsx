import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

// Korean myeongjo heading with an optional section number and one-line
// description. Fades in when scrolled into view.
export function SectionHeading({
  index,
  title,
  description,
  className,
}: {
  index?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  className?: string;
}) {
  return (
    <Reveal className={cn("max-w-xl", className)}>
      {index ? (
        <p aria-hidden className="mb-6 flex items-center gap-4">
          <span className="font-display text-[15px] text-accent">{index}</span>
          <span className="h-px w-10 bg-accent/30" />
        </p>
      ) : null}
      <h2 className="font-display text-[1.8rem] font-medium leading-[1.35] tracking-[-0.03em] text-ink sm:text-[2.35rem]">
        {title}
      </h2>
      {description ? (
        <p className="mt-5 font-body text-[15px] leading-[1.85] text-ink-light">
          {description}
        </p>
      ) : null}
    </Reveal>
  );
}

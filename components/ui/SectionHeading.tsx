import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  light = false,
  className,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "left" | "center";
  light?: boolean;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow ? (
        <div className={cn("mb-5 flex flex-col gap-3", align === "center" && "items-center")}>
          <span
            className={cn(
              "gold-rule",
              align === "center" && "mx-auto bg-none"
            )}
            style={align === "center" ? { background: "#C8B38A" } : undefined}
          />
          <p
            className={cn(
              "font-body text-xs font-semibold uppercase tracking-widest2",
              light ? "text-cream/70" : "text-ink-light"
            )}
          >
            {eyebrow}
          </p>
        </div>
      ) : null}
      <h2
        className={cn(
          "font-display text-3xl leading-[1.18] tracking-[-0.01em] sm:text-4xl lg:text-[2.85rem]",
          light ? "text-cream" : "text-ink"
        )}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            "mt-6 font-body text-base leading-[1.85] sm:text-lg",
            light ? "text-cream/75" : "text-ink/65"
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}

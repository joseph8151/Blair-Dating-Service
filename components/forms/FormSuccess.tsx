import { Check } from "lucide-react";

export function FormSuccess({
  title,
  description,
}: {
  title: string;
  description: React.ReactNode;
}) {
  return (
    <div className="flex flex-col items-center px-5 py-24 text-center">
      <span className="flex h-16 w-16 items-center justify-center rounded-full border border-line text-accent">
        <Check size={26} strokeWidth={1.75} />
      </span>
      <h1 className="mt-7 font-display text-2xl font-medium text-ink sm:text-3xl">{title}</h1>
      <p className="mt-4 max-w-sm font-body text-sm leading-[1.85] text-ink-light">
        {description}
      </p>
    </div>
  );
}

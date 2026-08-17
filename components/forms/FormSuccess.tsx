import { Check } from "lucide-react";

export function FormSuccess({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="flex flex-col items-center px-5 py-24 text-center">
      <span className="flex h-14 w-14 items-center justify-center rounded-full bg-blush/20 text-rose">
        <Check size={26} />
      </span>
      <h1 className="mt-7 font-display text-3xl text-ink sm:text-4xl">{title}</h1>
      <p className="mt-4 max-w-sm font-body text-sm leading-relaxed text-ink/60">
        {description}
      </p>
    </div>
  );
}

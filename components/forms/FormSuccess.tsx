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
      <span className="flex h-16 w-16 items-center justify-center rounded-full border border-gold/40 bg-blush/12 text-blush-soft">
        <Check size={26} strokeWidth={1.75} />
      </span>
      <span className="gold-rule mx-auto mt-7" style={{ background: "#C8B38A" }} />
      <h1 className="mt-5 font-display text-3xl text-ink sm:text-4xl">{title}</h1>
      <p className="mt-4 max-w-sm font-body text-sm leading-[1.85] text-ink/55">
        {description}
      </p>
    </div>
  );
}

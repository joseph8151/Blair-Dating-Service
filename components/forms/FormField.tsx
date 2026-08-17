import { cn } from "@/lib/utils";

type BaseProps = {
  label: string;
  name: string;
  error?: string;
  required?: boolean;
  className?: string;
};

export function FieldWrapper({
  label,
  name,
  error,
  required,
  className,
  children,
}: BaseProps & { children: React.ReactNode }) {
  return (
    <div className={cn("flex flex-col gap-2", className)}>
      <label htmlFor={name} className="font-body text-sm font-medium text-ink">
        {label}
        {required ? <span className="ml-0.5 text-blush-soft">*</span> : null}
      </label>
      {children}
      {error ? <p className="font-body text-xs text-blush-soft">{error}</p> : null}
    </div>
  );
}

const inputClasses =
  "w-full rounded-2xl border border-line bg-cream px-4 py-3.5 font-body text-sm text-ink placeholder:text-ink/35 outline-none transition-all duration-200 focus:border-blush-soft focus:ring-4 focus:ring-blush-soft/10";

export function TextField(
  props: BaseProps &
    React.InputHTMLAttributes<HTMLInputElement>
) {
  const { label, name, error, required, className, ...rest } = props;
  return (
    <FieldWrapper label={label} name={name} error={error} required={required}>
      <input id={name} name={name} className={cn(inputClasses, error && "border-blush-soft")} {...rest} />
    </FieldWrapper>
  );
}

export function TextareaField(
  props: BaseProps &
    React.TextareaHTMLAttributes<HTMLTextAreaElement>
) {
  const { label, name, error, required, className, ...rest } = props;
  return (
    <FieldWrapper label={label} name={name} error={error} required={required}>
      <textarea
        id={name}
        name={name}
        rows={4}
        className={cn(inputClasses, "resize-none", error && "border-blush-soft")}
        {...rest}
      />
    </FieldWrapper>
  );
}

export function SelectField(
  props: BaseProps &
    React.SelectHTMLAttributes<HTMLSelectElement> & { options: { value: string; label: string }[] }
) {
  const { label, name, error, required, options, className, ...rest } = props;
  return (
    <FieldWrapper label={label} name={name} error={error} required={required}>
      <select
        id={name}
        name={name}
        className={cn(inputClasses, "appearance-none bg-cream", error && "border-blush-soft")}
        {...rest}
      >
        <option value="">선택해주세요</option>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </FieldWrapper>
  );
}

export function CheckboxGroup({
  legend,
  name,
  options,
  values,
  onChange,
  required,
  error,
}: {
  legend: string;
  name: string;
  options: { value: string; label: string }[];
  values: string[];
  onChange: (values: string[]) => void;
  required?: boolean;
  error?: string;
}) {
  return (
    <fieldset className="flex flex-col gap-3">
      <legend className="font-body text-sm font-medium text-ink">
        {legend}
        {required ? <span className="ml-0.5 text-blush-soft">*</span> : null}
      </legend>
      <div className="flex flex-wrap gap-2">
        {options.map((opt) => {
          const checked = values.includes(opt.value);
          return (
            <label
              key={opt.value}
              className={cn(
                "cursor-pointer rounded-full border px-4 py-2.5 font-body text-sm transition-all duration-200",
                checked
                  ? "border-blush-soft bg-blush/12 text-blush-soft"
                  : "border-line text-ink/65 hover:border-ink/25"
              )}
            >
              <input
                type="checkbox"
                name={name}
                value={opt.value}
                checked={checked}
                onChange={() => {
                  onChange(
                    checked
                      ? values.filter((v) => v !== opt.value)
                      : [...values, opt.value]
                  );
                }}
                className="sr-only"
              />
              {opt.label}
            </label>
          );
        })}
      </div>
      {error ? <p className="font-body text-xs text-blush-soft">{error}</p> : null}
    </fieldset>
  );
}

export function RadioGroup({
  legend,
  name,
  options,
  value,
  onChange,
  required,
  error,
}: {
  legend: string;
  name: string;
  options: { value: string; label: string }[];
  value: string;
  onChange: (value: string) => void;
  required?: boolean;
  error?: string;
}) {
  return (
    <fieldset className="flex flex-col gap-3">
      <legend className="font-body text-sm font-medium text-ink">
        {legend}
        {required ? <span className="ml-0.5 text-blush-soft">*</span> : null}
      </legend>
      <div className="flex flex-wrap gap-2">
        {options.map((opt) => {
          const checked = value === opt.value;
          return (
            <label
              key={opt.value}
              className={cn(
                "cursor-pointer rounded-full border px-4 py-2.5 font-body text-sm transition-all duration-200",
                checked
                  ? "border-blush-soft bg-blush/12 text-blush-soft"
                  : "border-line text-ink/65 hover:border-ink/25"
              )}
            >
              <input
                type="radio"
                name={name}
                value={opt.value}
                checked={checked}
                onChange={() => onChange(opt.value)}
                className="sr-only"
              />
              {opt.label}
            </label>
          );
        })}
      </div>
      {error ? <p className="font-body text-xs text-blush-soft">{error}</p> : null}
    </fieldset>
  );
}

export function ConsentCheckbox({
  checked,
  onChange,
  error,
  label,
}: {
  checked: boolean;
  onChange: (checked: boolean) => void;
  error?: string;
  label: string;
}) {
  return (
    <div className="flex flex-col gap-2 rounded-2xl border border-line bg-off-white p-5">
      <label className="flex cursor-pointer items-start gap-3">
        <input
          type="checkbox"
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
          className="mt-0.5 h-4 w-4 flex-none accent-blush-soft"
        />
        <span className="font-body text-[13px] leading-relaxed text-ink/65">{label}</span>
      </label>
      {error ? <p className="font-body text-xs text-blush-soft">{error}</p> : null}
    </div>
  );
}

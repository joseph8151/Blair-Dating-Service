export type ValidationErrors<T extends string> = Partial<Record<T, string>>;

export function isRequired(value: string | undefined | null): boolean {
  return Boolean(value && value.trim().length > 0);
}

export function isValidEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
}

export function isValidPhone(value: string): boolean {
  return /^[0-9+\-\s()]{8,20}$/.test(value.trim());
}

export function isValidAge(value: string): boolean {
  const n = Number(value);
  return Number.isInteger(n) && n >= 19 && n <= 90;
}

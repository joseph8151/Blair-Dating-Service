"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { Camera, X } from "lucide-react";
import { cn } from "@/lib/utils";

export function PhotoUploadField({
  label,
  hint,
  multiple = false,
  maxFiles = 1,
  files,
  onChange,
  error,
  required,
}: {
  label: string;
  hint?: string;
  multiple?: boolean;
  maxFiles?: number;
  files: File[];
  onChange: (files: File[]) => void;
  error?: string;
  required?: boolean;
}) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [previews, setPreviews] = useState<string[]>([]);

  function handleFiles(list: FileList | null) {
    if (!list) return;
    const incoming = Array.from(list).slice(0, maxFiles - files.length);
    const next = [...files, ...incoming].slice(0, maxFiles);
    setPreviews((prev) => {
      prev.forEach((url) => URL.revokeObjectURL(url));
      return next.map((f) => URL.createObjectURL(f));
    });
    onChange(next);
  }

  function removeAt(index: number) {
    const next = files.filter((_, i) => i !== index);
    setPreviews((prev) => {
      prev.forEach((url) => URL.revokeObjectURL(url));
      return next.map((f) => URL.createObjectURL(f));
    });
    onChange(next);
  }

  return (
    <div className="flex flex-col gap-2">
      <label className="font-body text-sm font-medium text-ink">
        {label}
        {required ? <span className="ml-0.5 text-blush-soft">*</span> : null}
      </label>
      {hint ? <p className="font-body text-xs text-ink/45">{hint}</p> : null}

      <div className="flex flex-wrap gap-3">
        {previews.map((src, i) => (
          <div
            key={src}
            className="relative h-24 w-24 flex-none overflow-hidden rounded-2xl border border-line"
          >
            <Image src={src} alt="업로드된 사진 미리보기" fill className="object-cover" />
            <button
              type="button"
              onClick={() => removeAt(i)}
              aria-label="사진 삭제"
              className="absolute right-1 top-1 flex h-6 w-6 items-center justify-center rounded-full bg-ink/70 text-cream"
            >
              <X size={12} />
            </button>
          </div>
        ))}

        {files.length < maxFiles ? (
          <button
            type="button"
            onClick={() => inputRef.current?.click()}
            className={cn(
              "flex h-24 w-24 flex-none flex-col items-center justify-center gap-1.5 rounded-2xl border border-dashed transition-colors duration-200 hover:border-blush-soft/60",
              error ? "border-blush-soft" : "border-ink/20"
            )}
          >
            <Camera size={18} className="text-ink/35" />
            <span className="font-body text-[11px] text-ink/40">추가</span>
          </button>
        ) : null}
      </div>

      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        multiple={multiple}
        className="hidden"
        onChange={(e) => handleFiles(e.target.files)}
      />

      {error ? <p className="font-body text-xs text-blush-soft">{error}</p> : null}
    </div>
  );
}

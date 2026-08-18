"use client";

import { useEffect, useRef, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Check } from "lucide-react";
import {
  TextField,
  TextareaField,
  SelectField,
  RadioGroup,
  CheckboxGroup,
  ConsentCheckbox,
} from "@/components/forms/FormField";
import { FormSuccess } from "@/components/forms/FormSuccess";
import { Button } from "@/components/ui/Button";
import { isRequired, isValidAge, isValidPhone } from "@/lib/validation";
import { submitConsultationRequest } from "@/lib/submitForm";
import { trackEvent } from "@/lib/analytics";
import { cn } from "@/lib/utils";

type FormState = {
  name: string;
  gender: string;
  age: string;
  phone: string;
  kakaoId: string;
  region: string;
  preferredGender: string;
  preferredAgeRange: string;
  preferredNationality: string;
  preferredAppearance: string;
  preferredJob: string;
  religion: string;
  otherConditions: string;
  relationshipGoal: string;
  message: string;
};

const initialState: FormState = {
  name: "",
  gender: "",
  age: "",
  phone: "",
  kakaoId: "",
  region: "",
  preferredGender: "",
  preferredAgeRange: "",
  preferredNationality: "",
  preferredAppearance: "",
  preferredJob: "",
  religion: "",
  otherConditions: "",
  relationshipGoal: "",
  message: "",
};

const interestOptions = [
  { value: "global", label: "Global Dating" },
  { value: "premium", label: "Premium Dating" },
  { value: "faith", label: "Faith Dating" },
];

const goalOptions = [
  { value: "dating", label: "데이트" },
  { value: "serious", label: "진지한 연애" },
  { value: "marriage", label: "결혼을 전제로 한 만남" },
  { value: "unsure", label: "아직 모르겠음" },
];

type Errors = Partial<Record<keyof FormState | "interests" | "consent", string>>;

const steps = [
  { key: "about", label: "About You" },
  { key: "type", label: "Your Type" },
  { key: "culture", label: "Culture & Faith" },
  { key: "lifestyle", label: "Lifestyle" },
  { key: "contact", label: "Contact" },
] as const;

export function ConsultationForm() {
  const searchParams = useSearchParams();
  const topRef = useRef<HTMLDivElement>(null);
  const isFirstRender = useRef(true);
  const [step, setStep] = useState(0);
  const [form, setForm] = useState<FormState>(initialState);
  const [interests, setInterests] = useState<string[]>([]);
  const [consent, setConsent] = useState(false);
  const [errors, setErrors] = useState<Errors>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  useEffect(() => {
    const preselect = searchParams.get("interest");
    if (preselect && interestOptions.some((o) => o.value === preselect)) {
      setInterests([preselect]);
    }
    const prefill = searchParams.get("prefill");
    if (prefill) {
      setForm((prev) => ({
        ...prev,
        otherConditions: prev.otherConditions
          ? prev.otherConditions
          : decodeURIComponent(prefill),
      }));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    topRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [step]);

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  function validateStep(index: number): Errors {
    const next: Errors = {};
    if (index === 0) {
      if (!isRequired(form.name)) next.name = "이름을 입력해주세요.";
      if (!isRequired(form.gender)) next.gender = "성별을 선택해주세요.";
      if (!isValidAge(form.age)) next.age = "만 19세 이상 나이를 입력해주세요.";
      if (!isValidPhone(form.phone)) next.phone = "연락처를 정확히 입력해주세요.";
      if (!isRequired(form.region)) next.region = "거주지역을 입력해주세요.";
    }
    if (index === 2) {
      if (interests.length === 0)
        next.interests = "관심 서비스를 하나 이상 선택해주세요.";
    }
    if (index === 3) {
      if (!isRequired(form.relationshipGoal))
        next.relationshipGoal = "연애 목적을 선택해주세요.";
    }
    if (index === 4) {
      if (!consent) next.consent = "개인정보 수집 및 이용에 동의해주세요.";
    }
    return next;
  }

  function goNext() {
    const nextErrors = validateStep(step);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;
    trackEvent("consultation_step_complete", { step: steps[step].key });
    setStep((s) => Math.min(s + 1, steps.length - 1));
  }

  function goBack() {
    setErrors({});
    setStep((s) => Math.max(s - 1, 0));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const nextErrors = validateStep(4);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setSubmitting(true);
    setSubmitError(null);
    const data = new FormData();
    Object.entries(form).forEach(([key, value]) => data.append(key, value));
    interests.forEach((i) => data.append("interests", i));

    const result = await submitConsultationRequest(data);
    setSubmitting(false);

    if (result.ok) {
      trackEvent("consultation_form_submit", { interests: interests.join(",") });
      setSubmitted(true);
    } else {
      setSubmitError(result.error);
    }
  }

  if (submitted) {
    return (
      <FormSuccess
        title="상담 신청이 접수되었습니다."
        description="담당 매니저가 비공개로 내용을 확인한 뒤, 순차적으로 연락드리겠습니다. 조금만 기다려주세요."
      />
    );
  }

  return (
    <div ref={topRef} className="flex flex-col gap-8 scroll-mt-28">
      <div>
        <div className="flex items-center justify-between font-body text-xs text-ink/45">
          <span className="font-semibold uppercase tracking-widest2 text-blush-soft">
            {steps[step].label}
          </span>
          <span>
            {step + 1} / {steps.length}
          </span>
        </div>
        <div className="mt-3 flex gap-1.5">
          {steps.map((s, i) => (
            <span
              key={s.key}
              className={cn(
                "h-1 flex-1 rounded-full transition-colors duration-300",
                i <= step ? "bg-blush-soft" : "bg-ink/[0.08]"
              )}
            />
          ))}
        </div>
      </div>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-10"
        onKeyDown={(e) => {
          if (e.key === "Enter" && step < steps.length - 1) {
            e.preventDefault();
            goNext();
          }
        }}
      >
        {step === 0 ? (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <TextField
              label="이름"
              name="name"
              required
              value={form.name}
              onChange={(e) => update("name", e.target.value)}
              error={errors.name}
            />
            <RadioGroup
              legend="성별"
              name="gender"
              required
              value={form.gender}
              onChange={(v) => update("gender", v)}
              options={[
                { value: "female", label: "여성" },
                { value: "male", label: "남성" },
              ]}
              error={errors.gender}
            />
            <TextField
              label="나이"
              name="age"
              type="number"
              required
              value={form.age}
              onChange={(e) => update("age", e.target.value)}
              error={errors.age}
            />
            <TextField
              label="연락처"
              name="phone"
              type="tel"
              required
              placeholder="010-0000-0000"
              value={form.phone}
              onChange={(e) => update("phone", e.target.value)}
              error={errors.phone}
            />
            <TextField
              label="카카오톡 ID"
              name="kakaoId"
              placeholder="선택 입력"
              value={form.kakaoId}
              onChange={(e) => update("kakaoId", e.target.value)}
            />
            <TextField
              label="거주지역"
              name="region"
              required
              value={form.region}
              onChange={(e) => update("region", e.target.value)}
              error={errors.region}
            />
          </div>
        ) : null}

        {step === 1 ? (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <RadioGroup
              legend="원하는 상대 성별"
              name="preferredGender"
              value={form.preferredGender}
              onChange={(v) => update("preferredGender", v)}
              options={[
                { value: "female", label: "여성" },
                { value: "male", label: "남성" },
              ]}
            />
            <TextField
              label="희망 연령대"
              name="preferredAgeRange"
              placeholder="예) 28~34세"
              value={form.preferredAgeRange}
              onChange={(e) => update("preferredAgeRange", e.target.value)}
            />
            <TextField
              label="선호 국적"
              name="preferredNationality"
              value={form.preferredNationality}
              onChange={(e) => update("preferredNationality", e.target.value)}
            />
            <TextField
              label="선호 외모 또는 스타일"
              name="preferredAppearance"
              value={form.preferredAppearance}
              onChange={(e) => update("preferredAppearance", e.target.value)}
            />
            <TextField
              label="직업 선호"
              name="preferredJob"
              value={form.preferredJob}
              onChange={(e) => update("preferredJob", e.target.value)}
            />
          </div>
        ) : null}

        {step === 2 ? (
          <div className="flex flex-col gap-8">
            <CheckboxGroup
              legend="관심 서비스"
              name="interests"
              required
              values={interests}
              onChange={setInterests}
              options={interestOptions}
              error={errors.interests}
            />
            <SelectField
              label="종교"
              name="religion"
              value={form.religion}
              onChange={(e) => update("religion", e.target.value)}
              options={[
                { value: "christian", label: "기독교" },
                { value: "catholic", label: "천주교" },
                { value: "buddhist", label: "불교" },
                { value: "none", label: "무교" },
                { value: "other", label: "기타" },
                { value: "any", label: "상관없음" },
              ]}
            />
            <TextField
              label="기타 중요 조건"
              name="otherConditions"
              placeholder="문화, 언어, 라이프스타일 등 중요하게 생각하는 조건"
              value={form.otherConditions}
              onChange={(e) => update("otherConditions", e.target.value)}
            />
          </div>
        ) : null}

        {step === 3 ? (
          <div className="flex flex-col gap-8">
            <RadioGroup
              legend="현재 연애 목적"
              name="relationshipGoal"
              required
              value={form.relationshipGoal}
              onChange={(v) => update("relationshipGoal", v)}
              options={goalOptions}
              error={errors.relationshipGoal}
            />
            <TextareaField
              label="자유 상담 내용"
              name="message"
              placeholder="상담받고 싶은 내용을 자유롭게 남겨주세요."
              value={form.message}
              onChange={(e) => update("message", e.target.value)}
            />
          </div>
        ) : null}

        {step === 4 ? (
          <div className="flex flex-col gap-6">
            <div className="rounded-2xl border border-line bg-off-white p-6">
              <p className="font-body text-[11px] font-semibold uppercase tracking-widest2 text-ink-light">
                신청 내용 확인
              </p>
              <dl className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {[
                  ["이름", form.name],
                  ["연락처", form.phone],
                  ["거주지역", form.region],
                  [
                    "관심 서비스",
                    interests
                      .map((i) => interestOptions.find((o) => o.value === i)?.label)
                      .filter(Boolean)
                      .join(", ") || "-",
                  ],
                  [
                    "연애 목적",
                    goalOptions.find((o) => o.value === form.relationshipGoal)?.label ?? "-",
                  ],
                ].map(([label, value]) => (
                  <div key={label} className="flex items-start gap-2">
                    <Check size={14} className="mt-0.5 flex-none text-blush-soft" />
                    <span className="font-body text-sm text-ink/70">
                      <span className="text-ink/40">{label}: </span>
                      {value}
                    </span>
                  </div>
                ))}
              </dl>
            </div>
            <ConsentCheckbox
              checked={consent}
              onChange={setConsent}
              error={errors.consent}
              label="개인정보 수집 및 이용에 동의합니다. 상담 내용은 비공개로 관리되며, 매칭 상담 목적 외에는 사용되지 않습니다."
            />
            {submitError ? (
              <p className="font-body text-sm text-blush-soft">{submitError}</p>
            ) : null}
          </div>
        ) : null}

        <div className="flex items-center justify-between gap-4">
          {step > 0 ? (
            <Button type="button" variant="ghost" size="lg" onClick={goBack}>
              이전
            </Button>
          ) : (
            <span />
          )}
          {step < steps.length - 1 ? (
            <Button type="button" size="lg" onClick={goNext}>
              다음
            </Button>
          ) : (
            <Button type="submit" size="lg" disabled={submitting}>
              {submitting ? "신청하는 중..." : "비공개 상담 예약하기"}
            </Button>
          )}
        </div>
      </form>
    </div>
  );
}

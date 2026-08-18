"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
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

export function ConsultationForm() {
  const searchParams = useSearchParams();
  const [form, setForm] = useState<FormState>(initialState);
  const [interests, setInterests] = useState<string[]>([]);
  const [consent, setConsent] = useState(false);
  const [errors, setErrors] = useState<Errors>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const preselect = searchParams.get("interest");
    if (preselect && interestOptions.some((o) => o.value === preselect)) {
      setInterests([preselect]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  function validate(): Errors {
    const next: Errors = {};
    if (!isRequired(form.name)) next.name = "이름을 입력해주세요.";
    if (!isRequired(form.gender)) next.gender = "성별을 선택해주세요.";
    if (!isValidAge(form.age)) next.age = "만 19세 이상 나이를 입력해주세요.";
    if (!isValidPhone(form.phone)) next.phone = "연락처를 정확히 입력해주세요.";
    if (!isRequired(form.region)) next.region = "거주지역을 입력해주세요.";
    if (interests.length === 0) next.interests = "관심 서비스를 하나 이상 선택해주세요.";
    if (!isRequired(form.relationshipGoal)) next.relationshipGoal = "연애 목적을 선택해주세요.";
    if (!consent) next.consent = "개인정보 수집 및 이용에 동의해주세요.";
    return next;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setSubmitting(true);
    const data = new FormData();
    Object.entries(form).forEach(([key, value]) => data.append(key, value));
    interests.forEach((i) => data.append("interests", i));

    const result = await submitConsultationRequest(data);
    setSubmitting(false);

    if (result.ok) {
      trackEvent("consultation_form_submit", { interests: interests.join(",") });
      setSubmitted(true);
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
    <form onSubmit={handleSubmit} className="flex flex-col gap-10">
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

      <CheckboxGroup
        legend="관심 서비스"
        name="interests"
        required
        values={interests}
        onChange={setInterests}
        options={interestOptions}
        error={errors.interests}
      />

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
      </div>

      <TextField
        label="기타 중요 조건"
        name="otherConditions"
        value={form.otherConditions}
        onChange={(e) => update("otherConditions", e.target.value)}
      />

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

      <ConsentCheckbox
        checked={consent}
        onChange={setConsent}
        error={errors.consent}
        label="개인정보 수집 및 이용에 동의합니다. 상담 내용은 비공개로 관리되며, 매칭 상담 목적 외에는 사용되지 않습니다."
      />

      <Button type="submit" size="lg" disabled={submitting} className="w-full sm:w-auto">
        {submitting ? "신청하는 중..." : "비공개 상담 예약하기"}
      </Button>
    </form>
  );
}

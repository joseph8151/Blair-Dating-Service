"use client";

import { useState } from "react";
import {
  TextField,
  TextareaField,
  SelectField,
  RadioGroup,
  ConsentCheckbox,
} from "@/components/forms/FormField";
import { PhotoUploadField } from "@/components/forms/PhotoUploadField";
import { FormSuccess } from "@/components/forms/FormSuccess";
import { Button } from "@/components/ui/Button";
import { isRequired, isValidEmail, isValidPhone, isValidAge } from "@/lib/validation";
import { submitApplicantProfile } from "@/lib/mockSubmit";
import { trackEvent } from "@/lib/analytics";

type FormState = {
  name: string;
  gender: string;
  age: string;
  nationality: string;
  region: string;
  job: string;
  height: string;
  religion: string;
  phone: string;
  email: string;
  sns: string;
  bio: string;
  idealType: string;
  relationshipGoal: string;
};

const initialState: FormState = {
  name: "",
  gender: "",
  age: "",
  nationality: "",
  region: "",
  job: "",
  height: "",
  religion: "",
  phone: "",
  email: "",
  sns: "",
  bio: "",
  idealType: "",
  relationshipGoal: "",
};

type Errors = Partial<Record<keyof FormState | "mainPhoto" | "additionalPhotos" | "consent", string>>;

const religionOptions = [
  { value: "christian", label: "기독교" },
  { value: "catholic", label: "천주교" },
  { value: "buddhist", label: "불교" },
  { value: "none", label: "무교" },
  { value: "other", label: "기타" },
];

const goalOptions = [
  { value: "dating", label: "데이트" },
  { value: "serious", label: "진지한 연애" },
  { value: "marriage", label: "결혼을 전제로 한 만남" },
  { value: "unsure", label: "아직 모르겠음" },
];

export function ApplyForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [mainPhoto, setMainPhoto] = useState<File[]>([]);
  const [additionalPhotos, setAdditionalPhotos] = useState<File[]>([]);
  const [consent, setConsent] = useState(false);
  const [errors, setErrors] = useState<Errors>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  function validate(): Errors {
    const next: Errors = {};
    if (!isRequired(form.name)) next.name = "이름을 입력해주세요.";
    if (!isRequired(form.gender)) next.gender = "성별을 선택해주세요.";
    if (!isValidAge(form.age)) next.age = "만 19세 이상 나이를 입력해주세요.";
    if (!isRequired(form.nationality)) next.nationality = "국적을 입력해주세요.";
    if (!isRequired(form.region)) next.region = "거주지역을 입력해주세요.";
    if (!isRequired(form.job)) next.job = "직업을 입력해주세요.";
    if (!isRequired(form.height)) next.height = "키를 입력해주세요.";
    if (!isRequired(form.religion)) next.religion = "종교를 선택해주세요.";
    if (!isValidPhone(form.phone)) next.phone = "연락처를 정확히 입력해주세요.";
    if (!isValidEmail(form.email)) next.email = "이메일을 정확히 입력해주세요.";
    if (!isRequired(form.bio)) next.bio = "본인 소개를 입력해주세요.";
    if (!isRequired(form.idealType)) next.idealType = "원하는 상대를 입력해주세요.";
    if (!isRequired(form.relationshipGoal)) next.relationshipGoal = "연애 목적을 선택해주세요.";
    if (mainPhoto.length < 1) next.mainPhoto = "대표 사진을 등록해주세요.";
    if (additionalPhotos.length < 2) next.additionalPhotos = "추가 사진을 2장 이상 등록해주세요.";
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
    if (mainPhoto[0]) data.append("mainPhoto", mainPhoto[0]);
    additionalPhotos.forEach((file, i) => data.append(`additionalPhoto${i}`, file));

    const result = await submitApplicantProfile(data);
    setSubmitting(false);

    if (result.ok) {
      trackEvent("apply_form_submit", { relationshipGoal: form.relationshipGoal });
      setSubmitted(true);
    }
  }

  if (submitted) {
    return (
      <FormSuccess
        title="등록해주셔서 감사합니다."
        description="보내주신 프로필은 담당 매니저가 정성껏 검토합니다. 어울리는 매칭이 있을 때, 가장 먼저 연락드리겠습니다."
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
          label="국적"
          name="nationality"
          required
          value={form.nationality}
          onChange={(e) => update("nationality", e.target.value)}
          error={errors.nationality}
        />
        <TextField
          label="거주지역"
          name="region"
          required
          value={form.region}
          onChange={(e) => update("region", e.target.value)}
          error={errors.region}
        />
        <TextField
          label="직업"
          name="job"
          required
          value={form.job}
          onChange={(e) => update("job", e.target.value)}
          error={errors.job}
        />
        <TextField
          label="키 (cm)"
          name="height"
          type="number"
          required
          value={form.height}
          onChange={(e) => update("height", e.target.value)}
          error={errors.height}
        />
        <SelectField
          label="종교"
          name="religion"
          required
          value={form.religion}
          onChange={(e) => update("religion", e.target.value)}
          options={religionOptions}
          error={errors.religion}
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
          label="이메일"
          name="email"
          type="email"
          required
          value={form.email}
          onChange={(e) => update("email", e.target.value)}
          error={errors.email}
        />
        <TextField
          label="인스타그램 / SNS"
          name="sns"
          placeholder="선택 입력"
          value={form.sns}
          onChange={(e) => update("sns", e.target.value)}
        />
        <SelectField
          label="연애 목적"
          name="relationshipGoal"
          required
          value={form.relationshipGoal}
          onChange={(e) => update("relationshipGoal", e.target.value)}
          options={goalOptions}
          error={errors.relationshipGoal}
        />
      </div>

      <TextareaField
        label="본인 소개"
        name="bio"
        required
        value={form.bio}
        onChange={(e) => update("bio", e.target.value)}
        error={errors.bio}
      />
      <TextareaField
        label="원하는 상대"
        name="idealType"
        required
        value={form.idealType}
        onChange={(e) => update("idealType", e.target.value)}
        error={errors.idealType}
      />

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <PhotoUploadField
          label="대표 사진"
          hint="본인이 잘 나온 사진 1장을 등록해주세요."
          maxFiles={1}
          files={mainPhoto}
          onChange={setMainPhoto}
          error={errors.mainPhoto}
          required
        />
        <PhotoUploadField
          label="추가 사진 (2~4장)"
          hint="다양한 분위기의 사진을 함께 등록해주세요."
          multiple
          maxFiles={4}
          files={additionalPhotos}
          onChange={setAdditionalPhotos}
          error={errors.additionalPhotos}
          required
        />
      </div>

      <ConsentCheckbox
        checked={consent}
        onChange={setConsent}
        error={errors.consent}
        label="개인정보 수집 및 이용에 동의합니다. 수집된 정보는 매칭 상담 목적으로만 사용되며, 본인 동의 없이 제3자에게 제공되지 않습니다."
      />

      <Button type="submit" size="lg" disabled={submitting} className="w-full sm:w-auto">
        {submitting ? "등록하는 중..." : "매칭 후보로 등록 완료하기"}
      </Button>
    </form>
  );
}

"use client";

import { useState } from "react";
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
import { submitMemberProfile } from "@/lib/submitForm";
import { trackEvent } from "@/lib/analytics";

// Detailed profile for members who already signed up after the phone
// consultation. Reached only through a link the manager sends.
// Photos are not uploaded here; members send them to their manager directly.
type FormState = {
  name: string;
  phone: string;
  gender: string;
  age: string;
  region: string;
  height: string;
  maritalStatus: string;
  children: string;
  income: string;
  homeOwnership: string;
  hasCar: string;
  carDetail: string;
  hasAssets: string;
  assetDetail: string;
  criminalRecord: string;
  criminalDetail: string;
  job: string;
  education: string;
  weekdays: string;
  weekends: string;
  drinking: string;
  smoking: string;
  religion: string;
  religiousLife: string;
  marriagePlan: string;
  childrenPlan: string;
  abroad: string;
  languages: string;
  preferredAgeRange: string;
  mustHave: string;
  flexible: string;
  dealBreakers: string;
  bio: string;
  photoTiming: string;
};

const initialState: FormState = {
  name: "",
  phone: "",
  gender: "",
  age: "",
  region: "",
  height: "",
  maritalStatus: "",
  children: "",
  income: "",
  homeOwnership: "",
  hasCar: "",
  carDetail: "",
  hasAssets: "",
  assetDetail: "",
  criminalRecord: "",
  criminalDetail: "",
  job: "",
  education: "",
  weekdays: "",
  weekends: "",
  drinking: "",
  smoking: "",
  religion: "",
  religiousLife: "",
  marriagePlan: "",
  childrenPlan: "",
  abroad: "",
  languages: "",
  preferredAgeRange: "",
  mustHave: "",
  flexible: "",
  dealBreakers: "",
  bio: "",
  photoTiming: "on_proposal",
};

type Errors = Partial<
  Record<keyof FormState | "assetTypes" | "consent" | "sensitiveConsent", string>
>;

const maritalOptions = [
  { value: "single", label: "미혼" },
  { value: "divorced", label: "이혼" },
  { value: "widowed", label: "사별" },
];

const childrenOptions = [
  { value: "none", label: "없음" },
  { value: "yes", label: "있음" },
];

const incomeOptions = [
  { value: "under30", label: "3천만 원 미만" },
  { value: "30to50", label: "3천만~5천만 원" },
  { value: "50to80", label: "5천만~8천만 원" },
  { value: "80to100", label: "8천만~1억 원" },
  { value: "over100", label: "1억 원 이상" },
  { value: "private", label: "밝히기 어려움" },
];

const yesNoOptions = [
  { value: "no", label: "없음" },
  { value: "yes", label: "있음" },
];

const homeOptions = [
  { value: "none", label: "없음" },
  { value: "apartment", label: "아파트" },
  { value: "villa", label: "빌라" },
  { value: "officetel", label: "오피스텔" },
  { value: "other", label: "기타 (단독주택 등)" },
];

const assetTypeOptions = [
  { value: "real_estate", label: "그 외 부동산" },
  { value: "financial", label: "예금·주식 등 금융 자산" },
  { value: "business", label: "사업체" },
  { value: "other", label: "기타" },
];

const religionOptions = [
  { value: "christian", label: "기독교" },
  { value: "catholic", label: "천주교" },
  { value: "buddhist", label: "불교" },
  { value: "none", label: "무교" },
  { value: "other", label: "기타" },
];

const religiousLifeOptions = [
  { value: "regular", label: "정기적으로 함" },
  { value: "sometimes", label: "가끔 함" },
  { value: "rarely", label: "거의 안 함" },
  { value: "none", label: "해당 없음" },
];

const marriageOptions = [
  { value: "within2y", label: "1~2년 안에" },
  { value: "slowly", label: "천천히 생각 중" },
  { value: "unsure", label: "아직 모르겠음" },
];

const drinkingOptions = [
  { value: "no", label: "안 마심" },
  { value: "sometimes", label: "가끔" },
  { value: "often", label: "자주" },
];

const smokingOptions = [
  { value: "no", label: "비흡연" },
  { value: "yes", label: "흡연" },
];

const photoTimingOptions = [
  { value: "on_proposal", label: "소개를 제안할 때" },
  { value: "after_accept", label: "상대가 수락한 뒤" },
];

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <fieldset className="flex flex-col gap-6 border-t border-line pt-8">
      <legend className="float-left mb-2 w-full font-display text-lg font-medium text-ink">
        {title}
      </legend>
      {children}
    </fieldset>
  );
}

export function MemberProfileForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [assetTypes, setAssetTypes] = useState<string[]>([]);
  const [consent, setConsent] = useState(false);
  const [sensitiveConsent, setSensitiveConsent] = useState(false);
  const [errors, setErrors] = useState<Errors>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  function validate(): Errors {
    const next: Errors = {};
    if (!isRequired(form.name)) next.name = "이름을 입력해주세요.";
    if (!isValidPhone(form.phone)) next.phone = "휴대폰 번호를 정확히 입력해주세요.";
    if (!isRequired(form.gender)) next.gender = "성별을 선택해주세요.";
    if (!isValidAge(form.age)) next.age = "만 19세 이상 나이를 입력해주세요.";
    if (!isRequired(form.region)) next.region = "거주지역을 입력해주세요.";
    if (!isRequired(form.height)) next.height = "키를 입력해주세요.";
    if (!isRequired(form.maritalStatus)) next.maritalStatus = "혼인 여부를 선택해주세요.";
    if (!isRequired(form.children)) next.children = "자녀 유무를 선택해주세요.";
    if (!isRequired(form.homeOwnership)) next.homeOwnership = "자가 주택 유무를 선택해주세요.";
    if (!isRequired(form.hasCar)) next.hasCar = "자동차 유무를 선택해주세요.";
    if (!isRequired(form.hasAssets)) next.hasAssets = "그 외 자산 유무를 선택해주세요.";
    if (form.hasAssets === "yes" && assetTypes.length === 0)
      next.assetTypes = "어떤 자산인지 하나 이상 선택해주세요.";
    if (!isRequired(form.criminalRecord)) next.criminalRecord = "범죄 경력 유무를 선택해주세요.";
    if (form.criminalRecord === "yes" && !isRequired(form.criminalDetail))
      next.criminalDetail = "내용을 간단히 적어주세요.";
    if (!isRequired(form.job)) next.job = "직업을 입력해주세요.";
    if (!isRequired(form.weekends)) next.weekends = "주말을 보내는 방식을 적어주세요.";
    if (!isRequired(form.religion)) next.religion = "종교를 선택해주세요.";
    if (!isRequired(form.marriagePlan)) next.marriagePlan = "결혼 계획을 선택해주세요.";
    if (!isRequired(form.mustHave)) next.mustHave = "꼭 필요한 조건을 적어주세요.";
    if (!isRequired(form.bio)) next.bio = "본인 소개를 적어주세요.";
    if (!consent) next.consent = "개인정보 수집 및 이용에 동의해주세요.";
    if (!sensitiveConsent) next.sensitiveConsent = "민감정보 수집에 동의해주세요.";
    return next;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      // Wait for the error messages to render, then bring the first into view.
      setTimeout(() => {
        document
          .querySelector("[data-field-error]")
          ?.scrollIntoView({ behavior: "smooth", block: "center" });
      }, 50);
      return;
    }

    setSubmitting(true);
    setSubmitError(null);
    const data = new FormData();
    Object.entries(form).forEach(([key, value]) => data.append(key, value));
    if (form.hasAssets === "yes") assetTypes.forEach((t) => data.append("assetTypes", t));

    const result = await submitMemberProfile(data);
    setSubmitting(false);

    if (result.ok) {
      trackEvent("member_profile_submit");
      setSubmitted(true);
    } else {
      setSubmitError(result.error);
    }
  }

  if (submitted) {
    return (
      <FormSuccess
        title="프로필이 접수되었습니다."
        description="매니저가 내용을 확인한 뒤 전화로 연락드립니다."
      />
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-12">
      <Section title="기본 정보">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <TextField
            label="이름"
            name="name"
            required
            value={form.name}
            onChange={(e) => update("name", e.target.value)}
            error={errors.name}
          />
          <TextField
            label="휴대폰 번호"
            name="phone"
            type="tel"
            required
            placeholder="010-0000-0000"
            hint="상담 때 남기신 번호를 적어주세요."
            value={form.phone}
            onChange={(e) => update("phone", e.target.value)}
            error={errors.phone}
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
            label="거주지역"
            name="region"
            required
            placeholder="예) 서울 강남구"
            value={form.region}
            onChange={(e) => update("region", e.target.value)}
            error={errors.region}
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
        </div>
      </Section>

      <Section title="혼인과 신상">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <RadioGroup
            legend="혼인 여부"
            name="maritalStatus"
            required
            value={form.maritalStatus}
            onChange={(v) => update("maritalStatus", v)}
            options={maritalOptions}
            error={errors.maritalStatus}
          />
          <RadioGroup
            legend="자녀"
            name="children"
            required
            value={form.children}
            onChange={(v) => update("children", v)}
            options={childrenOptions}
            error={errors.children}
          />
        </div>
        <SelectField
          label="연 소득"
          name="income"
          value={form.income}
          onChange={(e) => update("income", e.target.value)}
          options={incomeOptions}
        />
        <RadioGroup
          legend="자가 주택"
          name="homeOwnership"
          required
          value={form.homeOwnership}
          onChange={(v) => update("homeOwnership", v)}
          options={homeOptions}
          error={errors.homeOwnership}
        />
        <RadioGroup
          legend="자동차"
          name="hasCar"
          required
          value={form.hasCar}
          onChange={(v) => update("hasCar", v)}
          options={yesNoOptions}
          error={errors.hasCar}
        />
        {form.hasCar === "yes" ? (
          <TextField
            label="차종"
            name="carDetail"
            placeholder="선택 입력"
            value={form.carDetail}
            onChange={(e) => update("carDetail", e.target.value)}
          />
        ) : null}
        <RadioGroup
          legend="그 외 자산"
          name="hasAssets"
          required
          value={form.hasAssets}
          onChange={(v) => update("hasAssets", v)}
          options={yesNoOptions}
          error={errors.hasAssets}
        />
        {form.hasAssets === "yes" ? (
          <>
            <CheckboxGroup
              legend="어떤 자산인가요?"
              name="assetTypes"
              required
              values={assetTypes}
              onChange={setAssetTypes}
              options={assetTypeOptions}
              error={errors.assetTypes}
            />
            <TextField
              label="자산 설명"
              name="assetDetail"
              placeholder="예) 서울 아파트 1채, 금융 자산 약 2억 원"
              value={form.assetDetail}
              onChange={(e) => update("assetDetail", e.target.value)}
            />
          </>
        ) : null}
        <RadioGroup
          legend="범죄 경력"
          name="criminalRecord"
          required
          value={form.criminalRecord}
          onChange={(v) => update("criminalRecord", v)}
          options={yesNoOptions}
          error={errors.criminalRecord}
        />
        {form.criminalRecord === "yes" ? (
          <TextareaField
            label="범죄 경력 내용"
            name="criminalDetail"
            required
            placeholder="시기와 내용을 간단히 적어주세요."
            value={form.criminalDetail}
            onChange={(e) => update("criminalDetail", e.target.value)}
            error={errors.criminalDetail}
          />
        ) : null}
      </Section>

      <Section title="일과 생활">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <TextField
            label="직업"
            name="job"
            required
            placeholder="예) 회사원(IT), 연구직"
            value={form.job}
            onChange={(e) => update("job", e.target.value)}
            error={errors.job}
          />
          <TextField
            label="최종 학력"
            name="education"
            placeholder="선택 입력"
            value={form.education}
            onChange={(e) => update("education", e.target.value)}
          />
        </div>
        <TextField
          label="평일 생활 패턴"
          name="weekdays"
          placeholder="예) 9시 출근, 저녁에는 운동"
          value={form.weekdays}
          onChange={(e) => update("weekdays", e.target.value)}
        />
        <TextField
          label="주말을 보내는 방식"
          name="weekends"
          required
          placeholder="예) 토요일은 밖에서, 일요일은 집에서 쉼"
          value={form.weekends}
          onChange={(e) => update("weekends", e.target.value)}
          error={errors.weekends}
        />
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <RadioGroup
            legend="음주"
            name="drinking"
            value={form.drinking}
            onChange={(v) => update("drinking", v)}
            options={drinkingOptions}
          />
          <RadioGroup
            legend="흡연"
            name="smoking"
            value={form.smoking}
            onChange={(v) => update("smoking", v)}
            options={smokingOptions}
          />
        </div>
      </Section>

      <Section title="종교와 가치관">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <SelectField
            label="종교"
            name="religion"
            required
            value={form.religion}
            onChange={(e) => update("religion", e.target.value)}
            options={religionOptions}
            error={errors.religion}
          />
          <RadioGroup
            legend="종교 생활"
            name="religiousLife"
            value={form.religiousLife}
            onChange={(v) => update("religiousLife", v)}
            options={religiousLifeOptions}
          />
        </div>
        <RadioGroup
          legend="결혼 계획"
          name="marriagePlan"
          required
          value={form.marriagePlan}
          onChange={(v) => update("marriagePlan", v)}
          options={marriageOptions}
          error={errors.marriagePlan}
        />
        <TextField
          label="자녀 계획"
          name="childrenPlan"
          placeholder="선택 입력"
          value={form.childrenPlan}
          onChange={(e) => update("childrenPlan", e.target.value)}
        />
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <TextField
            label="해외 생활 경험"
            name="abroad"
            placeholder="예) 영국 4년, 없음"
            value={form.abroad}
            onChange={(e) => update("abroad", e.target.value)}
          />
          <TextField
            label="사용 언어"
            name="languages"
            placeholder="예) 한국어, 영어"
            value={form.languages}
            onChange={(e) => update("languages", e.target.value)}
          />
        </div>
      </Section>

      <Section title="원하는 상대">
        <TextField
          label="희망 연령대"
          name="preferredAgeRange"
          placeholder="예) 32~38세"
          value={form.preferredAgeRange}
          onChange={(e) => update("preferredAgeRange", e.target.value)}
        />
        <TextareaField
          label="꼭 필요한 조건"
          name="mustHave"
          required
          placeholder="외모, 종교, 생활 방식 등 양보하기 어려운 것"
          value={form.mustHave}
          onChange={(e) => update("mustHave", e.target.value)}
          error={errors.mustHave}
        />
        <TextareaField
          label="조율할 수 있는 조건"
          name="flexible"
          placeholder="상황에 따라 넓혀도 괜찮은 것"
          value={form.flexible}
          onChange={(e) => update("flexible", e.target.value)}
        />
        <TextareaField
          label="맞지 않는 조건"
          name="dealBreakers"
          placeholder="소개받고 싶지 않은 경우"
          value={form.dealBreakers}
          onChange={(e) => update("dealBreakers", e.target.value)}
        />
      </Section>

      <Section title="소개와 사진">
        <TextareaField
          label="본인 소개"
          name="bio"
          required
          placeholder="상대에게 전해도 괜찮은 내용으로 적어주세요."
          value={form.bio}
          onChange={(e) => update("bio", e.target.value)}
          error={errors.bio}
        />
        <div className="rounded-[3px] border border-line bg-off-white p-5">
          <p className="font-body text-sm font-medium text-ink">사진</p>
          <p className="mt-2 font-body text-sm leading-[1.8] text-ink-light">
            사진은 이 페이지에 올리지 않습니다. 얼굴이 잘 보이는 최근 사진 1장과 분위기를 알 수
            있는 사진 2~3장을 담당 매니저 연락처로 보내 주세요.
          </p>
        </div>
        <RadioGroup
          legend="사진을 보여 드릴 시점"
          name="photoTiming"
          value={form.photoTiming}
          onChange={(v) => update("photoTiming", v)}
          options={photoTimingOptions}
        />
      </Section>

      <div className="flex flex-col gap-6 border-t border-line pt-8">
        <ConsentCheckbox
          checked={consent}
          onChange={setConsent}
          error={errors.consent}
          label="개인정보 수집 및 이용에 동의합니다. 작성한 내용은 소개 목적으로만 사용하며, 동의 없이 상대에게 전달하지 않습니다."
        />
        <ConsentCheckbox
          checked={sensitiveConsent}
          onChange={setSensitiveConsent}
          error={errors.sensitiveConsent}
          label="종교, 범죄 경력 등 민감정보를 소개 목적으로 수집하는 데 별도로 동의합니다."
        />
        {submitError ? (
          <p className="font-body text-sm text-blush-soft">{submitError}</p>
        ) : null}
        <Button type="submit" size="lg" disabled={submitting} className="self-start">
          {submitting ? "보내는 중..." : "프로필 보내기"}
        </Button>
      </div>
    </form>
  );
}

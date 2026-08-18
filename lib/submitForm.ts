// Form submission layer — delivers both forms straight to an inbox via
// Formspree (https://formspree.io), since this site is a static export with
// no backend of its own.
//
// SETUP REQUIRED: FORMSPREE_ENDPOINT below is a placeholder. To activate:
//   1. Go to https://formspree.io and sign up with the inbox email
//      (yorkboy@gmail.com), confirming via the verification email they send.
//   2. Create a new form — any name is fine (e.g. "Blair Dating").
//   3. Copy its endpoint URL (looks like https://formspree.io/f/xxxxaaaa)
//      and paste it in as FORMSPREE_ENDPOINT below.
// Until that's done, submissions will fail with a clear error rather than
// silently pretending to succeed.

const FORMSPREE_ENDPOINT = "https://formspree.io/f/YOUR_FORM_ID";

export type SubmitResult = { ok: true } | { ok: false; error: string };

async function submitToFormspree(
  formData: FormData,
  subject: string
): Promise<SubmitResult> {
  if (FORMSPREE_ENDPOINT.includes("YOUR_FORM_ID")) {
    // eslint-disable-next-line no-console
    console.error(
      "[submitForm] Formspree endpoint not configured — see lib/submitForm.ts"
    );
    return {
      ok: false,
      error: "폼 전송이 아직 연결되지 않았습니다. 잠시 후 다시 시도해주세요.",
    };
  }

  formData.append("_subject", subject);

  try {
    const res = await fetch(FORMSPREE_ENDPOINT, {
      method: "POST",
      body: formData,
      headers: { Accept: "application/json" },
    });

    if (res.ok) return { ok: true };

    const data = await res.json().catch(() => null);
    const message =
      data?.errors?.map((e: { message: string }) => e.message).join(", ") ??
      "제출 중 오류가 발생했습니다.";
    return { ok: false, error: message };
  } catch {
    return {
      ok: false,
      error: "네트워크 오류로 제출에 실패했습니다. 다시 시도해주세요.",
    };
  }
}

export async function submitApplicantProfile(
  formData: FormData
): Promise<SubmitResult> {
  return submitToFormspree(formData, "[BLAIR DATING] 새 지원자 등록");
}

export async function submitConsultationRequest(
  formData: FormData
): Promise<SubmitResult> {
  return submitToFormspree(formData, "[BLAIR DATING] 새 상담 신청");
}

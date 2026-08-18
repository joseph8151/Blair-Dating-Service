// Form submission layer — delivers both forms straight to an inbox via
// Formspree (https://formspree.io), since this site is a static export with
// no backend of its own. Submissions go to yorkboy@gmail.com.

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xnpaoago";

export type SubmitResult = { ok: true } | { ok: false; error: string };

async function submitToFormspree(
  formData: FormData,
  subject: string
): Promise<SubmitResult> {
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

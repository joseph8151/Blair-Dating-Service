// Mock form submission layer.
//
// There is no backend yet. Both forms call one of the functions below instead
// of hitting an API route directly, so wiring up a real backend later
// (Supabase, Firebase, a Next.js API route, etc.) means editing only this
// file — every form component stays the same.

export type SubmitResult = { ok: true } | { ok: false; error: string };

async function mockDelay(ms = 900) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function submitApplicantProfile(
  formData: FormData
): Promise<SubmitResult> {
  // TODO: replace with a real API call, e.g.
  // const res = await fetch("/api/apply", { method: "POST", body: formData });
  await mockDelay();
  if (process.env.NODE_ENV !== "production") {
    // eslint-disable-next-line no-console
    console.debug("[mockSubmit] applicant profile", Object.fromEntries(formData.entries()));
  }
  return { ok: true };
}

export async function submitConsultationRequest(
  formData: FormData
): Promise<SubmitResult> {
  // TODO: replace with a real API call, e.g.
  // const res = await fetch("/api/consultation", { method: "POST", body: formData });
  await mockDelay();
  if (process.env.NODE_ENV !== "production") {
    // eslint-disable-next-line no-console
    console.debug("[mockSubmit] consultation request", Object.fromEntries(formData.entries()));
  }
  return { ok: true };
}

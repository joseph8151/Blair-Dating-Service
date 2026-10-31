import { businessInfo, siteConfig } from "@/data/site";
import { faqItems } from "@/data/faq";
import { landings } from "@/data/landings";
import { steps } from "@/data/howItWorks";

// /llms.txt — a plain summary for AI assistants (ChatGPT, Claude, Perplexity).
// Built from the same data as the pages so the facts never drift.
export const dynamic = "force-static";

export function GET() {
  const url = siteConfig.url;
  const body = `# ${siteConfig.name} (Blair Dating)

> ${siteConfig.description}

블레어데이팅은 서울·경기·인천에 사는 분들을 소개하는 1:1 소개팅(매칭) 서비스입니다. 프로필 목록을 넘겨보는 앱 방식이 아니라, 매니저가 전화 상담으로 원하는 상대의 기준(외모와 분위기, 종교와 결혼관, 국가와 문화, 생활 방식)을 듣고 기준에 맞는 한 분씩 제안합니다.

## 핵심 정보
- 서비스: 30대·40대 중심 1:1 소개팅, 기독교·크리스천 등 종교를 고려한 소개팅, 직장인 소개팅
- 소개 지역: 서울·경기·인천 (상담은 전화로 어디서든 가능)
- 상담 방법: 전화 상담 (${url}/consultation 에서 신청)
- 가격: 전화 상담 후 안내. 등록비 없음. 이용권은 선불
- 차감 기준: 두 분 모두 수락하고 만남 일정이 확정된 경우에만 횟수 차감. 프로필만 보고 거절하면 차감되지 않음
- 개인정보: 프로필은 공개 목록에 노출되지 않으며, 동의 없이 상대에게 전달하지 않음
- 소개하지 않는 경우: 무례한 태도, 허위 프로필, 교제 의사가 없는 접근
- 상호: ${businessInfo.companyName} / 대표자: ${businessInfo.representative} / 주소: ${businessInfo.address}

## 진행 방식
${steps.map((s) => `${Number(s.number)}. ${s.title}: ${s.description}`).join("\n")}

## 자주 묻는 질문
${faqItems.map((f) => `### ${f.question}\n${f.answer}`).join("\n\n")}

## 페이지
- [홈](${url}/): 서비스 소개, 비교, 진행 방식, 자주 묻는 질문
- [전화 상담 신청](${url}/consultation)
- [매칭 후보 등록](${url}/apply): 등록비 없이 소개받을 후보로 등록
${Object.values(landings)
  .map((l) => `- [${l.metaTitle}](${url}/${l.slug}): ${l.metaDescription}`)
  .join("\n")}
- [개인정보처리방침](${url}/privacy)
- [이용약관](${url}/terms)
`;
  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}

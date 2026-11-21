import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

// 만남 이후 안내. Only cards backed by a confirmed practice are listed.
// TODO(owner): 아래 세 카드는 실제 방식을 알려 주시면 추가합니다.
// - 연락처는 언제, 어떻게 전달되나요? → [실제 방식]
// - 첫 만남 장소·시간은 누가 정하나요? → [실제 방식]
// - 다시 만날지 의사는 어떻게 전하나요? (매니저를 통해 / 직접) → [실제 방식]
const cards: { title: string; body: string }[] = [
  {
    title: "만남 후 피드백 통화",
    body: "만남이 어땠는지, 다음에는 무엇을 더 보거나 덜 보면 좋을지 여쭙습니다. 들은 내용으로 다음 기준을 조정합니다.",
  },
];

// The section needs at least two confirmed cards to stand on its own.
export function AfterMeeting() {
  if (cards.length < 2) return null;
  return (
    <section id="after" className="border-t border-line py-20 sm:py-28">
      <Container>
        <SectionHeading title="만남 이후에는 이렇게 진행됩니다" />
        <div className="mt-12 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((card) => (
            <div key={card.title} className="border-t border-ink pt-5">
              <h3 className="font-body text-base font-semibold text-ink">{card.title}</h3>
              <p className="mt-3 font-body text-sm leading-[1.8] text-ink-light">{card.body}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

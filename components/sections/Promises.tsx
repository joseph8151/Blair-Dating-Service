import { Container } from "@/components/ui/Container";

// The four commitments, pulled out of the hero into one quiet strip.
const promises = [
  { title: "등록비 없음", body: "소개를 받으시는 분만 비용을 부담합니다." },
  { title: "거절 시 차감 없음", body: "프로필만 보고 거절하신 소개는 횟수에서 빠지지 않습니다." },
  { title: "프로필 비공개", body: "목록에 올라가지 않고, 동의 없이 공개되지 않습니다." },
  { title: "무교·기독교·천주교", body: "같은 종교를 원하시는지까지 상담에서 정리합니다." },
];

export function Promises() {
  return (
    <section aria-label="블레어데이팅의 약속" className="border-t border-line">
      <Container>
        <ul className="grid grid-cols-1 divide-y divide-line sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-4 lg:divide-x">
          {promises.map((item, i) => (
            <li
              key={item.title}
              className={`py-7 sm:py-10 lg:px-8 ${i === 0 ? "lg:pl-0" : ""} ${i === promises.length - 1 ? "lg:pr-0" : ""}`}
            >
              <p className="font-display text-lg font-medium tracking-[-0.02em] text-ink">{item.title}</p>
              <p className="mt-2 font-body text-[14px] leading-[1.75] text-ink-light">{item.body}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

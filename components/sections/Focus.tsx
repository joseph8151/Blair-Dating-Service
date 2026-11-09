import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";

// The two audiences Blair is built around. Each links to its own landing page.
const focus = [
  {
    number: "01",
    label: "30대·40대 직장인 소개팅",
    title: "바쁜 직장 생활 속에서도,\n신중하게 한 분을.",
    body: "결혼을 생각하는 30대·40대 직장인을 위해 원하시는 기준을 먼저 정리하고, 맞는 분이 있을 때 한 분씩 제안합니다. 상담은 전화로 진행해 일정 부담이 적습니다.",
    points: [
      "프로필이 목록에 올라가지 않아 직장 지인에게 보일 걱정이 적습니다.",
      "희망 연령대, 사는 곳, 결혼 계획을 먼저 정리합니다.",
      "두 분 모두 수락한 뒤에만 만남 일정을 잡습니다.",
    ],
    href: "/30s-40s",
  },
  {
    number: "02",
    label: "기독교·천주교 소개팅",
    title: "같은 종교,\n비슷한 주말을 보내는 분.",
    body: "기독교, 천주교의 같은 종교 분을 원하시는지, 종교 생활을 존중하는 분이면 되는지부터 여쭙습니다. 무교이신 분도 같은 방식으로 상담합니다.",
    points: [
      "종교 생활을 얼마나 자주, 어떻게 하시는지 여쭙습니다.",
      "주일과 주말을 보내는 방식이 맞는지 함께 봅니다.",
      "결혼 후 종교 생활에 대한 생각까지 기준에 넣습니다.",
    ],
    href: "/christian",
  },
];

export function Focus() {
  return (
    <section id="focus" className="border-t border-line bg-[#efeae3] py-20 sm:py-28">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {focus.map((item, i) => (
            <div
              key={item.href}
              className={
                i === 0
                  ? "pb-12 lg:border-r lg:border-accent/15 lg:pb-0 lg:pr-16"
                  : "border-t border-accent/15 pt-12 lg:border-t-0 lg:pl-16 lg:pt-0"
              }
            >
              <p className="flex items-baseline gap-3 font-body text-[13px] text-ink-light">
                <span className="font-display text-base text-accent">{item.number}</span>
                {item.label}
              </p>
              <h2 className="mt-6 whitespace-pre-line font-display text-[1.75rem] font-medium leading-[1.4] tracking-[-0.02em] text-ink sm:text-[2.1rem]">
                {item.title}
              </h2>
              <p className="mt-5 max-w-md font-body text-[15px] leading-[1.85] text-ink-light">
                {item.body}
              </p>
              <ul className="mt-6 flex flex-col gap-2 font-body text-[14px] leading-[1.7] text-ink">
                {item.points.map((point) => (
                  <li key={point} className="flex gap-3">
                    <span aria-hidden className="mt-[0.7em] h-px w-3 flex-none bg-accent/40" />
                    {point}
                  </li>
                ))}
              </ul>
              <Link
                href={item.href}
                className="group mt-8 inline-flex items-center gap-2 border-b border-accent/30 pb-1 font-body text-sm font-medium text-accent transition-colors hover:border-accent"
              >
                {item.label} 자세히 보기
                <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

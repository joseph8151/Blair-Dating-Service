import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

// What the manager asks during the phone consultation. Mirrors the actual
// consultation and member profile fields, so keep it in sync with the forms.
const groups = [
  {
    title: "기본",
    items: ["나이와 사는 곳", "직업과 평일 생활", "혼인 여부와 결혼 계획"],
  },
  {
    title: "종교와 가치관",
    items: [
      "무교·기독교·천주교 등 종교",
      "종교 생활을 하는 정도",
      "같은 종교를 원하시는지, 존중하는 분이면 되는지",
    ],
  },
  {
    title: "생활 방식",
    items: ["주말을 보내는 방식", "음주와 흡연", "해외 생활 경험과 사용 언어"],
  },
  {
    title: "원하는 상대",
    items: ["희망 연령대와 분위기", "꼭 필요한 조건", "조율할 수 있는 조건과 맞지 않는 조건"],
  },
];

export function Questions() {
  return (
    <section id="questions" className="border-t border-line py-20 sm:py-28">
      <Container>
        <SectionHeading
          index="06"
          title="상담에서는 이런 것을 여쭙니다"
          description="처음 통화에서 모두 정하지 않아도 됩니다. 중요한 것부터 함께 정리하고, 만남 후 이야기를 들으며 기준을 조정합니다."
        />
        <div className="mt-12 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {groups.map((group) => (
            <div key={group.title} className="border-t border-ink pt-5">
              <h3 className="font-display text-lg font-medium text-ink">{group.title}</h3>
              <ul className="mt-4 flex flex-col gap-2 font-body text-[14px] leading-[1.7] text-ink-light">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

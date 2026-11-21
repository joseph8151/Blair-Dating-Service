import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { consultQuestionGroups as groups } from "@/data/consultQuestions";

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

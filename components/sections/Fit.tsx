import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { fitList, fitNote } from "@/data/fit";

// Read like a short letter rather than a checklist.
export function Fit() {
  return (
    <section id="fit" className="border-t border-line py-20 sm:py-28">
      <Container>
        <Reveal className="mx-auto max-w-3xl">
          <h2 className="font-display text-[1.8rem] font-medium leading-[1.35] tracking-[-0.03em] text-ink sm:text-[2.35rem]">
            이런 분께 잘 맞습니다
          </h2>
          <div className="mt-10 space-y-3 font-display text-[1.15rem] leading-[1.8] text-ink sm:text-[1.35rem]">
            {fitList.map((item) => (
              <p key={item}>{item}</p>
            ))}
          </div>
          <p className="mt-10 font-body text-[14px] leading-[1.8] text-ink-light">
            두세 가지가 해당된다면 편하게 상담해 보세요. {fitNote}
          </p>
        </Reveal>
      </Container>
    </section>
  );
}

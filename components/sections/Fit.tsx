import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { fitList, fitNote } from "@/data/fit";

export function Fit() {
  return (
    <section id="fit" className="border-t border-line py-20 sm:py-28">
      <Container>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-20">
          <SectionHeading
            className="lg:col-span-5"
            title="이런 분께 잘 맞습니다"
            description="두세 가지가 해당된다면 편하게 상담해 보세요."
          />
          <div className="lg:col-span-7">
            <ul className="border-t border-line">
              {fitList.map((item) => (
                <li
                  key={item}
                  className="border-b border-line py-4 font-body text-[15px] leading-[1.7] text-ink"
                >
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-5 font-body text-[13px] text-ink-light">{fitNote}</p>
          </div>
        </div>
      </Container>
    </section>
  );
}

import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { BrandImage } from "@/components/ui/BrandImage";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { Landing } from "@/data/landings";
import { siteConfig } from "@/data/site";

export function LandingPage({ landing }: { landing: Landing }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: landing.faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="pb-16 pt-24 sm:pt-28 lg:pb-24 lg:pt-32">
        <Container>
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-6">
              <h1>
                <span className="mb-4 block font-body text-[13px] font-normal text-ink-light">
                  {landing.eyebrow}
                </span>
                <span className="block font-display text-[2rem] font-medium leading-[1.35] tracking-[-0.03em] text-ink sm:text-[2.6rem]">
                  {landing.title}
                </span>
              </h1>
              <p className="mt-5 max-w-md font-body text-base leading-[1.8] text-ink-light">
                {landing.intro}
              </p>
              <Button href={landing.ctaHref} size="lg" className="mt-8">
                전화 상담 신청
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-3 sm:gap-5 lg:col-span-6">
              <BrandImage
                photo={landing.photos[0]}
                priority
                sizes="(min-width: 1024px) 28vw, 50vw"
                className={landing.photos[0].width > landing.photos[0].height ? "aspect-[3/2]" : "aspect-[3/4]"}
              />
              <BrandImage
                photo={landing.photos[1]}
                priority
                sizes="(min-width: 1024px) 28vw, 50vw"
                className={landing.photos[1].width > landing.photos[1].height ? "aspect-[3/2]" : "aspect-[3/4]"}
              />
            </div>
          </div>
        </Container>
      </section>

      <section className="border-t border-line py-20 sm:py-24">
        <Container>
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-20">
            <SectionHeading className="lg:col-span-4" title="이렇게 소개합니다" />
            <ul className="border-t border-line lg:col-span-8">
              {landing.points.map((point) => (
                <li
                  key={point}
                  className="border-b border-line py-4 font-body text-[15px] leading-[1.7] text-ink"
                >
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      {landing.groups ? (
        <section className="border-t border-line py-20 sm:py-24">
          <Container>
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-20">
              <SectionHeading className="lg:col-span-4" title="소개 지역" />
              <div className="flex flex-col gap-10 lg:col-span-8">
                {landing.groups.map((group) => (
                  <div key={group.name} className="border-t border-ink pt-5">
                    <h3 className="font-display text-lg font-medium text-ink">{group.name}</h3>
                    <ul className="mt-4 flex flex-col gap-2 font-body text-[15px] leading-[1.7] text-ink-light">
                      {group.areas.map((line) => (
                        <li key={line}>{line}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </section>
      ) : null}

      <section className="border-t border-line py-20 sm:py-24">
        <Container>
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-20">
            <SectionHeading className="lg:col-span-4" title="자주 묻는 질문" />
            <dl className="border-t border-line lg:col-span-8">
              {landing.faq.map((item) => (
                <div key={item.question} className="border-b border-line py-5">
                  <dt className="font-body text-[15px] font-medium text-ink">{item.question}</dt>
                  <dd className="mt-2 font-body text-sm leading-[1.85] text-ink-light">
                    {item.answer}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </Container>
      </section>

      <section className="border-t border-line py-16">
        <Container className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-body text-[15px] text-ink">
            {siteConfig.name}이 어떻게 소개하는지 더 보시려면{" "}
            <Link href="/" className="underline decoration-line underline-offset-4 hover:decoration-ink/40">
              홈으로
            </Link>
            .
          </p>
          <Button href={landing.ctaHref} size="md">
            전화 상담 신청
          </Button>
        </Container>
      </section>
    </>
  );
}

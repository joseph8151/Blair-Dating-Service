import { UserRound } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { memberPreviews } from "@/data/memberPreviews";

export function MemberPreview() {
  return (
    <section className="bg-cream py-24 sm:py-32">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Member Preview"
            title="A Glimpse of the Match Pool."
            description="실제 회원 정보는 공개되지 않습니다. 아래는 Match Pool의 구성을 보여주기 위한 예시 프로필입니다."
            align="center"
            className="mx-auto"
          />
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {memberPreviews.map((member, i) => (
            <Reveal key={`${member.initial}-${i}`} delay={(i % 3) * 70}>
              <div className="group relative overflow-hidden rounded-2xl border border-line bg-off-white p-6">
                <span className="absolute right-4 top-4 rounded-full border border-line bg-cream px-3 py-1 font-body text-[10px] font-semibold uppercase tracking-widest2 text-ink/35">
                  Sample Profile
                </span>

                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-blush-pale to-blush/20 text-blush-soft">
                  <UserRound size={26} strokeWidth={1.5} />
                </div>

                <p className="mt-5 font-display text-xl text-ink">
                  {member.initial} <span className="text-ink/40">·</span> {member.age}
                </p>
                <p className="mt-0.5 font-body text-sm text-ink/50">{member.location}</p>

                <dl className="mt-5 flex flex-col gap-2.5 border-t border-line pt-5">
                  <div className="flex justify-between gap-3 font-body text-[13px]">
                    <dt className="text-ink/40">Industry</dt>
                    <dd className="text-right text-ink/70">{member.industry}</dd>
                  </div>
                  <div className="flex justify-between gap-3 font-body text-[13px]">
                    <dt className="text-ink/40">Languages</dt>
                    <dd className="text-right text-ink/70">{member.languages}</dd>
                  </div>
                  <div className="flex justify-between gap-3 font-body text-[13px]">
                    <dt className="text-ink/40">Interests</dt>
                    <dd className="text-right text-ink/70">{member.interests}</dd>
                  </div>
                  <div className="flex justify-between gap-3 font-body text-[13px]">
                    <dt className="text-ink/40">Looking For</dt>
                    <dd className="text-right font-medium text-blush-soft">
                      {member.lookingFor}
                    </dd>
                  </div>
                </dl>
              </div>
            </Reveal>
          ))}
        </div>

        <p className="mx-auto mt-10 max-w-lg text-center font-body text-xs leading-relaxed text-ink/40">
          위 프로필은 서비스 이해를 돕기 위한 예시이며, 실제 회원과 무관합니다.
          모든 실제 회원 정보는 상담을 통해서만 비공개로 확인하실 수 있습니다.
        </p>
      </Container>
    </section>
  );
}

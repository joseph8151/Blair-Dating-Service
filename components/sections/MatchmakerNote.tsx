import { Quote, Ban } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { matchmakerNote, whoIsntFor, whoIsntForClosing } from "@/data/matchmakerNote";

export function MatchmakerNote() {
  return (
    <section className="ambient-glow-dark relative -mt-8 rounded-t-[2.5rem] bg-ink py-24 sm:py-32 lg:-mt-10 lg:rounded-t-[3rem]">
      <Container>
        <Reveal className="mx-auto max-w-2xl text-center">
          <Quote size={28} strokeWidth={1.3} className="mx-auto text-gold" />
          <p className="mt-6 font-display text-xl leading-[1.6] text-cream sm:text-2xl">
            &ldquo;{matchmakerNote.quote}&rdquo;
          </p>
          <p className="mt-6 font-body text-xs font-semibold uppercase tracking-widest2 text-cream/45">
            — {matchmakerNote.signature}
          </p>
        </Reveal>

        <Reveal delay={100} className="mx-auto mt-20 max-w-2xl">
          <div className="flex flex-col items-center gap-3 text-center">
            <Ban size={22} strokeWidth={1.5} className="text-cream/40" />
            <p className="font-body text-xs font-semibold uppercase tracking-widest2 text-cream/45">
              Who BLAIR Isn&rsquo;t For
            </p>
          </div>
          <ul className="mt-8 flex flex-col gap-3">
            {whoIsntFor.map((item) => (
              <li
                key={item}
                className="rounded-xl border border-cream/10 bg-cream/[0.04] px-5 py-4 text-center font-body text-sm text-cream/70"
              >
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-10 text-center font-display text-xl text-cream sm:text-2xl">
            {whoIsntForClosing}
          </p>
        </Reveal>
      </Container>
    </section>
  );
}

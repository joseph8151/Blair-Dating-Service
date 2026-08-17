import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="ambient-glow relative flex min-h-[85vh] items-center overflow-hidden bg-off-white py-24">
      <span
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 select-none font-display text-[13rem] leading-none text-ink/[0.035] sm:text-[19rem]"
      >
        404
      </span>

      <Container className="relative text-center">
        <span className="gold-rule mx-auto" style={{ background: "#C8B38A" }} />
        <p className="mt-5 font-body text-xs font-semibold uppercase tracking-widest2 text-ink-light">
          Blair Dating
        </p>
        <h1 className="mx-auto mt-6 max-w-lg font-display text-4xl leading-[1.2] tracking-[-0.01em] text-ink sm:text-5xl">
          길을 잃으셨네요.
        </h1>
        <p className="mx-auto mt-6 max-w-md font-body text-[15px] leading-[1.9] text-ink/55">
          찾으시는 페이지를 준비하는 동안, 블레어데이팅의 프라이빗 매칭
          서비스를 먼저 만나보세요.
          <br />
          당신에게 맞는 인연은, 여전히 기다리고 있습니다.
        </p>
        <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
          <Button href="/" variant="primary" size="lg">
            홈으로 돌아가기
          </Button>
          <Button href="/consultation" variant="outline" size="lg">
            프라이빗 상담 신청하기
          </Button>
        </div>
      </Container>
    </div>
  );
}

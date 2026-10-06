import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="flex min-h-[80vh] items-center py-24">
      <Container className="text-center">
        <h1 className="font-display text-3xl font-medium tracking-[-0.02em] text-ink sm:text-4xl">
          없는 페이지입니다.
        </h1>
        <p className="mt-4 font-body text-[15px] text-ink-light">
          주소를 다시 확인해 주세요.
        </p>
        <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
          <Button href="/consultation" size="lg">
            전화 상담 신청
          </Button>
          <Button href="/" variant="ghost" size="lg">
            홈으로
          </Button>
        </div>
      </Container>
    </div>
  );
}

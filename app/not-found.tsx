import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] items-center py-24">
      <Container className="text-center">
        <p className="font-body text-xs font-semibold uppercase tracking-widest2 text-rose">
          404
        </p>
        <h1 className="mt-4 font-display text-3xl text-ink sm:text-4xl">
          This Page Isn&rsquo;t on the List.
        </h1>
        <p className="mx-auto mt-4 max-w-sm font-body text-sm leading-relaxed text-ink/60">
          찾으시는 페이지를 찾을 수 없습니다. 홈으로 돌아가 다시 살펴보세요.
        </p>
        <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
          <Button href="/" variant="dark" size="lg">
            홈으로 돌아가기
          </Button>
          <Button href="/consultation" variant="outline" size="lg">
            상담 신청하기
          </Button>
        </div>
      </Container>
    </div>
  );
}

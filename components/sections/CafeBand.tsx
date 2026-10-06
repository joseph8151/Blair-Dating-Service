import { BrandImage } from "@/components/ui/BrandImage";
import { Container } from "@/components/ui/Container";
import { brandPhotos } from "@/data/brandPhotos";

export function CafeBand() {
  return (
    <section className="pb-4">
      <Container>
        <div className="grid grid-cols-2 gap-3 sm:gap-5">
          <BrandImage
            photo={brandPhotos.womanCafe}
            sizes="50vw"
            className="aspect-[3/2]"
          />
          <BrandImage photo={brandPhotos.manCafe} sizes="50vw" className="aspect-[3/2]" />
        </div>
      </Container>
    </section>
  );
}

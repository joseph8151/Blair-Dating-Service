import Image from "next/image";
import { brandPhotoAlt, type BrandPhoto } from "@/data/brandPhotos";
import { cn } from "@/lib/utils";

export function BrandImage({
  photo,
  className,
  priority = false,
  sizes,
}: {
  photo: BrandPhoto;
  className?: string;
  priority?: boolean;
  sizes?: string;
}) {
  return (
    <div className={cn("group relative overflow-hidden bg-line", className)}>
      <Image
        src={photo.src}
        alt={brandPhotoAlt}
        fill
        priority={priority}
        sizes={sizes ?? "(min-width: 1024px) 33vw, 100vw"}
        className="object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.035]"
      />
    </div>
  );
}

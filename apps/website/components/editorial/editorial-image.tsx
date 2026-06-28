import Image from "next/image";
import { editorialImageSrc } from "@/lib/editorial-images";
import { cn } from "@/lib/utils";

type EditorialImageProps = {
  id: string;
  alt?: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
  aspect?: "portrait" | "square" | "landscape" | "auto";
};

const aspectClass: Record<NonNullable<EditorialImageProps["aspect"]>, string> = {
  portrait: "aspect-[4/5]",
  square: "aspect-square",
  landscape: "aspect-[5/4]",
  auto: "",
};

export function EditorialImage({
  id,
  alt = "",
  className,
  priority = false,
  sizes = "(max-width: 768px) 50vw, 25vw",
  aspect = "portrait",
}: EditorialImageProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden bg-neutral-100",
        aspectClass[aspect],
        className,
      )}
    >
      <Image
        src={editorialImageSrc(id)}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes}
        className="object-cover"
      />
    </div>
  );
}

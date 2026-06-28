"use client";

import Image from "next/image";
import { useState } from "react";
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
  const [failed, setFailed] = useState(false);
  const src = editorialImageSrc(id);

  return (
    <div
      className={cn(
        "relative overflow-hidden bg-neutral-100",
        aspectClass[aspect],
        className,
      )}
    >
      {!failed ? (
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes={sizes}
          className="object-cover"
          onError={() => setFailed(true)}
        />
      ) : (
        <div className="absolute inset-0 bg-neutral-200" aria-hidden="true" />
      )}
    </div>
  );
}

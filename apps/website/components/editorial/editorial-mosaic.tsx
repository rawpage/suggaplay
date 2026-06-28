import { EditorialImage } from "@/components/editorial/editorial-image";
import { cn } from "@/lib/utils";

type EditorialMosaicProps = {
  ids: string[];
  className?: string;
  columns?: 2 | 3 | 4 | 6;
};

const columnClass: Record<NonNullable<EditorialMosaicProps["columns"]>, string> =
  {
    2: "grid-cols-2",
    3: "grid-cols-2 md:grid-cols-3",
    4: "grid-cols-2 md:grid-cols-4",
    6: "grid-cols-2 md:grid-cols-3 lg:grid-cols-6",
  };

export function EditorialMosaic({
  ids,
  className,
  columns = 6,
}: EditorialMosaicProps) {
  return (
    <div
      className={cn("grid gap-1", columnClass[columns], className)}
      aria-hidden={ids.every((id) => !id)}
    >
      {ids.map((id) => (
        <EditorialImage
          key={id}
          id={id}
          alt=""
          aspect="portrait"
          sizes="(max-width: 768px) 50vw, 16vw"
        />
      ))}
    </div>
  );
}

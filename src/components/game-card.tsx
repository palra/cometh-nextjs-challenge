import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";
import Image from "next/image";

export function GameCard({
  name,
  className,
  imageSrc: image,
  featured = false,
}: {
  name: string;
  imageSrc?: string;
  className?: string;
  featured?: boolean;
}) {
  return (
    <div
      className={cn(
        "relative min-h-[16rem] p-6 md:p-8",
        {
          "lg:col-span-2": featured,
        },
        className
      )}
    >
      {image && (
        <div className="absolute left-0 inset-y-0 flex items-center justify-center w-36">
          <Image
            src={image}
            alt={`Illustration du jeu ${name}`}
            width={144}
            height={144}
            className="max-h-48 w-auto"
          />
        </div>
      )}
      <div
        className={cn(
          "bg-gray-200 rounded-lg min-h-full py-4 px-8 flex flex-col justify-center text-center gap-2",
          {
            "pr-8 pl-24 ml-8 text-end": image,
            "bg-amber-200": featured,
          }
        )}
      >
        <div className="text-xl md:text-2xl font-semibold">{name}</div>

        <div>
          <Button size={featured ? "lg" : "default"} className="px-8">
            Jouer
          </Button>
        </div>
      </div>
    </div>
  );
}

export function GameCardSkeleton() {
  return (
    <div className="min-h-[16rem] p-6 md:p-8">
      <Skeleton className="rounded-lg min-h-full py-4 px-8" />
    </div>
  );
}

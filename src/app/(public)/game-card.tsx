import { cn } from "@/lib/utils";
import Image, { StaticImageData } from "next/image";
import { Button } from "@/components/ui/button";

export function GameCard({
  name,
  description,
  className,
  image,
  featured = false,
}: {
  name: string;
  description: string;
  image?: StaticImageData;
  className?: string;
  featured?: boolean;
}) {
  return (
    <div
      className={cn(
        "relative h-64 min-h-full p-8",
        {
          "md:col-span-2": featured,
        },
        className
      )}
    >
      {image && (
        <div className="absolute left-0 inset-y-0 flex items-center justify-center w-36">
          <Image
            src={image}
            alt={`Illustration du jeu ${name}`}
            className="max-h-48 w-auto"
          />
        </div>
      )}
      <div
        className={cn(
          "bg-gray-200 rounded-lg min-h-full py-4 px-8 flex flex-col justify-between text-center",
          {
            "pr-8 pl-24 ml-8 text-end": image,
          }
        )}
      >
        <div>
          <div className="text-xl">{name}</div>
          <div className="text-md">{description}</div>
        </div>

        <div>
          <Button size={featured ? "lg" : "default"} className="px-8">
            Jouer
          </Button>
        </div>
      </div>
    </div>
  );
}

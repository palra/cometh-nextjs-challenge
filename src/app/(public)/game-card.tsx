import { EuroCurrencyFormat } from "@/components/euro-currency-format";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

const stylesCardBaseContainer = "min-h-[16rem] p-6 md:p-8 grow-0 w-96 max-w-xl";

export function GameCard({
  name,
  id,
  className,
  imageSrc,
  featured = false,
  maxGains,
  minBet,
}: {
  id: string;
  name: string;
  imageSrc?: string;
  className?: string;
  featured?: boolean;
  maxGains: number;
  minBet: number;
}) {
  return (
    <Link
      href={`/jeux/${id}`}
      className={cn(
        "transition relative group hover:scale-105",
        stylesCardBaseContainer,
        {
          "lg:col-span-2 grow": featured,
        },
        className
      )}
    >
      {imageSrc && (
        <div className="absolute transition left-0 inset-y-0 flex items-center justify-center w-36 group-hover:rotate-6 group-hover:scale-110">
          <Image
            src={imageSrc}
            alt={`Illustration du jeu ${name}`}
            width={144}
            height={144}
            className="max-h-48 w-auto drop-shadow-lg"
          />
        </div>
      )}

      <div
        className={cn(
          "absolute transition right-0 top-0 p-4 bg-red-200 text-sm rounded-full shadow-md font-bold group-hover:scale-105",
          {
            "bg-red-300": featured,
          }
        )}
      >
        <EuroCurrencyFormat value={minBet} fixedDecimalScale={true} />
      </div>

      <div
        className={cn(
          "transition bg-gray-200 group-hover:bg-gray-300 rounded-lg min-h-full py-4 px-8 flex flex-col justify-center text-center gap-2",
          {
            "pr-8 pl-24 ml-8 text-end": imageSrc,
            "bg-amber-200 group-hover:bg-amber-300": featured,
          }
        )}
      >
        <div className="text-xl md:text-2xl font-semibold">{name}</div>

        <div className="text-xs">
          {"Gagnez jusqu'à "}
          <EuroCurrencyFormat className="text-lg font-bold" value={maxGains} />
        </div>
      </div>
    </Link>
  );
}

export function GameCardSkeleton() {
  return (
    <div className={cn(stylesCardBaseContainer)}>
      <Skeleton className="rounded-lg min-h-full py-4 px-8" />
    </div>
  );
}

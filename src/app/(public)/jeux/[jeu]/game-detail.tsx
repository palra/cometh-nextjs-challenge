import { EuroCurrencyFormat } from "@/components/euro-currency-format";
import { GetGameResponse } from "./query";
import { Skeleton } from "@/components/ui/skeleton";

export function GameDetail({
  game: { name, maxGains, description },
}: {
  game: GetGameResponse;
}) {
  return (
    <div className="flex flex-row gap-4">
      <div className="bg-gray-200 w-full p-8 rounded-lg text-center">
        <h1 className="text-3xl font-bold">{name}</h1>
        <h2 className="text-xl">
          {"Gagnez jusqu'à "}
          <EuroCurrencyFormat className="font-bold" value={maxGains} />
        </h2>

        <p className="mt-4">{description}</p>
      </div>
    </div>
  );
}

export function GameDetailSkeleton() {
  return (
    <div className="flex flex-row gap-4">
      <div className="bg-gray-200 w-full p-8 rounded-lg flex flex-col items-center gap-2">
        <Skeleton className="h-8 w-96 max-w-full" />
        <Skeleton className="h-6 w-72 max-w-[80%]" />

        <Skeleton className="h-4 w-5/6 mt-4" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-7/12" />
      </div>
    </div>
  );
}

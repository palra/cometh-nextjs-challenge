"use client";

import { ErrorAlert } from "@/components/error-alert";
import { useQuery } from "@tanstack/react-query";
import { ReactNode } from "react";
import { match } from "ts-pattern";
import { GameCard, GameCardSkeleton } from "./game-card";
import { GetGamesQueryKey, getGames } from "./query";

export default function HomePageClient() {
  const query = useQuery({
    queryKey: [GetGamesQueryKey],
    queryFn: getGames,
  });

  return match(query)
    .with({ isSuccess: true }, ({ data }) => (
      <GridContainer>
        {data.map(({ id, name, image, featured, maxGains, minBet }) => (
          <GameCard
            key={id}
            id={id}
            name={name}
            imageSrc={image}
            featured={featured ?? false}
            maxGains={maxGains}
            minBet={minBet}
          />
        ))}
      </GridContainer>
    ))
    .with({ isFetching: true }, () => (
      <GridContainer>
        {[...Array(3)].map((_, idx) => (
          <GameCardSkeleton key={idx} />
        ))}
      </GridContainer>
    ))
    .otherwise(() => <ErrorAlert onTryAgain={() => query.refetch()} />);
}

function GridContainer({ children }: { children: ReactNode }) {
  return (
    <div
      className="
        flex flex-wrap
        justify-center
        md:gap-x-8
      "
    >
      {children}
    </div>
  );
}

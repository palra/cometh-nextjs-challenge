"use client";

import { GameCard, GameCardSkeleton } from "@/components/game-card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { useQuery } from "@tanstack/react-query";
import { AlertOctagon } from "lucide-react";
import { ReactNode } from "react";
import { match } from "ts-pattern";
import { GetGamesQueryKey, getGames } from "./query";

export default function HomePageClient() {
  const query = useQuery({
    queryKey: [GetGamesQueryKey],
    queryFn: getGames,
  });

  return match(query)
    .with({ isSuccess: true }, ({ data }) => (
      <GridContainer>
        {data.map(({ name, featured, image }) => (
          <GameCard
            key={name}
            name={name}
            imageSrc={image}
            featured={featured ?? false}
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
    .otherwise(() => (
      <Alert>
        <AlertOctagon className="h-4 w-4" />
        <AlertTitle>Mince ...</AlertTitle>
        <AlertDescription>
          <p>Une erreur est survenue pendant le chargement des données.</p>
          <Button onClick={() => query.refetch()}>Essayer à nouveau</Button>
        </AlertDescription>
      </Alert>
    ));
}

function GridContainer({ children }: { children: ReactNode }) {
  return (
    <div
      className="
        grid
        grid-flow-row-dense
        grid-cols-1 md:grid-cols-2 xl:grid-cols-3
        md:gap-x-8
      "
    >
      {children}
    </div>
  );
}

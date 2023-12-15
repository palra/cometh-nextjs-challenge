import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query";
import { makeGetGameQuery } from "./query";
import { GameDetailClientPage } from "./page.client";
import { games } from "@/app/api/games/data";

export default async function GameDetailPage({
  params,
}: {
  params: { jeu: string };
}) {
  const queryClient = new QueryClient();

  const queryParams = makeGetGameQuery(params.jeu);
  await queryClient.prefetchQuery({
    ...queryParams,
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <GameDetailClientPage params={params} />
    </HydrationBoundary>
  );
}

export async function generateStaticParams() {
  return games.map((game) => ({
    jeu: game.id,
  }));
}

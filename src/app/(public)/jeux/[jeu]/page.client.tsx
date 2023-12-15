"use client";

import { useQuery } from "@tanstack/react-query";
import { makeGetGameQuery } from "./query";
import { match, P } from "ts-pattern";
import { notFound } from "next/navigation";
import { ErrorAlert } from "@/components/error-alert";
import { EuroCurrencyFormat } from "@/components/euro-currency-format";
import { GameDetail, GameDetailSkeleton } from "./game-detail";
import { MoveLeft } from "lucide-react";
import Link from "next/link";
import React from "react";

export function GameDetailClientPage({
  params: { jeu },
}: {
  params: { jeu: string };
}) {
  const query = useQuery(makeGetGameQuery(jeu));

  return (
    <PageLayout>
      {match(query)
        .with({ isSuccess: true, data: null }, () => notFound())
        .with({ isSuccess: true, data: P.select(P.not(null)) }, (game) => (
          <GameDetail game={game} />
        ))
        .with({ isFetching: true }, () => <GameDetailSkeleton />)
        .otherwise(() => (
          <ErrorAlert onTryAgain={() => query.refetch()} />
        ))}
    </PageLayout>
  );
}

function PageLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Link
        href="/"
        className="inline-block text-sm text-gray-700 flex-none mb-4"
      >
        <MoveLeft className="inline" /> Retour à la liste des jeux
      </Link>
      {children}
    </>
  );
}

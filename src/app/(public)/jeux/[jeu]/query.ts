import { GetGamesQueryKey } from "@/app/(public)/query";

export type GetGameResponse = {
  id: string;
  name: string;
  description: string;
  featured?: boolean;
  tags?: string[];
  image: string;
  minBet: number;
  maxGains: number;
};

type GetGameArgs = {
  queryKey:
    | readonly [typeof GetGamesQueryKey, string]
    | readonly [
        typeof GetGamesQueryKey,
        string,
        {
          faultInjection?: boolean;
          skipWait?: boolean;
        }
      ];
};

export const makeGetGameQuery = (slug: string) => ({
  queryKey: [GetGamesQueryKey, slug] as const,
  queryFn: getGame,
});

export async function getGame({ queryKey: [_, slug, args] }: GetGameArgs) {
  const { faultInjection, skipWait } = args ?? {};

  const res = await fetch(
    `/api/games/${slug}?` +
      new URLSearchParams({
        ...(faultInjection && {
          fault_injection: "true",
        }),
        ...(skipWait && {
          skip_wait: "true",
        }),
      })
  );

  if (res.status === 404) {
    return null;
  }

  if (!res.ok) {
    throw new Error("Unexpected Server Error");
  }

  return (await res.json()) as GetGameResponse;
}

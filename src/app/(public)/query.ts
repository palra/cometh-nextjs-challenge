export type GetGamesResponse = {
  id: string;
  name: string;
  description: string;
  featured?: boolean;
  tags?: string[];
  image: string;
  minBet: number;
  maxGains: number;
}[];

export const GetGamesQueryKey = "games";

type GetGamesArgs = {
  queryKey:
    | readonly [typeof GetGamesQueryKey]
    | readonly [
        typeof GetGamesQueryKey,
        {
          tags?: string[];
          faultInjection?: boolean;
          skipWait?: boolean;
        }
      ];
};

export async function getGames({ queryKey: [_, args] }: GetGamesArgs) {
  const { faultInjection, skipWait } = args ?? {};
  const res = await fetch(
    "/api/games?" +
      new URLSearchParams({
        ...(faultInjection && {
          fault_injection: "true",
        }),
        ...(skipWait && {
          skip_wait: "true",
        }),
      })
  );

  if (!res.ok) {
    throw new Error("Unexpected Server Error");
  }

  return (await res.json()) as GetGamesResponse;
}

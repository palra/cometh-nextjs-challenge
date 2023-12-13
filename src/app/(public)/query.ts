export type GetGamesResponse = {
  name: string;
  description: string;
  featured?: boolean;
  tags?: string[];
  image: string;
}[];

export const GetGamesQueryKey = "games";

type GetGamesArgs = {
  queryKey:
    | [typeof GetGamesQueryKey]
    | [
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

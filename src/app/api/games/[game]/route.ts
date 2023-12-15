import { NextRequest, NextResponse } from "next/server";
import { games } from "../data";

export async function GET(
  req: NextRequest,
  { params: { game: gameId } }: { params: { game: string } }
) {
  const game = games.find((g) => g.id === gameId);
  if (!game) {
    return NextResponse.json({ error: "Not Found" }, { status: 404 });
  }

  return NextResponse.json(game);
}

import { NextRequest } from "next/server";
import { setTimeout } from "timers/promises";
import { games } from "./data";

export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl;

  if (!searchParams.has("skip_wait")) {
    await setTimeout(1000);
  }

  if (searchParams.has("fault_injection") && Math.random() > 0.5) {
    return Response.error();
  }

  return Response.json(games);
}

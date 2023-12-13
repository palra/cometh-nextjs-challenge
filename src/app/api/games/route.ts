import { NextRequest } from "next/server";
import { setTimeout } from "timers/promises";

export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl;

  if (!searchParams.has("skip_wait")) {
    await setTimeout(1000);
  }

  if (searchParams.has("fault_injection") && Math.random() > 0.5) {
    return Response.error();
  }

  return Response.json([
    {
      name: "Avalanche de pièces d'or",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      featured: true,
      tags: ["chance", "singleplayer"],
      image: "/assets/games/falling-coins.png",
    },
    {
      name: "Stars du Poker",
      description:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      tags: ["cards", "poker", "multiplayer"],
      image: "/assets/games/cards.png",
    },
    {
      name: "La Chance Carrée",
      description:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      tags: ["dices", "chance", "singleplayer"],
      image: "/assets/games/dices.png",
    },
  ]);
}

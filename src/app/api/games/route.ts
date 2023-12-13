import { NextRequest } from "next/server";
import { setTimeout } from "timers/promises";

export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl;

  if (!searchParams.has("skip-wait")) {
    await setTimeout(1000);
  }

  if (searchParams.has("fault-injection") && Math.random() > 0.5) {
    throw new Error("Random fault injection");
  }

  return [
    {
      name: "Avalanche de pièces d'or",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      featured: true,
      tags: ["chance", "singleplayer"],
      image: "/games/falling-coins.png",
    },
    {
      name: "Stars du Poker",
      description:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequatComparez-vous à l'élite des joueurs de Poker et devenez le maître de Vegas !",
      tags: ["cards", "poker", "multiplayer"],
      image: "/games/cards.png",
    },
  ];
}

import fallingCoins from "@/../public/games/falling-coins.png";
import cards from "@/../public/games/cards.png";
import { GameCard } from "./game-card";

export default function HomePage() {
  return (
    <>
      <div
        className="
            grid
            grid-flow-row-dense
            grid-cols-1 md:grid-cols-2 lg:grid-cols-3
            gap-2 md:gap-8 md:gap-y-4
        "
      >
        <GameCard
          name="Test"
          description="Test"
          image={fallingCoins}
          featured={true}
        />
        <GameCard name="Test" description="Test" image={cards} />
        <GameCard name="Test" description="Test" />
      </div>
    </>
  );
}

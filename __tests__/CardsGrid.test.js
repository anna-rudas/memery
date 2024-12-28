import React from "react";
import { render } from "@testing-library/react";
import CardsGrid from "../src/components/features/CardsGrid/CardsGrid";
import AppContextProvider from "../src/context/AppContext";

describe(CardsGrid, () => {
  test("displays correct number of playing cards in a grid", () => {
    const mockCards = [...Array(24)].map((_, index) => ({
      id: `card-${index}`,
      src: `image-${index}.jpg`,
      matched: false,
    }));
    const { getAllByTestId } = render(
      <AppContextProvider
        value={{
          cards: mockCards,
        }}
      >
        <CardsGrid />
      </AppContextProvider>
    );
    const playingCards = getAllByTestId("playingCard");
    expect(playingCards).toHaveLength(24);
  });
});

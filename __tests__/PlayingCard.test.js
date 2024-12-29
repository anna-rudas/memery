import React from "react";
import {
  render,
  within,
  fireEvent,
  act,
  waitFor,
} from "@testing-library/react";
import PlayingCard from "../src/components/templates/PlayingCard";
import CardsGrid from "../src/components/features/CardsGrid/CardsGrid";
import AppContextProvider from "../src/context/AppContext";

describe(PlayingCard, () => {
  test("handles card flipping correctly", async () => {
    const mockCards = [
      {
        id: "1",
        src: "image-X.jpg",
        matched: false,
      },
      {
        id: "2",
        src: "image-Y.jpg",
        matched: false,
      },
    ];
    const { getAllByTestId } = render(
      <AppContextProvider
        value={{
          cards: mockCards,
          firstCardFlip: null,
          secondCardFlip: null,
        }}
      >
        <CardsGrid />
      </AppContextProvider>
    );
    const playingCards = getAllByTestId("playingCard");
    const firstPlayingCardButton = within(playingCards[0]).getByRole("button");
    await act(() => fireEvent.click(firstPlayingCardButton));

    await waitFor(
      () => {
        expect(playingCards[0].classList.contains("cardFlipped")).toBe(true);
      },
      { timeout: 1000 }
    );

    const secondPlayingCardButton = within(playingCards[1]).getByRole("button");
    await act(() => fireEvent.click(secondPlayingCardButton));

    await waitFor(
      () => {
        expect(playingCards[0].classList.contains("cardFlipped")).toBe(false);
      },
      { timeout: 1000 }
    );
  });
});

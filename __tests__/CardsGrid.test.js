import React from "react";
import {
  render,
  within,
  fireEvent,
  act,
  waitFor,
} from "@testing-library/react";
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

  test("handles matching cards correctly", async () => {
    const mockCards = [
      {
        id: "1",
        src: "image-X.jpg",
        matched: false,
      },
      {
        id: "2",
        src: "image-X.jpg",
        matched: false,
      },
    ];

    const { getAllByTestId } = render(
      <AppContextProvider
        value={{
          cards: mockCards,
          firstCardFlip: null,
          secondCardFlip: null,
          turnCount: 0,
        }}
      >
        <CardsGrid />
      </AppContextProvider>
    );

    const playingCards = getAllByTestId("playingCard");

    const firstPlayingCardButton = within(playingCards[0]).getByRole("button");
    await act(() => fireEvent.click(firstPlayingCardButton));

    const secondPlayingCardButton = within(playingCards[1]).getByRole("button");
    await act(() => fireEvent.click(secondPlayingCardButton));

    await waitFor(
      () => {
        expect(getAllByTestId("matchedCard").length).toBe(2);
        expect(
          playingCards[0].firstChild.classList.contains("matchedEffect")
        ).toBe(true);
        expect(
          playingCards[1].firstChild.classList.contains("matchedEffect")
        ).toBe(true);
      },
      { timeout: 1000 }
    );
  });
  test("handles non-matching cards correctly", async () => {
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
          turnCount: 0,
        }}
      >
        <CardsGrid />
      </AppContextProvider>
    );

    const playingCards = getAllByTestId("playingCard");

    const firstPlayingCardButton = within(playingCards[0]).getByRole("button");
    await act(() => fireEvent.click(firstPlayingCardButton));

    const secondPlayingCardButton = within(playingCards[1]).getByRole("button");
    await act(() => fireEvent.click(secondPlayingCardButton));

    await waitFor(
      () => {
        expect(getAllByTestId("unmatchedCard").length).toBe(2);
        expect(
          playingCards[0].firstChild.classList.contains("matchedEffect")
        ).toBe(false);
        expect(
          playingCards[1].firstChild.classList.contains("matchedEffect")
        ).toBe(false);
      },
      { timeout: 1000 }
    );
  });
});

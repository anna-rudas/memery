import React, { useState, createContext, useEffect } from "react";
import { generatePack, shuffleCards } from "../utilities/helpers";

const defaultContextValue = {
  isLoading: true,
  setIsLoading: () => {},
  isPlaying: true,
  isGameOverOpen: true,
  setIsGameOverOpen: () => {},
  isSettingsOpen: true,
  setIsSettingsOpen: () => {},
  cards: [],
  setCards: () => {},
  selectedPackSize: "medium",
  setSelectedPackSize: () => {},
  selectedPackType: "cryingCat",
  setSelectedPackType: () => {},
  firstCardFlip: null,
  setFirstCardFlip: () => {},
  secondCardFlip: null,
  setSecondCardFlip: () => {},
  turnCount: 0,
  setTurnCount: () => {},
  cardMatchCount: 0,
  setCardMatchCount: () => {},
  handleNewGame: () => {},
};

export const AppContext = createContext(defaultContextValue);

function AppContextProvider({ children }) {
  const [isLoading, setIsLoading] = useState(true);
  const [cards, setCards] = useState([]);
  const [turnCount, setTurnCount] = useState(0);
  const [firstCardFlip, setFirstCardFlip] = useState(null);
  const [secondCardFlip, setSecondCardFlip] = useState(null);
  const [cardMatchCount, setCardMatchCount] = useState(0);
  const [selectedPackSize, setSelectedPackSize] = useState("medium");
  const [selectedPackType, setSelectedPackType] = useState("cryingCat");
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isGameOverOpen, setIsGameOverOpen] = useState(false);

  const resetGame = () => {
    setTurnCount(0);
    setFirstCardFlip(null);
    setSecondCardFlip(null);
    setIsPlaying(true);
    setCardMatchCount(0);
    setIsGameOverOpen(false);
  };

  const handleNewGame = () => {
    resetGame();
    setIsSettingsOpen(false);
    const completeDeck = generatePack(selectedPackSize, selectedPackType);
    shuffleCards(completeDeck);
    setCards(completeDeck);
  };

  useEffect(() => {
    if (cardMatchCount !== 0 && cardMatchCount === cards.length / 2) {
      setTimeout(() => {
        setIsGameOverOpen(true);
      }, 500);
    }
  }, [cardMatchCount, cards]);

  return (
    <AppContext.Provider
      value={{
        isLoading,
        setIsLoading,
        isPlaying,
        isGameOverOpen,
        setIsGameOverOpen,
        isSettingsOpen,
        setIsSettingsOpen,
        cards,
        setCards,
        selectedPackSize,
        setSelectedPackSize,
        selectedPackType,
        setSelectedPackType,
        firstCardFlip,
        setFirstCardFlip,
        secondCardFlip,
        setSecondCardFlip,
        turnCount,
        setTurnCount,
        cardMatchCount,
        setCardMatchCount,
        handleNewGame,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export default AppContextProvider;

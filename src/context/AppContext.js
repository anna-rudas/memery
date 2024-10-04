import React, { useState, createContext, useEffect } from "react";
import { generatePack, shuffleCards } from "../utilities/helpers";

const defaultContextValue = {
  isLoading: true,
  setIsLoading: () => {},
  isPlaying: true,
  isGameOver: true,
  isSettingsOpen: true,
  setIsSettingsOpen: () => {},
  cards: [],
  setCards: () => {},
  packSize: "medium",
  setPackSize: () => {},
  packType: "medium",
  setPackType: () => {},
  firstFlip: null,
  setFirstFlip: () => {},
  secondFlip: null,
  setSecondFlip: () => {},
  turn: 0,
  setTurns: () => {},
  countMatched: 0,
  setCountMatched: () => {},
  handleNewGame: () => {},
};

export const AppContext = createContext(defaultContextValue);

function AppContextProvider({ children }) {
  const [isLoading, setIsLoading] = useState(true);
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [firstFlip, setFirstFlip] = useState(null);
  const [secondFlip, setSecondFlip] = useState(null);
  const [countMatched, setCountMatched] = useState(0);
  const [packSize, setPackSize] = useState("medium");
  const [packType, setPackType] = useState("cryingCat");
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isGameOver, setIsGameOver] = useState(false);

  const resetGame = () => {
    setTurns(0);
    setFirstFlip(null);
    setSecondFlip(null);
    setIsPlaying(true);
    setCountMatched(0);
    setIsGameOver(false);
  };

  const handleNewGame = () => {
    resetGame();
    setIsSettingsOpen(false);
    const completeDeck = generatePack(packSize, packType);
    shuffleCards(completeDeck);
    setCards(completeDeck);
  };

  useEffect(() => {
    if (countMatched !== 0 && countMatched === cards.length / 2) {
      setTimeout(() => {
        setIsGameOver(true);
      }, 500);
    }
  }, [countMatched, cards]);

  return (
    <AppContext.Provider
      value={{
        isLoading,
        setIsLoading,
        isPlaying,
        isGameOver,
        isSettingsOpen,
        setIsSettingsOpen,
        cards,
        setCards,
        packSize,
        setPackSize,
        packType,
        setPackType,
        firstFlip,
        setFirstFlip,
        secondFlip,
        setSecondFlip,
        turns,
        setTurns,
        countMatched,
        setCountMatched,
        handleNewGame,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export default AppContextProvider;

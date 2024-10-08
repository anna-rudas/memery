import React, {
  useState,
  createContext,
  useEffect,
  useMemo,
  useCallback,
} from "react";
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
  handleNewGame: () => {},
};

export const AppContext = createContext(defaultContextValue);

function AppContextProvider({ children }) {
  const [isLoading, setIsLoading] = useState(true);
  const [cards, setCards] = useState([]);
  const [turnCount, setTurnCount] = useState(0);
  const [firstCardFlip, setFirstCardFlip] = useState(null);
  const [secondCardFlip, setSecondCardFlip] = useState(null);
  const [selectedPackSize, setSelectedPackSize] = useState("medium");
  const [selectedPackType, setSelectedPackType] = useState("cryingCat");
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isGameOverOpen, setIsGameOverOpen] = useState(false);

  const cardMatchCount = useMemo(() => {
    if (cards.length !== 0) {
      return cards.filter((card) => card.matched).length / 2;
    }
    return null;
  }, [cards]);

  const resetGame = () => {
    setTurnCount(0);
    setFirstCardFlip(null);
    setSecondCardFlip(null);
    setIsPlaying(true);
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
    if (cardMatchCount && cardMatchCount === cards.length / 2) {
      setTimeout(() => {
        setIsGameOverOpen(true);
      }, 500);
    }
  }, [cardMatchCount, cards]);

  const compareCards = useCallback(() => {
    if (!firstCardFlip || !secondCardFlip) {
      return;
    }
    if (firstCardFlip.src === secondCardFlip.src) {
      const temp = cards.map((currentCard) => {
        if (currentCard.src === firstCardFlip.src) {
          return { ...currentCard, matched: true };
        } else {
          return currentCard;
        }
      });
      setCards(temp);
    }
    setFirstCardFlip(null);
    setSecondCardFlip(null);
    setTurnCount(turnCount + 1);
  }, [
    cards,
    setCards,
    firstCardFlip,
    setFirstCardFlip,
    secondCardFlip,
    setSecondCardFlip,
    turnCount,
    setTurnCount,
  ]);

  useEffect(() => {
    setTimeout(() => {
      compareCards();
    }, 500);
  }, [secondCardFlip, compareCards]);

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
        handleNewGame,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export default AppContextProvider;

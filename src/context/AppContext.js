import React, {
  useState,
  createContext,
  useEffect,
  useMemo,
  useCallback,
} from "react";
import { delay, generatePack, shuffleCards } from "../utilities/helpers";
import bugsWithNamesPack from "../data/packs/BugsWithNamesPack";
import cryingCatPack from "../data/packs/CryingCatPack";
import muscatsPack from "../data/packs/MusCatsPack";
import backgroundImage from "../data/BackgroundImage";
import playingCardCover from "../data/PlayingCardCover";
import bugsWithNamesPackPreview from "../data/pack-previews/BugsWithNamesPackPreview";
import cryingCatPackPreview from "../data/pack-previews/CryingCatPackPreview";
import musCatsPackPreview from "../data/pack-previews/MusCatsPackPreview";

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
  preloadImageContent: () => {},
};

export const AppContext = createContext(defaultContextValue);

function AppContextProvider({ children, value = {} }) {
  const [isLoading, setIsLoading] = useState(true);
  const [cards, setCards] = useState(value.cards || []);
  const [turnCount, setTurnCount] = useState(value.turnCount || 0);
  const [firstCardFlip, setFirstCardFlip] = useState(
    value.firstCardFlip || null
  );
  const [secondCardFlip, setSecondCardFlip] = useState(
    value.secondCardFlip || null
  );
  const [selectedPackSize, setSelectedPackSize] = useState(
    value.selectedPackSize || "medium"
  );
  const [selectedPackType, setSelectedPackType] = useState(
    value.selectedPackType || "cryingCat"
  );
  const [isSettingsOpen, setIsSettingsOpen] = useState(
    value.isSettingsOpen || false
  );
  const [isPlaying, setIsPlaying] = useState(false);
  const [isGameOverOpen, setIsGameOverOpen] = useState(
    value.isGameOverOpen || false
  );

  const cardMatchCount = useMemo(() => {
    if (cards.length !== 0) {
      return cards.filter((card) => card.matched).length / 2;
    }
    return null;
  }, [cards]);

  const preloadImageContent = () => {
    const primaryImageContent = [
      backgroundImage,
      playingCardCover,
      ...bugsWithNamesPackPreview,
      ...cryingCatPackPreview,
      ...musCatsPackPreview,
    ];

    // start loading the packs as well
    const secondaryImageContent = [
      ...bugsWithNamesPack,
      ...cryingCatPack,
      ...muscatsPack,
    ];
    secondaryImageContent.forEach((image) => {
      const imageElement = new Image();
      imageElement.src = image.src;
    });

    const primaryImageContentResults = primaryImageContent.map((image) => {
      return new Promise((resolve, reject) => {
        const imageElement = new Image();
        imageElement.src = image.src;
        imageElement.onload = resolve;
        imageElement.onerror = reject;
      });
    });

    return Promise.all([...primaryImageContentResults, delay(500)]);
  };

  const resetGame = () => {
    console.log("resetting");
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
    console.log("here!", cardMatchCount, cards.length);
    if (cardMatchCount && cardMatchCount === cards.length / 2) {
      console.log("setting it true!");
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
        preloadImageContent,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export default AppContextProvider;

import React, { useState, useEffect } from "react";
import { createRoot } from "react-dom/client";
import { generatePack, shuffleCards } from "./utilities/helpers";
import TitleScreen from "./components/features/TitleScreen";
import GameContent from "./components/features/GameContent";
import GameOverModal from "./components/modals/GameOverModal";
import SettingsModal from "./components/modals/SettingsModal";
import FontFaceObserver from "fontfaceobserver";
import PageLoading from "./components/loaders/PageLoading/PageLoading";

const primaryFontObserver = new FontFaceObserver("VT323");

function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [firstFlip, setFirstFlip] = useState(null);
  const [secondFlip, setSecondFlip] = useState(null);
  const [countMatched, setCountMatched] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);
  const [packSize, setPackSize] = useState("medium");
  const [packType, setPackType] = useState("cryingCat");
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

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
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  });

  useEffect(() => {
    if (countMatched !== 0 && countMatched === cards.length / 2) {
      setTimeout(() => {
        setIsGameOver(true);
      }, 500);
    }
  }, [countMatched, cards]);

  const openSettings = () => {
    setIsSettingsOpen(true);
  };

  return (
    <div className="wrapper">
      {isLoading && !isPlaying && <PageLoading />}
      {!isLoading && !isPlaying && (
        <TitleScreen handleBtnClick={openSettings} />
      )}
      {!isLoading && isPlaying && (
        <GameContent
          cards={cards}
          setCards={setCards}
          handleBtnClick={openSettings}
          turns={turns}
          setTurns={setTurns}
          firstFlip={firstFlip}
          setFirstFlip={setFirstFlip}
          secondFlip={secondFlip}
          setSecondFlip={setSecondFlip}
          countMatched={countMatched}
          setCountMatched={setCountMatched}
          packSize={packSize}
          isSettingsOpen={isSettingsOpen}
        />
      )}
      {isGameOver && <GameOverModal handleBtnClick={openSettings} />}
      {isSettingsOpen && (
        <SettingsModal
          handleNewGame={handleNewGame}
          packSize={packSize}
          setPackSize={setPackSize}
          packType={packType}
          setPackType={setPackType}
        />
      )}
    </div>
  );
}

export default App;

Promise.all([primaryFontObserver.load()]).then(() => {
  createRoot(document.getElementById("root")).render(<App />);
});

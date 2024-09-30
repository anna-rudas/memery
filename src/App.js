import React, { useState, useEffect } from "react";
import { createRoot } from "react-dom/client";
import { generatePack, shuffleCards } from "./utilities/helpers";
import TitleScreen from "./components/TitleScreen";
import Game from "./components/Game";
import GameOver from "./components/GameOver";
import Settings from "./components/Settings";

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

  const openSettings = () => {
    setIsSettingsOpen(true);
  };

  return (
    <div className="wrapper">
      {!isPlaying && <TitleScreen handleBtnClick={openSettings} />}
      {isPlaying && (
        <Game
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
      {isGameOver && <GameOver handleBtnClick={openSettings} />}
      {isSettingsOpen && (
        <Settings
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

createRoot(document.getElementById("root")).render(<App />);

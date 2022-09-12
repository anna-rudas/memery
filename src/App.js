import React, { useState, useEffect } from "react";
import { createRoot } from "react-dom/client";
import { generatePack, shuffleCards } from "./helpers";
import TitleScreen from "./components/TitleScreen";
import Game from "./components/Game";
import GameOver from "./components/GameOver/GameOver";

function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [firstFlip, setFirstFlip] = useState(null);
  const [secondFlip, setSecondFlip] = useState(null);
  const [countMatched, setCountMatched] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  const resetGame = () => {
    setTurns(0);
    setFirstFlip(null);
    setSecondFlip(null);
    setIsPlaying(true);
    setCountMatched(0);
    setGameOver(false);
  };

  const handleNewGame = () => {
    resetGame();
    const completeDeck = generatePack("small", "cryingCat");
    shuffleCards(completeDeck);
    setCards(completeDeck);
  };

  useEffect(() => {
    if (countMatched !== 0 && countMatched === cards.length / 2) {
      setTimeout(() => {
        setGameOver(true);
      }, 700);
    }
  }, [countMatched, cards]);

  return (
    <div className="wrapper">
      {!isPlaying && <TitleScreen handleNewGame={handleNewGame} />}
      {isPlaying && (
        <Game
          cards={cards}
          setCards={setCards}
          handleNewGame={handleNewGame}
          turns={turns}
          setTurns={setTurns}
          firstFlip={firstFlip}
          setFirstFlip={setFirstFlip}
          secondFlip={secondFlip}
          setSecondFlip={setSecondFlip}
          countMatched={countMatched}
          setCountMatched={setCountMatched}
        />
      )}
      {gameOver && <GameOver handleNewGame={handleNewGame} />}
    </div>
  );
}

export default App;

createRoot(document.getElementById("root")).render(<App />);

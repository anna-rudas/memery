import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import TitleScreen from "./components/TitleScreen";
import Game from "./components/Game";
import { generatePack, shuffleCards } from "./helpers";

function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [firstFlip, setFirstFlip] = useState(null);
  const [secondFlip, setSecondFlip] = useState(null);
  const [countMatched, setCountMatched] = useState(0);

  const resetGame = () => {
    setTurns(0);
    setFirstFlip(null);
    setSecondFlip(null);
    setIsPlaying(true);
    setCountMatched(0);
  };

  const handleNewGame = () => {
    resetGame();
    const completeDeck = generatePack("small", "cryingCat");
    shuffleCards(completeDeck);
    setCards(completeDeck);
  };

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
    </div>
  );
}

export default App;

createRoot(document.getElementById("root")).render(<App />);

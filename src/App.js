import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import TitleScreen from "./components/TitleScreen";
import Game from "./components/Game";
import { generatePack, shuffleCards } from "./helpers";

function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [cards, setCards] = useState([]);

  const handleNewGame = () => {
    const completeDeck = generatePack("small", "cryingCat");
    shuffleCards(completeDeck);
    setCards(completeDeck);
  };

  return (
    <div className="wrapper">
      {!isPlaying && (
        <TitleScreen
          setIsPlaying={setIsPlaying}
          handleNewGame={handleNewGame}
        />
      )}
      {isPlaying && (
        <Game cards={cards} setCards={setCards} handleNewGame={handleNewGame} />
      )}
    </div>
  );
}

export default App;

createRoot(document.getElementById("root")).render(<App />);

import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import TitleScreen from "./components/TitleScreen";
import Game from "./components/Game";

function App() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="wrapper">
      {!isPlaying && <TitleScreen setIsPlaying={setIsPlaying} />}
      {isPlaying && <Game />}
    </div>
  );
}

export default App;

createRoot(document.getElementById("root")).render(<App />);

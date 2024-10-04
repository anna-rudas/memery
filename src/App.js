import React, { useEffect, useContext } from "react";
import { createRoot } from "react-dom/client";
import TitleScreen from "./components/features/TitleScreen";
import GameContent from "./components/features/GameContent";
import GameOverModal from "./components/modals/GameOverModal";
import SettingsModal from "./components/modals/SettingsModal";
import FontFaceObserver from "fontfaceobserver";
import PageLoading from "./components/loaders/PageLoading/PageLoading";
import AppContextProvider, { AppContext } from "./context/AppContext";

const primaryFontObserver = new FontFaceObserver("VT323");

function App() {
  const { isLoading, setIsLoading, isPlaying, isGameOverOpen, isSettingsOpen } =
    useContext(AppContext);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  });

  return (
    <div className="wrapper">
      {isLoading && <PageLoading />}
      {!isLoading && !isPlaying && <TitleScreen />}
      {!isLoading && isPlaying && <GameContent />}
      {isGameOverOpen && <GameOverModal />}
      {isSettingsOpen && <SettingsModal />}
    </div>
  );
}

function AppWithProvider() {
  return (
    <AppContextProvider>
      <App />
    </AppContextProvider>
  );
}

export default AppWithProvider;

Promise.all([primaryFontObserver.load()]).then(() => {
  createRoot(document.getElementById("root")).render(<AppWithProvider />);
});

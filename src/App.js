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
  const { isLoading, setIsLoading, isPlaying, preloadImageContent } =
    useContext(AppContext);

  useEffect(() => {
    preloadImageContent()
      .then(() => {
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Failed to preload image content", error);
        setIsLoading(false);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (isLoading) {
    return <PageLoading />;
  }

  return (
    <>
      {isPlaying ? <GameContent /> : <TitleScreen />}
      <GameOverModal />
      <SettingsModal />
    </>
  );
}

function AppWithProvider() {
  return (
    <AppContextProvider>
      <div className="wrapper">
        <App />
      </div>
    </AppContextProvider>
  );
}

export default AppWithProvider;

primaryFontObserver.load().then(() => {
  createRoot(document.getElementById("root")).render(<AppWithProvider />);
});

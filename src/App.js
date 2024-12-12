import React, { useEffect, useContext } from "react";
import { createRoot } from "react-dom/client";
import TitleScreen from "./components/features/TitleScreen";
import GameContent from "./components/features/GameContent";
import GameOverModal from "./components/modals/GameOverModal";
import SettingsModal from "./components/modals/SettingsModal";
import FontFaceObserver from "fontfaceobserver";
import PageLoading from "./components/loaders/PageLoading/PageLoading";
import AppContextProvider, { AppContext } from "./context/AppContext";
import * as Sentry from "@sentry/react";

Sentry.init({
  dsn: "https://dc00c60432acbf79119ff3a38e94f178@o4508161927348224.ingest.de.sentry.io/4508455626014800",
  integrations: [],
});

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

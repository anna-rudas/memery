import React, { useState, createContext } from "react";

const defaultContextValue = {
  isLoading: true,
  setIsLoading: () => {},
};

export const AppContext = createContext(defaultContextValue);

function AppContextProvider({ children }) {
  const [isLoading, setIsLoading] = useState(true);
  return (
    <AppContext.Provider value={{ isLoading, setIsLoading }}>
      {children}
    </AppContext.Provider>
  );
}

export default AppContextProvider;

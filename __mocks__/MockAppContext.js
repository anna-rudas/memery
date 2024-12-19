import React from "react";
import { AppContext } from "../src/context/AppContext";

const MockAppContextProvider = ({ children, value }) => {
  const defaultValue = {
    cards: [],
  };

  return (
    <AppContext.Provider value={{ ...defaultValue, ...value }}>
      {children}
    </AppContext.Provider>
  );
};

export default MockAppContextProvider;

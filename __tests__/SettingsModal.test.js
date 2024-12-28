import React from "react";
import { render } from "@testing-library/react";
import SettingsModal from "../src/components/modals/SettingsModal";
import AppContextProvider from "../src/context/AppContext";
import "@testing-library/jest-dom";

describe(SettingsModal, () => {
  test("default selects correct size (medium) and pack type (cryingCat)", () => {
    const { getByRole } = render(
      <AppContextProvider
        value={{
          selectedPackSize: "medium",
          selectedPackType: "cryingCat",
          isSettingsOpen: true,
        }}
      >
        <SettingsModal />
      </AppContextProvider>
    );
    const sizeRadioInput = getByRole("radio", {
      name: "select-size-medium",
    });
    const typeRadioInput = getByRole("radio", {
      name: "select-type-cryingCat",
    });
    expect(sizeRadioInput).toBeChecked();
    expect(typeRadioInput).toBeChecked();
  });

  test("default selects correct size (small) and pack type (muscats)", () => {
    const { getByRole } = render(
      <AppContextProvider
        value={{
          selectedPackSize: "small",
          selectedPackType: "muscats",
          isSettingsOpen: true,
        }}
      >
        <SettingsModal />
      </AppContextProvider>
    );

    const sizeRadioInput = getByRole("radio", {
      name: "select-size-small",
    });
    const typeRadioInput = getByRole("radio", {
      name: "select-type-muscats",
    });
    expect(sizeRadioInput).toBeChecked();
    expect(typeRadioInput).toBeChecked();
  });
});

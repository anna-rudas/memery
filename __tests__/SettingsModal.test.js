import React from "react";
import { render } from "@testing-library/react";
import SettingsModal from "../src/components/modals/SettingsModal";
import MockAppContextProvider from "../__mocks__/MockAppContext";
import "@testing-library/jest-dom";

describe(SettingsModal, () => {
  test("default selects correct size and pack type", () => {
    const { getByRole } = render(
      <MockAppContextProvider
        value={{
          selectedPackSize: "medium",
          selectedPackType: "cryingCat",
          isSettingsOpen: true,
        }}
      >
        <SettingsModal />
      </MockAppContextProvider>
    );
    const sizeRadioInputs = getByRole("radio", { name: "select-size-medium" });
    const typeRadioInputs = getByRole("radio", {
      name: "select-type-cryingCat",
    });
    expect(sizeRadioInputs).toBeChecked();
    expect(typeRadioInputs).toBeChecked();
  });
});

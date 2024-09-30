import cryingCatPack from "./packs/CryingCatPack";
import muscatsPack from "./packs/MusCatsPack";
import bugsWithNamesPack from "./packs/BugsWithNamesPack";

export const sizes = {
  small: 6,
  medium: 12,
  large: 20,
};

export const packs = {
  cryingCat: cryingCatPack,
  muscats: muscatsPack,
  bugsWithNames: bugsWithNamesPack,
};

export const sizeOptions = [
  {
    value: "small",
    text: "Small",
  },
  {
    value: "medium",
    text: "Medium",
  },
  {
    value: "large",
    text: "Large",
  },
];

export const typeOptions = [
  {
    value: "muscats",
    text: "Muscats ",
  },
  {
    value: "cryingCat",
    text: "Crying cats",
  },
  {
    value: "bugsWithNames",
    text: "Bugs with names",
  },
];

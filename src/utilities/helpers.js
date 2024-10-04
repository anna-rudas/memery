import { sizes, packs } from "../data/constants";
import { v4 as uuidv4 } from "uuid";

export const className = (...classNames) => {
  return {
    className: classNames.filter(Boolean).join(" "),
  };
};

export const shuffleCards = (array) => {
  let notShuffled = array.length;
  let randomIndex = 0;

  while (notShuffled !== 0) {
    randomIndex = Math.floor(Math.random() * notShuffled);
    notShuffled--;
    [array[notShuffled], array[randomIndex]] = [
      array[randomIndex],
      array[notShuffled],
    ];
  }

  return array;
};

export const generatePack = (size, type) => {
  const pack = [...packs[type]];
  shuffleCards(pack);
  const slicedPack = pack.slice(0, sizes[size]);
  const completeDeck = [...slicedPack, ...slicedPack].map((card) => ({
    ...card,
    id: uuidv4(),
    matched: false,
  }));
  return completeDeck;
};

export const calculatePercentage = (cards, cardMatchCount) => {
  if (cardMatchCount !== 0 && cards.length !== 0) {
    return Math.floor((cardMatchCount / (cards.length / 2)) * 100);
  } else {
    return 0;
  }
};

export const generatePreviewPack = (size, type) => {
  const pack = [...packs[type]];
  return pack.slice(0, size);
};

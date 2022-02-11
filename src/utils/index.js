export const getRandomPins = (alreadyDown = 0, forcedPins = 0) => {
  if (forcedPins) return forcedPins;
  return Math.floor(Math.random() * (10 - alreadyDown));
};

export const calculateFrameScore = (rolls) => {
  return rolls.reduce((roll, prevRoll) => {
    return roll + (typeof prevRoll !== "number" ? 0 : prevRoll);
  });
};

export const updateStrikeScore = (state, frameIndex) => {
  return [
    ...state.slice(0, frameIndex - 2),
    {
      ...state[frameIndex - 2],
      score: 10 + calculateFrameScore(state[frameIndex - 1]?.rolls),
    },
    ...state.slice(frameIndex - 1),
  ];
};

export const updateSpareScore = (state, frameIndex) => {
  return [
    ...state.slice(0, frameIndex - 1),
    {
      ...state[frameIndex - 1],
      score: 10 + state[frameIndex]?.rolls[0],
    },
    ...state.slice(frameIndex),
  ];
};

export const updateFrameScore = (state, frameIndex) => {
  return [
    ...state.slice(0, frameIndex - 1),
    {
      ...state[frameIndex - 1],
      score: calculateFrameScore(state[frameIndex -1]?.rolls),
    },
    ...state.slice(frameIndex),
  ];
};


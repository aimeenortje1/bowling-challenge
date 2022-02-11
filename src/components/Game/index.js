import React, { useState, useEffect } from "react";
import FramesList from "components/FramesList";
import { emptyFrames } from "utils/emptyFrames";
import "./Game.scss";

const Game = () => {
  const [frames, setFrames] = useState(emptyFrames);
  const [frameIndex, setFrameIndex] = useState(0);
  const incrementFrameIndex = () => setFrameIndex(frameIndex + 1);
  const [gameScore, setGameScore] = useState(0);

  //   updateGameScore
  useEffect(() => {
    const prevFrameScore = frames[frameIndex - 1]?.rolls.reduce(
      (roll, prevRoll) => roll + prevRoll
    );
    if (prevFrameScore) {
      setGameScore(gameScore + prevFrameScore);
    }
  }, [frameIndex]);

  const getRandomPins = (alreadyDown = 0, forced = 0) => {
    return Math.floor(Math.random() * (10 - alreadyDown));
  };

  const rollFirst = () => {
    const pins = getRandomPins();

    setFrames((state) => {
      const newState = [
        ...state.slice(0, frameIndex),
        {
          index: frameIndex,
          rolls: [pins, null],
          score: null,
          bonus: null,
        },
        ...state.slice(frameIndex, -1),
      ];
      console.log(newState);

      return newState;
    });
  };

  const rollSecond = () => {
    const pins = getRandomPins(frames[frameIndex]?.rolls[0]);

    setFrames((state) => {
      const newState = [
        ...state.slice(0, frameIndex),
        {
          ...state[frameIndex],
          rolls: [state[frameIndex].rolls[0], pins],
        },
        ...state.slice(frameIndex + 1),
      ];
      console.log(newState);

      return newState;
    });

    incrementFrameIndex();
  };

  return (
    <div className="game">
      <div>Game Score: {gameScore}</div>
      <FramesList frames={frames} />
      <div className="game__buttons--first">
        <button
          disabled={frames[frameIndex]?.rolls[0] !== null}
          onClick={() => rollFirst()}
        >
          Roll 1
        </button>
        <button
          disabled={frames[frameIndex]?.rolls[0] !== null}
          onClick={() => rollFirst(10)}
        >
          Force Strike
        </button>
      </div>
      <div className="game__buttons--first">
        <button
          disabled={frames[frameIndex]?.rolls[0] === null}
          onClick={() => rollSecond()}
        >
          Roll 2
        </button>
        <button
          disabled={frames[frameIndex]?.rolls[0] === null}
          onClick={() => rollSecond(10 - frames[frameIndex]?.rolls[0])}
        >
          Force Spare
        </button>
      </div>
    </div>
  );
};

export default Game;

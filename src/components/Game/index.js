import React, { useState, useEffect } from "react";
import FramesList from "components/FramesList";
import { emptyFrames } from "utils/emptyFrames";
import {
  getRandomPins,
  calculateFrameScore,
  updateStrikeScore,
  updateSpareScore,
  updateFrameScore,
} from "utils/";
import { SPARE, STRIKE } from "utils/types";

import "./Game.scss";

const Game = () => {
  const [frames, setFrames] = useState(emptyFrames);
  const [frameIndex, setFrameIndex] = useState(0);
  const [gameScore, setGameScore] = useState(0);

  const incrementFrameIndex = () => setFrameIndex(frameIndex + 1);

  //   updateGameScore
  useEffect(() => {
    
    if (!frames[frameIndex - 1]?.rolls) return;
    const prevFrameScore = calculateFrameScore(frames[frameIndex - 1]?.rolls);
    if (frames[frameIndex-1].bonus === null &&  prevFrameScore) {
      setGameScore(gameScore + prevFrameScore);
      setFrames((state) => updateFrameScore(state, frameIndex));
    }
  }, [frameIndex]);

  //   handle previous strike
  useEffect(() => {
    if (frames[frameIndex - 2]?.bonus === STRIKE) {
      console.log("STRIKE SCORE UPDATE!");
      setFrames((state) => {
        return updateStrikeScore(state, frameIndex);
      });
    } 
  }, [frameIndex]);

  //   handle previous spare
  useEffect(() => {
    //   for the sake of readability.
    const currentFrame = frames[frameIndex];
    const prevFrame = frames[frameIndex - 1];

    const shouldUpdateSpare = () =>
      prevFrame?.bonus === SPARE && currentFrame?.rolls[0] !== null
        ? true
        : false;

    // rolling a strike immediately after a spare does not work:
    // if previous frame was a strike, the frameIndex would have updated already, meaning we're missing the spare score update

    if (shouldUpdateSpare()) {
      console.log("SPARE SCORE UPDATE!");
      setFrames((state) => {
        return updateSpareScore(state, frameIndex);
      });
    }
  }, [frames[frameIndex]]);

  const rollFirst = (forcedPins) => {
    const pins = getRandomPins(0, forcedPins);
    const isStrike = pins === 10 ? true : false;

    setFrames((state) => {
      const newState = [
        ...state.slice(0, frameIndex),
        {
          index: frameIndex,
          rolls: [pins, isStrike ? "x" : null],
          score: null,
          bonus: isStrike ? STRIKE : null,
        },
        ...state.slice(frameIndex, -1),
      ];
      //   console.log(newState);
      if (isStrike) {
        incrementFrameIndex();
      }
      return newState;
    });
  };

  const rollSecond = (forcedPins) => {
    const previousRoll = frames[frameIndex]?.rolls[0];
    const pins = getRandomPins(previousRoll, forcedPins);
    const isSpare = previousRoll + pins === 10 ? true : false;

    setFrames((state) => {
      const newState = [
        ...state.slice(0, frameIndex),
        {
          ...state[frameIndex],
          rolls: [state[frameIndex].rolls[0], pins],
          bonus: isSpare ? SPARE : null,
        },
        ...state.slice(frameIndex + 1),
      ];
      //   console.log(newState);

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

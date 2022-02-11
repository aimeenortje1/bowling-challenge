import React, { useState } from "react";
import FramesList from "components/FramesList";
import { emptyFrames } from "utils/emptyFrames";

const Game = () => {
  const [frames, setFrames] = useState(emptyFrames);
  const [frameIndex, setFrameIndex] = useState(0);
  const incrementFrameIndex = () => setFrameIndex(frameIndex + 1);

  const onChange = () => {
      console.log(frames);
    setFrames((state) => {
      const newState = [
          ...state.slice(0, frameIndex),
        {
          index: frameIndex,
          rolls: [null, null],
          score: null,
          bonus: null,
        },
        ...state.slice(frameIndex, -1),
      ];
      console.log(newState);

      return newState;
    });

    incrementFrameIndex();
  };

  return (
    <div>
      <FramesList frames={frames} />
      <button onClick={() => onChange()}>Replace the frame</button>
    </div>
  );
};

export default Game;

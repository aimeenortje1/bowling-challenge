import React from "react";
import Frame from "components/Frame";

const FramesList = ({frames}) => {

    const renderedFrames = frames.map((frame) => {
        return (
            <div key={frame?.index}>
                <Frame/>
            </div>
        )
    })
  return (
    <div>
      <ul>{renderedFrames}</ul>
    </div>
  );
};

export default FramesList;

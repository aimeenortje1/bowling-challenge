import React from "react";
import Frame from "components/Frame";
import './FramesList.scss';

const FramesList = ({frames}) => {

    const renderedFrames = frames.map((frame) => {
        return (
            <div key={frame?.index}>
                <Frame frame={frame}/>
            </div>
        )
    })
  return (
    <div>
      <ul className="frames-list">{renderedFrames}</ul>
    </div>
  );
};

export default FramesList;

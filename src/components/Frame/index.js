import React from "react";
import './Frame.scss';

const Frame = ({frame}) => {
  return (

      <div className="frame">
        <div className="frame__index">{frame.index}</div>
        <div className="frame__roll-scores">
          <div className="frame__roll-scores--first">
            1st 
          </div>
          <div className="frame__roll-scores--second">2nd</div>
        </div>
        <div className="frame__score">{frame.score ? frame.score : ""}</div>
      </div>
    
  );
};

export default Frame;

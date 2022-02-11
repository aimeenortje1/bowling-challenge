import React from "react";
import './Frame.scss';

const Frame = ({frame}) => {
  return (
    <div className="frame">
      <div className="frame__index">{typeof frame.index === 'number' ? frame.index + 1 : '-'}</div>
      <div className="frame__roll-scores">
        <div className="frame__roll-scores--first">{frame?.rolls[0]}</div>
        <div className="frame__roll-scores--second">{frame?.rolls[1]}</div>
      </div>
      <div className="frame__score">{frame.score ? frame.score : ""}</div>
    </div>
  );
};

export default Frame;

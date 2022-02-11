import React from "react";
import { render, screen } from "@testing-library/react";
import FramesList from "components/FramesList";
const frames = [
  {
    index: "0",
    rolls: [3, 1],
    bonus: null,
    score: null,
  },
  {
    index: "1",
    rolls: [4, 6],
    bonus: 'spare',
    score: null,
  },
  {
    index: "test 2",
    rolls: [null, null],
    bonus: null,
    score: null,
  }];



  beforeEach(() => {
     render(<FramesList frames={frames}/>);
      
  })

it("should render 3 frames", () => {
    expect(screen.getAllByTestId('frame').length).toEqual(3);
});





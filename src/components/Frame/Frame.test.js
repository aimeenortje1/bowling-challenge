import React from "react";
import { render, screen } from "@testing-library/react";
import Frame from "components/Frame";

const frame = {
  index: "test 1",
  rolls: [3, 1],
  bonus: null,
  score: null,
};

it("should render the frame component", () => {
  render(<Frame frame={frame} />);
});

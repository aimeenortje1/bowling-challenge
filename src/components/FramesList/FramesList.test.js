import React from "react";
import { render, screen } from "@testing-library/react";
import FramesList from "components/FramesList";

it("should render the FramesList component", () => {
  render(<FramesList />);
});

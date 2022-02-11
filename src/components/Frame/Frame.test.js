import React from "react";
import { render, screen } from "@testing-library/react";
import Frame from "components/Frame";

it("should render the frame component", () => {
  render(<Frame />);
});

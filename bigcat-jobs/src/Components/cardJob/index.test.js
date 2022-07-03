import React from "react";
import { render, screen } from "@testing-library/react";
import CardJob from ".";

test("Should render course card job component", () => {
  render(<CardJob position="Software Engineering" />);
  const postition = screen.getByText(/engineering/i);
  expect(postition).toBeInTheDocument();
});

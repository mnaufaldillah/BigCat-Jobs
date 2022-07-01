import React from "react";
import { render, screen } from "@testing-library/react";
import CardJob from ".";

test("Should render course card job component", () => {
  render(<CardJob title="Software Engineering" />);
  const Title = screen.getByText(/engineering/i);
  expect(Title).toBeInTheDocument();
});

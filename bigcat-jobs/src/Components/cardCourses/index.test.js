import React from "react";
import { render, screen } from "@testing-library/react";
import CardCourse from ".";

test("Should render course categories component", () => {
  render(<CardCourse title="React JS" />);
  const Title = screen.getByText(/react js/i);
  expect(Title).toBeInTheDocument();
});

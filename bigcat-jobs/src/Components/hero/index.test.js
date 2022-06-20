import React from "react";
import { render, screen } from "@testing-library/react";
import Hero from ".";

test("Should render hero component", () => {
  render(<Hero title="BigCat Jobs" subtitle="we provide" />);
  const Title = screen.getByText(/bigcat/i);
  expect(Title).toBeInTheDocument();
});

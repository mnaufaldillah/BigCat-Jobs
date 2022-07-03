import React from "react";
import { render, screen } from "@testing-library/react";
import CardSalaryBig from ".";

test("Should render course card salary component", () => {
  render(<CardSalaryBig salary="Rp. 120.000.000" />);
  const Salary = screen.getByText(/000.000/i);
  expect(Salary).toBeInTheDocument();
});

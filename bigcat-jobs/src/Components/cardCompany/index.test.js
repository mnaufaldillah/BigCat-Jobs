import React from "react";
import { render, screen } from "@testing-library/react";
import CardCompany from ".";

test("Should render course card company component", () => {
  render(<CardCompany title="Tokopedia" />);
  const Title = screen.getByText(/tokopedia/i);
  expect(Title).toBeInTheDocument();
});

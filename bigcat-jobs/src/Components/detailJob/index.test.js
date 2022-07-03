import React from "react";
import { render, screen } from "@testing-library/react";
import CourseCategories from ".";

test("Should render course card detail jobs component", () => {
  const data = ["test", "test2"];
  render(<CourseCategories company="Tokopedia" desc={data} respo={data} />);
  const Title = screen.getByText(/tokopedia/i);
  expect(Title).toBeInTheDocument();
});

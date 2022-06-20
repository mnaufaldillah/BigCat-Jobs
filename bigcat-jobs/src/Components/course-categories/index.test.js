import React from "react";
import { render, screen } from "@testing-library/react";
import CourseCategories from ".";

test("Should render course categories component", () => {
  render(<CourseCategories title="Design Class" />);
  const Title = screen.getByText(/design/i);
  expect(Title).toBeInTheDocument();
});

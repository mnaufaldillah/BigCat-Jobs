import React from "react";
import { render, screen } from "@testing-library/react";
import CourseCategories from ".";

test("Should render course mentoring component", () => {
  render(<CourseCategories author="Thomas Adams" />);
  const author = screen.getByText(/thomas Adams/i);
  expect(author).toBeInTheDocument();
});

import React from "react";
import { render, screen } from "@testing-library/react";
import CourseCategories from ".";

test("Should render course card detail jobs component", () => {
  render(
    <CourseCategories
      description="Work with the entire QA team to complete prioritized regression testing prior to each production release
  Imagine, organize, and execute a comprehensive series of manual tests for new features of our web and mobile applications"
    />
  );
  const Title = screen.getByText(/QA team/i);
  expect(Title).toBeInTheDocument();
});

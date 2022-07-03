import React from "react";
import { render, screen } from "@testing-library/react";
import CourseCategories from ".";

test("Should render course mentoring component", () => {
  const data = ["Belajar Pyhton", "Memulai karir menjadi data science"];
  render(<CourseCategories author="Thomas Adams" desc={data} />);
  const author = screen.getByText(/thomas Adams/i);

  expect(author).toBeInTheDocument();
});

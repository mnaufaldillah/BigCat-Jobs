import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import InputBar from ".";
import { Provider } from "react-redux";

test("should rendering Search and enter the button", () => {
  const handleSearch = jest.fn((value) => {});

  const { container } = render(
    <Provider>
      <InputBar onSubmit={handleSearch} />
    </Provider>
  );
  const searchInput = container.getByPlaceholderText("keyword");
  fireEvent.change(searchInput, { target: { value: "Tulus" } });
  expect(searchInput.value).toBe("Tulus");
});

import { fireEvent, logRoles, render, screen } from "@testing-library/react";
import App from "./App";
import { replaceCamelWithSpaces } from "./App";

test("button has correct color initially", () => {
  render(<App />);
  const button = screen.getByRole("button", {
    name: /Changes to MidnightBlue/i,
  });

  // Checks that buttons initial background color is red.
  expect(button).toHaveStyle({ backgroundColor: "MediumVioletRed" });
  expect(button).toHaveTextContent("hey there");
});

test("button turns blue when clicked, and back to red when clicked again", () => {
  render(<App />);
  const button = screen.getByRole("button", {
    name: /Changes to MidnightBlue/i,
  });

  // When button is clicked checks to see if background changes to blue, and text changes to
  // indicate clicking will change to red
  fireEvent.click(button);
  expect(button).toHaveStyle({ backgroundColor: "MidnightBlue" });
  expect(button).toHaveTextContent(/Changes to MediumVioletRed/i);

  // When button is clicked checks to see if background changes to red, and text changes to
  // indicate clicking will change to blue
  fireEvent.click(button);
  expect(button).toHaveStyle({ backgroundColor: "MediumVioletRed" });
  expect(button).toHaveTextContent(/Changes to MidnightBlue/i);
});

test("button enabled initially", () => {
  render(<App />);
  const button = screen.getByRole("button", {
    name: /Changes to MidnightBlue/i,
  });

  // Check that button starts enabled
  expect(button).toBeEnabled();
});

test("checkbox unchecked initially", () => {
  render(<App />);
  const checkbox = screen.getByRole("checkbox", { name: /Disable button/i });

  // Check that checkbox starts unchecked
  expect(checkbox).not.toBeChecked();
});

test("button disabled when checkbox is checked, enabled when unchecked", () => {
  render(<App />);
  const checkbox = screen.getByRole("checkbox", { name: /Disable button/i });
  const button = screen.getByRole("button", {
    name: /Changes to MidnightBlue/i,
  });

  // Click checkbox, and check that it is checked, and check that button is disabled after checkbox is checked
  fireEvent.click(checkbox);
  expect(checkbox).toBeChecked();
  expect(button).toBeDisabled();

  // Check that checkbox is unchecked after being clicked again, and button is enabled when checkbox is unchecked
  fireEvent.click(checkbox);
  expect(checkbox).not.toBeChecked();
  expect(button).toBeEnabled();
});

test("When button is disabled background should be gray, and not have pointer", () => {
  render(<App />);
  const button = screen.getByRole("button", {
    name: /Changes to MidnightBlue/i,
  });
  const checkbox = screen.getByRole("checkbox", { name: /Disable button/i });

  // When button is disabled it turns gray, does not have pointer, and retains its text content.
  fireEvent.click(checkbox);
  expect(checkbox).toBeChecked();
  expect(button).toBeDisabled();
  expect(button).toHaveStyle({
    backgroundColor: "gray",
    cursor: "not-allowed",
  });
  expect(button).toHaveTextContent(/Changes to MidnightBlue/i);

  // When button is enabled again it turns back to red
  fireEvent.click(checkbox);
  expect(checkbox).not.toBeChecked();
  expect(button).toBeEnabled();
  expect(button).toHaveStyle({
    backgroundColor: "MediumVioletRed",
    cursor: "pointer",
  });
  expect(button).toHaveTextContent(/Changes to MidnightBlue/i);
});

test("Clicked disabled button has gray background, and then reverts to blue", () => {
  render(<App />);
  const button = screen.getByRole("button", {
    name: /Changes to MidnightBlue/i,
  });
  const checkbox = screen.getByRole("checkbox", { name: /Disable button/i });

  // Changes button to blue
  fireEvent.click(button);
  expect(button).toHaveStyle({
    backgroundColor: "MidnightBlue",
    cursor: "pointer",
  });
  expect(button).toHaveTextContent(/Changes to MediumVioletRed/i);

  // Disable button
  fireEvent.click(checkbox);
  expect(checkbox).toBeChecked();
  expect(button).toBeDisabled();
  expect(button).toHaveStyle({
    backgroundColor: "gray",
    cursor: "not-allowed",
  });
  expect(button).toHaveTextContent(/Changes to MediumVioletRed/i);

  // When button is enabled again it turns back to blue
  fireEvent.click(checkbox);
  expect(checkbox).not.toBeChecked();
  expect(button).toBeEnabled();
  expect(button).toHaveStyle({
    backgroundColor: "MidnightBlue",
    cursor: "pointer",
  });
  expect(button).toHaveTextContent(/Changes to MediumVioletRed/i);
});

describe("Spaces before camel-case letters", () => {
  test("Works for no capital letters", () => {
    expect(replaceCamelWithSpaces("red")).toBe("Red");
  });

  test("Works for one capital letters", () => {
    expect(replaceCamelWithSpaces("midnightBlue")).toBe("Midnight Blue");
  });

  test("Works for multiple capital letters", () => {
    expect(replaceCamelWithSpaces("mediumVioletBlue")).toBe(
      "Medium Violet Blue"
    );
  });
});

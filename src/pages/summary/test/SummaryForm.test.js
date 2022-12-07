import { logRoles, render, screen } from "@testing-library/react";
import SummaryForm from "../SummaryForm";
import userEvent from "@testing-library/user-event";

describe("Functionality between terms and conditons checkbox and confirm order button", () => {
  it("Checks that checkbox is unchecked, and button to be disabled by default", () => {
    render(<SummaryForm />);

    const checkbox = screen.getByRole("checkbox", {
      name: /I agree to terms and conditions/i,
    });

    expect(checkbox).not.toBeChecked();

    const button = screen.getByRole("button", {
      name: /confirm order/i,
    });

    expect(button).toBeDisabled();
  });

  it("Checks that checking checkbox disables button on first click, and enables on second", async () => {
    const { container } = render(<SummaryForm />);

    logRoles(container);

    const user = userEvent.setup();

    const checkbox = screen.getByRole("checkbox", {
      name: /I agree to terms and conditions/i,
    });
    const button = screen.getByRole("button", {
      name: /confirm order/i,
    });

    await user.click(checkbox);

    expect(checkbox).toBeChecked();
    expect(button).toBeEnabled();

    await user.click(checkbox);

    expect(checkbox).not.toBeChecked();
    expect(button).toBeDisabled();
  });
});

describe("functionality for terms and conditions popover", () => {
  it("Checks that popover responds to hover", async () => {
    render(<SummaryForm />);

    const user = userEvent.setup();

    // Check that popover is not in the DOM
    const popoverNotInDOM = screen.queryByText(
      /ice cream will not actually be delivered/i
    );

    expect(popoverNotInDOM).not.toBeInTheDocument();

    // popover appears on mouseover of checkbox label
    const termsAndConditons = screen.getByText(/terms and conditions/i);

    await user.hover(termsAndConditons);

    const popover = screen.getByText(
      /ice cream will not actually be delivered/i
    );

    expect(popover).toBeInTheDocument();

    // popover disappears on mouse out

    await user.unhover(termsAndConditons);

    expect(popover).not.toBeInTheDocument();
  });
});

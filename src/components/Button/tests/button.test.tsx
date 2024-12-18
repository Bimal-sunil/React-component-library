import { ComponentProps } from "react";
import Button from "../index";
import { render, screen, waitFor } from "@testing-library/react";
import {userEvent} from "@testing-library/user-event";

const props: ComponentProps<typeof Button> = {
  label: "Click Me!",
  variant: "primary",
  size: "small",
  onClick: jest.fn(),
};

describe("Button Component", () => {
  it("Expacts to render button", () => {
    render(<Button {...props} />);
    const button = screen.getByText("Click Me!");
    expect(button).toBeInTheDocument();
  });

  it("Expacts to call onClick while the button is clicked", async () => {
    render(<Button {...props} />);
    const button = screen.getByText("Click Me!");
    userEvent.click(button);
    await waitFor(() => {
      expect(props.onClick).toHaveBeenCalled();
    });
  });
});
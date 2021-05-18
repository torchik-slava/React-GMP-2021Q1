import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Button from "./Button";

describe("Button", () => {
  it("renders Button correctly", () => {
    render(<Button text="My Btn" />);
    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  it("calls onClick callback on Button click", () => {
    const onClick = jest.fn();
    render(<Button text="My Btn" onClick={onClick}/>);
    expect(onClick).toHaveBeenCalledTimes(0);
    userEvent.click(screen.getByRole("button"));
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});

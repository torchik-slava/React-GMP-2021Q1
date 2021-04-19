import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import Poster from "./Poster";

describe("Poster", () => {
  it("renders Poster correctly", () => {
    render(<Poster className="" posterPath="" />);
    expect(screen.getByRole("img")).toBeInTheDocument();
  });

  it("renders default pic when img loading failed", () => {
    render(<Poster className="" posterPath="" />);
    fireEvent.error(screen.getByRole("img"));
    expect(screen.getByRole("img").getAttribute("src")).toEqual(
      "https://i.ibb.co/hmtBmhz/no-poster.jpg"
    );
  });
});

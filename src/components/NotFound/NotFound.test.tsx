import React from "react";
import { render } from "@testing-library/react";
import NotFound from "./NotFound";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";

describe("NotFound", () => {
  it("renders NotFound correctly", () => {
    const history = createMemoryHistory();
    const { asFragment } = render(
      <Router history={history}>
        <NotFound />
      </Router>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});

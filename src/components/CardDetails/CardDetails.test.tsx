import React from "react";
import { render, screen } from "@testing-library/react";
import CardDetails from "./CardDetails";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import { Provider } from "react-redux";
import mockStore from '../../../__mocks__/storeMock';
import mockResponse from "../../assets/response.json";

const initialState = {
  movies: {
    selectedMovie: mockResponse.data[2],
  },
};

describe("CardDetails", () => {
  it("renders CardDetails correctly", () => {
    const store = mockStore(initialState);
    const history = createMemoryHistory();
    const route = "/film/10";
    history.push(route);

    render(
      <Provider store={store}>
        <Router history={history}>
          <CardDetails />
        </Router>
      </Provider>
    );

    expect(screen.getByText("Star Wars: The Last Jedi")).toBeInTheDocument();
    expect(screen.getByRole("img")).toBeInTheDocument();
  });
});

import React from "react";
import { render, screen } from "@testing-library/react";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import { Provider } from "react-redux";
import createSagaMiddleware from "redux-saga";
import configureStore from "redux-mock-store";
import CardDetails from "./CardDetails";
import mockResponse from "../../assets/response.json";
import { MovieDataType } from "../../model";

const mockStore = (initialState: {
  movies: { selectedMovie: MovieDataType };
}) => {
  const middlewares = [createSagaMiddleware()];
  const createMockStore = configureStore(middlewares);
  const store = createMockStore(initialState);
  return store;
};

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

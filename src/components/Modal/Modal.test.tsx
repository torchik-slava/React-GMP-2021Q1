import React from "react";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import userEvent from "@testing-library/user-event";
import Modal from "./Modal";
import mockResponse from "../../assets/response.json";
import configureStore from "../../redux/configureStore";
import { moviesRequestSuccess, openModal } from "../../redux/actions";

const setUp = () => {
  const store = configureStore();
  // next two lines add store spy
  const origDispatch = store.dispatch;
  store.dispatch = jest.fn(origDispatch);

  render(
    <Provider store={store}>
      <Modal />
    </Provider>
  );
  return { store };
};

describe("Modal", () => {
  it("doesn't render Modal by default", () => {
    setUp();
    expect(screen.queryByText(/ Movie/)).toBeNull();
  });
  it("render Add Modal correctly", () => {
    const { store } = setUp();
    store.dispatch(openModal("Add"));
    expect(screen.queryByText("Add Movie")).toBeInTheDocument();
  });
  it("close Modal correctly", () => {
    const { store } = setUp();
    store.dispatch(openModal("Add"));
    userEvent.click(screen.getAllByRole("button")[0]);
    expect(screen.queryByText("Add Movie")).not.toBeInTheDocument();
  });
  it("handle Genre selector correctly", () => {
    const { store } = setUp();
    store.dispatch(openModal("Add"));
    const gerneInput = screen.getByLabelText(/Genre/) as HTMLInputElement;
    userEvent.click(gerneInput);
    expect(gerneInput.value).toBe("");
    const option = screen.getAllByRole("checkbox")[0];
    userEvent.click(option);
    expect(gerneInput.value).not.toBe("");
    userEvent.click(option);
    expect(gerneInput.value).toBe("");
    userEvent.type(gerneInput, "some text");
    expect(gerneInput.value).toBe("");
  });
  it("validate inputs correctly", async () => {
    const { store } = setUp();
    store.dispatch(openModal("Add"));
    userEvent.click(screen.getByText("Submit"));
    const errors = await screen.findAllByText("Required field");
    expect(errors.length).toBeGreaterThan(0);
  });
  it("calls createMovie", async () => {
    const { store } = setUp();
    store.dispatch(openModal("Add"));
    expect(store.dispatch).toBeCalledTimes(1);

    userEvent.type(screen.getByLabelText(/title/i), "Some title");
    userEvent.click(screen.getByLabelText(/release/i));
    fireEvent.change(screen.getByLabelText(/release/i), {
      target: { value: "2021-04-12" },
    });
    userEvent.type(
      screen.getByLabelText(/url/i),
      "https://image.tmdb.org/t/p/w500/sM33SANp9z6rXW8Itn7NnG1GOEs.jpg"
    );
    userEvent.click(screen.getByLabelText(/Genre/));
    userEvent.click(screen.getAllByRole("checkbox")[0]);
    userEvent.type(screen.getByLabelText(/tagline/i), "Some tagline");
    userEvent.type(screen.getByLabelText(/overview/i), "Some overview");

    userEvent.click(screen.getByText(/Submit/));
    // called two times: createMovie & closeModal
    await waitFor(() => expect(store.dispatch).toHaveBeenCalledTimes(3));
  });

  it("renders Edit Modal correctly", async () => {
    const { store } = setUp();
    store.dispatch(moviesRequestSuccess(mockResponse));
    store.dispatch(openModal("Edit", 0));
    expect(screen.queryByText("Edit Movie")).toBeInTheDocument();
  });
  it("calls updateMovie", async () => {
    const { store } = setUp();
    store.dispatch(moviesRequestSuccess(mockResponse));
    store.dispatch(openModal("Edit", 0));
    expect(store.dispatch).toBeCalledTimes(2);
    userEvent.click(screen.getByText(/Submit/));
    // called two times: updateMovie & closeModal
    await waitFor(() => expect(store.dispatch).toHaveBeenCalledTimes(4));
  });

  it("renders Delete Modal correctly", async () => {
    const { store } = setUp();
    store.dispatch(moviesRequestSuccess(mockResponse));
    store.dispatch(openModal("Delete", 0));
    expect(screen.queryByText("Delete Movie")).toBeInTheDocument();
  });
  it("calls deteleMovie", async () => {
    const { store } = setUp();
    store.dispatch(moviesRequestSuccess(mockResponse));
    store.dispatch(openModal("Delete", 0));
    expect(store.dispatch).toBeCalledTimes(2);
    userEvent.click(screen.getByText(/Confirm/));
    // called two times: deleteMovie & closeModal
    await waitFor(() => expect(store.dispatch).toHaveBeenCalledTimes(4));
  });
});

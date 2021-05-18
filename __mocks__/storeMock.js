import createSagaMiddleware from "redux-saga";
import configureStore from "redux-mock-store";

export default (initialState) => {
	const middlewares  = [createSagaMiddleware()];
  const mockStore = configureStore(middlewares);
  const store = mockStore(initialState);
  return store;
};

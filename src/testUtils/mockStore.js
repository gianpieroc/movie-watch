import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import actionWatcherMiddleware from "./actionWatcherMiddleware";
import rootReducer from "../redux/rootReducer";
import sagas from "../redux/sagas";

const sagaMiddleware = createSagaMiddleware();

const configureStore = (initialState = {}) => {
  const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(sagaMiddleware, actionWatcherMiddleware)
  );

  sagaMiddleware.run(sagas);

  return store;
};

export default configureStore;

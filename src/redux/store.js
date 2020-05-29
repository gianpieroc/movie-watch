import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./rootReducer";
import sagas from "./sagas";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagaMiddleware = createSagaMiddleware();

const configureStore = (initialState = {}) => {
  const store = createStore(
    rootReducer,
    initialState,
    composeEnhancer(applyMiddleware(sagaMiddleware))
  );

  sagaMiddleware.run(sagas);

  return store;
};

export default configureStore();

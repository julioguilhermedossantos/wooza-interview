import { createStore, applyMiddleware, compose } from "redux";
import MainReducer from "./mainReducer";
import createSagaMiddleware from "redux-saga";
import { MainSaga } from "./mainSaga";

const enhancers = [];

if (process.env.NODE_ENV === "development") {
  const devTools = window.__REDUX_DEVTOOLS_EXTENSION__;
  if (typeof devTools === "function") {
    enhancers.push(devTools());
  }
}

const sagaMiddleware = createSagaMiddleware();
const composedEnhancers = compose(
  applyMiddleware(sagaMiddleware),
  ...enhancers
);

const store = createStore(MainReducer, composedEnhancers);

sagaMiddleware.run(MainSaga);

export default store;

import { createStore, applyMiddleware, compose } from "redux";
import MainReducer from "./mainReducer";
import createSagaMiddleware from "redux-saga";
import { MainSaga } from "./mainSaga";

const sagaMiddleware = createSagaMiddleware();

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__;

const composedEnhancers = compose(applyMiddleware(sagaMiddleware), devTools);
const store = createStore(MainReducer, composedEnhancers);

sagaMiddleware.run(MainSaga);

export default store;

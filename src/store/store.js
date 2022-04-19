import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
// import logActions, { reportError } from "../middlewares";
import { pokemonReducer } from "../reducers/pokemonReducer";
import createSagaMiddleware from "redux-saga";
import pokemonSaga from "../saga/index.js";
const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const composedEnhancers = composeEnhancers(
  applyMiddleware(sagaMiddleware, thunk)
);
const store = createStore(pokemonReducer, composedEnhancers);
sagaMiddleware.run(pokemonSaga);
export { store };

import React from "react";
import ReactDOM from "react-dom";
import App from "./containers/App";
import { createStore, compose, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import pokemonReducer from "./reducers/pokemonReducer";
import { logActions } from "./middlewares";
import "./index.css";
const composeAlt = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// const composedEnhacers = compose(
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
//   applyMiddleware(logActions)
// );

const composedEnhacers = composeAlt(applyMiddleware(thunk, logActions));
const store = createStore(pokemonReducer, composedEnhacers);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

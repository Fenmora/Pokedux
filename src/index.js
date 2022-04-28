import React from "react";
import ReactDOM from "react-dom";
import App from "./containers/App";
import { createStore, compose, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
// import pokemonReducer from "./reducers/pokemonReducer";
import rootReducers from "./reducers/rootReduces";
import { logActions } from "./middlewares";
import "./index.css";
const composeAlt = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const composedEnhacers = composeAlt(applyMiddleware(thunk, logActions));
const store = createStore(rootReducers, composedEnhacers);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

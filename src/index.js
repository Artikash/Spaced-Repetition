import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import Reducers from "./reducers/CombinedReducers";
import "./style/index.css";
import "./style/App.css";
import App from "./components/App";
import registerServiceWorker from "./registerServiceWorker";


ReactDOM.render(
  React.createElement(
    Provider,
    createStore(Reducers, {}),
    React.createElement(App),
  ),
  document.getElementById("root"),
);
registerServiceWorker();

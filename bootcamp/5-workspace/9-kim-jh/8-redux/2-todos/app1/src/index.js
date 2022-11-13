import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
// CPR
import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./modules";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={createStore(rootReducer)}>
    <App />
  </Provider>
);

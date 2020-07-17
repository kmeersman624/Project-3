import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { UserProvider } from "./utils/UserContext";
import "materialize-css";

ReactDOM.render(
  <UserProvider>
    <App />
  </UserProvider>,
  document.getElementById("root")
);

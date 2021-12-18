import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import LoginScreen from "./Auth/LoginScreen";
import RegisterScreen from "./Auth/RegisterScreen";

ReactDOM.render(
  <React.StrictMode>
    <LoginScreen />
  </React.StrictMode>,
  document.getElementById("root")
);

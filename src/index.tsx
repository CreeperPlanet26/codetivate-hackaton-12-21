import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import LoginScreen from "./Auth/LoginScreen";
import RegisterScreen from "./Auth/RegisterScreen";
import Civilian from "./Forms/Civilian/Civilian";

ReactDOM.render(
  <React.StrictMode>
    <Civilian />
  </React.StrictMode>,
  document.getElementById("root")
);

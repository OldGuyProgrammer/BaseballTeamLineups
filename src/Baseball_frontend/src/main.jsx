import React from "react";
import ReactDOM from "react-dom/client";
import "../components/styles/main.scss";
import App from "./App";
import MenuBar from "../components/menubar/menubar";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MenuBar />
    <App />
  </React.StrictMode>
);

import { React, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "../components/styles/main.scss";
import App from "./App";
import MenuBar from "../components/menubar/menubar";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <MenuBar />
    <App />
  </StrictMode>
);

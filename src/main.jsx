import React from "react";
import ReactDOM from "react-dom/client";
import "@fontsource-variable/hanken-grotesk";
import App from "./App";
import IconPage from "./IconPage";
import "./styles.css";

const isIconPage = window.location.pathname.replace(/\/+$/, "") === "/icon";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {isIconPage ? <IconPage /> : <App />}
  </React.StrictMode>,
);

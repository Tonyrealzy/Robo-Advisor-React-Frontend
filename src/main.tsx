import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import disableDevtool from "disable-devtool";

if (import.meta.env.VITE_APP_NODE_ENV !== "development") {
  disableDevtool();
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);

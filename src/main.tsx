import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import disableDevtool from "disable-devtool";
import AppProviders from "./contexts/AppProviders.tsx";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "./pages/ErrorPage";

if (import.meta.env.VITE_APP_NODE_ENV !== "development") {
  disableDevtool();
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <AppProviders>
        <App />
      </AppProviders>
    </ErrorBoundary>
  </StrictMode>
);

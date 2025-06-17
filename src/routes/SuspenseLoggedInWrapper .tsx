import React, { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "../pages/ErrorPage";
import LoggedInLoadingPage from "../pages/LoggedInLoadingPage";

interface SuspenseProps {
  children: React.ReactElement;
}

const SuspenseLoggedInWrapper: React.FC<SuspenseProps> = ({ children }) => {
  return (
    <Suspense fallback={<LoggedInLoadingPage />}>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        {children}
      </ErrorBoundary>
    </Suspense>
  );
};

export default SuspenseLoggedInWrapper;

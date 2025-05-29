import React, { Suspense } from "react";
import LoadingPage from "../pages/LoadingPage";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "../pages/ErrorPage";

interface SuspenseProps {
  children: React.ReactElement;
}

const SuspenseWrapper: React.FC<SuspenseProps> = ({ children }) => {
  return (
    <Suspense fallback={<LoadingPage />}>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        {children}
      </ErrorBoundary>
    </Suspense>
  );
};

export default SuspenseWrapper;

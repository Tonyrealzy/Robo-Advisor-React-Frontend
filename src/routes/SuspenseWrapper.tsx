import React, { Suspense } from "react";
import LoadingPage from "../pages/LoadingPage";

interface SuspenseProps {
  children: React.ReactElement;
}

const SuspenseWrapper: React.FC<SuspenseProps> = ({ children }) => {
  return <Suspense fallback={<LoadingPage />}>{children}</Suspense>;
};

export default SuspenseWrapper;

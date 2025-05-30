"use client";

import React from "react";
import { useErrorBoundary } from "react-error-boundary";

type ErrorFallbackProps = {
  error: Error;
};

const ErrorFallback: React.FC<ErrorFallbackProps> = ({ error }) => {
  const { resetBoundary } = useErrorBoundary();

  return (
    <div
      role="alert"
      className="h-screen w-full mx-auto p-4 sm:p-6 gap-6 bg-white text-primary border border-firstgold rounded-md shadow-sm flex flex-col justify-center items-center"
    >
      <p className="font-bold text-sm sm:text-[30px] text-firstgold mb-2 text-center">
        Something went wrong:
      </p>
      <pre className="text-sm text-primary whitespace-pre-wrap break-words mb-4 text-center">
        {error.message}
      </pre>
      <button
        onClick={resetBoundary}
        className="bg-firstgold text-primary text-[10px] font-semibold h-10 w-40 rounded hover:opacity-90"
      >
        TRY AGAIN
      </button>
    </div>
  );
};

export default ErrorFallback;

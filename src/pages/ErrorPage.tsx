"use client";
import React from "react";

type ErrorFallbackProps = {
  error: Error;
  resetErrorBoundary: () => void;
};

const ErrorFallback: React.FC<ErrorFallbackProps> = ({
  error,
  resetErrorBoundary,
}) => {
  return (
    <div
      role="alert"
      className="w-full flex flex-col justify-center items-center mx-auto p-6 bg-white text-primary border border-firstgold rounded-md shadow-sm"
    >
      <p className="font-bold mb-2">Something went wrong:</p>
      <pre className="whitespace-pre-wrap mb-4">{error.message}</pre>
      <button
        onClick={resetErrorBoundary}
        className="bg-firstgold text-primary text-[10px] font-semibold py-2 px-4 rounded hover:opacity-90"
      >
        TRY AGAIN
      </button>
    </div>
  );
};

export default ErrorFallback;

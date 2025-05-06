import React from "react";
import Loader from "../components/Loader";

const LoadingPage: React.FC = () => {
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center">
      <Loader />
    </div>
  );
};

export default LoadingPage;

import React from "react";
import Loader from "../components/loader/Loader";

const LoadingPage: React.FC = () => {
  return (
    <div className="min-h-screen min-w-screen bg-white flex flex-col items-center justify-center">
      <Loader />
    </div>
  );
};

export default LoadingPage;

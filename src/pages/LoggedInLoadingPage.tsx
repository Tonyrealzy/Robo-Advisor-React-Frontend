import React from "react";
import Loader from "../components/loader/Loader";

const LoggedInLoadingPage: React.FC = () => {
  return (
    <div className="min-h-screen w-full bg-white flex flex-col items-center justify-center">
      <Loader />
    </div>
  );
};

export default LoggedInLoadingPage;

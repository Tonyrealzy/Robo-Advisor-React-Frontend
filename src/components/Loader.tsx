import React from "react";
import Lottie from "lottie-react";
import { LoadingAnimation } from "../assets/animations";

const Loader: React.FC = () => {
  return (
    <div className="h-[40%] w-[40%] lg:h-[20%] lg:w-[20%] flex items-center justify-center">
      <Lottie animationData={LoadingAnimation} />
    </div>
  );
};

export default Loader;

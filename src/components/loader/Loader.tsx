import React from "react";
import Lottie from "lottie-react";
import { LoadingAnimation } from "../../assets/animations";

const Loader: React.FC = () => {
  return (
    <div className="h-[10%] w-[10%] lg:h-[7.5%] lg:w-[7.5%] flex items-center justify-center">
      <Lottie animationData={LoadingAnimation} loop={true} autoplay={true} />
    </div>
  );
};

export default Loader;

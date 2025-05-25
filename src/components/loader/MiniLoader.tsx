import Lottie from "lottie-react";
import React from "react";
import { LoadingAnimation } from "../../assets/animations";

const MiniLoader: React.FC = () => {
  return (
    <div className="h-[7.5%] w-[7.5%] lg:h-[5%] lg:w-[5%] flex items-center justify-center">
      <Lottie animationData={LoadingAnimation} loop={true} autoplay={true} />
    </div>
  );
};

export default MiniLoader;

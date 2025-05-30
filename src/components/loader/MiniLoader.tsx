import Lottie from "lottie-react";
import React from "react";
import { LoadingAnimation } from "../../assets/animations";

const MiniLoader: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div
      className={`${className} h-5 w-5 lg:h-5.5 lg:w-5.5 flex items-center justify-center`}
    >
      <Lottie animationData={LoadingAnimation} loop={true} autoplay={true} />
    </div>
  );
};

export default MiniLoader;

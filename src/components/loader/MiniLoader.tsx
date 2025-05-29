import Lottie from "lottie-react";
import React from "react";
import { LoadingAnimation } from "../../assets/animations";

const MiniLoader: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div
      className={`${className} h-[7.5%] w-[7.5%] lg:h-[6%] lg:w-[6%] flex items-center justify-center`}
    >
      <Lottie animationData={LoadingAnimation} loop={true} autoplay={true} />
    </div>
  );
};

export default MiniLoader;

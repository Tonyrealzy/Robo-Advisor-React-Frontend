import React from "react";
import { Outlet } from "react-router-dom";

const HomeOutlet: React.FC = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default HomeOutlet;

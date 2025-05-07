import React from "react";
import { Outlet } from "react-router-dom";

const NotLoggedInOutlet: React.FC = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default NotLoggedInOutlet;

import React from "react";
import Navbar from "../layout/Navbar";
import Login from "../components/Login";

const LoginPage: React.FC = () => {
  return (
    <div className="flex flex-col">
      <Navbar />
      <Login />
    </div>
  );
};

export default LoginPage;

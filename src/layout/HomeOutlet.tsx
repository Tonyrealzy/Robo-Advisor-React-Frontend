import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { decryptData } from "../utils/encryption";

const HomeOutlet: React.FC = () => {
  const token = sessionStorage.getItem("token") || "";
  let decryptedToken = "";
  if (token) {
    decryptedToken = decryptData(token);
  }

  return (
    <div>
      {decryptedToken === "" ||
      decryptedToken === null ||
      decryptedToken === undefined ? (
        <Navigate to="/" />
      ) : (
        <div>
          <Outlet />
        </div>
      )}
    </div>
  );
};

export default HomeOutlet;

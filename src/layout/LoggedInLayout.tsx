import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { decryptData } from "../utils/encryption";
import { useAuth } from "../contexts/AuthContext";
import LoggedInNavbar from "./LoggedInNavbar";
import LoggedInSidebar from "./LoggedInSidebar";

const LoggedInLayout: React.FC = () => {
  const { token } = useAuth();
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
        <div className="h-screen flex flex-col">
          <LoggedInNavbar />
          <section className="flex flex-1 overflow-hidden">
            <LoggedInSidebar />
            <aside className="flex-1 overflow-y-auto">
              <Outlet />
            </aside>
          </section>
        </div>
      )}
    </div>
  );
};

export default LoggedInLayout;

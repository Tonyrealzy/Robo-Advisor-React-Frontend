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
        <div className="flex flex-col h-[100vh] w-[100vw] overflow-x-hidden">
          <LoggedInNavbar />
          <section>
            <aside className="h-[100vh] flex overflow-y-hidden">
              <LoggedInSidebar />
              <Outlet />
            </aside>
          </section>
        </div>
      )}
    </div>
  );
};

export default LoggedInLayout;

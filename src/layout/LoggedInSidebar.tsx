import React from "react";
import { useLogout } from "../hooks/useLogout";
import { useAuth } from "../contexts/AuthContext";
import { decryptData } from "../utils/encryption";
import MiniLoader from "../components/loader/MiniLoader";
import { useNavigate } from "react-router-dom";

const LoggedInSidebar: React.FC = () => {
  const isDashboardActive = window.location.pathname === "/dashboard";
  const isHistoryActive = window.location.pathname === "/history";
  const navigate = useNavigate();

  const { loading, handleSubmit } = useLogout();
  const { email } = useAuth();
  let decryptedEmail = "";
  if (email) {
    decryptedEmail = decryptData(email);
  }

  const navigateToDashboard = () => {
    navigate("/dashboard");
  };
  const navigateToHistory = () => {
    navigate("/history");
  };

  return (
    <div className="w-[15%] h-full overflow-y-hidden bg-primary text-firstgold text-[12px] hidden md:flex md:flex-col justify-evenly items-center">
      <aside className="flex flex-col gap-1">
        <button
          className={`${
            isDashboardActive && "bg-firstgold text-primary"
          } h-10 w-32 text-center rounded-lg cursor-pointer hover:bg-firstgold hover:text-primary`}
          onClick={navigateToDashboard}
        >
          Dashboard
        </button>
        <button
          className={`${
            isHistoryActive && "bg-firstgold text-primary"
          } h-10 w-32 text-center rounded-lg cursor-pointer hover:bg-firstgold hover:text-primary`}
          onClick={navigateToHistory}
        >
          History
        </button>
      </aside>
      <button
        className={`${
          loading && "bg-firstgold font-bold text-primary"
        } h-10 w-32 flex justify-center items-center rounded-lg cursor-pointer hover:bg-firstgold hover:text-primary`}
        onClick={() => handleSubmit({ email: decryptedEmail })}
      >
        {loading ? <MiniLoader /> : "Logout"}
      </button>
    </div>
  );
};

export default LoggedInSidebar;

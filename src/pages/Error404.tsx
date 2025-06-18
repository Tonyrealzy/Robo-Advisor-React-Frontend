import React from "react";
import { Error404Image } from "../assets/images";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { decryptData } from "../utils/encryption";

const Error404: React.FC = () => {
  const navigate = useNavigate();
  const { token } = useAuth();
  let decryptedToken = "";
  if (token) {
    decryptedToken = decryptData(token);
  }

  const handleNavigate = () => {
    if (
      decryptedToken === "" ||
      decryptedToken === null ||
      decryptedToken === undefined
    ) {
      navigate("/");
    } else {
      navigate("/dashboard");
    }
  };

  return (
    <section
      className="h-[85vh] bg-contain bg-no-repeat bg-center lg:bg-top flex flex-col py-24 px-8 text-center items-center justify-end"
      style={{ backgroundImage: `url(${Error404Image})` }}
    >
      <button
        className="bg-primary cursor-pointer p-4 mt-4 h-10 w-48 text-[10px] font-bold rounded-sm text-white"
        onClick={handleNavigate}
      >
        GO BACK HOME
      </button>
    </section>
  );
};

export default Error404;

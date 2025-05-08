import React from "react";
import { useNavigate } from "react-router-dom";

const ResetPassword: React.FC = () => {
  const navigate = useNavigate();

  return (
    <form className="flex flex-col gap-2">
      <input
        type="text"
        name="email"
        required
        placeholder="Email"
        className="border border-primary outline-none h-10 w-full rounded-md text-xs"
        style={{ padding: "12px" }}
      />

      <button
        type="submit"
        className="bg-primary text-firstgold font-bold h-10 w-full rounded-md text-[10px] cursor-pointer"
      >
        RESET PASSWORD
      </button>

      <section className="flex justify-between cursor-pointer underline text-[11px]">
        <p
        // onClick={() => navigate("/login")}
        >
          Resend reset link?
        </p>
        <p onClick={() => navigate("/login")}>Back to login.</p>
      </section>
    </form>
  );
};

export default ResetPassword;

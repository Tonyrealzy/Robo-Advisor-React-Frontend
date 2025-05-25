import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const ResetPassword: React.FC = () => {
  const navigate = useNavigate();
  const [isDisabled, setIsDisabled] = useState(false);

  const handleResetLink = () => {
    toast.success("Good");
    setIsDisabled(true);
    setTimeout(() => setIsDisabled(false), 30000);
  };

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

      <section className="flex justify-between cursor-pointer text-[11px]">
        <p
          onClick={isDisabled ? undefined : handleResetLink}
          className={`${
            isDisabled
              ? "text-gray-400 cursor-not-allowed no-underline decoration-0"
              : "underline"
          }`}
        >
          Resend reset link?
        </p>
        <p onClick={() => navigate("/login")} className="underline">
          Back to login.
        </p>
      </section>
    </form>
  );
};

export default ResetPassword;

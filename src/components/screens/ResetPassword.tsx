import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForgotPassword } from "../../hooks/useForgotPassword";
import MiniLoader from "../loader/MiniLoader";
import { useResendLink } from "../../hooks/useResendLink";
import { decryptData } from "../../utils/encryption";

const ResetPassword: React.FC = () => {
  const navigate = useNavigate();
  const [isDisabled, setIsDisabled] = useState(true);
  const { errors, isSubmitting, register, handleSubmit } = useForgotPassword();
  const { loading, handleSubmit: handleResendLinkSubmit } = useResendLink();
  const email = sessionStorage.getItem("resetEmail") || "";
  let decryptedEmail = "";
  if (email) {
    decryptedEmail = decryptData(email);
  }

  React.useEffect(() => {
    if (email !== "") {
      setIsDisabled(false);
    }
    if (loading) {
      setIsDisabled(true);
      setTimeout(() => setIsDisabled(false), 30000);
    }
    return;
  }, [email]);

  const handleResetLink = async () => {
    await handleResendLinkSubmit({ email: decryptedEmail });
  };

  return (
    <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
      <input
        type="email"
        required
        placeholder="Email"
        className="border border-primary outline-none h-10 w-full rounded-md text-xs"
        style={{ padding: "12px" }}
        {...register("email", {
          required: "Email is required",
          pattern: {
            value: /^\S+@\S+$/i,
            message: "Invalid email address",
          },
        })}
      />

      <button
        type="submit"
        className="bg-primary flex justify-center items-center text-firstgold font-bold h-10 w-full rounded-md text-[10px] cursor-pointer"
      >
        {isSubmitting ? <MiniLoader /> : "RESET PASSWORD"}
      </button>

      <section className="flex justify-between cursor-pointer text-[11px]">
        <p
          onClick={isDisabled || loading ? undefined : handleResetLink}
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

      <section
        className="flex flex-col text-red-700 text-[12px]"
        style={{ padding: "30px 0" }}
      >
        {errors.email && <p>{errors?.email?.message}</p>}
      </section>
    </form>
  );
};

export default ResetPassword;

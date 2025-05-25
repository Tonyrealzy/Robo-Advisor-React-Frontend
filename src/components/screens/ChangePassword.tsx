import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import PasswordInput from "../inputs/PasswordInput";
import { useChangePassword } from "../../hooks/useChangePassword";
import MiniLoader from "../loader/MiniLoader";

const ChangePassword: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const token = location.state;
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const { errors, isSubmitting, watch, register, handleSubmit } =
    useChangePassword(token);
  const password = watch("new_password");

  return (
    <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
      <PasswordInput
        visible={passwordVisible}
        setVisible={setPasswordVisible}
        placeholder="Password"
        required
        {...register("new_password", {
          required: "Password is required",
          pattern: {
            value:
              /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
            message:
              "Password must be at least 8 characters and include letters, numbers, and special characters",
          },
        })}
      />

      <PasswordInput
        visible={confirmPasswordVisible}
        setVisible={setConfirmPasswordVisible}
        placeholder="Confirm Password"
        required
        {...register("confirmPassword", {
          required: "Please confirm your password",
          validate: (value) => value === password || "Passwords do not match",
        })}
      />

      <button
        type="submit"
        className="bg-primary flex justify-center items-center text-firstgold font-bold h-10 w-full rounded-md text-[10px] cursor-pointer"
      >
        {isSubmitting ? <MiniLoader /> : "SUBMIT"}
      </button>

      <section
        className="flex cursor-pointer underline justify-end text-[11px]"
        onClick={() => navigate("/login")}
      >
        <p>
          Back to <a className="cursor-pointer">login</a>
        </p>
      </section>

      <section
        className="flex flex-col text-red-700 text-[12px]"
        style={{ padding: "30px 0" }}
      >
        {errors.new_password && <p>{errors?.new_password?.message}</p>}
        {errors.confirmPassword && <p>{errors?.confirmPassword?.message}</p>}
      </section>
    </form>
  );
};

export default ChangePassword;

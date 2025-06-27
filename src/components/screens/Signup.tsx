import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import PasswordInput from "../inputs/PasswordInput";
import { useSignup } from "../../hooks/useSignup";
import MiniLoader from "../loader/MiniLoader";

const Signup: React.FC = () => {
  const navigate = useNavigate();
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const { errors, isSubmitting, watch, register, handleSubmit } = useSignup();
  const password = watch("password");

  return (
    <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
      <input
        type="email"
        placeholder="Enter Email"
        className="border border-primary outline-none h-10 w-full rounded-md text-xs"
        style={{ padding: "12px" }}
        required
        {...register("email", {
          required: "Email is required",
          pattern: {
            value: /^\S+@\S+$/i,
            message: "Invalid email address",
          },
        })}
      />
      <input
        type="text"
        placeholder="Enter First Name"
        className="border border-primary outline-none h-10 w-full rounded-md text-xs"
        style={{ padding: "12px" }}
        required
        {...register("first_name", {
          required: "First name is required",
        })}
      />

      <input
        type="text"
        placeholder="Enter Last Name"
        className="border border-primary outline-none h-10 w-full rounded-md text-xs"
        style={{ padding: "12px" }}
        required
        {...register("last_name", {
          required: "Last name is required",
        })}
      />

      <input
        type="text"
        placeholder="Enter Username"
        className="border border-primary outline-none h-10 w-full rounded-md text-xs"
        style={{ padding: "12px" }}
        required
        {...register("username", {
          required: "Username is required",
        })}
      />

      <PasswordInput
        visible={passwordVisible}
        setVisible={setPasswordVisible}
        placeholder="Password"
        required
        {...register("password", {
          required: "Password is required",
          pattern: {
            value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/,
            message:
              "Password must be at least 8 characters long and include uppercase, lowercase, and a number",
          },
          minLength: {
            value: 8,
            message: "Password must be at least 8 characters long",
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
        {isSubmitting ? <MiniLoader /> : "CREATE ACCOUNT"}
      </button>

      <section className="flex text-[11px]">
        <p>
          Got an Account? Click{" "}
          <a
            className="cursor-pointer text-firstgold underline"
            onClick={() => navigate("/login")}
          >
            here
          </a>{" "}
          to login.
        </p>
      </section>

      <section className="flex flex-col text-red-700 text-[12px]">
        {errors.email && <p>{errors?.email?.message}</p>}
        {errors.password && <p>{errors?.password?.message}</p>}
        {errors.confirmPassword && <p>{errors?.confirmPassword?.message}</p>}
      </section>
    </form>
  );
};

export default Signup;

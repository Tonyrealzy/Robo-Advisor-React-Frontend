import React, { useState } from "react";
import PasswordInput from "../inputs/PasswordInput";
import { useLogin } from "../../hooks/useLogin";
import { useNavigate } from "react-router-dom";
import MiniLoader from "../loader/MiniLoader";

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);
  const { errors, isSubmitting, register, handleSubmit } = useLogin();

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
      <PasswordInput
        visible={visible}
        setVisible={setVisible}
        placeholder="Password"
        {...register("password", {
          required: "Password is required"
        })}
      />
      <button
        type="submit"
        className="bg-primary flex justify-center items-center text-firstgold font-bold h-10 w-full rounded-md text-[10px] cursor-pointer"
      >
        {isSubmitting ? <MiniLoader /> : "LOGIN"}
      </button>

      <section className="flex flex-row w-full justify-between text-[10px]">
        <p className="flex-1">
          Is this your first time here?
          <br></br> Click{" "}
          <a
            className="cursor-pointer text-firstgold underline"
            onClick={() => navigate("/signup")}
          >
            here
          </a>{" "}
          to sign-up.
        </p>
        <p
          className="flex-1 flex justify-end underline cursor-pointer"
          onClick={() => navigate("/reset")}
        >
          Forgot password?
        </p>
      </section>

      <section
        className="flex flex-col text-red-700 text-[12px]"
        style={{ padding: "30px 0" }}
      >
        {errors.email && <p>{errors?.email?.message}</p>}
        {errors.password && <p>{errors?.password?.message}</p>}
      </section>
    </form>
  );
};

export default Login;

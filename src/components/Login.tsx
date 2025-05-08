import React from "react";
import { useNavigate } from "react-router-dom";

const Login: React.FC = () => {
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
      <div className="password-container">
        <input
          type="password"
          name="password"
          required
          placeholder="Password"
          className="border border-primary outline-none h-10 w-full rounded-md text-xs"
          style={{ padding: "12px" }}
        />
        <span className="eyeicon">
          {/* <i
            [ngclassName]="
              switchIcon ? 'fa-regular fa-eye-slash' : 'fa-regular fa-eye'
            "
          ></i> */}
        </span>
      </div>
      <button
        type="submit"
        className="bg-primary text-firstgold font-bold h-10 w-full rounded-md text-[10px] cursor-pointer"
      >
        LOGIN
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
    </form>
  );
};

export default Login;

import React from "react";
import { useNavigate } from "react-router-dom";

const Signup: React.FC = () => {
  const navigate = useNavigate();

  return (
    <form className="flex flex-col gap-2">
      <input
        type="text"
        name="email"
        placeholder="Enter Email"
        className="border border-primary outline-none h-10 w-full rounded-md text-xs"
        style={{ padding: "12px" }}
        required
      />
      <input
        type="text"
        id="firstname"
        name="firstName"
        placeholder="Enter First Name"
        className="border border-primary outline-none h-10 w-full rounded-md text-xs"
        style={{ padding: "12px" }}
        required
      />

      <input
        type="text"
        id="lastname"
        name="lastName"
        placeholder="Enter Last Name"
        className="border border-primary outline-none h-10 w-full rounded-md text-xs"
        style={{ padding: "12px" }}
        required
      />

      <input
        type="text"
        placeholder="Enter Username"
        name="userName"
        className="border border-primary outline-none h-10 w-full rounded-md text-xs"
        style={{ padding: "12px" }}
        required
      />

      <div className="">
        <input
          type="password"
          placeholder="Enter Password"
          className="border border-primary outline-none h-10 w-full rounded-md text-xs"
          style={{ padding: "12px" }}
          required
        />
      </div>

      <div className="">
        <input
          type="password"
          placeholder="Confirm Password"
          className="border border-primary outline-none h-10 w-full rounded-md text-xs"
          style={{ padding: "12px" }}
          required
        />
      </div>

      <button
        type="submit"
        className="bg-primary text-firstgold font-bold h-10 w-full rounded-md text-[10px] cursor-pointer"
      >
        CREATE ACCOUNT
      </button>

      <section className="flex text-[11px]">
        <p>
          Got an Account? Click{" "}
          <a
            className="cursor-pointer text-firstgold"
            onClick={() => navigate("/login")}
          >
            here
          </a>{" "}
          to login.
        </p>
      </section>
    </form>
  );
};

export default Signup;

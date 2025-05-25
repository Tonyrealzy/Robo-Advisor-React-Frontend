import React from "react";
import { useNavigate } from "react-router-dom";

const ChangePassword: React.FC = () => {
  const navigate = useNavigate();

  return (
    <form className="flex flex-col gap-2">
      <div className="">
        <input
          type="password"
          placeholder="Password"
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
        SUBMIT
      </button>

      <section
        className="flex cursor-pointer underline justify-end text-[11px]"
        onClick={() => navigate("/login")}
      >
        <p>
          Back to <a className="cursor-pointer">login</a>
        </p>
      </section>
    </form>
  );
};

export default ChangePassword;

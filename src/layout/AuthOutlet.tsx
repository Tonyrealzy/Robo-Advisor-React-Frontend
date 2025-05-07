import React from "react";
import { RobotImage } from "../assets/images";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const AuthOutlet: React.FC = () => {
  return (
    <div className="flex flex-col h-screen justify-center overflow-y-auto">
      <Navbar />
      <section className="flex flex-col md:flex-row">
        <section className="hidden md:flex md:flex-1">
          <img
            src={RobotImage}
            className="h-screen w-full object-cover"
            loading="lazy"
          />
        </section>

        <div
          className="flex flex-col justify-center items-center gap-4 md:flex-1"
          style={{ paddingTop: "80px" }}
        >
          <aside className="w-[75%]">
            <h1 className="text-4xl font-semibold">
              Achieve financial goals with confidence!
            </h1>
            <h4>
              Your trusted partner in personalized investment recommendations
              and portfolio management services.
            </h4>
          </aside>

          <aside className="w-[75%]">
            <Outlet />
          </aside>
        </div>
      </section>
    </div>
  );
};

export default AuthOutlet;

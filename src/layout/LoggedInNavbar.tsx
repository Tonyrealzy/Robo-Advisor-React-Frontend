import React, { useState } from "react";
import { LogoImage } from "../assets/images";
import HamburgerIcon from "../assets/icons/HamburgerIcon";
import HamburgerCloseIcon from "../assets/icons/HamburgerCloseIcon";
import { useLogout } from "../hooks/useLogout";
import MiniLoader from "../components/loader/MiniLoader";
import { decryptData } from "../utils/encryption";
import { useGetProfile } from "../contexts/ProfileContext";
import { useAuth } from "../contexts/AuthContext";
import HeaderClock from "../components/header/HeaderClock";

const LoggedInNavbar: React.FC = () => {
  const [clicked, setClicked] = useState(false);
  const { loading, handleSubmit } = useLogout();
  const { email } = useAuth();
  let decryptedEmail = "";
  if (email) {
    decryptedEmail = decryptData(email);
  }
  const { isPending, profile } = useGetProfile();

  return (
    <div>
      <section className="fixed w-full top-0 z-10 border-b-2 border-b-firstgold">
        <div
          className="flex items-center bg-primary justify-between h-12 md:h-20"
          style={{ padding: "8px auto" }}
        >
          <div style={{ padding: "8px" }}>
            <img src={LogoImage} alt="Logo Image" className="max-w-32" />
          </div>

          {/* Menu Items     */}
          <div
            className="hidden md:flex md:flex-col md:justify-center md:items-center gap-1"
            style={{ padding: "8px" }}
          >
            {!isPending &&
              profile?.username !== null &&
              profile?.username !== undefined && (
                <p className="text-base text-firstgold">{`Hi, ${profile?.username}`}</p>
              )}
            <HeaderClock />
          </div>

          {/* Hamburger Icon     */}
          <span
            className="block md:hidden focus:outline-none"
            onClick={() => setClicked(true)}
          >
            <HamburgerIcon />
          </span>
        </div>

        {/* Mobile Menu */}
        {clicked && (
          <div
            className="flex flex-col md:hidden fixed top-0 right-0 z-50 transition ease-in-out bg-primary h-full w-full"
            style={{ padding: "12px 8px" }}
          >
            <span
              className="flex flex-col justify-end items-end "
              onClick={() => setClicked(false)}
            >
              <HamburgerCloseIcon />
            </span>
            <ul className="list-none text-white h-full flex flex-col items-center justify-center gap-2">
              <li className="block text-left py-4  border-gray-300">
                <button className="h-10 w-full flex justify-center items-center">
                  Dashboard
                </button>
                <button className="h-10 w-full flex justify-center items-center">
                  History
                </button>
                <button
                  className="h-10 w-full flex justify-center items-center"
                  onClick={() => handleSubmit({ email: decryptedEmail })}
                >
                  {loading ? <MiniLoader /> : "Logout"}
                </button>
              </li>
            </ul>
          </div>
        )}
      </section>
    </div>
  );
};

export default LoggedInNavbar;

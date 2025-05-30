import React, { useState } from "react";
import { LogoImage } from "../assets/images";
import HamburgerIcon from "../assets/icons/HamburgerIcon";
import HamburgerCloseIcon from "../assets/icons/HamburgerCloseIcon";
import { useNavigate } from "react-router-dom";

const Navbar: React.FC = () => {
  const [clicked, setClicked] = useState(false);
  const navigate = useNavigate();

  const navigateToHome = () => {
    navigate("/");
    setClicked(false);
  };
  const navigateToAboutUs = () => {
    navigate("/about");
    setClicked(false);
  };
  const navigateToContactUs = () => {
    navigate("/contact");
    setClicked(false);
  };
  const navigateToFAQ = () => {
    navigate("/faq");
    setClicked(false);
  };

  return (
    <div>
      {/* Navbar */}
      <section className="fixed w-full top-0 z-10 border-b-2 border-b-firstgold">
        <div
          className="flex items-center bg-primary justify-between h-14 md:h-15"
          style={{ padding: "8px" }}
        >
          <div style={{ padding: "8px" }}>
            <img src={LogoImage} alt="Logo Image" className="max-w-32" />
          </div>

          {/* Menu Items     */}
          <div
            className="hidden md:flex md:justify-center md:items-end gap-6"
            style={{ padding: "8px" }}
          >
            <a
              className="font-semibold cursor-pointer hover:text-firstgold text-white align-top hover:border-b-primary text-base"
              onClick={() => navigate("/")}
            >
              Home
            </a>
            <a
              className="font-semibold cursor-pointer hover:text-firstgold text-white align-top  hover:border-b-primary text-base"
              onClick={() => navigate("/faq")}
            >
              FAQ's
            </a>
            <a
              className="font-semibold cursor-pointer hover:text-firstgold text-white  hover:border-b-primary text-base"
              onClick={() => navigate("/about")}
            >
              About Us
            </a>
            <a
              className="font-semibold cursor-pointer hover:text-firstgold text-white  hover:border-b-primary text-base"
              onClick={() => navigate("/contact")}
            >
              Contact Us
            </a>
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
                <a onClick={navigateToHome}>Home</a>
              </li>
              <li className="block text-left py-4 border-gray-300">
                <a onClick={navigateToFAQ}>FAQ's</a>
              </li>

              <li className="block text-left py-4 border-gray-300">
                <a onClick={navigateToAboutUs}>About Us</a>
              </li>
              <li className="block text-left py-4 border-gray-300">
                <a onClick={navigateToContactUs}>Contact Us</a>
              </li>
            </ul>
          </div>
        )}
      </section>
    </div>
  );
};

export default Navbar;

import React from "react";

const Navbar = () => {
  return (
    <div>
      {/* Navbar */}
      <nav className="fixed top-0 container mx-auto z-10">
        {/* Flex container */}
        <div className="flex items-center bg-primary justify-between md:h-12 w-screen">
          {/* Logo */}
          <div className="p-2">
            <img
              src="../../../assets/images/logo.png"
              alt="logo"
              className="max-w-32"
            />
          </div>
          {/* Menu Items     */}
          <div className="hidden space-x-8 pr-16 md:flex">
            <a className="font-semibold hover:text-firstgold text-white align-top hover:border-b-2 hover:border-b-primary text-base">
              Home
            </a>
            <a className="font-semibold hover:text-firstgold text-white align-top hover:border-b-2 hover:border-b-primary text-base">
              FAQ's
            </a>

            <a className="font-semibold hover:text-firstgold text-white hover:border-b-2 hover:border-b-primary text-base">
              About Us
            </a>

            <a className="font-semibold hover:text-firstgold text-white hover:border-b-2 hover:border-b-primary text-base">
              Contact Us
            </a>
          </div>

          {/* Hamburger Icon     */}
          <button className="block hamburger pr-16 mr-8 md:pr-0 md:hidden focus:outline-none">
            <span className="hamburger-top"></span>
            <span className="hamburger-middle"></span>
            <span className="hamburger-bottom"></span>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className="desktop_menu md:mt-24 md:hidden fixed top-20 right-0 z-50 transition ease-in-out bg-[#d9e9fa] h-screen">
          <ul className="list-none text-white">
            <li className="block text-left py-4 pl-6 border-b border-t bg-primary border-gray-300">
              <a>Home</a>
            </li>
            <li className="block text-left py-4 pl-6 border-b bg-primary border-gray-300">
              <a>FAQ's</a>
            </li>

            <li className="block text-left py-4 pl-6 border-b bg-primary border-gray-300">
              <a>About Us</a>
            </li>
            <li className="block text-left py-4 pl-6 border-b bg-primary border-gray-300">
              <a>Contact Us</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

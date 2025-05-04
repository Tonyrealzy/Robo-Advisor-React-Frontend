import React from "react";

const DashboardNav = () => {
  return (
    <div>
      <div className="sidenav sticky bg-primary z-20 top-0 w-16 h-screen shadow-blue-500 transition-all duration-100 ease-in-out">
        <div className="p-2 mx-auto flex justify-between items-center">
          <a>
            <img src="../../../assets/images/logo.png" alt="logo" />
          </a>

          <button className="btn-close cursor-pointer ml-auto align-middle justify-center w-8 h-8 p-2 rounded-lg bg-transparent">
            <i className="fa-solid fa-x" id="fa-times"></i>
          </button>
        </div>

        <div className="logo-container flex align-items-center p-3 w-full">
          <button className="logo p-2 pb-2 h-8 w-8 bg-white rounded-3xl justify-center align-items-center">
            <i className="fa-regular fa-user"></i>
          </button>
          <div className="logo-text ml-4 font-medium text-white cursor-pointer">
            <p className="text-sm capitalize font-bold">
              {/* {{ username }} */}
            </p>
            <p className="text-xs">{/* {{ email }} */}</p>
          </div>
        </div>

        <ul className="sidenav-nav flex flex-col list-none p-3 m-0 align-items-center h-4/6 cursor-pointer">
          <li className="sidenav-nav-item w-full mb-2">
            <a
              className="sidenav-nav-link flex align-items-center h-12 text-white rounded-md list-none transition-all duration-300 ease-in-out hover:bg-white hover:text-primary"
              id="sidenav-nav-link"
            >
              <i
                className="sidenav-link-icon text-base w-8 m-3 text-center"
                id="sidenav-nav-icon"
              ></i>
              <span
                className="sidenav-link-text font-medium ml-3 pt-2.5 text-[.9rem]"
                id="sidenav-nav-text"
              >
                {/* {{ data.label }} */}
              </span>
            </a>
          </li>
        </ul>

        {/* <button className="bg-primary text-wrap text-slate-50 rounded-sm p-2">
    + New Response
  </button> */}

        <div className="fixed bottom-1">
          <div className="logo-container flex align-items-center p-3 w-full">
            <button className="logo p-2 h-6 w-6 bg-white rounded-md justify-center align-items-center">
              <i className="fa-solid fa-arrow-left"></i>
            </button>
            <div className="logo-text ml-4 font-bold text-white cursor-pointer">
              <button className="text-sm">
                <a>Back Home</a>
              </button>
            </div>
          </div>

          <div className="logo-container flex align-items-center p-3 w-full">
            <button className="logo p-2 h-6 w-6 bg-white rounded-md justify-center align-items-center">
              <i className="fa-solid fa-arrow-right-from-bracket"></i>
            </button>
            <div className="logo-text ml-4 font-bold text-white cursor-pointer">
              <button className="text-sm">Log Out</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardNav;

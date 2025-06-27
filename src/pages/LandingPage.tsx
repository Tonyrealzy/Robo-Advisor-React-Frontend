import React from "react";
import Landing from "../components/screens/Landing";
import Footer from "../layout/Footer";
import Navbar from "../layout/Navbar";

const LandingPage: React.FC = () => {
  return (
    <div className="flex flex-col w-full">
      <Navbar />
      <Landing />
      <Footer />
    </div>
  );
};

export default LandingPage;

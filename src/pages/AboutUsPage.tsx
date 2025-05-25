import React from "react";
import AboutUs from "../components/screens/AboutUs";
import Navbar from "../layout/Navbar";

const AboutUsPage: React.FC = () => {
  return (
    <div className="flex flex-col">
      <Navbar />
      <AboutUs />
    </div>
  );
};

export default AboutUsPage;

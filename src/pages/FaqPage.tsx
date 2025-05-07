import React from "react";
import Faq from "../components/Faq";
import Navbar from "../layout/Navbar";

const FaqPage: React.FC = () => {
  return (
    <div className="flex flex-col">
      <Navbar />
      <Faq />
    </div>
  );
};

export default FaqPage;

import React from "react";
import ContactUs from "../components/ContactUs";
import Navbar from "../layout/Navbar";

const ContactUsPage: React.FC = () => {
  return (
    <div className="flex flex-col">
      <Navbar />
      <ContactUs />
    </div>
  );
};

export default ContactUsPage;

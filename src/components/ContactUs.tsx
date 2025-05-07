import React from "react";
import { CustomerCareImage } from "../assets/images";

const ContactUs: React.FC = () => {
  return (
    <div
      className="container flex flex-col md:flex-row h-screen bg-primary w-full"
      style={{ paddingTop: "64px" }}
    >
      {/* Flex Container   */}
      <div
        className="rounded-lg bg-primary text-white flex flex-col flex-1 hover:bg-[#e0c212] gap-10 hover:text-primary"
        style={{ padding: "8px" }}
      >
        <aside>
          <h1 className="text-4xl font-semibold text-center md:text-4xl md:text-left">
            Contact us
          </h1>
          <p className="text-center md:text-left">
            Reach our help centre anytime, anywhere or everyday to get
            assistance using our products and services.
          </p>
        </aside>

        <div>
          <h1 className="text-xl font-medium text-center md:text-3xl md:text-left ">
            Office Address
          </h1>
          <p className="text-center md:text-left">
            Samuel Asabia House 35 Marina P.O. Box 5216, Lagos, Nigeria.
          </p>
        </div>

        <div>
          <h1 className="text-xl font-medium text-center md:text-3xl md:text-left">
            Helpdesk
          </h1>
          <p className="text-center md:text-left">
            Tel: +234 1 905 2326
            <br></br>
            Tel: +234 708 062 5000
            <br></br>
            Tel: +234 1448 5500
            <br></br>
            Email : firstcontactcomplaints&#64;firstbanknigeria.com
            <br></br>
            Twitter(Help Desk): Fbn_help
          </p>
        </div>
      </div>

      {/* right side */}
      <div
        className="flex-1 rounded-lg bg-primary text-white hover:bg-[#e0c212] hover:text-primary"
        style={{ padding: "8px" }}
      >
        <aside className="flex flex-col justify-center items-center gap-4">
          <h1 className="text-3xl font-semibold text-center md:text-4xl md:text-left">
            We Are at Your Service
          </h1>
          <img
            className="rounded-lg"
            loading="lazy"
            src={CustomerCareImage}
            alt="Customer support"
          />
        </aside>
      </div>
    </div>
  );
};

export default ContactUs;

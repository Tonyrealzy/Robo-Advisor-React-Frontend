import React from "react";
import FooterIcon1 from "../assets/icons/FooterIcon1";
import FooterIcon2 from "../assets/icons/FooterIcon2";
import FooterIcon3 from "../assets/icons/FooterIcon3";
import FooterIcon4 from "../assets/icons/FooterIcon4";
import FooterIcon5 from "../assets/icons/FooterIcon5";
import FooterIcon6 from "../assets/icons/FooterIcon6";

const Footer: React.FC = () => {
  return (
    <div
      className=" bg-primary w-full shadow-md box-border text-left font-bold text-lg flex flex-col md:flex-row md:gap-3"
      style={{ padding: "10px" }}
    >
      <div className="inline-block items-center md:flex md:flex-1 md:flex-col md:justify-center md:items-start">
        <h3
          className="text-2xl text-white grid text-center md:text-start"
          style={{ padding: "8px" }}
        >
          Personalized Investing Made Easy with RoboAdvisor
        </h3>
      </div>

      <div className="justify-center items-start mb-10 text-center inline-block align-top md:text-left md:flex md:flex-col md:flex-1 gap-1">
        <div className="flex gap-1 justify-center items-center">
          <FooterIcon1 />
          <p className="inline-block text-white text-xs xl:text-sm font-normal align-middle">
            Samuel Asabia House, 35 Marina, P.O. Box 5216, <br />
            Lagos, Nigeria.
          </p>
        </div>

        <div className="flex gap-1 justify-center items-center">
          <FooterIcon2 />
          <p className="inline-block text-white text-xs xl:text-sm font-normal align-middle">
            +234 1 905 2326
          </p>
        </div>

        <div className="flex gap-1 justify-center items-center">
          <FooterIcon3 />
          <p className="inline-block text-xs xl:text-sm text-white font-normal align-middle">
            <a href="mailto:support@company.com">
              firstcontactcomplaints&#64;firstbanknigeria.com
            </a>
          </p>
        </div>
      </div>

      <div className="mb-10 text-center inline-block justify-center items-center md:flex md:flex-col md:flex-1 gap-1">
        <p className="block text-white text-xl font-bold mb-5 md:text-left">
          About the Product
        </p>
        <p className="flex flex-col leading-5 text-gray-50 text-xs xl:text-sm font-normal md:text-left">
          Excellent investment recommendations at your finger tips <br />
          Personalized Investment Guidance <br />
          Reach your financial goals with confidence
        </p>

        <div className="flex justify-center items-center gap-4 text-center md:text-left">
          <FooterIcon4 />
          <FooterIcon5 />
          <FooterIcon6 />
        </div>
      </div>
    </div>
  );
};

export default Footer;

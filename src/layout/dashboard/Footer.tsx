import React from "react";
import FooterIcon1 from "../../assets/icons/FooterIcon1";
import FooterIcon2 from "../../assets/icons/FooterIcon2";
import FooterIcon3 from "../../assets/icons/FooterIcon3";
import FooterIcon4 from "../../assets/icons/FooterIcon4";
import FooterIcon5 from "../../assets/icons/FooterIcon5";
import FooterIcon6 from "../../assets/icons/FooterIcon6";

const Footer = () => {
  return (
    <div className=" bg-gray-600 shadow-md box-border w-full text-left font-bold text-lg px-8 py-14">
      <div className="justify-left w-full mb-10 text-center inline-block align-top md:w-1/3">
        <h3 className="text-xl text-white mb-0">
          Personalized Investing Made Easy with FirstRobo
        </h3>
      </div>

      <div className="justify-center w-full mb-10 text-center inline-block align-top md:text-left md:w-1/3">
        <div>
          <FooterIcon1 />
          <p className="inline-block text-white text-sm font-normal align-middle">
            Samuel Asabia House, 35 Marina, P.O. Box 5216, <br />
            Lagos, Nigeria.
          </p>
        </div>

        <div>
          <FooterIcon2 />
          <p className="inline-block text-white font-normal align-middle">
            +234 1 905 2326
          </p>
        </div>

        <div>
          <FooterIcon3 />

          <p className="inline-block text-sm text-white font-normal align-middle">
            <a href="mailto:support@company.com">
              firstcontactcomplaints&#64;firstbanknigeria.com
            </a>
          </p>
        </div>
      </div>

      <div className="justify-right w-full mb-10 text-center inline-block align-top md:w-1/3">
        <p className="block text-white text-xl font-bold mb-5 md:text-left">
          About the Product
        </p>
        <p className="footer-company-about leading-5 text-gray-50 text-sm font-normal md:text-left">
          Excellent investment recommendations at your finger tips <br />
          Personalized Investment Guidance <br />
          Reach your financial goals with confidence
        </p>

        <div className="footer-icons mt-6 space-x-4 text-center md:text-left md:space-x-4">
          <FooterIcon4 />
          <FooterIcon5 />
          <FooterIcon6 />
        </div>
      </div>
    </div>
  );
};

export default Footer;

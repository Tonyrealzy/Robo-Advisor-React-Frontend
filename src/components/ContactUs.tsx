import React from "react";

const ContactUs = () => {
  return (
    <section>
      {/* Flex Container   */}
      <div className="container flex flex-col w-4/5 space-y-12 mx-auto sm:space-x-4 md:space-y-0 md:space-x-8 sm:flex-col mt-8 md:flex-row">
        {/* Left item */}
        <div className="space-y-12 w-full rounded-lg bg-primary text-white p-8 sm:w-full md:w-1/2 hover:bg-[#e0c212] hover:text-primary">
          <h1 className="text-4xl font-semibold text-center md:text-4xl md:text-left">
            Contact us
          </h1>
          <p className="text-center md:text-left">
            Reach our help centre anytime, anywhere or everyday to get
            assistance using our products and services.
          </p>

          <h1 className="text-3xl font-semibold text-center md:text-4xl md:text-left">
            We Are at Your Service
          </h1>

          <div>
            <img
              className="rounded-lg"
              src="../../../assets/images/custsupp.jpg"
              alt="customer support"
            />
          </div>
        </div>

        {/* right side */}
        <div className="space-y-12 w-full text-primary sm:w-full md:w-1/2">
          {/* up part  */}
          <div className="bg-primary text-white space-y-12 p-4 rounded-lg sm:w-full md:w-full hover:bg-[#e0c212] hover:text-primary">
            <h1 className="text-xl font-medium text-center md:text-3xl md:text-left ">
              Office Address
            </h1>
            <p className="text-center md:text-left">
              First Bank of Nigeria Ltd. Head Office Address Samuel Asabia House
              35 Marina P.O. Box 5216, Lagos, Nigeria.
            </p>
          </div>

          {/* down part  */}
          <div className="bg-primary text-white space-y-12 p-4 rounded-lg sm:w-full md:w-full hover:bg-[#e0c212]  hover:text-primary">
            <h1 className="text-xl font-medium text-center md:text-3xl md:text-left">
              Helpdesk
            </h1>
            <p className="text-center md:text-left">
              FirstContact Tel: +234 1 905 2326 Tel: +234 708 062 5000 Tel: +234
              1 448 5500 Email : firstcontactcomplaints&#64;firstbanknigeria.com
              Help Desk: Fbn_help on twitter
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;

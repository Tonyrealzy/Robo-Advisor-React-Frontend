import React from "react";
import LandingIcon1 from "../assets/icons/LandingIcon1";
import LandingIcon2 from "../assets/icons/LandingIcon2";
import LandingIcon3 from "../assets/icons/LandingIcon3";
import LandingIcon4 from "../assets/icons/LandingIcon4";
import { LadyImage, RobotOneImage } from "../assets/images";

const Landing: React.FC = () => {
  return (
    <div className="container min-h-screen flex flex-col space-y-2">
      <section className="h-full container flex flex-col-reverse items-center px-6 mx-auto mt-6 md:flex-row">
        {/* Left item */}
        <div className="flex justify-center items-center mx-4 mb-16 md:mb-0 md:flex-1">
          <aside className="flex flex-col gap-4 justify-center text-center md:text-start">
            <h1 className="max-w-md text-4xl md:text-5xl font-bold">
              Your Personalized Robo-Advisor for Investment Recommendations
            </h1>
            <p className="max-w-sm my-4 text-base">
              Let our AI-powered robo-advisor find the right investments for
              you. Empowering Your Financial Future with AI-driven Investment
              Solutions.
            </p>
            <button className="w-48 md:w-72 my-4 h-11 px-4 text-[10px] font-bold text-white bg-primary border-2 border-primary rounded-lg transition duration-300 hover:bg-white hover:text-primary">
              GET STARTED
            </button>
          </aside>
        </div>

        {/* Image */}
        <div className="md:flex-1 px-16 pt-16 md:pt-0 md:mb-32">
          <img
            className="w-full h-auto"
            src={RobotOneImage}
            alt="Robot Image"
          />
        </div>
      </section>

      {/* Features Section */}
      <div className="container bg-primary w-full flex flex-col-reverse items-center justify-center h-2/5 px-6 md:mx-auto mt-10 space-y-0 md:space-y-12 md:space-x-8 md:flex-row md:gap-2">
        {/* Left item */}
        <div className="flex flex-col justify-center items-center gap-4 mx-auto text-white md:flex-1 mb-40 space-y-12">
          <h2 className="text-4xl font-bold text-center p-4 md:text-left">
            What's different about RoboAdvisor?
          </h2>
          <span className="text-center md:text-left text-xs p-4">
            At First Bank, we're on a mission to democratize investing by
            providing accessible, personalized investment solutions powered by
            cutting-edge technology. Our cutting-edge robo-advisor
            revolutionizes investment management by harnessing advanced
            artificial intelligence and machine learning algorithms.
          </span>

          <span className="text-center md:text-left text-xs p-4">
            Tailored for bank customers, our system meticulously assesses
            individual risk tolerance, financial goals, and preferences,
            ensuring precision in crafting personalized investment plans.
            Through sophisticated analysis, it optimizes returns while
            mitigating risks, guaranteeing portfolios aligned with each client's
            unique profile.
          </span>

          <span className="text-center md:text-left text-xs p-4">
            Our robo-advisor operates seamlessly, empowering users with
            effortless yet sophisticated investment strategies. Experience the
            future of finance with our intuitive platform, where innovation
            meets personalized wealth management.
          </span>
        </div>

        {/* Image */}
        <div className="md:flex-1 pt-4 md:pt-0 h-full">
          <img className="md:pb-96" src={LadyImage} alt="Picture of a woman" />
        </div>
      </div>

      {/* Key features */}
      <br></br>
      <section className="w-full">
        <div className="grid items-center justify-center grid-rows-1 grid-cols-1 gap-2 md:grid-cols-4">
          <div className="bg-primary hover:bg-lightprimary transition duration-300 hover:scale-105 rounded-lg">
            <div>
              <LandingIcon1 />
              <div className="desc p-4 text-xs font-semibold item text-center text-white">
                Personalized Investment Recommendations
              </div>
            </div>
          </div>
          <div className="bg-primary hover:bg-lightprimary transition duration-300 hover:scale-105 p-4 rounded-lg">
            <div>
              <LandingIcon2 />
              <div className="desc p-4 text-xs font-semibold item text-center text-white">
                Automated Portfolio Management
              </div>
            </div>
          </div>
          <div className="bg-primary hover:bg-lightprimary transition duration-300 hover:scale-105 p-4 rounded-lg">
            <div>
              <LandingIcon3 />
              <div className="desc p-4 text-xs font-semibold text-center text-white item">
                Intelligent Risk Assessment
              </div>
            </div>
          </div>
          <div className="bg-primary hover:bg-lightprimary transition duration-300 hover:scale-105 p-4 rounded-lg">
            <div>
              <LandingIcon4 />
              <div className="desc p-4 text-xs font-semibold text-center text-white item">
                Goal- based Investing
              </div>
            </div>
          </div>
        </div>
        <div className="clearfix"></div>
      </section>
      <br></br>

      {/* Container to heading and testimonial blocks */}
      <div className="max-w-6xl flex flex-col gap-3">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-center">
          Features of RoboAdvisor
        </h2>
        {/* Testimonials Container */}
        <div className="flex flex-row mt-8 space-y-8 md:space-y-0 md:flex-row md:space-x-6">
          {/* Testimonial 1 */}
          <div className="flex flex-col bg-cyan-100 items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:w-1/3">
            {/* Heading */}
            <div className="rounded-l-full md:bg-transparent">
              <div className="px-4 py-2 text-white w-24 mx-auto mb-8 rounded-lg md:py-1 bg-primary">
                01
              </div>
              <h3 className="text-base font-bold md:mb-4 md:text-lg">
                Data-driven Decision Making
              </h3>
            </div>
            <p className="text-primary text-justify">
              By collecting robust client data, our robo-advisor utilizes
              machine learning to create customized portfolios optimized for
              returns and risk tolerance. Continuous data analysis enables
              adjustments for maximum gains. Our data-based methodology removes
              bias and subjectivity, providing tailored guidance through smarter
              decisions in clients' best interests.
            </p>
          </div>

          {/* Testimonial 2 */}
          <div className="flex flex-col bg-cyan-100 items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:w-1/3">
            <div className="rounded-l-full md:bg-transparent">
              <div className="px-4 py-2 text-white w-24 mx-auto mb-8 rounded-lg md:py-1 bg-primary">
                02
              </div>
              <h3 className="text-base font-bold md:mb-4 md:text-lg">
                Customer-Centric Solutions
              </h3>
            </div>
            <p className="text-primary text-justify">
              Our robo-advisor is designed around the customer. We first develop
              comprehensive financial profiles of each individual client to
              deeply understand their personal risk appetites, goals and
              preferences. Equipped with this granular knowledge, our AI
              generates optimal, bespoke portfolios tailored to each customer’s
              unique needs. As clients evolve, so do our adaptive algorithms,
              continuously ingesting new customer data to adjust allocations
              accordingly with flexibility.
            </p>
          </div>

          {/* Testimonial 3  */}
          <div className="flex flex-col bg-cyan-100 items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:w-1/3">
            {/* Heading */}
            <div className="rounded-l-full md:bg-transparent">
              <div className="px-4 py-2 text-white w-24 mx-auto mb-8 rounded-lg md:py-1 bg-primary">
                03
              </div>
              <h3 className="text-base font-bold md:mb-4 md:text-lg">
                Transparency and Trust
              </h3>
            </div>
            <p className="text-primary text-justify">
              By openly sharing our algorithms, data sources, and portfolio
              adjustment logic, we enable full visibility into our AI-based
              investing methodology. Combined with our commitment to objective
              advice based solely on maximizing returns for the individual
              client's risk tolerance, we build trust and assurance that each
              recommendation serves their best interest.
            </p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <section id="cta" className="bg-brightRed">
        {/* Flex Container */}
        <div className="container flex flex-col items-center justify-between px-6 py-24 mx-auto space-y-12 md:py-12 md:flex-row md:space-y-0">
          <h2 className="text-5xl font-bold text-center text-primary md:text-4xl md:max-w-xl md:text-left">
            Don't waste anymore time, get Personalized Investment Guidance
            today.
          </h2>
          <div>
            <a className="p-3 px-6 pt-2 w-48 text-white bg-primary rounded-lg cursor-pointer transition duration-300 baseline hover:text-primary md:w-80 text-center text-xl border-2 border-solid border-primary font-semibold hover:bg-white">
              Get Started
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Landing;

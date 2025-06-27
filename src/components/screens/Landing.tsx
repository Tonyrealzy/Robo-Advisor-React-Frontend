import React from "react";
import LandingIcon1 from "../../assets/icons/LandingIcon1";
import LandingIcon2 from "../../assets/icons/LandingIcon2";
import LandingIcon3 from "../../assets/icons/LandingIcon3";
import LandingIcon4 from "../../assets/icons/LandingIcon4";
import { LadyImage, RobotOneImage } from "../../assets/images";
import { usePingAuthServer } from "../../hooks/usePingAuthServer";
import MiniLoader from "../loader/MiniLoader";

const Landing: React.FC = () => {
  const { loading: landingLoading, handleSubmit: handleNavigate } =
    usePingAuthServer();

  return (
    <div className=" w-full min-h-screen flex flex-col space-y-2">
      <section
        className="w-full flex flex-col-reverse gap-2 md:gap-0 items-center md:flex-row"
        style={{ marginTop: "20px" }}
      >
        {/* Left item */}
        <div
          className="flex justify-center items-center h-full flex-1"
          style={{ padding: "4px" }}
        >
          <aside className="flex flex-col gap-4 justify-center items-center text-center md:text-start">
            <h1 className="max-w-md text-3xl text-wrap lg:text-5xl font-bold">
              Your Personalized Robo-Advisor for Investment Recommendations
            </h1>
            <p className="max-w-sm my-4 text-sm lg:text-base">
              Let our AI-powered robo-advisor find the right investments for
              you. Empowering Your Financial Future with AI-driven Investment
              Solutions.
            </p>
            <button
              className="flex justify-center items-center w-48 md:w-72 my-4 h-11 px-4 text-[10px] font-bold text-white bg-primary border-2 border-primary rounded-lg transition duration-300 hover:bg-white hover:text-primary"
              style={{ marginBottom: "20px" }}
              onClick={handleNavigate}
            >
              {landingLoading ? <MiniLoader /> : "GET STARTED"}
            </button>
          </aside>
        </div>

        {/* Right Item - Image */}
        <div className="h-[400px] w-[300px] md:h-full flex-1">
          <img
            className="h-[400px] w-[300px] md:h-full md:w-full"
            src={RobotOneImage}
            alt="Robot Image"
          />
        </div>
      </section>

      <section className="flex flex-col gap-2 w-full md:gap-y-6">
        {/* Features Section */}
        <div className="bg-primary flex flex-col-reverse items-center justify-center h-2/5 px-6 md:mx-auto mt-10 space-y-0 md:space-y-12 md:space-x-8 md:flex-row md:gap-4">
          {/* Left item */}
          <div
            className="flex flex-col justify-center items-center gap-4 mx-auto text-white md:flex-1 mb-40 space-y-12"
            style={{ padding: "4px" }}
          >
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
              mitigating risks, guaranteeing portfolios aligned with each
              client's unique profile.
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
            <img
              className="md:pb-96"
              src={LadyImage}
              loading="lazy"
              alt="Picture of a woman"
            />
          </div>
        </div>

        {/* Key features */}
        <div
          className="grid items-center justify-center grid-rows-1 grid-cols-1 gap-4 md:grid-cols-4"
          style={{ padding: "4px 8px" }}
        >
          <div
            className="bg-primary h-36 lg:h-32 transition duration-300 hover:scale-105 rounded-lg"
            style={{ padding: "4px" }}
          >
            <div className="flex flex-col gap-2">
              <LandingIcon1 />
              <div className=" p-4 text-[10px] xl:text-xs font-semibold item text-center text-white">
                Personalized Investment Recommendations
              </div>
            </div>
          </div>
          <div
            className="bg-primary h-36 lg:h-32 transition duration-300 hover:scale-105 p-4 rounded-lg"
            style={{ padding: "4px" }}
          >
            <div className="flex flex-col gap-2">
              <LandingIcon2 />
              <div className=" p-4 text-[10px] xl:text-xs font-semibold item text-center text-white">
                Automated Portfolio Management
              </div>
            </div>
          </div>
          <div
            className="bg-primary h-36 lg:h-32 transition duration-300 hover:scale-105 p-4 rounded-lg"
            style={{ padding: "4px" }}
          >
            <div className="flex flex-col gap-2">
              <LandingIcon3 />
              <div className=" p-4 text-[10px] xl:text-xs font-semibold text-center text-white item">
                Intelligent Risk Assessment
              </div>
            </div>
          </div>
          <div
            className="bg-primary h-36 lg:h-32 transition duration-300 hover:scale-105 p-4 rounded-lg"
            style={{ padding: "4px" }}
          >
            <div className="flex flex-col gap-2">
              <LandingIcon4 />
              <div className=" p-4 text-[10px] xl:text-xs font-semibold text-center text-white item">
                Goal- based Investing
              </div>
            </div>
          </div>
        </div>

        {/* Container to heading and testimonial blocks */}
        <div className="flex flex-col gap-4" style={{ padding: "4px" }}>
          {/* Heading */}
          <h2 className="text-4xl font-bold text-center">
            Features of RoboAdvisor
          </h2>
          {/* Testimonials Container */}
          <div className="flex flex-col justify-center items-center space-y-8 md:space-y-0 md:flex-row md:gap-8">
            {/* Testimonial 1 */}
            <div
              className="flex h-120 lg:h-90 xl:h-80 flex-col flex-1 bg-cyan-100 justify-center items-center gap-2 rounded-lg"
              style={{ padding: "12px" }}
            >
              {/* Heading */}
              <section className="rounded-l-full md:bg-transparent flex justify-center items-center gap-4">
                <div className="h-8 flex justify-center items-center text-white w-12 mx-auto rounded-lg md:py-1 bg-primary">
                  01
                </div>
                <h3 className="text-base font-bold md:mb-4 md:text-lg">
                  Data-driven Decision Making
                </h3>
              </section>
              <p
                className="text-primary text-justify text-sm"
                style={{ padding: "8px" }}
              >
                By collecting robust client data, our robo-advisor utilizes
                machine learning to create customized portfolios optimized for
                returns and risk tolerance. Continuous data analysis enables
                adjustments for maximum gains. Our data-based methodology
                removes bias and subjectivity, providing tailored guidance
                through smarter decisions in clients' best interests.
              </p>
            </div>

            {/* Testimonial 2 */}
            <div
              className="flex h-120 lg:h-90 xl:h-80 flex-col flex-1 bg-cyan-100 justify-center items-center gap-2 rounded-lg"
              style={{ padding: "12px" }}
            >
              {/* Heading */}
              <section className="rounded-l-full md:bg-transparent flex justify-center items-center gap-4">
                <div className="h-8 flex justify-center items-center text-white w-12 mx-auto rounded-lg md:py-1 bg-primary">
                  02
                </div>
                <h3 className="text-base font-bold md:mb-4 md:text-lg">
                  Customer-Centric Solutions
                </h3>
              </section>
              <p
                className="text-primary text-justify text-sm"
                style={{ padding: "8px" }}
              >
                Our robo-advisor is designed around the customer. We first
                develop comprehensive financial profiles of each individual
                client to deeply understand their personal risk appetites, goals
                and preferences. Equipped with this granular knowledge, our AI
                generates optimal, bespoke portfolios tailored to each
                customer’s unique needs. As clients evolve, so do our adaptive
                algorithms, continuously ingesting new customer data to adjust
                allocations accordingly with flexibility.
              </p>
            </div>

            {/* Testimonial 3  */}
            <div
              className="flex h-120 lg:h-90 xl:h-80 flex-col flex-1 bg-cyan-100 justify-center items-center gap-2 rounded-lg"
              style={{ padding: "12px" }}
            >
              {/* Heading */}
              <section className="rounded-l-full md:bg-transparent flex justify-center items-center gap-4">
                <div className="h-8 flex justify-center items-center text-white w-12 mx-auto rounded-lg md:py-1 bg-primary">
                  03
                </div>
                <h3 className="text-base font-bold md:mb-4 md:text-lg">
                  Transparency and Trust
                </h3>
              </section>
              <p
                className="text-primary text-justify text-sm"
                style={{ padding: "8px" }}
              >
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
        <div
          className="bg-teal w-full flex flex-col items-center justify-between space-y-12 md:flex-row"
          style={{ padding: "8px" }}
        >
          <h2 className="text-3xl font-bold text-center text-primary md:text-4xl md:max-w-xl md:text-left">
            Don't waste anymore time, get Personalized Investment Guidance
            today.
          </h2>
          <button
            className={`flex justify-center items-center h-10 w-40 text-white text-[10px] ${
              landingLoading && `bg-primary`
            } rounded-lg cursor-pointer transition duration-300 baseline bg-primary hover:text-primary md:w-60 text-center text-xl border-2 border-solid border-primary font-bold hover:bg-teal`}
            onClick={handleNavigate}
          >
            {landingLoading ? <MiniLoader /> : "GET STARTED"}
          </button>
        </div>
      </section>
    </div>
  );
};

export default Landing;

import React from "react";

const Home: React.FC = () => {
  return (
    <div>
      <section id="hero">
        {/* Flex Container */}
        <div className="container flex flex-col items-center px-6 mx-auto mt-10 space-y-0 md:space-y-0 md:flex-row">
          {/* Left item */}
          <div className="flex flex-col mb-32 space-y-12 md:w-1/2">
            <h1 className="max-w-md text-4xl font-bold text-center mt-8 md:text-5xl md:text-left">
              Welcome, Username
            </h1>
            <p className="max-w-xl text-center md:text-left">
              Achieving your financial goals is our top priority. Take the first
              step towards
              <span className="font-semibold">securing your future wealth</span>
              by completing our quick and insightful questionnaire.
            </p>

            <p className="max-w-xl text-center md:text-left">
              You are about to fill our
              <span className="font-semibold">intuitive questionnaire </span>
              which delves deep into your financial aspirations, risk tolerance,
              and investment preferences.
            </p>

            <p className="max-w-xl text-center md:text-left">
              <span className="font-semibold">Your response </span>will serve as
              the
              <span className="font-semibold">foundation</span> for our
              cutting-edge algorithm to craft customized investment strategies
              perfectly suited to meet your unique need.
            </p>

            <p className="max-w-xl text-center text-semibold md:text-left">
              Start Your Journey to Financial Success!
            </p>
            <div className="flex flex-col justify-center md:justify-start space-y-8 md:flex-row md:space-y-0 md:space-x-4">
              <div>
                {" "}
                <a className="p-3 px-6 pt-2 w-48 text-white bg-primary rounded-lg cursor-pointer transition duration-300 baseline hover:text-primary md:w-72 text-center text-base border-2 border-solid border-primary font-semibold hover:bg-white">
                  Get Started
                </a>
              </div>

              <div>
                <a className="p-3 px-6 pt-2 w-48 text-primary bg-white rounded-lg cursor-pointer transition duration-300 baseline hover:text-white md:w-72 text-center text-base border-2 border-solid border-primary font-semibold hover:bg-primary">
                  Log Out
                </a>
              </div>
            </div>
          </div>
          {/* Image */}
          <div className="md:w-2/5 md:h-2/5">
            <img
              className="p-8 md:mb-32"
              src="../../../assets/images/robot.png"
              alt=""
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

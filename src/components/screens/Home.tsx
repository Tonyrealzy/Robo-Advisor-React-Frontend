import React from "react";
import { useGetProfile } from "../../contexts/ProfileContext";
import { RobotOneImage } from "../../assets/images";
import { usePingAIServer } from "../../hooks/usePingAIServer";
import MiniLoader from "../loader/MiniLoader";

const Home: React.FC = () => {
  const { profile } = useGetProfile();
  const { loading, handleSubmit } = usePingAIServer();

  return (
    <div
      className="container h-full flex flex-col justify-center items-center mx-auto space-y-0 md:space-y-0 md:flex-row"
      style={{ padding: "15px" }}
    >
      {/* Left item */}
      <section className="flex flex-col text-sm space-y-12 flex-1 items-center md:items-start justify-center gap-3">
        <h1 className="max-w-md text-4xl font-bold text-center md:text-5xl md:text-left">
          Welcome, {profile?.username}
        </h1>
        <p className="max-w-xl text-center md:text-left">
          Achieving your financial goals is our top priority. Take the first
          step towards securing your future wealth by completing our quick and
          insightful questionnaire.
        </p>

        <p className="max-w-xl text-center md:text-left">
          You are about to fill our intuitive questionnaire which delves deep
          into your financial aspirations, risk tolerance, and investment
          preferences.
        </p>

        <p className="max-w-xl text-center md:text-left">
          Your response will serve as the foundation for our cutting-edge
          algorithm to craft customized investment strategies perfectly suited
          to meet your unique need.
        </p>

        <p className="max-w-xl text-center text-semibold md:text-left">
          Start Your Journey to Financial Success!
        </p>

        <div
          className="flex flex-col justify-center md:justify-start space-y-8 md:flex-row md:space-y-0 md:space-x-4"
          style={{ padding: "10px 0" }}
        >
          <button
            className="h-10 w-48 flex justify-center items-center text-firstgold bg-primary rounded-lg cursor-pointer transition duration-300 baseline hover:text-primary md:w-72 text-center text-[10px] border-2 border-solid border-primary font-semibold hover:bg-white"
            onClick={handleSubmit}
          >
            {loading ? <MiniLoader /> : "GET STARTED"}
          </button>
        </div>
      </section>

      {/* Image */}
      <section className="md:flex-1 hidden md:flex">
        <img className="w-full h-auto" src={RobotOneImage} alt="Robot Image" />
      </section>
    </div>
  );
};

export default Home;

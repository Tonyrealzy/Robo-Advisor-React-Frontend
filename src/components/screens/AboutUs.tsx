import React from "react";

const AboutUs: React.FC = () => {
  return (
    <section
      className="container h-screen bg-primary w-full flex flex-col md:flex-row"
      style={{ paddingTop: "80px" }}
    >
      {/* Left item  */}
      <div
        className="flex flex-col  bg-primary hover:bg-[#e0c212] text-white hover:text-primary gap-2 flex-1"
        style={{ padding: "8px" }}
      >
        <h1 className="text-2xl font-medium text-center md:text-4xl md:text-left">
          Our dream is to empower individuals to achieve their financial goals
          with confidence.
        </h1>
        <p className="text-center sm:text-left">
          RoboAdvisor is your trusted partner in personalized investment
          recommendations and portfolio management services. We are committed to
          revolutionizing the way individuals approach investing, making it more
          accessible, personalized, and efficient through the power of
          technology.
        </p>
        <p className="text-center sm:text-left">
          We are committed to transparency, integrity, and excellence in
          everything we do. We prioritize the interests of our clients above all
          else and adhere to the highest standards of ethical conduct and
          regulatory compliance. Our team of experienced financial experts, data
          scientists, and technology professionals work tirelessly to ensure
          that our robo-advisor system remains at the forefront of innovation
          and delivers unparalleled value to our customers.
        </p>
      </div>

      {/* right side */}
      <div className="flex flex-col text-primary gap-4 flex-1" style={{ padding: "8px" }}>
        {/* up part */}
        <div className="bg-primary hover:bg-[#e0c212] text-white hover:text-primary" style={{ padding: "8px" }}>
          <h1 className="text-2xl font-medium text-center md:text-4xl md:text-left">
            Our Mission
          </h1>
          <p className="text-center md:text-left">
            To remain true to our name by providing the best financial services
            possible.
          </p>
        </div>

        {/* middle part */}
        <div className=" bg-primary hover:bg-[#e0c212]  text-white hover:text-primary" style={{ padding: "8px" }}>
          <h1 className="text-2xl font-medium text-center md:text-4xl md:text-left">
            Our Vision
          </h1>
          <p className="text-center md:text-left">
            To be Africa’s Bank of first choice.
          </p>
        </div>

        {/* down part */}
        <div className=" bg-primary hover:bg-[#e0c212] text-white hover:text-primary" style={{ padding: "8px" }}>
          <h1 className="text-2xl font-medium text-center md:text-4xl md:text-left">
            Our Approach
          </h1>
          <p className=" text-center md:text-left">
            At the heart of our approach lies cutting-edge artificial
            intelligence and machine learning algorithms. These advanced
            technologies enable us to analyze vast amounts of data, including
            customers' risk tolerance, investment goals, financial preferences,
            market trends, and economic indicators. By leveraging these
            insights, we can generate customized investment portfolios that are
            precisely calibrated to optimize returns while minimizing risk for
            each individual client.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;

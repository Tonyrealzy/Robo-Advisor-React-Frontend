import React from "react";

const Faq: React.FC = () => {
  return (
    <div style={{ paddingTop: "60px" }}>
      <h1 className="text-2xl font-semibold text-center text-primary md:text-4xl" style={{ padding: "8px" }}>
        Frequently Asked Questions(FAQ)
      </h1>
      <div
        className="grid grid-cols-2 lg:grid-cols-4 gap-4"
        style={{ padding: "8px" }}
      >
        <section
          className="bg-primary flex flex-col justify-center items-center gap-1 hover:bg-[#e0c212] h-70 rounded-md text-white hover:text-primary"
          style={{ padding: "8px" }}
        >
          <h2 className="text-sm md:text-base">
            What is an Investment Portfolio?
          </h2>
          <p className="text-xs md:text-sm">
            An investment portfolio refers to a collection of assets owned by an
            individual or entity. These assets can include stocks, bonds, mutual
            funds, real estate, and other financial instruments. Portfolios are
            customized based on an investor's financial goals, risk tolerance,
            and investment horizon.
          </p>
        </section>

        <section
          className="bg-primary flex flex-col justify-center items-center gap-1 hover:bg-[#e0c212] h-70 rounded-md text-white hover:text-primary"
          style={{ padding: "8px" }}
        >
          <h2 className="text-sm md:text-base">
            Types of Investment Portfolios:
          </h2>
          <p className="text-xs md:text-sm">
            Equity Portfolio: Meaning: An equity portfolio consists mainly of
            stocks or equity-related instruments. Use-case: Ideal for investors
            seeking higher returns and willing to tolerate market volatility.
          </p>
        </section>

        <section
          className="bg-primary flex flex-col justify-center items-center gap-1 hover:bg-[#e0c212] h-70 rounded-md text-white hover:text-primary"
          style={{ padding: "8px" }}
        >
          <h2 className="text-sm md:text-base">
            Types of Investment Portfolios(contd):
          </h2>
          <p className="text-xs md:text-sm">
            Fixed-Income Portfolio: Meaning: A fixed-income portfolio focuses on
            bonds and other debt securities. Use-case: Suitable for conservative
            investors looking for stable income and capital preservation.
          </p>
        </section>

        <section
          className="bg-primary flex flex-col justify-center items-center gap-1 hover:bg-[#e0c212] h-70 rounded-md text-white hover:text-primary"
          style={{ padding: "8px" }}
        >
          <h2 className="text-sm md:text-base">
            Types of Investment Portfolios(contd):
          </h2>
          <p className="text-xs md:text-sm">
            Balanced Portfolio: Meaning: Combines both equity and fixed-income
            assets to achieve a balanced risk-return profile. Use-case: Suited
            for investors seeking a moderate level of risk with potential for
            growth and income.
          </p>
        </section>

        <section
          className="bg-primary flex flex-col justify-center items-center gap-1 hover:bg-[#e0c212] h-70 rounded-md text-white hover:text-primary"
          style={{ padding: "8px" }}
        >
          <h2 className="text-sm md:text-base">
            Types of Investment Portfolios(contd):
          </h2>
          <p className="text-xs md:text-sm">
            Diversified Portfolio: Meaning: Spreads investments across various
            asset classes and sectors. Use-case: Mitigates risk by avoiding
            over-reliance on a single type of investment.
          </p>
        </section>

        <section
          className="bg-primary flex flex-col justify-center items-center gap-1 hover:bg-[#e0c212] h-70 rounded-md text-white hover:text-primary"
          style={{ padding: "8px" }}
        >
          <h2 className="text-sm md:text-base">
            Types of Investment Portfolios(contd):
          </h2>
          <p className="text-xs md:text-sm">
            Aggressive Growth Portfolio: Meaning: Emphasizes high-risk,
            high-reward assets with the potential for substantial returns.
            Use-case: Geared towards investors with a high risk tolerance and a
            long investment horizon.
          </p>
        </section>

        <section
          className="bg-primary flex flex-col justify-center items-center gap-1 hover:bg-[#e0c212] h-70 rounded-md text-white hover:text-primary"
          style={{ padding: "8px" }}
        >
          <h2 className="text-sm md:text-base">
            How do I Choose the Right Portfolio for Me?
          </h2>
          <p className="text-xs md:text-sm">
            Choosing the right portfolio depends on your financial objectives,
            risk tolerance, and investment horizon. Consider factors such as
            age, financial goals, and willingness to withstand market
            fluctuations. Consulting with a financial advisor can provide
            personalized guidance.
          </p>
        </section>

        <section
          className="bg-primary flex flex-col justify-center items-center gap-1 hover:bg-[#e0c212] h-70 rounded-md text-white hover:text-primary"
          style={{ padding: "8px" }}
        >
          <h2 className="text-sm md:text-base">
            How Often Should I Review My Investment Portfolio?
          </h2>
          <p className="text-xs md:text-sm">
            Regularly review your portfolio at least annually or when
            significant life changes occur. Adjustments may be needed based on
            changes in financial goals, risk tolerance, or market conditions.
          </p>
        </section>

        <section
          className="bg-primary flex flex-col justify-center items-center gap-1 hover:bg-[#e0c212] h-70 rounded-md text-white hover:text-primary"
          style={{ padding: "8px" }}
        >
          <h2 className="text-sm md:text-base">
            What is the Role of a Robo-Advisor in Portfolio Management?
          </h2>
          <p className="text-xs md:text-sm">
            Meaning: A robo-advisor is an automated investment platform that
            uses algorithms to create and manage investment portfolios.
            Use-case: Provides a low-cost, hands-off approach to portfolio
            management, making it accessible to a broad range of investors.
          </p>
        </section>

        <section
          className="bg-primary flex flex-col justify-center items-center gap-1 hover:bg-[#e0c212] h-70 rounded-md text-white hover:text-primary"
          style={{ padding: "8px" }}
        >
          <h2 className="text-sm md:text-base">
            How Can I Mitigate Risk in My Portfolio?
          </h2>
          <p className="text-xs md:text-sm">
            Diversification: Spread investments across different asset classes
            to reduce risk. Regular Review: Periodically assess and rebalance
            your portfolio to align with your financial goals. Risk Assessment:
            Understand your risk tolerance and invest accordingly.
          </p>
        </section>

        <section
          className="bg-primary flex flex-col justify-center items-center gap-1 hover:bg-[#e0c212] h-70 rounded-md text-white hover:text-primary"
          style={{ padding: "8px" }}
        >
          <h2 className="text-sm md:text-base">
            Are There Risks Associated with Investing?
          </h2>
          <p className="text-xs md:text-sm">
            Yes, investing involves inherent risks, and the value of investments
            can fluctuate. However, a well-diversified portfolio, informed
            decision-making, and a long-term perspective can help manage risks
            effectively.
          </p>
        </section>

        <section
          className="bg-primary flex flex-col justify-center items-center gap-1 hover:bg-[#e0c212] h-70 rounded-md text-white hover:text-primary"
          style={{ padding: "8px" }}
        >
          <h2 className="text-sm md:text-base">
            Can I Start Investing with a Small Amount of Money?
          </h2>
          <p className="text-xs md:text-sm">
            Absolutely! Many investment platforms allow you to start with a
            small amount. This practice, known as micro-investing, enables
            individuals to begin building their investment portfolios
            incrementally.
          </p>
        </section>

        <section
          className="bg-primary flex flex-col justify-center items-center gap-1 hover:bg-[#e0c212] h-70 rounded-md text-white hover:text-primary"
          style={{ padding: "8px" }}
        >
          <h2 className="text-sm md:text-base">
            How Can I Monitor My Portfolio's Performance?
          </h2>
          <p className="text-xs md:text-sm">
            Online Platforms: Utilize the features of your chosen investment
            platform to track performance. Regular Statements: Review periodic
            statements provided by your investment service. Financial News: Stay
            informed about market trends and economic developments.
          </p>
        </section>

        <section
          className="bg-primary flex flex-col justify-center items-center gap-1 hover:bg-[#e0c212] h-70 rounded-md text-white hover:text-primary"
          style={{ padding: "8px" }}
        >
          <h2 className="text-sm md:text-base">
            Is My Information Secure on the Platform?
          </h2>
          <p className="text-xs md:text-sm">
            Yes, we take data security seriously. We employ industry-standard
            encryption and security measures to safeguard your personal and
            financial information. If you have specific questions or need
            further assistance, please reach out to our customer support team by
            clicking <a className="link">here</a>.
          </p>
        </section>

        <section
          className="bg-primary flex flex-col justify-center items-center gap-1 hover:bg-[#e0c212] h-70 rounded-md text-white hover:text-primary"
          style={{ padding: "8px" }}
        >
          <h2 className="text-sm md:text-base">What is a Bond?</h2>
          <p className="text-xs md:text-sm">
            Definition: A bond is a fixed-income investment where an investor
            lends money to an entity (government or corporation) in exchange for
            periodic interest payments and the return of the principal amount at
            maturity. Use-case: Bonds are suitable for income-oriented investors
            seeking a more stable and predictable return.
          </p>
        </section>

        <section
          className="bg-primary flex flex-col justify-center items-center gap-1 hover:bg-[#e0c212] h-70 rounded-md text-white hover:text-primary"
          style={{ padding: "8px" }}
        >
          <h2 className="text-sm md:text-base">Understanding Stocks:</h2>
          <p className="text-xs md:text-sm">
            Definition: Stocks represent ownership in a company and entitle
            shareholders to a portion of the company's assets and profits.
            Use-case: Stocks are ideal for investors seeking capital
            appreciation and potential dividend income.
          </p>
        </section>

        <section
          className="bg-primary flex flex-col justify-center items-center gap-1 hover:bg-[#e0c212] h-70 rounded-md text-white hover:text-primary"
          style={{ padding: "8px" }}
        >
          <h2 className="text-sm md:text-base">Exploring Securities:</h2>
          <p className="text-xs md:text-sm">
            Definition: Securities are tradable financial instruments
            representing ownership or debt obligations. Examples include stocks,
            bonds, and derivatives. Use-case: Investors use securities to
            diversify portfolios and manage risk.
          </p>
        </section>

        <section
          className="bg-primary flex flex-col justify-center items-center gap-1 hover:bg-[#e0c212] h-70 rounded-md text-white hover:text-primary"
          style={{ padding: "8px" }}
        >
          <h2 className="text-sm md:text-base">Mutual Funds Demystified:</h2>
          <p className="text-xs md:text-sm">
            Definition: Mutual funds pool money from multiple investors to
            invest in a diversified portfolio of stocks, bonds, or other
            securities. Use-case: Ideal for investors looking for professional
            management and diversification with a single investment.
          </p>
        </section>

        <section
          className="bg-primary flex flex-col justify-center items-center gap-1 hover:bg-[#e0c212] h-70 rounded-md text-white hover:text-primary"
          style={{ padding: "8px" }}
        >
          <h2 className="text-sm md:text-base">
            What are Exchange-Traded Funds (ETFs)?
          </h2>
          <p className="text-xs md:text-sm">
            Definition: ETFs are investment funds traded on stock exchanges,
            similar to stocks. They typically track an index, commodity, or a
            basket of assets. Use-case: ETFs provide diversification and
            flexibility with intraday trading and lower expense ratios.
          </p>
        </section>

        <section
          className="bg-primary flex flex-col justify-center items-center gap-1 hover:bg-[#e0c212] h-70 rounded-md text-white hover:text-primary"
          style={{ padding: "8px" }}
        >
          <h2 className="text-sm md:text-base">Options 101:</h2>
          <p className="text-xs md:text-sm">
            Definition: Options are financial derivatives that grant the buyer
            the right (but not the obligation) to buy or sell an underlying
            asset at a predetermined price within a specified timeframe.
            Use-case: Options are often used for hedging, speculation, or
            generating income through premium sales.
          </p>
        </section>

        <section
          className="bg-primary flex flex-col justify-center items-center gap-1 hover:bg-[#e0c212] h-70 rounded-md text-white hover:text-primary"
          style={{ padding: "8px" }}
        >
          <h2 className="text-sm md:text-base">Risk Factors in Investments:</h2>
          <p className="text-xs md:text-sm">
            Market Risk: Fluctuations in the market can impact the value of
            investments. Interest Rate Risk: Changes in interest rates can
            affect bond prices. Credit Risk: The risk of default by issuers of
            bonds or other debt securities. Liquidity Risk: The ease of buying
            or selling an investment without affecting its price.
          </p>
        </section>

        <section
          className="bg-primary flex flex-col justify-center items-center gap-1 hover:bg-[#e0c212] h-70 rounded-md text-white hover:text-primary"
          style={{ padding: "8px" }}
        >
          <h2 className="text-sm md:text-base">
            How to Build a Diversified Portfolio:
          </h2>
          <p className="text-xs md:text-sm">
            Asset Allocation: Allocate investments across different asset
            classes. Geographic Diversification: Spread investments globally to
            reduce regional risks. Sector Diversification: Avoid
            over-concentration in specific industries.
          </p>
        </section>

        <section
          className="bg-primary flex flex-col justify-center items-center gap-1 hover:bg-[#e0c212] h-70 rounded-md text-white hover:text-primary"
          style={{ padding: "8px" }}
        >
          <h2 className="text-sm md:text-base">Tax Considerations:</h2>
          <p className="text-xs md:text-sm">
            Capital Gains Tax: Tax on profits made from selling investments.
            Dividend Tax: Tax on income received from dividends. Tax-Efficient
            Investing: Utilize tax-advantaged accounts for long-term benefits.
          </p>
        </section>

        <section
          className="bg-primary flex flex-col justify-center items-center gap-1 hover:bg-[#e0c212] h-70 rounded-md text-white hover:text-primary"
          style={{ padding: "8px" }}
        >
          <h2 className="text-sm md:text-base">Staying Informed:</h2>
          <p className="text-xs md:text-sm">
            Financial News: Keep abreast of market trends and economic
            developments. Educational Resources: Utilize reliable sources for
            learning about investment strategies. Consult with Professionals:
            Seek advice from financial advisors for personalized guidance.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Faq;

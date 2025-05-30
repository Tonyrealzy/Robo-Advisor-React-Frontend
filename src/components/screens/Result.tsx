import React from "react";
import PortfolioPieChart from "../charts/pieCharts";
import PortfolioBarChart from "../charts/barCharts";
import InvestmentTable from "../charts/tables";
import { useLocation } from "react-router-dom";

const Result: React.FC = () => {
  const location = useLocation();
  const dataToRender = location.state;

  return (
    <div
      className="min-h-screen flex flex-col justify-start items-center overflow-y-visible gap-y-2"
      style={{ padding: "15px" }}
    >
      <section className="flex flex-col md:flex-row justify-center md:justify-between">
        <aside className="flex flex-1 justify-center items-center" style={{ padding: "5px" }}>
          <PortfolioPieChart data={dataToRender} />
        </aside>
        <aside className="flex flex-1 justify-center items-center" style={{ padding: "5px" }}>
          <PortfolioBarChart data={dataToRender} />
        </aside>
      </section>
      <InvestmentTable data={dataToRender} />
    </div>
  );
};

export default Result;

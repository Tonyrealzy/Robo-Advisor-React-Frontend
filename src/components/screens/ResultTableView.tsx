import React from "react";
import PortfolioPieChart from "../charts/pieCharts";
import PortfolioBarChart from "../charts/barCharts";
import InvestmentTable from "../charts/tables";
import { useLocation, useNavigate } from "react-router-dom";

const ResultTableView: React.FC = () => {
  const location = useLocation();
  const dataToRender = location.state;

  const navigate = useNavigate();
  const navigateToDashboard = () => {
    navigate("/history");
  };

  return (
    <div
      className="min-h-screen w-full flex flex-col justify-start items-center overflow-y-visible gap-y-2"
      style={{ padding: "15px" }}
    >
      <div className="w-full flex justify-end" style={{ padding: "10px 0" }}>
        <button
          className="font-bold text-primary bg-firstgold text-[10px] h-10 w-28 md:w-40 rounded-lg"
          onClick={navigateToDashboard}
        >
          RETURN
        </button>
      </div>

      <section className="flex flex-col md:flex-row justify-center md:justify-between">
        <aside
          className="flex flex-1 justify-center items-center"
          style={{ padding: "5px" }}
        >
          <PortfolioPieChart data={dataToRender} />
        </aside>
        <aside
          className="flex flex-1 justify-center items-center"
          style={{ padding: "5px" }}
        >
          <PortfolioBarChart data={dataToRender} />
        </aside>
      </section>
      <InvestmentTable data={dataToRender} />
    </div>
  );
};

export default ResultTableView;

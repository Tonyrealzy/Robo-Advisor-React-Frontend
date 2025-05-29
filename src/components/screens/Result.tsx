import React from "react";
import PortfolioPieChart from "../charts/pieCharts";
import PortfolioBarChart from "../charts/barCharts";
import InvestmentTable from "../charts/tables";
import { useFormQuestions } from "../../hooks/useFormQuestions";

const Result: React.FC = () => {
  const { dataToRender: data } = useFormQuestions();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <PortfolioPieChart data={data} />
      <PortfolioBarChart data={data} />
      <InvestmentTable data={data} />
    </div>
  );
};

export default Result;

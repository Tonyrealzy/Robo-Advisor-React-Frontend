import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

interface InvestmentOption {
  financial_product: string;
  estimatedReturnValue: number;
  principal: number;
}

const PortfolioBarChart: React.FC<{ data: InvestmentOption[] }> = ({
  data,
}) => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data}>
        <XAxis dataKey="financial_product" stroke="var(--color-primary)" />
        <YAxis stroke="var(--color-primary)" />
        <Tooltip />
        <Bar dataKey="estimatedReturnValue" fill="var(--color-secondary)" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default PortfolioBarChart;

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
    <ResponsiveContainer width={350} height={400} className="text-xs">
      <BarChart data={data}>
        <XAxis dataKey="financial_product" stroke="var(--color-primary)" />
        <YAxis stroke="var(--color-primary)" />
        <Tooltip />
        <Bar dataKey="estimated_return_value" fill="var(--color-firstgold)" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default PortfolioBarChart;

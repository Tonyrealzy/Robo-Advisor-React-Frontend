import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

interface InvestmentOption {
  financial_product: string;
  composition: string;
}

const COLORS = [
  "var(--color-primary)",
  "var(--color-secondary)",
  "var(--color-teal)",
  "var(--color-lightprimary)",
  "var(--color-tertiary)",
];

const PortfolioPieChart: React.FC<{ data: InvestmentOption[] }> = ({
  data,
}) => {
  const pieData = data.map((item) => ({
    name: item.financial_product,
    value: parseFloat(item.composition.replace("%", "")),
  }));

  return (
    <PieChart width={400} height={300}>
      <Pie
        data={pieData}
        dataKey="value"
        nameKey="name"
        cx="50%"
        cy="50%"
        outerRadius={100}
        fill="#8884d8"
        label
      >
        {pieData.map((_, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip />
      <Legend />
    </PieChart>
  );
};

export default PortfolioPieChart;

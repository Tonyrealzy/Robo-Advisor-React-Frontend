import React from "react";
import { FinancialProduct } from "../../models/interface";

const InvestmentTable: React.FC<{ data: FinancialProduct[] }> = ({ data }) => (
  <table className="w-full border-collapse border border-[var(--color-primary)] text-[var(--color-primary)]">
    <thead className="bg-[var(--color-lightprimary)]">
      <tr>
        <th className="p-2">Product</th>
        <th className="p-2">Provider</th>
        <th className="p-2">Principal</th>
        <th className="p-2">Return</th>
        <th className="p-2">Est. Value</th>
      </tr>
    </thead>
    <tbody>
      {data.map((item, idx) => (
        <tr
          key={idx}
          className="border-t border-[var(--color-tertiary)] hover:bg-[var(--color-teal)]/10"
        >
          <td className="p-2">{item.financial_product}</td>
          <td className="p-2">{item.provider}</td>
          <td className="p-2">${item.principal}</td>
          <td className="p-2">{item.expectedReturn}</td>
          <td className="p-2">${item.estimatedReturnValue.toLocaleString()}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default InvestmentTable;

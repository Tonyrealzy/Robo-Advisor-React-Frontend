import React from "react";
import { FinancialProduct } from "../../models/interface";

const InvestmentTable: React.FC<{ data: FinancialProduct[] }> = ({ data }) => (
  <table className="hidden md:block w-full font-medium text-xs border-collapse border border-[var(--color-primary)] text-[var(--color-primary)]">
    <thead>
      <tr className="font-bold">
        <th style={{ padding: "4px 8px" }}>PRODUCT</th>
        <th style={{ padding: "4px 8px" }}>PROVIDER</th>
        <th style={{ padding: "4px 8px" }}>PRINCIPAL</th>
        <th style={{ padding: "4px 8px" }}>RETURN</th>
        <th style={{ padding: "4px 8px" }}>EST. VALUE</th>
      </tr>
    </thead>
    <tbody>
      {data.map((item, idx) => (
        <tr key={idx} className="hover:bg-[var(--color-teal)]/2">
          <td style={{ padding: "4px 8px" }}>{item.financial_product}</td>
          <td style={{ padding: "4px 8px" }}>{item.provider}</td>
          <td style={{ padding: "4px 8px" }}>${item.principal}</td>
          <td style={{ padding: "4px 8px" }}>{item.expectedReturn}</td>
          <td style={{ padding: "4px 8px" }}>
            ${item.estimatedReturnValue.toLocaleString()}
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default InvestmentTable;

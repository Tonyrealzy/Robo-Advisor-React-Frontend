import React from "react";

const DashboardTable: React.FC = () => {
  return (
    <div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-8 bg-slate-50 p-2">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-sm font-bold text-gray-700 uppercase dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                Financial Product
              </th>
              <th scope="col" className="px-6 py-3">
                Provider
              </th>
              <th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                Expected Returns
              </th>
              <th scope="col" className="px-6 py-3">
                Composition
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200 dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
              >
                {/* {{ item.financial_product }} */}
              </th>
              <td className="px-6 py-4 text-black">
                {/* {{ item.provider }} */}
              </td>
              <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800 text-white">
                {/* {{ item.expectedReturn }}  */}
              </td>
              <td className="px-6 py-4  text-black">
                {/* {{ item.composition }} */}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DashboardTable;

import React from "react";

const Cards: React.FC = () => {
  return (
    <div>
      <div className="card p-4 pb-1 my-2 flex-1 h-full slide-in-stop">
        <div className="p-4 pb-1 bg-white text-black rounded-md flex flex-col h-full">
          <div className="top flex justify-between">
            <p className="font-[poppins] text-[.75rem]">
              Investment:
              <span className="fonnumber;ld font-mono text-[.87rem]">
                {/* {{item.financial_product}} */}
              </span>
            </p>
            <p>
              <span className="text-sm font-bold bg-[#ce9f39] w-9 h-9 rounded-full text-white flex items-center justify-center">
                {/* {{ item.composition }} */}
              </span>
            </p>
          </div>
          <p className="font-[poppins] text-[.8rem] font-bold mt-8">
            Provider:
            <span className="font-bold font-mono text-[.86rem]">
              {/* {{ item.provider }} */}
            </span>
          </p>
          <p className="font-[poppins] text-[.75rem]">
            Expected amount:
            <span className="font-bold font-mono text-[.86rem]">
              {/* {{ item.estimatedReturnValue}} */}
            </span>
          </p>

          <p className="font-[poppins] text-[.75rem]">
            Invested Amount:
            <span className="font-bold text-green-600 font-mono text-[.86rem]">
              {/* {{ item.principal }} */}
            </span>
          </p>

          <div className="bottom mb-2">
            <span className="text-green-700">
              {/* {{ item.expectedReturn }} */}
              <small className="text-gray-500">expected returns</small>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;

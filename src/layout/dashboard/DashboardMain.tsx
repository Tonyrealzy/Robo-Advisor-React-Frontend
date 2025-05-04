import React from "react";

const DashboardMain = () => {
  return (
    <div>
      <section className="flex-1 relative">
        <div className="w-[96%] mx-auto mt-2">
          <div className="table-advice grid-cols-1 sm:grid-cols-2 gap-2">
            {/* <app-table /> */}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2">
            <div className="grid grid-cols-1 gap-1 w-full h-full">
              {/* <app-bar-chart className="bgs p-4 w-[90%] mx-auto my-auto" /> */}
            </div>
            {/* <app-doughnut-chart className="bg-slate-300 p-0 z-0" /> */}
          </div>
          <div className="font-mono p-4">
            <h2 className="font-bold font-mono text-lg pl-4 ">
              Recommendations
            </h2>
            <div className="grid grid-cols-2 p-4 gap-4">
              <p className="text-base">
                <span className="font-bold text-lg">
                  {/* {{ item.financial_product }}: */}
                </span>
                {/* {{ item.brief_description }} */}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DashboardMain;

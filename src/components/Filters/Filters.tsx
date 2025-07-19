"use client";

import { filterData } from "@/constants";
import { useGlobalContext } from "@/context/GlobalContext";
import Filter from "./Filter";

const Filters = () => {
  const { results } = useGlobalContext();
  return (
    <div className="relative mx-auto w-3/4">
      <div className="flex justify-between gap-x-8 bg-[#f8f8f8] py-12">
        {filterData.map(({ heading, options }) => (
          <Filter key={heading} heading={heading} options={options} />
        ))}
      </div>
      <ResultCount count={results} />
    </div>
  );
};

export default Filters;

const ResultCount = ({ count }: { count: number }) => {
  return (
    <p className="text-[14px]">
      Liczba wyników: <span className="font-semibold">{count}</span>
    </p>
  );
};

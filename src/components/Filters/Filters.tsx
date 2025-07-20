"use client";

import { filterData } from "@/constants";
import { useGlobalContext } from "@/context/GlobalContext";
import Filter from "./Filter";

const Filters = () => {
  const { results } = useGlobalContext();
  return (
    <div className="relative mx-auto w-3/4">
      <div className="flex flex-wrap justify-between gap-x-8 pt-12 pb-8">
        {filterData.map(({ heading, options }) => (
          <Filter key={heading} heading={heading} options={options} />
        ))}
      </div>
      <span className="text-[14px]">
        Liczba wyników: <span className="font-semibold">{results}</span>
      </span>
    </div>
  );
};

export default Filters;

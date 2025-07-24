"use client";

import Filter from "./Filter";
import { filterTabs } from "@/constants";
import { useGlobalContext } from "@/contexts/GlobalContext";

const Filters = () => {
  const { filteredProducts, totalProductCount } = useGlobalContext();

  return (
    <div className="relative mx-auto w-3/4">
      <div className="flex flex-wrap justify-between gap-4 pt-12 pb-8">
        {filterTabs.map(({ title, options, filterKey }) => (
          <Filter
            key={filterKey}
            title={title}
            options={options}
            filterKey={filterKey}
          />
        ))}
      </div>
      <span className="text-[14px]">
        {filteredProducts.length !== 0 ? (
          <span>
            Liczba wyników:{" "}
            <span className="font-semibold">{totalProductCount}</span>
          </span>
        ) : (
          <span className="font-semibold text-3xl">Brak wyników</span>
        )}
      </span>
    </div>
  );
};

export default Filters;

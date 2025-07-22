"use client";

import { filterTabs } from "@/constants";
import Filter from "./Filter";
import { ProductT } from "@/lib/types";

const Filters = ({ products }: { products: ProductT[] }) => {
  return (
    <div className="relative mx-auto w-3/4">
      <div className="flex flex-wrap justify-between gap-x-8 pt-12 pb-8">
        {filterTabs.map(({ heading, options }) => (
          <Filter key={heading} heading={heading} options={options} />
        ))}
      </div>
      <span className="text-[14px]">
        Liczba wyników: <span className="font-semibold">{products.length}</span>
      </span>
    </div>
  );
};

export default Filters;

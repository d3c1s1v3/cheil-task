"use client";

import Image from "next/image";

import type { FilterT } from "@/lib/types";
import useFilters from "@/hooks/useFilters";
import FilterTabs from "./FilterTabs";

const Filter = ({ heading, options }: FilterT) => {
  const { expanded, selected, handleSelect, setExpanded, tabsRef } =
    useFilters(options);

  return (
    <div className="relative flex flex-col flex-1 justify-end gap-y-3">
      <h3 className="p-2 font-semibold text-[18px] whitespace-nowrap">
        {heading}
      </h3>
      <ul className="bg-white border-1 border-gray-400 rounded-md w-full overflow-hidden select-none">
        <li
          className="flex justify-between hover:bg-[#f3f3f3] p-2 cursor-pointer"
          onClick={() => setExpanded((prev) => !prev)}
        >
          <span>{selected}</span>
          <Image
            src="/chevron-down.svg"
            alt="icon"
            width={13}
            height={13}
            className={`${expanded && "rotate-180"}`}
          />
        </li>

        {expanded && (
          <FilterTabs
            options={options}
            handleSelect={handleSelect}
            tabsRef={tabsRef}
          />
        )}
      </ul>
    </div>
  );
};

export default Filter;

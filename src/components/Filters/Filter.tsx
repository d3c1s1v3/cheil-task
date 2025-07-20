"use client";

import Image from "next/image";

import type { FilterT } from "@/types";
import useFilters from "./useFilters";

const Filter = ({ heading, options }: FilterT) => {
  const { expanded, selected, handleSelect, setExpanded } = useFilters({
    options,
  });

  return (
    <div className="relative flex flex-col flex-1 justify-end gap-y-3">
      <h3 className="p-2 font-semibold text-[18px] whitespace-nowrap">
        {heading}
      </h3>
      <ul className="bg-white border-1 border-gray-400 rounded-md w-full overflow-hidden">
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
          <div className="right-0 left-0 z-10 absolute bg-white border-1 border-gray-400 rounded-md overflow-hidden">
            {options
              .filter((option) => option !== selected)
              .map((option) => (
                <li
                  key={option}
                  onClick={() => handleSelect(option)}
                  className="hover:bg-[#f3f3f3] p-2 cursor-pointer"
                >
                  {option}
                </li>
              ))}
          </div>
        )}
      </ul>
    </div>
  );
};

export default Filter;

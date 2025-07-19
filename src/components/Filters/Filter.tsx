"use client";

import Image from "next/image";

import type { FilterT } from "@/types";
import useFilters from "./useFilters";

const Filter = ({ heading, options }: FilterT) => {
  const { expanded, selected, handleSelect, setExpanded } = useFilters({
    options,
  });

  return (
    <div className="flex flex-col flex-1 gap-y-3">
      <h3 className="p-2 font-semibold text-[18px]">{heading}</h3>
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
        {expanded &&
          options
            .filter((option) => option !== selected)
            .map((option) => (
              <li
                key={option}
                value={option}
                onClick={() => handleSelect(option)}
                className="hover:bg-[#f3f3f3] p-2 cursor-pointer"
              >
                {option}
              </li>
            ))}
      </ul>
    </div>
  );
};

export default Filter;

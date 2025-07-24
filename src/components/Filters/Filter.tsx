"use client";

import Image from "next/image";

import { useFilter } from "@/hooks/useFilter";

type FilterProps = {
  title: string;
  options: string[];
  filterKey: string;
};

const Filter = ({ title, options, filterKey }: FilterProps) => {
  const { displayValue, setIsExpanded, isExpanded, handleSelect } =
    useFilter(filterKey);

  return (
    <div className="relative flex flex-col flex-1 basis-full md:basis-1/3 lg:basis-1/5 xl:basis-1/6 justify-end">
      <h3 className="p-2 font-semibold text-[18px] whitespace-nowrap">
        {title}
      </h3>
      <div className="bg-white border-1 border-gray-400 rounded-md w-full overflow-hidden select-none">
        <div
          className="flex justify-between hover:bg-[#f3f3f3] p-2 cursor-pointer"
          onClick={() => setIsExpanded((prev) => !prev)}
        >
          <span>{displayValue}</span>
          <Image
            src="/chevron-down.svg"
            alt="icon"
            width={13}
            height={13}
            className={`${isExpanded && "rotate-180"}`}
          />
        </div>

        {isExpanded && (
          <div className="right-0 left-0 z-10 absolute bg-white border-1 border-gray-400 rounded-md overflow-hidden">
            {options.map(
              (option) =>
                option !== displayValue && (
                  <div
                    key={option}
                    onClick={() => handleSelect(option)}
                    className="hover:bg-[#f3f3f3] p-2 cursor-pointer select-none"
                  >
                    {option}
                  </div>
                )
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Filter;

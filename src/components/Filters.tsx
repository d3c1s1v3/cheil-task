"use client";

import Image from "next/image";
import { useState } from "react";

interface FilterI {
  heading: string;
  options: string[];
}

const filterData: FilterI[] = [
  {
    heading: "Sortuj po:",
    options: ["Wszystkie", "Cena", "Popularność"],
  },
  {
    heading: "Funkcje:",
    options: [
      "Wszystkie",
      "Drzwi AddWash",
      "Panel AI Control",
      "Silnik Inwerterowy",
      "Wyświetlacz elektroniczny",
    ],
  },
  {
    heading: "Klasa energetyczna:",
    options: ["Wszystkie", "A", "B", "D"],
  },
  {
    heading: "Pojemność:",
    options: ["Wszystkie", "8kg", "9kg", "10.5kg"],
  },
];

const Filters = () => {
  return (
    <div className="mx-auto w-3/4">
      <div className="flex justify-between gap-x-8 bg-[#f8f8f8] py-12">
        {filterData.map(({ heading, options }) => (
          <Filter key={heading} heading={heading} options={options} />
        ))}
      </div>
      <ResultCount count={20} />
    </div>
  );
};

export default Filters;

const Filter = ({ heading, options }: FilterI) => {
  const [expanded, setExpanded] = useState(false);
  const [selected, setSelected] = useState(options[0]);

  const handleSelect = (option: string) => {
    setSelected(option);
    setExpanded(false);
  };

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
            src="/Polygon 5.svg"
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

const ResultCount = ({ count }: { count: number }) => {
  return <p className="text-[14px]">Liczba wyników: {count}</p>;
};

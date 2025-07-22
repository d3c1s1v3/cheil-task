"use client";

import { ChangeEvent, useState } from "react";

import { useGlobalContext } from "@/contexts/GlobalContext";
import { filterOnSearch } from "@/lib/utils";
import Card from "@/components/Card/Card";
import Filters from "@/components/Filters/Filters";
import SearchBox from "@/components/SearchBox";
import useDebounce from "@/hooks/useDebounce";

export default function MainPage() {
  const { data } = useGlobalContext();

  const [searchQuery, setSearchQuery] = useState("");
  const debounceQuery = useDebounce(searchQuery, 300);

  const handleOnSearch = (e: ChangeEvent<HTMLInputElement>) =>
    setSearchQuery(e.target.value);

  const filterProducts = filterOnSearch(data, debounceQuery);

  return (
    <>
      <h1 className="bg-white mt-20 py-10 font-semibold text-[40px] text-center leading-14">
        Wybierz Urządzenie
      </h1>
      <SearchBox onSearch={handleOnSearch} searchQuery={searchQuery} />
      <Filters products={filterProducts} />
      <div className="gap-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 pt-12 w-3/4 mx-auto pb-6">
        {filterProducts.map((card, i) => (
          <Card key={card.model} {...card} index={i} />
        ))}
      </div>
    </>
  );
}

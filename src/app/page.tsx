"use client";

import data from "@/db.json";

// import { useGlobalContext } from "@/contexts/GlobalContext";
import { filterOnSearch } from "@/lib/utils";
import Card from "@/components/Card/Card";
import Filters from "@/components/Filters/Filters";
import SearchBox from "@/components/SearchBox";
import useSearch from "@/hooks/useSearch";

export default function MainPage() {
  // const { data } = useGlobalContext();
  const { handleOnSearch, searchQuery, debounceQuery } = useSearch();

  const filterProducts = filterOnSearch(data, debounceQuery);

  return (
    <main>
      <h1 className="bg-white mt-20 py-10 font-semibold text-[40px] text-center leading-14">
        Wybierz Urządzenie
      </h1>
      <SearchBox onSearch={handleOnSearch} searchQuery={searchQuery} />
      <Filters products={filterProducts} />
      <div className="gap-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mx-auto pt-12 pb-6 w-3/4">
        {filterProducts.map((product, i) => (
          <Card key={product.model} product={product} index={i} />
        ))}
      </div>
    </main>
  );
}

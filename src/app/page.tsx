"use client";

import { useGlobalContext } from "@/context/GlobalContext";
import Card from "@/components/Card";
import Filters from "@/components/Filters/Filters";
import SearchBox from "@/components/SearchBox";

export default function MainPage() {
  const { data } = useGlobalContext();
  return (
    <>
      <h1 className="bg-white mt-20 py-10 font-semibold text-[40px] text-center leading-14">
        Wybierz Urządzenie
      </h1>
      <SearchBox />
      <Filters />
      <div className="gap-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 pt-12 w-full">
        {data.map((card) => (
          <Card key={card.model} {...card} />
        ))}
      </div>
    </>
  );
}

"use client";

import Image from "next/image";

import Card from "@/components/Card/Card";
import Filters from "@/components/Filters/Filters";
import SearchBox from "@/components/SearchBox";
import { useGlobalContext } from "@/contexts/GlobalContext";

export default function MainPage() {
  const {
    handleSearchOnType,
    searchTerm,
    filteredProducts,
    loadMoreProducts,
    hasMoreProducts,
    backToTop,
    showbackToTopButton,
  } = useGlobalContext();

  return (
    <main className="relative">
      <h1 className="bg-white mt-20 py-10 font-semibold text-[40px] text-center leading-14">
        Wybierz Urządzenie
      </h1>
      <SearchBox search={handleSearchOnType} searchTerm={searchTerm} />
      <Filters />
      <div className="gap-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mx-auto pt-12 pb-6 w-3/4">
        {filteredProducts.map((product) => (
          <Card key={product.model} product={product} />
        ))}
      </div>
      {hasMoreProducts && (
        <div className="text-center py-4">
          <button
            className="text-blue-600 font-semibold cursor-pointer"
            onClick={loadMoreProducts}
          >
            Pokaż więcej
          </button>
        </div>
      )}
      {showbackToTopButton && (
        <button
          className="fixed bottom-10 right-10 border border-gray-400 p-2 rounded-full cursor-pointer animate-bounce"
          onClick={backToTop}
        >
          <Image src="/top.png" alt="return to top" width={30} height={30} />
        </button>
      )}
    </main>
  );
}

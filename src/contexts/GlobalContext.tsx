import {
  ChangeEvent,
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

import db from "@/db.json";
import { ProductT } from "@/lib/types";
import { searchOnType } from "@/lib/utils";

interface GlobalContextType {
  searchTerm: string;
  debounceQuery: string;
  filteredProducts: ProductT[];
  selectedFilters: { [key: string]: string | string[] };
  handleSearchOnType: (e: ChangeEvent<HTMLInputElement>) => void;
  handleFilterSelect: (filterKey: string, option: string) => void;
  loadMoreProducts: () => void;
  hasMoreProducts: boolean;
  totalProductCount: number;
  backToTop: () => void;
  showbackToTopButton: boolean;
}

const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

const DEBOUNCE_DELAY = 300;
const PAGE_SIZE = 12;

export const GlobalProvider = ({ children }: { children: ReactNode }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [debounceQuery, setDebounceQuery] = useState("");
  const [selectedFilters, setSelectedFilters] = useState<{
    [key: string]: string | string[];
  }>({});
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const [scrollPos, setScrollPos] = useState(0);

  const handleSearchOnType = (e: ChangeEvent<HTMLInputElement>) =>
    setSearchTerm(e.target.value);

  const handleFilterSelect = (filterKey: string, option: string) => {
    if (option === "Wszystkie") {
      setSelectedFilters((prevFilters) => {
        const newFilters = { ...prevFilters };
        delete newFilters[filterKey];
        return newFilters;
      });
    } else {
      setSelectedFilters((prevFilters) => ({
        ...prevFilters,
        [filterKey]: option,
      }));
    }
  };

  useEffect(() => {
    const debounceHandler = setTimeout(
      () => setDebounceQuery(searchTerm),
      DEBOUNCE_DELAY
    );
    return () => clearTimeout(debounceHandler);
  }, [searchTerm]);

  const allFilteredProducts = useMemo(() => {
    let products = searchOnType(db, debounceQuery);

    Object.entries(selectedFilters).forEach(([filterKey, filterValue]) => {
      if (filterKey === "price") {
        return;
      }
      products = products.filter((product) => {
        switch (filterKey) {
          case "features":
            return product.features?.includes(filterValue as string);
          case "energyClass":
            return product.energyClass === filterValue;
          case "capacity":
            return product.capacity === filterValue;
          default:
            return product[filterKey as keyof ProductT] === filterValue;
        }
      });
    });

    const sortByPrice = selectedFilters["price"];

    if (sortByPrice) {
      const sortedProducts = [...products];
      switch (sortByPrice) {
        case "Cena rosnąco":
          return sortedProducts.sort(
            (a, b) => Number(a.price) - Number(b.price)
          );

        case "Cena malejąco":
          return sortedProducts.sort(
            (a, b) => Number(b.price) - Number(a.price)
          );

        case "Popularność":
          return sortedProducts.sort(
            (a, b) => Number(b.popularity) - Number(a.popularity)
          );

        default:
          return sortedProducts;
      }
    }

    return products;
  }, [debounceQuery, selectedFilters]);

  const loadMoreProducts = () => setVisibleCount((prev) => prev + PAGE_SIZE);

  useEffect(() => {
    setVisibleCount(PAGE_SIZE);
  }, [debounceQuery, selectedFilters]);

  useEffect(() => {
    const handleScroll = () => setScrollPos(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollPos]);

  const showbackToTopButton = scrollPos > 1477;
  const backToTop = () => window.scroll({ top: 0, behavior: "smooth" });

  const filteredProducts = allFilteredProducts.slice(0, visibleCount);
  const totalProductCount = allFilteredProducts.length;
  const hasMoreProducts = visibleCount < totalProductCount;

  const value = {
    searchTerm,
    debounceQuery,
    filteredProducts,
    selectedFilters,
    handleSearchOnType,
    handleFilterSelect,
    loadMoreProducts,
    hasMoreProducts,
    totalProductCount,
    showbackToTopButton,
    backToTop,
  };

  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  const context = useContext(GlobalContext);
  if (context === undefined) {
    throw new Error("useGlobalContext must be used within a GlobalProvider");
  }
  return context;
};

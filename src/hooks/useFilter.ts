import { useState } from "react";

import { useGlobalContext } from "@/contexts/GlobalContext";

const useFilter = (filterKey: string) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const { handleFilterSelect, selectedFilters } = useGlobalContext();

  const displayValue = selectedFilters[filterKey] || "Wszystkie";

  const handleSelect = (option: string) => {
    handleFilterSelect(filterKey, option);
    setIsExpanded(false);
  };

  return {
    displayValue,
    isExpanded,
    setIsExpanded,
    handleFilterSelect,
    handleSelect,
  };
};

export { useFilter };

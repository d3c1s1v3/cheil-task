"use client";

import { useState } from "react";

const useFilters = ({ options }: { options: string[] }) => {
  const [expanded, setExpanded] = useState(false);
  const [selected, setSelected] = useState(options[0]);

  const handleSelect = (option: string) => {
    setSelected(option);
    setExpanded(false);
  };

  return {
    expanded,
    setExpanded,
    selected,
    handleSelect,
  };
};

export default useFilters;

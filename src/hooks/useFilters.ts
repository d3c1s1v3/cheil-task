import { useEffect, useRef, useState } from "react";

const useFilters = (options?: string[]) => {
  const defaultValue = options?.[0];

  const [expanded, setExpanded] = useState(false);
  const [selected, setSelected] = useState(defaultValue);
  const tabsRef = useRef<HTMLUListElement>(null);

  const handleSelect = (option: string) => {
    setSelected(option);
    setExpanded(false);
  };

  const handleClose = () => {
    setExpanded(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (tabsRef.current && !tabsRef.current.contains(event.target as Node)) {
        handleClose();
      }
    };

    if (expanded) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [expanded]);

  return {
    expanded,
    selected,
    setExpanded,
    handleSelect,
    handleClose,
    tabsRef,
  };
};

export default useFilters;

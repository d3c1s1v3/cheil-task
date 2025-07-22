import { useState, useEffect, ChangeEvent } from "react";

const DELAY = 300;

const useSearch = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [debounceQuery, setDebounceQuery] = useState("");

  const handleOnSearch = (e: ChangeEvent<HTMLInputElement>) =>
    setSearchQuery(e.target.value);

  useEffect(() => {
    const handler = setTimeout(() => setDebounceQuery(searchQuery), DELAY);
    return () => clearTimeout(handler);
  }, [searchQuery]);
  return {
    debounceQuery,
    handleOnSearch,
    searchQuery,
  };
};

export default useSearch;

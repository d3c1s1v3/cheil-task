"use client";

import { createContext, useContext, useState, PropsWithChildren } from "react";

import type { GlobalContextT } from "@/types";
import db from "@/db.json";

const GlobalContext = createContext<GlobalContextT | undefined>(undefined);

export const GlobalProvider = ({ children }: PropsWithChildren<{}>) => {
  const [data, setData] = useState(db);
  const [results, setResults] = useState(db.length);

  const value = {
    data,
    results,
    setData,
    setResults,
  };

  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  const context = useContext(GlobalContext);
  if (context === undefined) {
    throw new Error("useGlobalContext must be used within an GlobalProvider");
  }
  return context;
};

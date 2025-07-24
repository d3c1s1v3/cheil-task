import type { FilterT } from "@/lib/types";

export const filterTabs: FilterT[] = [
  {
    title: "Sortuj po:",
    filterKey: "price",
    options: ["Wszystkie", "Cena rosnąco", "Cena malejąco"],
  },
  {
    title: "Funkcje:",
    filterKey: "features",
    options: [
      "Wszystkie",
      "Drzwi AddWash",
      "Panel AI Control",
      "Silnik Inwerterowy",
      "Wyświetlacz Elektroniczny",
    ],
  },
  {
    title: "Klasa energetyczna:",
    filterKey: "energyClass",
    options: ["Wszystkie", "A", "B", "C", "D"],
  },
  {
    title: "Pojemność:",
    filterKey: "capacity",
    options: ["Wszystkie", "8kg", "9kg", "10.5kg"],
  },
];

import type { FilterT } from "@/lib/types";

export const filterTabs: FilterT[] = [
  {
    heading: "Sortuj po:",
    options: ["Wszystkie", "Cena", "Popularność"],
  },
  {
    heading: "Funkcje:",
    options: [
      "Wszystkie",
      "Drzwi AddWash",
      "Panel AI Control",
      "Silnik Inwerterowy",
      "Wyświetlacz elektroniczny",
    ],
  },
  {
    heading: "Klasa energetyczna:",
    options: ["Wszystkie", "A", "B", "D"],
  },
  {
    heading: "Pojemność:",
    options: ["Wszystkie", "8kg", "9kg", "10.5kg"],
  },
];

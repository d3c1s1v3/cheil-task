import { ProductT } from "./types";

export const filterOnSearch = (
  products: ProductT[],
  search: string
): ProductT[] => {
  if (!search.trim()) return products;
  const term = search.toLowerCase();
  return products.filter((product) =>
    Object.values(product).some((value) =>
      String(value).toLowerCase().includes(term)
    )
  );
};

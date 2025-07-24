export type FilterT = {
  title: string;
  filterKey: string;
  options: string[];
};

export type ProductT = {
  model: string;
  capacity: string;
  size: string;
  features: string[];
  energyClass: string;
  price: string;
  imageUrl: string;
  popularity: number;
};

export type GlobalContextT = {
  data: ProductT[];
};

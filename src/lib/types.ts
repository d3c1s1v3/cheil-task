import { Dispatch, SetStateAction } from "react";

export type FilterT = {
  heading: string;
  options: string[];
};

export type ProductT = {
  model: string;
  capacity: string;
  size: string;
  functions: string;
  energeticClass: string;
  price: string;
  imageUrl: string;
};

export type GlobalContextT = {
  data: ProductT[];
  setData: Dispatch<SetStateAction<ProductT[]>>;
};

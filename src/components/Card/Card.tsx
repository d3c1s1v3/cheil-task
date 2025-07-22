import Image from "next/image";

import { ProductT } from "@/lib/types";
import CardPrice from "./CardPrice";
import CardDetails from "./CardDetails";
import CardButton from "./CardButton";

type Props = {
  index?: number;
  onClick?: () => void;
  product: ProductT;
};

const Card = ({ onClick, product }: Props) => {
  return (
    <div className="flex flex-col items-center bg-white p-6">
      <Image
        src={product.imageUrl}
        alt={product.model}
        width={200}
        height={320}
      />
      <h3 className="self-start mt-4 font-semibold text-[18px]">
        {`${product.model}, Pralka
          ${product.functions.split(",")[0]}, ${product.capacity}, biała`}
      </h3>
      <div className="self-start mt-12 leading-6">
        <CardDetails type="capacity" value={product.capacity} />
        <CardDetails type="size" value={product.size} />
        <CardDetails type="functions" value={product.functions} />
        <CardDetails type="energeticClass" value={product.energeticClass} />
        <CardDetails type="priceValidityDate" value="15.09.2022 - 21-09.2022" />
        <CardPrice price={product.price} />
      </div>
      <CardButton onClick={onClick}>WYBIERZ</CardButton>
    </div>
  );
};

export default Card;

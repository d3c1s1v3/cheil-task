import Image from "next/image";

import { ProductT } from "@/lib/types";
import CardPrice from "./CardPrice";
import CardDetails from "./CardDetails";
import CardButton from "./CardButton";

type CardProps = {
  product: ProductT;
};

const Card = ({ product }: CardProps) => {
  return (
    <div className="flex flex-col items-center bg-white p-6 justify-between">
      <Image
        src={product.imageUrl}
        alt={product.model}
        width={200}
        height={320}
      />
      <h3 className="self-start mt-4 font-semibold text-[18px]">
        {`${product.model}, Pralka
          ${product.features.join(", ")}, ${product.capacity}, biała`}
      </h3>
      <div className="self-start mt-12 leading-6">
        <CardDetails type="capacity" value={product.capacity} />
        <CardDetails type="size" value={product.size} />
        <CardDetails type="features" value={product.features.join(", ")} />
        <CardDetails type="energyClass" value={product.energyClass} />
        <CardDetails type="priceValidityDate" value="15.09.2022 - 21-09.2022" />
        <CardPrice price={product.price} />
      </div>
      <CardButton />
    </div>
  );
};

export default Card;

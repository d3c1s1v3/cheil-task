import Image from "next/image";

import { ProductT } from "@/lib/types";
import CardPrice from "./CardPrice";
import CardDetails from "./CardDetails";
import CardButton from "./CardButton";

type Props = ProductT & {
  index?: number;
  onClick?: () => void;
};

const Card = ({ onClick, ...card }: Props) => {
  return (
    <div className="flex flex-col items-center bg-white p-6">
      <Image src={card.imageUrl} alt={card.model} width={200} height={320} />
      <h3 className="self-start mt-4 font-semibold text-[18px]">
        {`${card.model}, Pralka
          ${card.functions.split(",")[0]}, ${card.capacity}, biała`}
      </h3>
      <div className="self-start mt-12 leading-6">
        <CardDetails type="capacity" value={card.capacity} />
        <CardDetails type="size" value={card.size} />
        <CardDetails type="functions" value={card.functions} />
        <CardDetails type="energeticClass" value={card.energeticClass} />
        <CardDetails type="priceValidityDate" value="15.09.2022 - 21-09.2022" />
        <CardPrice price={card.price} />
      </div>
      <CardButton onClick={onClick}>WYBIERZ</CardButton>
    </div>
  );
};

export default Card;

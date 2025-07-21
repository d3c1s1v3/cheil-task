import Image from "next/image";

import { ProductT } from "@/types";

const Card = ({ ...card }: ProductT) => {
  return (
    <div className="flex flex-col items-center bg-white p-6">
      <Image src={card.imageUrl} alt={card.model} width={200} height={320} />
      <h3 className="self-start mt-4 font-semibold text-[18px]">
        {card.model}, Pralka <br /> {card.functions.split(",")[0]},{" "}
        {card.capacity}, biała
      </h3>
      <div className="self-start mt-12 leading-6">
        <p className="text-[#767676] text-[12px]">
          Pojemność (kg):{" "}
          <span className="font-semibold text-black">{card.capacity}</span>
        </p>
        <p className="text-[#767676] text-[12px]">
          Wymiary (GxSxW):{" "}
          <span className="font-semibold text-black">{card.size}</span>
        </p>
        <p className="text-[#767676] text-[12px]">
          Funkcje:{" "}
          <span className="font-semibold text-black">{card.functions}</span>
        </p>
        <p className="mt-8 text-[#767676] text-[12px]">
          Klasa energetyczna:{" "}
          <span className="bg-[#009949] ml-2 pr-9 pl-1 text-white text-left [clip-path:polygon(0_0,87%_0,100%_50%,87%_100%,0_100%,0%_50%)]">
            {card.energeticClass}
          </span>
        </p>
        <p className="mt-8 text-[#767676] text-[12px]">
          Cena obowiązuje: 15.09.2022 - 21-09.2022
        </p>
      </div>
    </div>
  );
};

export default Card;

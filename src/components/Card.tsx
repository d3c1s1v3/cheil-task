"use client";

import { useGlobalContext } from "@/context/GlobalContext";

const Card = () => {
  const { data } = useGlobalContext();
  return (
    <div>
      <img src={data[0].imageUrl} alt="" />
    </div>
  );
};

export default Card;

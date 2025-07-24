import { useState } from "react";

const CardButton = () => {
  const [isSelected, setIsSelected] = useState(false);

  const handleSelectClick = () => setIsSelected(!isSelected);

  return (
    <div className="mt-12 text-center w-full flex justify-center">
      <button
        onClick={handleSelectClick}
        className={`cursor-pointer text-[14px]  rounded-full text-white px-12 py-2 tracking-widest transition-colors ${
          isSelected
            ? "bg-[#1c1c1c] text-white"
            : "bg-[#1428A0] text-white hover:bg-[#0f1f8a]"
        }`}
      >
        {isSelected ? "Wybrane" : "Wybierz"}
      </button>
    </div>
  );
};

export default CardButton;

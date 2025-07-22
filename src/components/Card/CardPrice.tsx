type Props = {
  price: string;
};

const CardPrice = ({ price }: Props) => {
  return (
    <div className="flex items-center mt-4">
      <span className="text-[40px] font-semibold">{price}</span>
      <div className="flex flex-col items-end justify-center text-[14px] leading-4 font-medium ml-1">
        <span>00</span>
        <span>zł</span>
      </div>
    </div>
  );
};

export default CardPrice;

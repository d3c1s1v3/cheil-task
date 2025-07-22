type Props = {
  onClick?: () => void;
  children?: React.ReactNode;
};

const CardButton = ({ onClick, children }: Props) => {
  return (
    <div className="mt-12 text-center w-full flex justify-center">
      <button
        onClick={onClick}
        className="cursor-pointer text-[14px] bg-[#1428A0] rounded-full text-white px-12 py-2 tracking-widest hover:bg-[#0f1f8a] transition-colors"
      >
        {children}
      </button>
    </div>
  );
};

export default CardButton;

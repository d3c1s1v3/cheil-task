type DetailType =
  | "capacity"
  | "size"
  | "functions"
  | "energeticClass"
  | "priceValidityDate";

type Props = {
  type: DetailType;
  value: string;
};

const CardDetails = ({ type, value }: Props) => {
  const getDetailConfig = (type: DetailType) => {
    const configs = {
      capacity: {
        label: "Pojemność (kg):",
        className: "text-[#767676] text-[12px]",
        valueClassName: "font-semibold text-black",
      },
      size: {
        label: "Wymiary:",
        className: "text-[#767676] text-[12px]",
        valueClassName: "font-semibold text-black",
      },
      functions: {
        label: "Funkcje:",
        className: "text-[#767676] text-[12px]",
        valueClassName: "font-semibold text-black",
      },
      energeticClass: {
        label: "Klasa energetyczna:",
        className: "mt-8 text-[#767676] text-[12px]",
        valueClassName:
          "bg-[#009949] ml-2 pr-9 pl-1 text-white text-left [clip-path:polygon(0_0,87%_0,100%_50%,87%_100%,0_100%,0%_50%)]",
      },
      priceValidityDate: {
        label: "Cena obowiązuje:",
        className: "mt-8 text-[#767676] text-[12px]",
        valueClassName: "",
      },
    };
    return configs[type];
  };
  const config = getDetailConfig(type);
  return (
    <p className={config.className}>
      {config.label} <span className={config.valueClassName}>{value}</span>
    </p>
  );
};

export default CardDetails;

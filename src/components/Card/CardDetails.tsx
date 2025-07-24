type DetailType =
  | "capacity"
  | "size"
  | "features"
  | "energyClass"
  | "priceValidityDate";

type CardDetailsProps = {
  type: DetailType;
  value: string | string[];
};

const energyClassColors: { [key: string]: string } = {
  A: "bg-[#009949]",
  B: "bg-[#20ac4a]",
  C: "bg-[#55bb47]",
  D: "bg-[#c6d43a]",
};

const getEnergyClassBg = (value: string | string[]) => {
  const energyValue = Array.isArray(value) ? value[0] : value;
  return energyClassColors[energyValue] || "bg-gray-400";
};

const detailConfigs = {
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
  features: {
    label: "Funkcje:",
    className: "text-[#767676] text-[12px]",
    valueClassName: "font-semibold text-black",
  },
  energyClass: {
    label: "Klasa energetyczna:",
    className: "mt-8 text-[#767676] text-[12px]",
    getValueClassName: (value: string | string[]) =>
      `${getEnergyClassBg(
        value
      )} ml-2 pr-9 pl-1 text-white text-left [clip-path:polygon(0_0,87%_0,100%_50%,87%_100%,0_100%,0%_50%)]`,
  },
  priceValidityDate: {
    label: "Cena obowiązuje:",
    className: "mt-8 text-[#767676] text-[12px]",
    valueClassName: "",
  },
};

const CardDetails = ({ type, value }: CardDetailsProps) => {
  const config = detailConfigs[type];

  if (!config) {
    return null;
  }
  const displayValue = Array.isArray(value) ? value.join(", ") : value;

  const valueClassName =
    "getValueClassName" in config
      ? config.getValueClassName(value)
      : config.valueClassName;

  return (
    <p className={config.className}>
      {config.label} <span className={valueClassName}>{displayValue}</span>
    </p>
  );
};

export default CardDetails;

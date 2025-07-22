type Props = {
  options: string[];
  handleSelect: (option: string) => void;
  tabsRef: React.RefObject<HTMLUListElement | null>;
};

const FilterTabs = ({ options, handleSelect, tabsRef }: Props) => {
  return (
    <ul
      ref={tabsRef}
      className="right-0 left-0 z-10 absolute bg-white border-1 border-gray-400 rounded-md overflow-hidden"
    >
      {options.map((option) => (
        <li
          key={option}
          onClick={() => handleSelect(option)}
          className="hover:bg-[#f3f3f3] p-2 cursor-pointer select-none"
        >
          {option}
        </li>
      ))}
    </ul>
  );
};

export default FilterTabs;

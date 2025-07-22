import { ChangeEvent } from "react";

type Props = {
  onSearch: (e: ChangeEvent<HTMLInputElement>) => void;
  searchQuery: string;
};

const SearchBox = ({ onSearch, searchQuery }: Props) => {
  return (
    <div className="flex justify-center pt-8 placeholder:text-[14px]">
      <input
        value={searchQuery}
        onChange={onSearch}
        type="text"
        placeholder="Search"
        className="bg-white px-4 py-2 border-1 focus:border-gray-400 border-transparent rounded-md outline-none"
      />
    </div>
  );
};

export default SearchBox;

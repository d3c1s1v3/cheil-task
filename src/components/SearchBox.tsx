import { ChangeEvent } from "react";

type SearchBoxProps = {
  search: (e: ChangeEvent<HTMLInputElement>) => void;
  searchTerm: string;
};

const SearchBox = ({ search, searchTerm }: SearchBoxProps) => {
  return (
    <div className="flex justify-center pt-8 placeholder:text-[14px]">
      <input
        value={searchTerm}
        onChange={search}
        type="text"
        placeholder="Search"
        className="bg-white px-4 py-2 border-1 focus:border-gray-400 border-transparent rounded-md outline-none"
      />
    </div>
  );
};

export default SearchBox;

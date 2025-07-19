import Filters from "@/components/Filters";
import SearchBox from "@/components/SearchBox";

export default function MainPage() {
  return (
    <>
      <h1 className="text-center font-semibold text-[40px] leading-14 mt-20 py-10 bg-white">
        Wybierz Urządzenie
      </h1>
      <SearchBox />
      <Filters />
    </>
  );
}

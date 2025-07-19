import Card from "@/components/Card";
import Filters from "@/components/Filters/Filters";
import SearchBox from "@/components/SearchBox";

export default function MainPage() {
  return (
    <>
      <h1 className="bg-white mt-20 py-10 font-semibold text-[40px] text-center leading-14">
        Wybierz Urządzenie
      </h1>
      <SearchBox />
      <Filters />
      <Card />
    </>
  );
}

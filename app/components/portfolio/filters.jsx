"use client";
import FilterButton from "./filter-button";
import { useAppContext } from "@/app/context/context";
import { spaceGrotesk } from "../utilities/fonts";
export default function Filters() {
  const { tags, currentFilters, setCurrentFilter } = useAppContext();

  const handleClick = (e) => {
    if (currentFilters.includes(e)) {
      const newFilters = currentFilters.filter((el) => el !== e);
      setCurrentFilter(newFilters);
    } else {
      setCurrentFilter([...currentFilters, e]);
    }
  };
  const handleClearFilters = () => {
    setCurrentFilter([]);
  };
  return (
    <div className="flex justify-start gap-2 mb-3 flex-wrap items-start">
      {tags.map((e, index) => {
        return (
          <FilterButton
            key={index}
            name={e}
            onClick={() => {
              handleClick(e);
            }}
            active={currentFilters.includes(e)}
          />
        );
      })}
      <div className="min-h-12 items-center flex">
        {currentFilters.length > 0 ? (
          <button
            className={` border uppercase px-2 py-1 ${spaceGrotesk.className}`}
            onClick={handleClearFilters}
          >
            Wyczyść filtry
          </button>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

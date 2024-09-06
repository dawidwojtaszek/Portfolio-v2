"use client";
import FilterButton from "./filter-button";
import { useAppContext } from "@/app/context/context";

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

  return (
    <div className="flex justify-start gap-2 mb-3 flex-wrap">
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
    </div>
  );
}

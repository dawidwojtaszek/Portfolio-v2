"use client";
import { useAppContext } from "@/app/context/context";
const Tags = ({ tags }) => {
  const { currentFilters } = useAppContext();
  return (
    <div className="flex gap-1 my-2 flex-wrap">
      {tags.map((t, index) => (
        <div
          className={`${
            currentFilters.includes(t)
              ? "border  border-green font-bold text-green "
              : "bg-green"
          } py-1 px-2 rounded-md text-white`}
          key={index}
        >
          {t}
        </div>
      ))}
    </div>
  );
};

export default Tags;

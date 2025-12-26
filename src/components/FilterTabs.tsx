import { useState } from "react";
import { cn } from "@/lib/utils";

const FilterTabs = () => {
  const [activeFilter, setActiveFilter] = useState("الكل");

  const filters = [
    { id: "الكل", label: "الكل" },
    { id: "جهة حكومية", label: "جهة حكومية" },
    { id: "شركة مملوكة للدولة", label: "شركة مملوكة للدولة" },
  ];

  return (
    <section className="py-6 sm:py-8 px-4 sm:px-6" dir="rtl">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-6">
          <h2 className="text-base sm:text-lg md:text-xl font-bold text-foreground">
            نوعية التشريع
          </h2>
          <div className="flex flex-wrap gap-2 sm:gap-3 p-1 rounded-full bg-white w-full sm:w-fit">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={cn(
                  "px-3 sm:px-4 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 whitespace-nowrap",
                  activeFilter === filter.id
                    ? "bg-primary text-primary-foreground shadow-md"
                    : "bg-transparent text-gray-700 hover:bg-gray-100"
                )}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FilterTabs;

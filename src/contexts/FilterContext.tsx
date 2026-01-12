import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";

interface FilterContextType {
  selectedType: string;
  setSelectedType: (type: string) => void;
}

const FilterContext = createContext<FilterContextType | undefined>(undefined);

export const FilterProvider = ({ children }: { children: ReactNode }): JSX.Element => {
  const [selectedType, setSelectedType] = useState("الكل");

  return (
    <FilterContext.Provider value={{ selectedType, setSelectedType }}>
      {children}
    </FilterContext.Provider>
  );
};

export const useFilter = () => {
  const context = useContext(FilterContext);
  if (context === undefined) {
    throw new Error("useFilter must be used within a FilterProvider");
  }
  return context;
};

import { useState } from "react";
import Check from "@/assets/check.svg";

const CustomCheckbox = ({ checked }) => {
   return (
      <span
         className={`flex justify-center items-center min-w-[30px] min-h-[30px] rounded-3xl cursor-pointer
        ${checked ? "" : "hover:bg-green-hover"}`}
      >
         <span
            className={`flex justify-center items-center w-[17px] h-[17px] border border-green-title rounded-md transition-colors
            ${checked ? "bg-green-title" : "bg-transparent"}`}
         >
            {checked && <img src={Check} alt="Checked" className="w-3 h-3" />}
         </span>
      </span>
   );
};

const FilterOptions = ({ onChange, filtersData = [] }) => {
   const [selectedIds, setSelectedIds] = useState([]);

   const toggleFilter = (filter) => {
      let newSelected;
      if (selectedIds.includes(filter.id)) {
         newSelected = selectedIds.filter((id) => id !== filter.id);
      } else {
         newSelected = [...selectedIds, filter.id];
      }
      setSelectedIds(newSelected);
      const selectedFilters = filtersData.filter((f) =>
         newSelected.includes(f.id)
      );
      onChange?.(selectedFilters);
   };

   return (
      <div className="flex flex-col gap-2">
         {filtersData.map((filter) => {
            const checked = selectedIds.includes(filter.id);
            return (
               <label
                  key={filter.id}
                  className="flex items-center cursor-pointer select-none"
               >
                  <input
                     type="checkbox"
                     checked={checked}
                     onChange={() => toggleFilter(filter)}
                     className="sr-only"
                  />
                  <CustomCheckbox checked={checked} />
                  <span className="capitalize">{filter.name}</span>
               </label>
            );
         })}
      </div>
   );
};

export default FilterOptions;

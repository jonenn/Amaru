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
   const [selected, setSelected] = useState(null);

   const selectFilter = (filter) => {
      setSelected(filter.id);
      onChange?.(filter);
      console.log(filter.id);
   };

   return (
      <div className="flex flex-col gap-2">
         {filtersData.map((filter) => {
            const checked = selected === filter.id;
            return (
               <label
                  key={filter.id}
                  className="flex items-center cursor-pointer select-none"
               >
                  <input
                     type="radio"
                     checked={checked}
                     onChange={() => selectFilter(filter)}
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

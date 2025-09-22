import { useSelector } from 'react-redux';
import Check from '@/assets/check.svg';

const CustomCheckbox = ({ checked }) => {
   return (
      <span
         className={`flex justify-center items-center min-w-[30px] min-h-[30px] rounded-3xl cursor-pointer
        ${checked ? '' : 'hover:bg-green-hover'}`}
      >
         <span
            className={`flex justify-center items-center w-[17px] h-[17px] border border-green-title rounded-md transition-colors
            ${checked ? 'bg-green-title' : 'bg-transparent'}`}
         >
            {checked && <img src={Check} alt="Checked" className="w-3 h-3" />}
         </span>
      </span>
   );
};

const FilterOptions = ({
   filtersData = [],
   filterKey,
   localSelected,
   setLocalSelected,
}) => {
   const selected = localSelected?.[filterKey] || [];

   const toggle = (filter) => {
      setLocalSelected((prev) => {
         const current = prev[filterKey] || [];
         const exists = current.includes(filter.name);
         return {
            ...prev,
            [filterKey]: exists
               ? current.filter((f) => f !== filter.name)
               : [...current, filter.name],
         };
      });
   };

   return (
      <div className="flex flex-col gap-2">
         {filtersData.map((filter) => {
            const checked = selected.includes(filter.name);
            return (
               <label
                  key={filter.id || filter.name}
                  className="flex items-center cursor-pointer select-none gap-2"
               >
                  <input
                     type="checkbox"
                     checked={checked}
                     onChange={() => toggle(filter)}
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

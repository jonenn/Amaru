import Arrow from "@/assets/arrow.svg";
import { useState } from "react";
import FilterOptions from "./FilterOptions";

const Accordion = ({ title, children, filters }) => {
   const [open, setOpen] = useState(false);

   return (
      <>
         <div
            className="flex border-b-1 border-black-divisor w-full justify-between cursor-pointer"
            onClick={() => setOpen(!open)}
         >
            <div className="relative leading-[2.4] tracking-tightest">
               Cliente
            </div>
            <img
               src={Arrow}
               alt=""
               className={`transition-transform duration-300 ${
                  open ? "rotate-180" : "rotate-0"
               }`}
            />
         </div>
         <div
            className={`flex overflow-hidden transition-[max-height] duration-300 ease-in-out ${
               open ? "h-auto m-2" : "h-0 m-0"
            }`}
         >
            <FilterOptions filtersData={filters} />
         </div>
      </>
   );
};

export default Accordion;

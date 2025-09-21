import Filter from "@/assets/filter.svg";
import { useState } from "react";
import PrimaryButton from "@/components/PrimaryButton";
import Accordion from "./Accordion";

const stateFilters = [
   { id: "cumplido", label: "Cumplido" },
   { id: "extemporaneo", label: "Cumplido extemporaneo" },
];

const handleStateChange = (selected) => {
   console.log("Active filters:", selected);
};

const Searchbar = () => {
   const [filterOpen, setFilterOpen] = useState(false);
   const [accordionOpen, setAccordionOpen] = useState(false);

   const handleOpen = () => {
      setFilterOpen(!filterOpen);
      console.log("It is working!");
   };

   return (
      <div className="flex gap-4 my-4 w-full">
         <input
            type="search"
            id="searchbar"
            name="searchbar"
            placeholder="Buscar"
            className="border border-gray-secondary rounded-[10px] px-3 py-2 w-1/3 bg-[url('/src/assets/search.svg')] bg-no-repeat pl-11 bg-[length:24px] bg-[position:12px_center]  placeholder-gray-tertiary text-black-search focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-tertiary bg-white"
         />
         <div className="flex relative w-1/4">
            <button
               className="flex border w-full border-gray-secondary rounded-[10px] px-3 py-2 text-gray-tertiary gap-2.5 bg-white cursor-pointer"
               onClick={handleOpen}
            >
               <img src={Filter} alt="Filter button" width={24} />
               <p className="">Filtrar por</p>
            </button>
            <div
               className={`absolute flex flex-col top-[3rem] right-0 left-0 bg-white px-4 py-3 shadow-[0_4px_4px_0_rgba(87,87,87,0.1)] text-sm gap-3 transform transition-all duration-300 origin-top
                  ${
                     filterOpen
                        ? "opacity-100 scale-100"
                        : "opacity-0 scale-95 pointer-events-none"
                  }
               `}
            >
               <Accordion filters={stateFilters} />
               <PrimaryButton>Aplicar Filtros</PrimaryButton>
            </div>
         </div>
      </div>
   );
};

export { Searchbar };

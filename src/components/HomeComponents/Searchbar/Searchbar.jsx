import { useEffect, useState } from "react";
import PrimaryButton from "@/components/PrimaryButton";
import Accordion from "./Accordion";
import FilterOptions from "./FilterOptions";
import getDemands from "@/services/demands";
import SearchInput from "./SearchInput";
import FilterButton from "./FilterButton";
import { useDispatch, useSelector } from "react-redux";
import { setCardData } from "@/features/cards/cardsSlice";

const Searchbar = () => {
   const [filterOpen, setFilterOpen] = useState(false);
   const [demands, setDemands] = useState([]);
   const [openAccordion, setOpenAccordion] = useState(null);
   const dispatch = useDispatch();
   const selectedFilters = useSelector((state) => state.filtering);

   useEffect(() => {
      const getAllDemands = async () => {
         try {
            const [typesRes, statusesRes, clientsRes] = await Promise.all([
               getDemands("/available_demand_types"),
               getDemands("/available_statuses"),
               getDemands("/available_clients"),
            ]);

            const demandsFilters = [
               { title: "Cliente", key: "client", options: clientsRes },
               { title: "Estado", key: "status", options: statusesRes },
               { title: "Tipo", key: "demandType", options: typesRes },
            ];
            setDemands(demandsFilters);
         } catch (err) {
            console.error(err);
         }
      };

      getAllDemands();
   }, []);

   const applyFilters = async () => {
      setFilterOpen(false);
      const params = new URLSearchParams();

      Object.entries(selectedFilters).forEach(([key, values]) => {
         if (Array.isArray(values)) {
            values.forEach((v) => params.append(key, v));
         }
      });

      const query = params.toString();
      console.log("Applied filters:", query);

      const res = await getDemands(`/demands?${query}`);
      dispatch(setCardData(res));
   };

   const hasFilters = Object.values(selectedFilters).flat().length > 0;

   // handle closing when clicking overlay
   const handleOverlayClick = () => setFilterOpen(false);

   return (
      <div className="flex gap-4 m-4 md:mx-0 my-4">
         <SearchInput />
         <div className="flex relative md:w-1/4">
            <FilterButton onClick={() => setFilterOpen(!filterOpen)} />
            {filterOpen && (
               <div
                  className="fixed inset-0 bg-black/30 md:hidden z-40"
                  onClick={handleOverlayClick}
               />
            )}

            <div
               className={`
            fixed md:absolute flex flex-col bottom-0 md:bottom-auto md:top-[3rem] right-0 left-0 bg-white px-2 py-3
            shadow-[0_4px_4px_0_rgba(87,87,87,0.1)] text-sm transform transition-all duration-300 origin-top md:rounded-lg gap-3 max-h-[80vh] z-50
            ${
               filterOpen
                  ? "opacity-100 translate-y-0 scale-100"
                  : "opacity-0 translate-y-full scale-95 pointer-events-none"
            }
            md:${
               filterOpen
                  ? "opacity-100 scale-100 translate-y-0"
                  : "opacity-0 scale-95 pointer-events-none"
            }
          `}
               onClick={(e) => e.stopPropagation()}
            >
               {demands?.map((item) => (
                  <Accordion
                     key={item.title}
                     title={item.title}
                     isOpen={openAccordion === item.title}
                     onToggle={() =>
                        setOpenAccordion(
                           openAccordion === item.title ? null : item.title
                        )
                     }
                  >
                     <FilterOptions
                        filtersData={item.options}
                        filterKey={item.key}
                     />
                  </Accordion>
               ))}

               <div className="bg-white sticky bottom-0 flex gap-2">
                  <PrimaryButton
                     className="w-full rounded-md"
                     onClick={applyFilters}
                     disabled={!hasFilters}
                  >
                     Aplicar Filtros
                  </PrimaryButton>
               </div>
            </div>
         </div>
      </div>
   );
};

export { Searchbar };

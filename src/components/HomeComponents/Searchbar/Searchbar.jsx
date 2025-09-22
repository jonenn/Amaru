import { useEffect, useState } from "react";
import PrimaryButton from "@/components/PrimaryButton";
import Accordion from "./Accordion";
import FilterOptions from "./FilterOptions";
import getDemands from "@/services/demands";
import SearchInput from "./SearchInput";
import FilterButton from "./FilterButton";
import { useDispatch } from "react-redux";
import { setCardData } from "@/features/cards/cardsSlice";

const Searchbar = () => {
   const [filterOpen, setFilterOpen] = useState(false);
   const [demands, setDemands] = useState([]);
   const [openAccordion, setOpenAccordion] = useState(null);
   const [selectedFilters, setSelectedFilters] = useState({});
   const dispatch = useDispatch();

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

   const handleFilterChange = (key, filter) => {
      setSelectedFilters((prev) => ({
         ...prev,
         [key]: filter.name,
      }));
   };

   const applyFilters = async () => {
      const query = new URLSearchParams(selectedFilters).toString();
      const res = await getDemands(`/demands?${query}`);
      console.log("Filtered results:", res);
      dispatch(setCardData(res));
   };

   return (
      <div className="flex gap-4 my-4 w-full">
         <SearchInput />
         <div className="flex relative w-1/4">
            <FilterButton onClick={() => setFilterOpen(!filterOpen)} />
            <div
               className={`absolute flex flex-col top-[3rem] right-0 left-0 bg-white px-2 py-3 shadow-[0_4px_4px_0_rgba(87,87,87,0.1)] text-sm transform transition-all duration-300 origin-top rounded-lg gap-3 max-h-[80vh]
      ${
         filterOpen
            ? "opacity-100 scale-100"
            : "opacity-0 scale-95 pointer-events-none"
      }
   `}
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
                        onChange={(filter) =>
                           handleFilterChange(item.key, filter)
                        }
                     />
                  </Accordion>
               ))}

               <div className="bg-white sticky bottom-0">
                  <PrimaryButton
                     className="w-full rounded-md"
                     onClick={applyFilters}
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

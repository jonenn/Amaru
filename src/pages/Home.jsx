import { Card } from "@/components/HomeComponents/Card/Card";
import { Header } from "@/components/HomeComponents/header/Header";
import Modal from "@/components/HomeComponents/Modal/Modal";
import { Searchbar } from "@/components/HomeComponents/Searchbar/Searchbar";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useMemo, useState } from "react";
import getDemands from "@/services/demands";
import { setCardData } from "@/features/cards/cardsSlice";
import { setOpenModal } from "@/features/modal/modalSlice";
import {
   clearFilters,
   toggleFilter,
} from "@/features/filtering/filteringSlice";

const Home = () => {
   const openModal = useSelector((state) => state.modal.open);
   const cardData = useSelector((state) => state.cards.items);
   const searchTerm = useSelector((state) => state.searching.value);
   const filters = useSelector((state) => state.filtering);
   const [modalContent, setModalContent] = useState({});
   const dispatch = useDispatch();
   console.log("this is rtk", cardData);
   console.log("this is modal", openModal);

   useEffect(() => {
      if (openModal) {
         document.body.classList.add("h-screen", "overflow-hidden");
      } else {
         document.body.classList.remove("h-screen", "overflow-hidden");
      }
   }, [openModal]);

   useEffect(() => {
      const getAllDemands = async () => {
         try {
            const data = await getDemands("demands");
            dispatch(setCardData(data));
         } catch (error) {
            console.error(err);
         }
      };

      getAllDemands();
   }, []);

   const handleClick = (id) => {
      dispatch(setOpenModal());
      console.log(id);
      const content = cardData.find((item) => item.id === id);
      console.log(content);
      setModalContent(content);
   };

   const filteredCards = useMemo(() => {
      if (!searchTerm) return cardData;

      return cardData.filter((card) =>
         Object.values(card).some((value) =>
            String(value).toLowerCase().includes(searchTerm.toLowerCase())
         )
      );
   }, [cardData, searchTerm]);

   const activeFilters = Object.entries(filters).flatMap(([key, values]) =>
      values.map((value) => {
         console.log(value);
         return { key, value };
      })
   );

   return (
      <main className="flex flex-col gap-1.5 md:my-11 md:mx-7">
         <Header />
         <Searchbar />
         {activeFilters.length > 0 && (
            <div className="flex flex-wrap items-center gap-2 mb-4 justify-between my-2 ml-4">
               <button
                  onClick={() => dispatch(clearFilters())}
                  className="text-red-filter font-normal cursor-pointer"
               >
                  Limpiar filtros
               </button>
               <div className="flex gap-2 flex-wrap">
                  {activeFilters.map(({ key, value }) => (
                     <span
                        key={`${key}-${value}`}
                        className="flex items-center bg-green-filter text-white py-2 pl-4 pr-4 rounded-4xl tracking-tightest leading-4 font-normal gap-2 capitalize cursor-pointer max-h-min"
                        onClick={() =>
                           dispatch(
                              toggleFilter({ key, filter: { name: value } })
                           )
                        }
                     >
                        {value}
                        <span className="ml-1 text-white hover:text-gray-200">
                           ×
                        </span>
                     </span>
                  ))}
               </div>
            </div>
         )}
         <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 gap-3 mx-2.5 md:mx-0">
            {filteredCards?.map((demand) => (
               <Card
                  key={demand.id}
                  content={demand}
                  onClick={() => {
                     handleClick(demand.id);
                  }}
               />
            ))}
         </div>
         {openModal && modalContent && (
            <div className="fixed inset-0 flex">
               <div
                  className="absolute inset-0 bg-black/30 cursor-pointer animate-fade-in"
                  onClick={handleClick}
               />
               <div
                  className={`
    relative ml-auto bg-white w-full md:w-2/5 h-full cursor-default py-10 px-5 gap-1.5
    animate-slide-in-mobile md:animate-slide-in
  `}
                  onClick={(e) => e.stopPropagation()}
               >
                  <Modal content={modalContent} />
               </div>
            </div>
         )}
      </main>
   );
};

export default Home;

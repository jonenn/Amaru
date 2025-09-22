import { Card } from "@/components/HomeComponents/Card/Card";
import { Header } from "@/components/HomeComponents/header/Header";
import Modal from "@/components/HomeComponents/Modal/Modal";
import { Searchbar } from "@/components/HomeComponents/Searchbar/Searchbar";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useMemo, useState } from "react";
import getDemands from "@/services/demands";
import { setCardData } from "@/features/cards/cardsSlice";
import { setOpenModal } from "@/features/modal/modalSlice";

const Home = () => {
   const openModal = useSelector((state) => state.modal.open);
   const cardData = useSelector((state) => state.cards.items);
   const [modalContent, setModalContent] = useState({});
   const [searchTerm, setSearchTerm] = useState("");
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

   return (
      <main className="flex flex-col gap-1.5 my-11 mx-7">
         <Header />
         <Searchbar onSearch={setSearchTerm} />
         <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 gap-3">
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
                  className={`
            absolute inset-0 bg-black/30 cursor-pointer
            ${openModal ? "animate-fade-in" : "animate-fade-out"}
         `}
                  onClick={handleClick}
               />
               <div
                  className={`
            relative ml-auto bg-white w-2/5 h-full cursor-default py-10 px-5 gap-1.5
            ${openModal && "animate-slide-in"}
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

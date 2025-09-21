import { Card } from '@/components/HomeComponents/Card/Card';
import { Header } from '@/components/HomeComponents/header/Header';
import { Searchbar } from '@/components/HomeComponents/Searchbar/Searchbar';
import { useState } from 'react';

const Home = () => {
   const [openModal, setOpenModal] = useState(false);

   const handleClick = (id) => {
      setOpenModal(true);
   };

   return (
      <main className="flex flex-col gap-1.5 my-11 mx-7">
         <Header />
         <Searchbar />
         <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 gap-3">
            {[1, 2, 3, 4, 5, 6].map((num, index) => (
               <Card
                  key={num}
                  onClick={() => {
                     handleClick(index);
                  }}
               />
            ))}
         </div>
         {openModal && (
            <div
               className="absolute inset-0 bg-black/30 cursor-pointer"
               onClick={() => setOpenModal(false)}
            >
               <div
                  className="flex ml-auto mr-0 bg-white w-2/5 h-full cursor-default"
                  onClick={(e) => e.stopPropagation()}
               >
                  Modal here!
               </div>
            </div>
         )}
      </main>
   );
};

export default Home;

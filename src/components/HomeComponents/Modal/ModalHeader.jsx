import Close from '@/assets/close.svg';

const ModalHeader = ({ title }) => {
   const closeModal = () => {
      console.log('Close modal');
   };

   return (
      <div className="flex justify-between">
         <h3 className="text-green-title font-bold text-xl leading-[2.4]">
            {title}
         </h3>
         <div className="cursor-pointer" onClick={closeModal}>
            <img src={Close} alt="Details" />
         </div>
      </div>
   );
};

export { ModalHeader };

import Close from "@/assets/close.svg";
import { setOpenModal } from "@/features/modal/modalSlice";
import { useDispatch } from "react-redux";

const ModalHeader = ({ title }) => {
   const dispatch = useDispatch();
   const closeModal = () => {
      dispatch(setOpenModal());
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

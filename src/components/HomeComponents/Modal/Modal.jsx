import { DemandBody } from "@/components/HomeComponents/DemandBody";
import { ModalHeader } from "./ModalHeader";
import { Tag } from "@/components/HomeComponents/Tag";
import { setOpenModal } from "@/features/modal/modalSlice";
import { useDispatch } from "react-redux";
import Files from "./Files";
import PrimaryButton from "@/components/PrimaryButton";
import SecondaryButton from "@/components/SecondaryButton";

const Modal = ({
   content: { name, demandType, status, client, description, documents },
}) => {
   const dispatch = useDispatch();

   return (
      <div to="#" className="flex flex-col bg-white gap-2.5 h-full">
         <ModalHeader title={name} />
         <div className="flex flex-wrap gap-2.5">
            <Tag label={demandType} />
            <Tag label={status} />
         </div>
         <div className="flex flex-col justify-between h-full">
            <DemandBody customer={client} description={description} />
            <div className="flex flex-col gap-9">
               <Files documents={documents} />
               <div className="flex justify-end gap-3">
                  <PrimaryButton>Resolver Demanda</PrimaryButton>
                  <SecondaryButton onClick={() => dispatch(setOpenModal())}>
                     Cancelar
                  </SecondaryButton>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Modal;

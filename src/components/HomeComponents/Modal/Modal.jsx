import { DemandBody } from "@/components/HomeComponents/DemandBody";
import { ModalHeader } from "./ModalHeader";
import { Tag } from "@/components/HomeComponents/Tag";

const Modal = ({
   content: { name, demandType, status, client, description },
}) => {
   return (
      <div to="#" className="flex flex-col bg-white gap-2.5">
         <ModalHeader title={name} />
         <div className="flex flex-wrap gap-2.5">
            <Tag label={demandType} />
            <Tag label={status} />
         </div>
         <DemandBody customer={client} description={description} />
      </div>
   );
};

export default Modal;

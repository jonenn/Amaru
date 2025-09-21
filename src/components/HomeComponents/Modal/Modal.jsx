import { DemandBody } from "@/components/HomeComponents/DemandBody";
import { ModalHeader } from "./ModalHeader";
import { Tag } from "@/components/HomeComponents/Tag";
import File from "./File";

const Modal = ({
   content: { name, demandType, status, client, description, documents },
}) => {
   return (
      <div to="#" className="flex flex-col bg-white gap-2.5 h-full">
         <ModalHeader title={name} />
         <div className="flex flex-wrap gap-2.5">
            <Tag label={demandType} />
            <Tag label={status} />
         </div>
         <div className="flex flex-col justify-between h-full">
            <DemandBody customer={client} description={description} />
            <div className="flex flex-col gap-2">
               <File documents={documents} />
            </div>
         </div>
      </div>
   );
};

export default Modal;

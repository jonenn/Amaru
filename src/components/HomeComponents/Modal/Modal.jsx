import { ModalBody } from './ModalBody';
import { ModalHeader } from './ModalHeader';
import { ModalTags } from './ModalTags';

const Modal = () => {
   return (
      <div to="#" className="flex flex-col bg-white gap-2.5">
         <ModalHeader title="Demanda #10235" />
         <ModalTags tags={['Cerrado', 'Contrato']} />
         <ModalBody
            customer="IDRD"
            description="En esta resolución se adopta el uso de guías ambientales para definir  los criterios y requisitos técnicos para la elaboración y presentación  de estudios de impacto ambiental. También establece los parámetros,  modalidades, normas y límites que deben seguirse para realizar una  evaluación ambiental completa de cualquier proyecto."
         />
      </div>
   );
};

export default Modal;

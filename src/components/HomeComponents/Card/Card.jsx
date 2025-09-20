import { Link } from 'react-router-dom';
import { CardHeader } from './CardHeader';
import { CardTags } from './CardTags';
import { CardBody } from './CardBody';

const Card = () => {
   return (
      <Link
         to="#"
         className="flex flex-col bg-white shadow-[0_4px_4px_0_rgba(87,87,87,0.1)] rounded-lg px-5.5 py-4 gap-2.5"
      >
         <CardHeader title="Demanda #10235" />
         <CardTags tags={['Cerradp', 'Contrato']} />
         <CardBody
            customer="IDRD"
            description="En esta resolución se adopta el uso de guías ambientales para definir  los criterios y requisitos técnicos para la elaboración y presentación  de estudios de impacto ambiental. También establece los parámetros,  modalidades, normas y límites que deben seguirse para realizar una  evaluación ambiental completa de cualquier proyecto."
         />
      </Link>
   );
};

export { Card };

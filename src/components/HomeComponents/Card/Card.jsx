import { Link } from 'react-router-dom';
import { CardHeader } from './CardHeader';
import { Tag } from '@/components/HomeComponents/Tag';
import { DemandBody } from '@/components/HomeComponents/DemandBody';

const Card = ({
   onClick,
   content: { name, demandType, client, description, status },
   className,
}) => {
   return (
      <Link
         to="#"
         className={`${className} flex flex-col bg-white shadow-[0_4px_4px_0_rgba(87,87,87,0.1)] rounded-lg px-5.5 py-4 gap-2.5`}
         onClick={onClick}
      >
         <CardHeader title={name} />
         <div className="flex flex-wrap gap-2.5">
            <Tag label={demandType} />
            <Tag label={status} />
         </div>
         <DemandBody customer={client} description={description} />
      </Link>
   );
};

export { Card };

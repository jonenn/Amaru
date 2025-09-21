import { Link } from "react-router-dom";
import { CardHeader } from "./CardHeader";
import { CardTags } from "./CardTags";
import { CardBody } from "./CardBody";

const Card = ({ onClick, title, type, customer, description, status }) => {
   return (
      <Link
         to="#"
         className="flex flex-col bg-white shadow-[0_4px_4px_0_rgba(87,87,87,0.1)] rounded-lg px-5.5 py-4 gap-2.5"
         onClick={onClick}
      >
         <CardHeader title={title} />
         <div className="flex flex-wrap gap-2.5">
            <CardTags label={type} />
            <CardTags label={status} />
         </div>
         <CardBody customer={customer} description={description} />
      </Link>
   );
};

export { Card };

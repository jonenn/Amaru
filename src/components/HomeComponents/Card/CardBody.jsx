const CardBody = ({ customer, description }) => {
   return (
      <div className="flex flex-col text-sm gap-2.5">
         <div>
            <strong>Cliente: </strong>
            <span>{customer}</span>
         </div>
         <p>{description}</p>
      </div>
   );
};

export { CardBody };

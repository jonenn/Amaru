import Details from "@/assets/details.svg";

const CardHeader = ({ title }) => {
   return (
      <div className="flex justify-between items-start">
         <h4 className="text-green-title font-bold">{title}</h4>
         <img src={Details} alt="Details" />
      </div>
   );
};

export { CardHeader };

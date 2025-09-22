import Filter from "@/assets/filter.svg";

const FilterButton = ({ onClick }) => {
   return (
      <button
         className="flex border w-full border-gray-secondary rounded-[10px] px-3 py-2 text-gray-tertiary gap-2.5 bg-white cursor-pointer"
         onClick={onClick}
      >
         <img src={Filter} alt="Filter button" width={24} />
         <p>Filtrar por</p>
      </button>
   );
};

export default FilterButton;

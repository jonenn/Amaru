import Filter from '@/assets/filter.svg';

const Searchbar = () => {
   return (
      <div className="flex gap-4 my-4">
         <input
            type="search"
            id="searchbar"
            name="searchbar"
            placeholder="Buscar"
            className="border border-gray-secondary rounded-[10px] px-3 py-2 w-1/4 bg-[url('/src/assets/search.svg')] bg-no-repeat pl-11 bg-[length:20px] bg-[position:12px_center]  placeholder-gray-tertiary text-black-search focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-tertiary"
         />
         <button className="flex border border-gray-secondary rounded-[10px] px-3 py-2 w-1/5 text-gray-tertiary gap-2.5">
            <img src={Filter} alt="Filter button" width={24} />
            <p className="">Filtrar por</p>
         </button>
      </div>
   );
};

export { Searchbar };

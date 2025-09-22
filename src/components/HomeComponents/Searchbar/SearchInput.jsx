import { setSearchTerm } from "@/features/searching/searchingSlice";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const SearchInput = ({ onSearch }) => {
   const dispatch = useDispatch();
   const searchTerm = useSelector((state) => state.searching.value);
   const [query, setQuery] = useState("");

   const handleChange = (e) => {
      const value = e.target.value;
      console.log(value);
      setQuery(value);
      dispatch(setSearchTerm(e.target.value));
   };

   return (
      <input
         type="search"
         value={query}
         onChange={handleChange}
         id="searchbar"
         name="searchbar"
         placeholder="Buscar"
         className="border border-gray-secondary rounded-[10px] px-3 py-2 
                 w-full md:w-1/3 
                 bg-[url('/src/assets/search.svg')] bg-no-repeat pl-11 
                 bg-[length:24px] bg-[position:12px_center] 
                 placeholder-gray-tertiary text-black-search 
                 focus-visible:outline-none focus-visible:ring-1 
                 focus-visible:ring-gray-tertiary bg-white"
      />
   );
};

export default SearchInput;

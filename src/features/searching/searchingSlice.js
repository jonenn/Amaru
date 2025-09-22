import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   value: "",
};

export const searchingSlice = createSlice({
   name: "searching",
   initialState,
   reducers: {
      setSearchTerm: (state, action) => {
         state.value = action.payload;
      },
   },
});

export const { setSearchTerm } = searchingSlice.actions;

export default searchingSlice.reducer;

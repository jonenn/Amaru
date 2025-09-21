import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   value: false,
};

export const modalSlice = createSlice({
   name: "modal",
   initialState,
   reducers: {
      setOpenModal: (state) => {
         state.value = !state.value;
      },
   },
});

export const { setOpenModal } = modalSlice.actions;

export default modalSlice.reducer;

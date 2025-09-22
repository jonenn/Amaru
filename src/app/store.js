import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "@/features/modal/modalSlice";
import cardsReducer from "@/features/cards/cardsSlice";
import searchingReducer from "@/features/searching/searchingSlice";
import filteringReducer from "@/features/filtering/filteringSlice";

export const store = configureStore({
   reducer: {
      modal: modalReducer,
      cards: cardsReducer,
      searching: searchingReducer,
      filtering: filteringReducer,
   },
});

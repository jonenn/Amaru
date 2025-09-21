import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "@/features/modal/modalSlice";
import cardsReducer from "@/features/cards/cardsSlice";

export const store = configureStore({
   reducer: {
      modal: modalReducer,
      cards: cardsReducer,
   },
});

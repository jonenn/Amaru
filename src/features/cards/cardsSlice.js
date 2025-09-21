import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import getDemands from "@/services/demands";

export const fetchCards = createAsyncThunk("cards/fetchCards", async () => {
   return await getDemands("cards");
});

const cardsSlice = createSlice({
   name: "cards",
   initialState: {
      items: [],
      loading: false,
      error: null,
   },
   reducers: {
      setCardData: (state, action) => {
         state.items = action.payload;
      },
   },
   extraReducers: (builder) => {
      builder
         .addCase(fetchCards.pending, (state) => {
            state.loading = true;
            state.error = null;
         })
         .addCase(fetchCards.fulfilled, (state, action) => {
            state.loading = false;
            state.items = action.payload;
         })
         .addCase(fetchCards.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
         });
   },
});

export const { setCardData } = cardsSlice.actions;

export default cardsSlice.reducer;

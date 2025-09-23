import { createSlice } from '@reduxjs/toolkit';

const filtersSlice = createSlice({
   name: 'filtering',
   initialState: {
      client: [],
      status: [],
      demandType: [],
   },
   reducers: {
      toggleFilter(state, action) {
         const { key, value } = action.payload;
         if (state[key].includes(value)) {
            state[key] = state[key].filter((f) => f !== value);
         } else {
            state[key].push(value);
         }
      },
      setFilters(state, action) {
         return action.payload;
      },
      clearFilters(state) {
         state.client = [];
         state.status = [];
         state.demandType = [];
      },
   },
});

export const { toggleFilter, setFilters, clearFilters } = filtersSlice.actions;
export default filtersSlice.reducer;

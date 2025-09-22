import { createSlice } from '@reduxjs/toolkit';

const initialState = {
   client: [],
   status: [],
   demandType: [],
};

const filtersSlice = createSlice({
   name: 'filtering',
   initialState,
   reducers: {
      toggleFilter(state, action) {
         const { key, filter } = action.payload;
         if (state[key].includes(filter.name)) {
            state[key] = state[key].filter((f) => f !== filter.name);
         } else {
            state[key].push(filter.name);
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

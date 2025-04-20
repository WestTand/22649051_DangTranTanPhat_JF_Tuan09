import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'toolkit',
  initialState: { count: 0 },
  reducers: {
    incrementTK: (state) => {
      state.count += 1;
    },
    decrementTK: (state) => {
      state.count -= 1;
    },
  },
});

export const { incrementTK, decrementTK } = counterSlice.actions;
export default counterSlice.reducer;

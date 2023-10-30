import { createSlice } from "@reduxjs/toolkit";

export const itemSlice = createSlice({
  name: "items",
  initialState: { value: [] },
  reducers: {
    getAllItems: (state, action) => {
      state.value.push(action.payload);
    },
    clearItems: (state, action) => {
      state.value = [];
    },
  },
});

export const { getAllItems, clearItems } = itemSlice.actions;
export default itemSlice.reducer;

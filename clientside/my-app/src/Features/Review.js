import { createSlice } from "@reduxjs/toolkit";

export const reviewSlice = createSlice({
  name: "reviews",
  initialState: { value: { reviews: [], openForm: false } },
  reducers: {
    getAllReviews: (state, action) => {
      state.value.review = [];
      // state.value.review.push(action.payload);
      state.value.review = action.payload;
    },
    openForm: (state, action) => {
      state.value.openForm = true;
    },
    closeForm: (state, action) => {
      state.value.openForm = false;
    },
  },
});

export const { getAllReviews, openForm, closeForm } = reviewSlice.actions;
export default reviewSlice.reducer;

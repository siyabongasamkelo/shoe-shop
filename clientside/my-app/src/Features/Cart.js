import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "Cart",
  initialState: { value: [] },
  reducers: {
    addToCart: (state, action) => {
      state.value.push(action.payload.item);
    },
    addQuantity: (state, action) => {
      for (let i = 0; i < state.value.length; i++) {
        if (state.value[i].id === action.payload.item.id) {
          state.value[i].quantity = state.value[i].quantity + 1;
        }
      }
    },
    detQuantity: (state, action) => {
      for (let i = 0; i < state.value.length; i++) {
        if (
          state.value[i].id === action.payload.id &&
          action.payload.operator === "add"
        ) {
          state.value[i].quantity >= 20
            ? (state.value[i].quantity = 20)
            : (state.value[i].quantity = state.value[i].quantity + 1);
        }
        if (
          state.value[i].id === action.payload.id &&
          action.payload.operator === "minus"
        ) {
          state.value[i].quantity <= 1
            ? (state.value[i].quantity = 1)
            : (state.value[i].quantity = state.value[i].quantity - 1);
        }
      }
    },
    removeItem: (state, action) => {
      let index = null;
      for (let i = 0; i < state.value.length; i++) {
        if (state.value[i].id === action.payload.id) {
          index = i;
        }
      }
      let oldArray = state.value;
      if (index !== null) {
        oldArray.splice(index, index);
        state.value = oldArray;
      }

      if (index !== null && index === 0) {
        oldArray.shift();
        state.value = oldArray;
      }

      if (state.value.length === 1 && state.value[0].id === action.payload.id) {
        state.value = [];
        window.location.reload(false);
      }
    },
    clearCart: (state) => {
      state.value = [];
    },
  },
});

export const { addToCart, addQuantity, clearCart, detQuantity, removeItem } =
  cartSlice.actions;
export default cartSlice.reducer;

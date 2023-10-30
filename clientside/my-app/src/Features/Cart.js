import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "Cart",
  initialState: { value: [] },
  reducers: {
    addToCart: (state, action) => {
      state.value.push(action.payload.item);
    },
    addQuantity: (state, action) => {
      state.value.map((item) => {
        if (item.id === action.payload.item.id) {
          item.quantity = item.quantity + 1;
        }
      });
    },
    detQuantity: (state, action) => {
      state.value.map((item) => {
        if (
          item.id === action.payload.id &&
          action.payload.operator === "add"
        ) {
          item.quantity >= 20
            ? (item.quantity = 20)
            : (item.quantity = item.quantity + 1);
        }
        if (
          item.id === action.payload.id &&
          action.payload.operator === "minus"
        ) {
          item.quantity <= 1
            ? (item.quantity = 1)
            : (item.quantity = item.quantity - 1);
        }
      });
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

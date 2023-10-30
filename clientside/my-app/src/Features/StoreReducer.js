import { createSlice } from "@reduxjs/toolkit";

export const storesSlice = createSlice({
  name: "stores",
  initialState: { value: { store: "", jwt: "", isLogged: false } },
  reducers: {
    getLoggedStore: (state, action) => {
      state.value.store = action.payload.store;
      state.value.jwt = action.payload.jwt;
      state.value.isLogged = true;
    },
    storeLogOut: (state, action) => {
      state.value.store = "";
      state.value.jwt = "";
      state.value.isLogged = false;
      localStorage.removeItem("token");
    },
  },
});

export const { getLoggedStore, storeLogOut } = storesSlice.actions;
export default storesSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

export const usersSlice = createSlice({
  name: "users",
  initialState: { value: { user: "", jwt: "", isLogged: false } },
  reducers: {
    getLoggedUser: (state, action) => {
      state.value.user = action.payload.user;
      state.value.jwt = action.payload.jwt;
      state.value.isLogged = true;
    },
    logOut: (state, action) => {
      state.value.user = "";
      state.value.jwt = "";
      state.value.isLogged = false;
      localStorage.removeItem("token");
    },
  },
});

export const { getLoggedUser, logOut } = usersSlice.actions;
export default usersSlice.reducer;

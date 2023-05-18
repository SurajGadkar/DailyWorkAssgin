import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
  username: "",
  email: " ",
  password: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      state.isLoggedIn = true;
      state.username = action.payload.username;
      state.password = action.payload.password;
    },
    register: (state, action) => {
      state.isLoggedIn = false;
      state.email = action.payload.email;
      state.username = action.payload.username;
      state.password = action.payload.password;
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.username = "";
      state.password = "";
      state.email = "";
    },
  },
});

export const { login, register, logout } = userSlice.actions;
export default userSlice.reducer;

import { login, register, logout } from "../features/userSlice";

export const loginUser = (username, password) => (dispatch) => {
  dispatch(login({ username, password }));
};

export const registerUser = (email, username, password) => (dispatch) => {
  dispatch(register({email, username, password }));
};

export const logoutUser = () => (dispatch) => {
  dispatch(logout());
};

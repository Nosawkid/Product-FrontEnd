import { createSlice } from "@reduxjs/toolkit";
import loginServices from "../services/login";

const initialState = {
  isAuthenticated: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action) {
      const obj = {};
      obj.token = action.payload.token;
      obj.username = action.payload.username;
      obj.fullname = action.payload.fullname;
      obj.isAuthenticated = action.payload.isAuthenticated;
      state = obj;
      return state;
    },
    // eslint-disable-next-line
    clearUser(state, action) {
      state = {
        isAuthenticated: false,
      };
      return state;
    },
  },
});

export const { setUser, clearUser } = userSlice.actions;

export const loginUser = (username, password) => {
  return async (dispatch) => {
    const userData = await loginServices.userLogin({ username, password });
    dispatch(setUser(userData));
  };
};
export default userSlice.reducer;

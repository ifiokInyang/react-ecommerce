import { createSlice } from "@reduxjs/toolkit";
import { ILogin, IUser } from "../utils/interfaces/interface.dto";

const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: null,
    isFetching: false,
    error: false,
  } as IUser,
  reducers: {
    loginStart: (state) => {
      state.isFetching = true;
    },
    loginSuccess: (state, action) => {
      state.isFetching = false;
      state.currentUser = action.payload
    },
    loginFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  },
});

export const UserDetails = (state: { user: IUser }) => state.user;

export const { loginStart, loginSuccess, loginFailure } = userSlice.actions;
export default userSlice.reducer;

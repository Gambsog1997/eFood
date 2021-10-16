import { createSlice } from "@reduxjs/toolkit";

export const UserSlice = createSlice({
  name: "user",
  initialState: {
    user: "Margreth",
  },
  reducers: {
    appendName: (state, action) => {
      state.user += action.payload;
    },
    getName: (state) => {
      console.log(state.user);
    },
  },
});

export const { appendName, getName } = UserSlice.actions;

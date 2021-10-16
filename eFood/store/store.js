import { configureStore } from "@reduxjs/toolkit";
import { UserSlice } from "./slice";

export const store = configureStore({
  reducer: {
    user: UserSlice.reducer,
  },
});

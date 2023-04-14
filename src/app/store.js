import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import usersSlice from "./userSlice";

import ToastMiddleware from "../middlewares/ToastMiddlewareRedux";

export default configureStore({
  reducer: {
    usersSlice: usersSlice,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(ToastMiddleware),
});

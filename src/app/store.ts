import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/authSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },

  // Use this cause Firebase return non serializable propriety and redux throw an error.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;

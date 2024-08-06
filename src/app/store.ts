import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/authSlice";
import { useDispatch } from "react-redux";

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

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();

export default store;

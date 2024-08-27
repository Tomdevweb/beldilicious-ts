import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/authSlice";
import cartReducer from "../features/CartSlice";
import restaurantsReducer from "../features/restaurants/restaurantsSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    cart: cartReducer,
    restaurants: restaurantsReducer,
  },

  // // Use this cause Firebase return non serializable propriety and redux throw an error.
  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware({
  //     serializableCheck: false,
  //   }),
});

export default store;

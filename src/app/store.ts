import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  PURGE,
  REGISTER,
  REHYDRATE,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import authReducer from "../features/authSlice";
import cartReducer from "../features/CartSlice";
import productsReducer from "../features/products/productsSlice";
import restaurantsReducer from "../features/restaurants/restaurantsSlice";

const rootReducer = combineReducers({
  auth: authReducer,
  cart: cartReducer,
  restaurants: restaurantsReducer,
  products: productsReducer,
});

const persistConfig = {
  key: "beldilicious",
  version: 1,
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),

  // // Use this cause Firebase return non serializable propriety and redux throw an error.
  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware({
  //     serializableCheck: false,
  //   }),
});

export default store;

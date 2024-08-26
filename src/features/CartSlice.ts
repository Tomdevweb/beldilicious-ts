import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../types/types";

type CartItem = Product & { quantity: number };

type CartState = {
  items: CartItem[];
};

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      if (state.items.find((item) => item.id === action.payload.id)) {
      } else {
        state.items.push(action.payload);
      }
    },

    removeFromCart: (state, action: PayloadAction<CartItem>) => {
      state.items = state.items.filter((item) => item.name !== action.payload.name);
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;

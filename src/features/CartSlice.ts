import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../types/types";
import { logoutUser } from "./authSlice";

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
      console.log("ACTION:::", action);
      const exisitingItemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );

      if (exisitingItemIndex >= 0) {
        state.items[exisitingItemIndex].quantity += action.payload.quantity;
      } else {
        state.items.push(action.payload);
      }
    },

    removeFromCart: (state, action: PayloadAction<string>) => {
      const itemId = action.payload;
      state.items = state.items.filter((item) => item.id !== itemId);
    },

    incrementQuantity: (state, action: PayloadAction<string>) => {
      const itemId = action.payload;
      state.items = state.items.map((item) => {
        if (item.id === itemId) {
          item.quantity++;
        }
        return item;
      });
    },

    decrementQuantity: (state, action: PayloadAction<string>) => {
      const itemId = action.payload;
      // Update quantities
      state.items = state.items.map((item) => {
        if (item.id === itemId) {
          item.quantity--;
        }
        return item;
      });
      // Remove if quantity is <= 0
      state.items = state.items.filter((item) => {
        // return true ou false pour savoir si on va garder le produit
        return item.quantity > 0;
      });
    },
  },

  // CartSlice listening actions from other slice
  extraReducers: (builder) =>
    builder.addCase(logoutUser.type, (state) => {
      state.items = initialState.items;
    }),
});

export const {
  addToCart,
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
} = cartSlice.actions;
export default cartSlice.reducer;

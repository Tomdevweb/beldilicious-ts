import { createSlice, PayloadAction, SerializedError } from "@reduxjs/toolkit";
import { Product } from "../../types/types";
import { fetchProducts } from "./fetchProducts";

type ProductsState = {
  products: Product[];
  loading: boolean;
  error: SerializedError | null;
};

const initialState: ProductsState = {
  products: [],
  loading: false,
  error: null,
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.products = action.payload;
        state.loading = false;
      })
      .addCase(
        fetchProducts.rejected,
        (state, action: PayloadAction<SerializedError | undefined>) => {
          state.loading = false;
          state.error = action.payload || null;
        }
        // undefined dans le type sert à gérer le cas où action.payload pourrait ne pas exister. null dans state.error est utilisé pour s'assurer que l'erreur est soit explicitement présente, soit explicitement absente, et non indéfinie, ce qui rend le code plus prévisible et plus facile à maintenir.
      );
  },
});

export default productSlice.reducer;

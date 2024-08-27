import { createSlice, PayloadAction, SerializedError } from "@reduxjs/toolkit";
import { Restaurant } from "../../types/types";
import { fetchRestaurants } from "./fetchRestaurants";

type RestaurantsState = {
  restaurants: Restaurant[];
  loading: boolean;
  error: SerializedError | null;
};

const initialState: RestaurantsState = {
  restaurants: [],
  loading: false,
  error: null,
};

const restaurantsSlice = createSlice({
  name: "restaurants",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRestaurants.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchRestaurants.fulfilled,
        (state, action: PayloadAction<Restaurant[]>) => {
          state.restaurants = action.payload;
          state.loading = false;
        }
      )

      .addCase(
        fetchRestaurants.rejected,
        (state, action: PayloadAction<SerializedError | undefined>) => {
          state.loading = false;
          state.error = action.payload || null;
        }
      );
  },
});

export default restaurantsSlice.reducer;

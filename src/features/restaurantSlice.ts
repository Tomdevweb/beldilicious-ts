import {
  createAsyncThunk,
  createSlice,
  PayloadAction,
  SerializedError,
} from "@reduxjs/toolkit";
import { Restaurant } from "../types/types";
import { fetchRestaurants } from "../data/dataService";

type RestaurantState = {
  restaurants: Restaurant[];
  loading: boolean;
  error: SerializedError | null | undefined;
};

const initialState: RestaurantState = {
  restaurants: [],
  loading: false,
  error: null,
};

const fetchRestaurantData = createAsyncThunk<
  Restaurant[],
  void,
  { rejectValue: SerializedError }
>("restaurants/fetchRestaurants", async () => {
  try {
    const res = await fetchRestaurants();
    return res.data;
  } catch (error) {
    console.error("Error fetching restaurants:", error);
    throw error;
  }
});

const restaurantSlice = createSlice({
  name: "restaurant",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRestaurantData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchRestaurantData.fulfilled,
        (state, action: PayloadAction<Restaurant[]>) => {
          state.restaurants = action.payload;
          state.loading = false;
        }
      )
      .addCase(
        fetchRestaurantData.rejected,
        (state, action: PayloadAction<SerializedError | null | undefined>) => {
          state.loading = false;
          state.error = action.payload.message;
        }
      );
  },
});

export default restaurantSlice.reducer;

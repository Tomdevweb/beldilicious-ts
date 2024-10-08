import { createAsyncThunk, SerializedError } from "@reduxjs/toolkit";
import { Restaurant } from "../../types/types";
import restaurantsData from "../../data/restaurants.json";
import { sleep } from "../../utils/utils";

// export const fetchRestaurants = async () => {
//     // const res = { data: restaurantsData };
//     const res = await fetch('https://api.example.com/restaurants');
//     return res;
//   };

export const fetchRestaurants = createAsyncThunk<
  Restaurant[],
  void,
  { rejectValue: SerializedError }
>("restaurants/fetchRestaurants", async (_, { rejectWithValue }) => {
  try {
    await sleep(2000);
    // const res = { data: { toto: true } };
    const res = { data: restaurantsData };
    return res.data;
  } catch (error) {
    console.error("Error fetching restaurants:", error);
    return rejectWithValue({
      name: "FetchError",
      message:
        error instanceof Error ? error.message : "Unknown error occurred",
    } as SerializedError);
  }
});

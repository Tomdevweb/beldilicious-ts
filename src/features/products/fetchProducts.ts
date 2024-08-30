import {
  createAsyncThunk,
  isRejectedWithValue,
  SerializedError,
} from "@reduxjs/toolkit";
import restaurantsData from "../../data/restaurants.json";
import { Product } from "../../types/types";
import { sleep } from "../../utils/utils";

// Product[] = type de retour ; string: type du paramètre d'entrée (qui sera défini dans le async)
export const fetchProducts = createAsyncThunk<
  Product[],
  string,
  { rejectValue: SerializedError }
>(
  "products/fetchProducts",
  async (restaurantId: string, { rejectWithValue }) => {
    try {
      await sleep(2000);

      const restaurant = restaurantsData.find((r) => r.id === restaurantId);
      if (!restaurant) {
        return rejectWithValue(
          new Error(
            `Restaurant with ID ${restaurantId} not found`
          ) as SerializedError
        );
      }

      const products = [
        ...restaurant.menu.starters,
        ...restaurant.menu.maincourses,
        ...restaurant.menu.desserts,
        ...restaurant.menu.drinks,
      ];
      return products;
    } catch (error) {
      console.error("Error fetching products:", error);
      return rejectWithValue(error as SerializedError);
    }
  }
);

import { useEffect, useState } from "react";
import { getImageUrl } from "../utils/restaurantsImagesHelper";

export const useRestaurantImage = (restaurantId?: string) => {
  const [imageUrl, setImageUrl] = useState<string>("");

  useEffect(() => {
    if (!restaurantId) return; // If Id is undefined, do nothing
    const fetchImage = async () => {
      const url = await getImageUrl(restaurantId);
      setImageUrl(url);
    };

    fetchImage();
  }, [restaurantId]);

  return imageUrl;
};

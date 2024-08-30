import { useEffect, useState } from "react";
import { getImageUrl } from "../utils/restaurantsImagesHelper";

export const useRestaurantImage = (restaurantId: string) => {
  const [imageUrl, setImageUrl] = useState<string>("");

  useEffect(() => {
    const fetchImage = async () => {
      const url = await getImageUrl(restaurantId);
      setImageUrl(url);
    };

    fetchImage();
  }, [restaurantId]);

  return imageUrl;
};

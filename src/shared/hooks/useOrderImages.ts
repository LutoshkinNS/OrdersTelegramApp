import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import {
  fetchOrderImages,
  FetchOrderImagesResponse,
} from "@/shared/api/fetchOrderImages.ts";

export const useOrderImages = (trackNumber: string | undefined) => {
  const [images, setImages] = useState<FetchOrderImagesResponse>();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const loadImages = async () => {
      if (!trackNumber) return;

      try {
        setIsLoading(true);
        const images = await fetchOrderImages({
          trackNumber,
          quality: 80,
        });
        setImages(images);
      } catch (error) {
        console.error("Error fetching order images:", error);
        toast.error(`${error}`);
      } finally {
        setIsLoading(false);
      }
    };

    loadImages();
  }, [trackNumber]);

  return { images, isLoading };
};

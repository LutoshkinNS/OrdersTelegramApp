import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

import {
  fetchOrderImages,
  FetchOrderImagesResponse,
} from "@/shared/api/fetchOrderImages.ts";
import { fetchOrder } from "@/shared/api/fetchOrder.ts";
import { Customer } from "@/shared/components/Customer/Customer.tsx";
import { HeaderText } from "@/shared/components/Header/HeaderText.tsx";
import { Description } from "@/shared/components/Description/Description.tsx";
import { TotalCost } from "@/shared/components/TotalCost/TotalCost.tsx";
import { Statuses } from "@/shared/components/Statuses/Statuses.tsx";
import { Products } from "@/shared/components/Products/Products.tsx";
import { ImagesDuringDelivery } from "@/shared/components/ImagesDuringDelivery/ImagesDuringDelivery.tsx";

import { useStore } from "../context/StoreContext.tsx";
import { mockOrder } from "@/shared/api/mock.ts";

export const Order = () => {
  const { setOrder } = useStore();
  const order = mockOrder;

  const { trackId } = useParams();
  const [images, setImages] = useState<FetchOrderImagesResponse>();
  const [isLoadingOrder, setIsLoading] = useState<boolean>(false);
  const notify = (e: string) => toast.error(e);

  useEffect(() => {
    const getOrder = async () => {
      if (trackId) {
        try {
          setIsLoading(true);
          const respOrder = await fetchOrder(trackId);

          if (respOrder) {
            console.log("fetchOrder", respOrder);
            setOrder(respOrder);
          } else {
            notify("Заказ не найден");
          }
        } catch (error) {
          console.error("Error fetching order:", error);
          notify(`${error}`);
        } finally {
          setIsLoading(false);
        }
      }
    };

    if (!order) {
      getOrder();
    }
  }, [trackId, order, setOrder]);

  useEffect(() => {
    const loadImage = async () => {
      try {
        if (!trackId) return;

        const images = await fetchOrderImages({
          trackNumber: trackId,
          // width: 112,
          // height: 112,
          quality: 80,
        });

        console.log("fetchImages", images);
        setImages(images);
      } catch (err) {
        console.error("Error loading image:", err);
        toast.error("Ошибка при загрузке изображений");
      }
    };

    loadImage();
  }, [trackId]);

  if (!order) {
    return <div>Order not found</div>;
  }

  return (
    <div className="p-4">
      <Customer name={order.customer} />
      <HeaderText tag={"h2"} className="mb-2">
        {trackId}
      </HeaderText>
      <Description>{order.description}</Description>
      <Statuses
        statuses={order.statuses.historyStatuses}
        currentStatus={order.statuses.currentStatus}
      />
      <TotalCost>{order.totalValue}</TotalCost>
      <Products products={order.products} images={images} />
      <ImagesDuringDelivery images={images} />
    </div>
  );
};

import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

import { fetchOrder } from "@/shared/api/fetchOrder.ts";
import { Customer } from "@/shared/components/Customer/Customer.tsx";
import { HeaderText } from "@/shared/components/Header/HeaderText.tsx";
import { Description } from "@/shared/components/Description/Description.tsx";
import { TotalCost } from "@/shared/components/TotalCost/TotalCost.tsx";
import { Statuses } from "@/shared/components/Statuses/Statuses.tsx";
import { Products } from "@/shared/components/Products/Products.tsx";
import { ImagesDuringDelivery } from "@/shared/components/ImagesDuringDelivery/ImagesDuringDelivery.tsx";
import { OrderSkeleton } from "@/shared/components/OrderSkeleton/OrderSkeleton.tsx";
import { useOrderImages } from "@/shared/hooks/useOrderImages.ts";

import { useStore } from "../context/StoreContext.tsx";
import { DeliveryToCustomer } from "@/shared/components/DeliveryToCustomer/DeliveryToCustomer.tsx";
import { DeliveryCinaToRf } from "@/shared/components/DeliveryCinaToRf/DeliveryCinaToRf.tsx";

export const Order = () => {
  const { trackId } = useParams();
  const { order, setOrder } = useStore();
  const [isLoading, setIsLoading] = useState(false);
  const { images: orderImages, isLoading: isImagesLoading } =
    useOrderImages(trackId);
  const notify = (e: string) => toast.error(e);

  useEffect(() => {
    const loadOrder = async () => {
      if (!trackId) return;

      try {
        setIsLoading(true);
        const order = await fetchOrder(trackId);
        setOrder(order);
      } catch (error) {
        console.error("Error fetching order:", error);
        notify(`${error}`);
      } finally {
        setIsLoading(false);
      }
    };

    loadOrder();
  }, [trackId, setOrder]);

  if (isLoading) {
    return <OrderSkeleton />;
  }

  if (!order) {
    return null;
  }

  return (
    <div className="p-4">
      <div className="mb-4">
        <Customer name={order.customer} />
        <HeaderText tag={"h2"} className="mb-2 text-primary">
          {trackId}
        </HeaderText>
        <Description>{order.description}</Description>
      </div>
      <div className="mb-6">
        <Statuses
          statuses={order.statuses.historyStatuses}
          currentStatus={order.statuses.currentStatus}
          className="mb-2"
        />
        <DeliveryToCustomer date={order.deliveryToCustomer} className="mb-2" />
        <DeliveryCinaToRf days={order.deliveryChinaToRF} />
      </div>
      <TotalCost>{order.totalValue}</TotalCost>
      <Products products={order.products} images={orderImages} />
      <ImagesDuringDelivery images={orderImages} />
    </div>
  );
};

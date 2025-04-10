import { useState } from "react";
import { fetchOrdersByTrackNumber } from "@/shared/api/fetchOrdersByTrackNumber.ts";
import { toast } from "react-toastify";
import { OrdersListType } from "@/shared/api/types.ts";

export const useFetchOrdersListByTrackNumber = () => {
  const [isOrdersLoading, setIsOrdersLoading] = useState<boolean>(false);
  const [isFinally, setIsFinally] = useState<boolean>(false);
  const [ordersList, setOrdersList] = useState<OrdersListType>([]);
  const notify = (e: string) => toast.error(e);

  const startRequest = (trackNumber: string) => {
    setIsFinally(false);
    setIsOrdersLoading(true);
    fetchOrdersByTrackNumber(trackNumber)
      .then((orders) => {
        // FIXME избавиться
        if (!orders.message) {
          setOrdersList(orders);
        } else {
          throw new Error(
            "Заказы не найдены. Проверьте правильность ввода номера заказа",
          );
        }
      })
      .catch((error) => {
        console.error(error);
        notify(error.message);
      })
      .finally(() => {
        setIsFinally(true);
        setIsOrdersLoading(false);
      });
  };

  return {
    orders: ordersList,
    isLoading: isOrdersLoading,
    startRequest: startRequest,
    isFinally,
  };
};

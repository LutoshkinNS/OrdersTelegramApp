import { useState } from "react";
import { fetchOrdersByTgId } from "@/shared/api/fetchOrdersByTgId.ts";
import { useStore } from "@/context/StoreContext.tsx";
// import { toast } from "react-toastify";
import { OrdersListType } from "@/shared/api/types.ts";

export const useFetchOrdersListByTgId = () => {
  const { tgUserId } = useStore();
  const [isOrdersLoading, setIsOrdersLoading] = useState<boolean>(false);
  const [isFinally, setIsFinally] = useState<boolean>(false);
  const [ordersList, setOrdersList] = useState<OrdersListType>([]);
  // const notify = (e: string) => toast.error(e);

  const startRequest = () => {
    if (tgUserId) {
      setIsFinally(false);
      setIsOrdersLoading(true);
      fetchOrdersByTgId(tgUserId)
        .then((orders) => {
          // FIXME избавиться
          if (!orders.message) {
            setOrdersList(orders);
          }
        })
        .catch((error) => {
          console.error(error);
          // notify(error.message);
        })
        .finally(() => {
          setIsFinally(true);
          setIsOrdersLoading(false);
        });
    } else {
      console.error("Не указан tgUserId");
    }
  };

  return {
    orders: ordersList,
    isLoading: isOrdersLoading,
    startRequest: startRequest,
    isFinally,
  };
};

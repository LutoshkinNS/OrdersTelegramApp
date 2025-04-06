import { OrdersListState } from "@/shared/components/OrdersListState/OrdersListState.tsx";
import { FindedOrders } from "@/shared/components/FindedOrders/FindedOrders.tsx";
import { useEffect, useState } from "react";
import { fetchOrders, OrdersListType } from "@/shared/api/fetchOrders.ts";
import { useStore } from "@/context/StoreContext.tsx";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";

export const CustomerOrdersList = () => {
  const [ordersList, setOrdersList] = useState<OrdersListType>();
  const [isOrdersLoading, setIsOrdersLoading] = useState<boolean>(true);
  const { tgUserId } = useStore();
  const navigate = useNavigate();
  const notify = (e: string) => toast.error(e);

  useEffect(() => {
    if (tgUserId) {
      setIsOrdersLoading(true);
      fetchOrders(tgUserId)
        .then((orders) => {
          // TODO удалить лишний элемент
          setOrdersList([
            { track_number: "АТ0758", status: "На складе" },
            ...orders,
          ]);
        })
        .catch((error) => {
          notify(error.message);
        })
        .finally(() => {
          setIsOrdersLoading(false);
        });
    }
  }, [tgUserId]);

  const handleOrderClick = async (trackNumber: string) => {
    navigate(`/order/${trackNumber}`);
  };

  return (
    <div className="">
      <span className="block font-medium text-xl mb-2">Ваши заказы:</span>
      <p></p>

      <OrdersListState
        isOrdersLoading={isOrdersLoading}
        ordersList={ordersList}
      />
      {ordersList && (
        <FindedOrders ordersList={ordersList} onClick={handleOrderClick} />
      )}
    </div>
  );
};

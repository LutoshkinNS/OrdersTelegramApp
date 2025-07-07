import { OrdersListState } from "@/shared/components/OrdersListState/OrdersListState.tsx";
import { FindedOrders } from "@/shared/components/FindedOrders/FindedOrders.tsx";
import { useNavigate } from "react-router";
import { useFetchOrdersListByTgId } from "@/shared/hooks/useFetchOrdersListByTgId.ts";
import { useStore } from "@/context/StoreContext.tsx";
import { useEffect } from "react";
import { IOrder } from "@/entities/order";

interface CustomerOrdersListProps {
  ordersList: IOrder[];
}

export const CustomerOrdersList = ({ ordersList }: CustomerOrdersListProps) => {
  const navigate = useNavigate();
  const { inputValue, setOrders } = useStore();
  const {
    orders: ordersByTgId,
    startRequest: startRequestByTgId,
    isLoading: isLoadingByTgId,
  } = useFetchOrdersListByTgId();

  useEffect(() => {
    if (inputValue === "") {
      startRequestByTgId();
    }
  }, []);

  useEffect(() => {
    setOrders(ordersByTgId);
  }, [ordersByTgId]);

  const handleOrderClick = async (trackNumber: string) => {
    navigate(`/order/${trackNumber}`);
  };

  return (
    <div className="">
      <span className="block font-medium text-xl mb-2">Ваши заказы:</span>

      <OrdersListState
        isOrdersLoading={isLoadingByTgId}
        ordersList={ordersList}
      />
      {ordersList.length > 0 && !isLoadingByTgId && (
        <FindedOrders ordersList={ordersList} onClick={handleOrderClick} />
      )}
    </div>
  );
};

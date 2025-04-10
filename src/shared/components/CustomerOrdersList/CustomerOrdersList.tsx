import { OrdersListState } from "@/shared/components/OrdersListState/OrdersListState.tsx";
import { FindedOrders } from "@/shared/components/FindedOrders/FindedOrders.tsx";
import { useNavigate } from "react-router";
import { OrdersListType } from "@/shared/api/types.ts";

interface CustomerOrdersListProps {
  ordersList: OrdersListType;
  isLoading: boolean;
}

export const CustomerOrdersList = ({
  ordersList,
  isLoading,
}: CustomerOrdersListProps) => {
  const navigate = useNavigate();

  const handleOrderClick = async (trackNumber: string) => {
    navigate(`/order/${trackNumber}`);
  };

  return (
    <div className="">
      <span className="block font-medium text-xl mb-2">Ваши заказы:</span>

      <OrdersListState isOrdersLoading={isLoading} ordersList={ordersList} />
      {ordersList.length > 0 && !isLoading && (
        <FindedOrders ordersList={ordersList} onClick={handleOrderClick} />
      )}
    </div>
  );
};

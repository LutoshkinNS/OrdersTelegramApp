import { OrdersListState } from "@/shared/components/OrdersListState/OrdersListState.tsx";
import { FindedOrders } from "@/shared/components/FindedOrders/FindedOrders.tsx";
import { IOrder } from "@/entities/order";
import { useNavigate } from "react-router";

type TOrderListProps = {
  ordersList: IOrder[];
  isPending: boolean;
};

export function OrderList({ ordersList, isPending }: TOrderListProps) {
  const navigate = useNavigate();

  const handleOrderClick = async (trackNumber: string) => {
    navigate(`/order/${trackNumber}`);
  };

  return (
    <div className="">
      <span className="block font-medium text-xl mb-2">Ваши заказы:</span>

      <OrdersListState isOrdersLoading={isPending} ordersList={ordersList} />
      {ordersList.length > 0 && !isPending && (
        <FindedOrders ordersList={ordersList} onClick={handleOrderClick} />
      )}
    </div>
  );
}

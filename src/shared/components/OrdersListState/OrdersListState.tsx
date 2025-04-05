import { OrdersListType } from "@/shared/api/fetchOrders.ts";
import { OrdersSkeleton } from "@/shared/components/OrdersSkeleton/OrdersSkeleton.tsx";

type OrdersListStateProps = {
  isOrdersLoading: boolean;
  ordersList?: OrdersListType;
};

export const OrdersListState = ({
  isOrdersLoading,
  ordersList,
}: OrdersListStateProps) => {
  if (isOrdersLoading) {
    return <OrdersSkeleton />;
  }

  if (!ordersList) {
    return (
      <div className="h-52 flex items-center justify-center">
        <p className="text-primary-text dark:text-primary-text-dark">
          У вас нет заказов
        </p>
      </div>
    );
  }

  return null;
};

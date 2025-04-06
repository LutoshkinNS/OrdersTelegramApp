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
      <div className="h-40 flex items-center justify-center">
        <p className="text-primary-text dark:text-primary-text-dark text-center">
          Автоматический поиск заказов по вашему номеру телефона не дал
          результатов. Попробуйте воспользоваться поиском по номеру заказа.
        </p>
      </div>
    );
  }

  return null;
};

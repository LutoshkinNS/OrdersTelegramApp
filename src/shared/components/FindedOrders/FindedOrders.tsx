import { OrdersListType } from "@/shared/api/types.ts";

export type FindedOrdersProps = {
  ordersList: OrdersListType;
  onClick: (trackNumber: string) => void;
  isOrderLoading?: boolean;
};

export const FindedOrders = ({
  ordersList,
  onClick,
  isOrderLoading,
}: FindedOrdersProps) => {
  return (
    <div className="w-full mb-20">
      <ul className="flex flex-col gap-3 ">
        {ordersList.map((order) => {
          return (
            <li key={order.track_number} className="">
              <button
                onClick={() => onClick(order.track_number)}
                disabled={isOrderLoading}
                className="w-full flex items-center px-5 py-6 rounded-xl text-primary-text dark:text-primary-text-dark bg-gray dark:bg-gray-dark cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span className="font-bold text-xl text-primary w-24 text-left">
                  {order.track_number}
                </span>
                <span className="ml-4 text-left">{order.status}</span>
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

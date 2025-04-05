import {OrdersListType} from "@/shared/api/fetchOrders.ts";

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
        <ul className="flex flex-col gap-3 w-full">
            {ordersList.map((order) => {
                return (
                    <li key={order.track_number} className="">
                        <button
                            onClick={() => onClick(order.track_number)}
                            disabled={isOrderLoading}
                            className="w-full flex justify-between items-center px-5 py-6 rounded-xl text-primary-text dark:text-primary-text-dark bg-gray dark:bg-gray-dark cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            <span className="font-medium">
                              {order.track_number}
                            </span>
                            <span className="ml-2 grow-2">{order.status}</span>
                        </button>
                    </li>
                );
            })}
        </ul>
    );
};

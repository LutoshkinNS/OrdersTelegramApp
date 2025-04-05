import { OrderType } from "@/shared/api/fetchOrder.ts";
import clsx from "clsx";

type DeliveryToCustomerProps = {
  date: OrderType["deliveryToCustomer"],
  className?: string
}

export const DeliveryToCustomer = ({ date, className }: DeliveryToCustomerProps) => {
  return (
    <div className={clsx(className, "max-w-4/5")}>
      {
        date
          ? <span>Ориентировочная дата в прибытия в Москву: <span className="font-medium text-lg">{date}</span></span>
          : null
      }
    </div>
  );
};
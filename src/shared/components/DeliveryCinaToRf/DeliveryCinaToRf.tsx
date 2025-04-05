import { OrderType } from "@/shared/api/fetchOrder.ts";
import clsx from "clsx";
import { getDayWordForm } from "@/shared/utils/getDaysWordForm.tsx";

type DeliveryCinaToRfProps = {
  days: OrderType["deliveryChinaToRF"],
  className?: string
}

export const DeliveryCinaToRf = ({ days, className }: DeliveryCinaToRfProps) => {
  return (
    <div className={clsx(className, "max-w-4/5")}>
      {
        days
          ? <span>Доставка до Москвы заняла <span
            className="font-medium text-lg">{days}</span> {getDayWordForm(days)}</span>
          : null
      }
    </div>
  );
};
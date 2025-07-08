import { useState } from "react";
import { Input } from "@/shared/components/Input/Input.tsx";
import { Button } from "@/shared/components/Button/Button.tsx";
import { useOrderListByTrackNumber } from "@/features/orders-list/model/useOrderListByTrackNumber.ts";
import { OrderList } from "@/features/orders-list/ui/order-list.tsx";
import { useOrderListByTgId } from "@/features/orders-list/model/useOrderListByTgId.ts";

export default function Main() {
  const [inputValue, setInputValue] = useState<string>("");

  const {
    data: orderListByTrackNumber,
    isPending: isPendingOrderListByTrackNumber,
    refetch: refetchByTrackNumber,
  } = useOrderListByTrackNumber(inputValue);

  const { data: orderListByTgId, isPending: isPendingOrderListByTgId } =
    useOrderListByTgId();

  const handleSubmit = async () => {
    if (inputValue) {
      await refetchByTrackNumber();
    }
  };

  return (
    <div className="p-4">
      <div className="">
        <div className="mb-10 flex">
          <Input
            className="text-xl mr-4"
            placeholder="Номер заказа"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            autoFocus={true}
          />
          <Button
            className="text-xl"
            onClick={handleSubmit}
            // disabled={isPendingOrderListByTrackNumber}
          >
            Найти
          </Button>
        </div>
      </div>
      <OrderList
        ordersList={orderListByTrackNumber || orderListByTgId || []}
        isPending={isPendingOrderListByTrackNumber || isPendingOrderListByTgId}
      />
      <p className="fixed bottom-0 py-4 bg-bg text-center text-secondary-text dark:text-secondary-text-dark text-sm">
        Используя приложение, вы соглашаетесь с обработкой персональных данных и
        политикой конфиденциальности
      </p>
    </div>
  );
}

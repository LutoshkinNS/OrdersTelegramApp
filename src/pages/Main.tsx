import { useEffect, useState } from "react";
import { Input } from "@/shared/components/Input/Input.tsx";
import { Button } from "@/shared/components/Button/Button.tsx";
import { CustomerOrdersList } from "@/shared/components/CustomerOrdersList/CustomerOrdersList.tsx";
import { useFetchOrdersListByTrackNumber } from "@/shared/hooks/useFetchOrdersListByTrackNumber.ts";
import { useFetchOrdersListByTgId } from "@/shared/hooks/useFetchOrdersListByTgId.ts";
import { OrdersListType } from "@/shared/api/types.ts";

export default function Main() {
  const [inputValue, setInputValue] = useState<string>("");
  const {
    orders: ordersByTrackNumber,
    startRequest: startRequestByTrackNumber,
    isLoading: isLoadingByTrackNumber,
  } = useFetchOrdersListByTrackNumber();
  const {
    orders: ordersByTgId,
    startRequest: startRequestByTgId,
    isLoading: isLoadingByTgId,
  } = useFetchOrdersListByTgId();
  const [orders, setOrders] = useState<OrdersListType>([]);

  useEffect(() => {
    startRequestByTgId();
  }, []);

  useEffect(() => {
    setOrders(ordersByTgId);
  }, [ordersByTgId]);

  useEffect(() => {
    setOrders(ordersByTrackNumber);
  }, [ordersByTrackNumber]);

  const handleSubmit = async () => {
    startRequestByTrackNumber(inputValue);
  };

  return (
    <div className="p-4">
      <div className="">
        <div className="mb-10 flex">
          <Input
            className="text-xl mr-4"
            type="text"
            inputMode="text"
            placeholder="Номер заказа"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            autoFocus={true}
          />
          <Button
            className="text-xl"
            onClick={handleSubmit}
            disabled={isLoadingByTrackNumber}
          >
            Найти
          </Button>
        </div>
      </div>
      <CustomerOrdersList ordersList={orders} isLoading={isLoadingByTgId} />
      <p className="fixed bottom-0 py-4 bg-bg text-center text-secondary-text dark:text-secondary-text-dark text-sm">
        Используя приложение, вы соглашаетесь с обработкой персональных данных и
        политикой конфиденциальности
      </p>
    </div>
  );
}

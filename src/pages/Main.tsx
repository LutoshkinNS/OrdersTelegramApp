import { useEffect } from "react";
import { Input } from "@/shared/components/Input/Input.tsx";
import { Button } from "@/shared/components/Button/Button.tsx";
import { CustomerOrdersList } from "@/shared/components/CustomerOrdersList/CustomerOrdersList.tsx";
import { useStore } from "@/context/StoreContext.tsx";
import { useOrderListByTrackNumber } from "@/features/orders-list/model/useOrderListByTrackNumber.ts";

export default function Main() {
  const { orders, setOrders, inputValue, setInputValue } = useStore();

  const {
    data: orderList,
    isLoading: isLoadingOrderList,
    refetch,
  } = useOrderListByTrackNumber(inputValue);

  useEffect(() => {
    if (orderList) setOrders(orderList);
  }, [orderList]);

  const handleSubmit = async () => {
    if (inputValue) {
      await refetch();
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
            disabled={isLoadingOrderList}
          >
            Найти
          </Button>
        </div>
      </div>
      <CustomerOrdersList ordersList={orderList} />
      <p className="fixed bottom-0 py-4 bg-bg text-center text-secondary-text dark:text-secondary-text-dark text-sm">
        Используя приложение, вы соглашаетесь с обработкой персональных данных и
        политикой конфиденциальности
      </p>
    </div>
  );
}

import { useEffect } from "react";
import { Input } from "@/shared/components/Input/Input.tsx";
import { Button } from "@/shared/components/Button/Button.tsx";
import { CustomerOrdersList } from "@/shared/components/CustomerOrdersList/CustomerOrdersList.tsx";
import { useFetchOrdersListByTrackNumber } from "@/shared/hooks/useFetchOrdersListByTrackNumber.ts";
// import { useQuery } from "@tanstack/react-query";
// import { OrdersListType } from "@/shared/api/types.ts";
// import { toast } from "react-toastify";
// import { fetchOrdersByTrackNumber } from "@/shared/api/fetchOrdersByTrackNumber.ts";
import { useStore } from "@/context/StoreContext.tsx";

export default function Main() {
  const { orders, setOrders, inputValue, setInputValue } = useStore();
  // const notify = (e: string) => toast.error(e);
  // const [orders, setOrders] = useState<OrdersListType>([]);
  // const [startSearch, setStartSearch] = useState<boolean>(false);
  const {
    orders: ordersByTrackNumber,
    startRequest: startRequestByTrackNumber,
    isLoading: isLoadingByTrackNumber,
  } = useFetchOrdersListByTrackNumber();

  // const initialRef = useRef<boolean>(false);

  // const {
  //   isPending: isPendingByTrackNumber,
  //   isError: isErrorByTrackNumber,
  //   data: dataByTrackNumber,
  //   error: errorByTrackNumber,
  // } = useQuery({
  //   queryKey: ["orderListByTrackNumber", startSearch],
  //   queryFn: async () => {
  //     try {
  //       const ordersByTrackNumber = await fetchOrdersByTrackNumber(inputValue);
  //       setOrders(ordersByTrackNumber);
  //     } catch (error) {
  //       console.error(error);
  //       notify(error.message);
  //     } finally {
  //       setStartSearch(false);
  //     }
  //   },
  //   enabled: !!inputValue && startSearch,
  // });
  //
  // const {
  //   isPending: isPendingByTgId,
  //   isError: isErrorByTgId,
  //   data: dataByTgId,
  //   error: errorByTgId,
  // } = useQuery({
  //   queryKey: ["ordersListByTgId"],
  //   queryFn: async () => {
  //     try {
  //       const ordersListByTgId = await fetchOrdersByTrackNumber(inputValue);
  //       setOrders(ordersListByTgId);
  //     } catch (error) {
  //       console.error(error);
  //       notify(error.message);
  //     } finally {
  //       setStartSearch(false);
  //     }
  //   },
  //   enabled: !!inputValue && startSearch,
  // });

  useEffect(() => {
    setOrders(ordersByTrackNumber);
  }, [ordersByTrackNumber]);

  useEffect(() => {
    if (inputValue) {
      startRequestByTrackNumber(inputValue);
    }
  }, []);

  const handleSubmit = async () => {
    // setStartSearch(true);
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
      <CustomerOrdersList ordersList={orders} />
      <p className="fixed bottom-0 py-4 bg-bg text-center text-secondary-text dark:text-secondary-text-dark text-sm">
        Используя приложение, вы соглашаетесь с обработкой персональных данных и
        политикой конфиденциальности
      </p>
    </div>
  );
}

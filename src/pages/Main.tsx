import { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";
import { Input } from "@/shared/components/Input/Input.tsx";
import { Button } from "@/shared/components/Button/Button.tsx";
import { fetchOrder } from "@/shared/api/fetchOrder.ts";
import { CustomerOrdersList } from "@/shared/components/CustomerOrdersList/CustomerOrdersList.tsx";
import { useStore } from "@/context/StoreContext.tsx";

export default function Main() {
  const [inputValue, setInputValue] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { setOrder } = useStore();

  const navigate = useNavigate();
  const notify = (e: string) => toast.error(e);

  const handleSubmit = async () => {
    if (inputValue !== "") {
      try {
        setIsLoading(true);
        const order = await fetchOrder(inputValue);

        if (order.code || order.message) {
          throw new Error(order.message);
        } else {
          console.log("fetchOrder", order);
          setOrder(order);
          navigate(`/order/${inputValue}`);
        }
      } catch (error) {
        console.error("Error fetching order:", error);
        notify(error instanceof Error ? error.message : "Произошла ошибка");
      } finally {
        setIsLoading(false);
      }
    }
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
            onInput={(e) => setInputValue(e.target.value)}
            autoFocus={true}
          />
          <Button
            className="text-xl"
            onClick={handleSubmit}
            disabled={isLoading}
          >
            {isLoading ? "Загрузка..." : "Найти"}
          </Button>
        </div>
        {/*<p className="text-center text-secondary-text dark:text-secondary-text-dark text-sm">*/}
        {/*    Нажимая кнопку, вы соглашаетесь с обработкой персональных данных и*/}
        {/*    политикой конфиденциальности*/}
        {/*</p>*/}
      </div>
      <CustomerOrdersList />
    </div>
  );
}

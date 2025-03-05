import { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";
import { Input } from "../shared/components/Input/Input.tsx";
import { Button } from "../shared/components/Button/Button.tsx";
import { Logo } from "../shared/components/Logo/Logo.tsx";
import { fetchOrder, OrderType } from "../shared/api/fetchOrder.ts";

type MainProps = {
  tg?: any;
  setOrder: (order: OrderType) => void;
};

export default function Main(props: MainProps) {
  const { setOrder } = props;
  // const [inputValue, setInputValue] = useState<string>("АТ0758");
  const [inputValue, setInputValue] = useState<string>("AT7749");
  const [isLoading, setIsLoading] = useState<boolean>(false);

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
        notify(error.message);
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <>
      <header className="max-w-4xl px-6 py-4 border border-transparent">
        <Logo />
      </header>
      <main className="p-4">
        <Input
          className="mb-6 text-2xl"
          type="text"
          inputMode="text"
          placeholder="Номер заказа"
          value={inputValue}
          onInput={(e) => setInputValue(e.target.value)}
          autoFocus={true}
        />
        <Button className="mb-4" onClick={handleSubmit} disabled={isLoading}>
          {isLoading ? "Загрузка..." : "Отследить посылку"}
        </Button>
        <p className="text-center text-secondary-text dark:text-secondary-text-dark text-l">
          Нажимая кнопку, вы соглашаетесь с обработкой персональных данных и
          политикой конфиденциальности
        </p>
      </main>
    </>
  );
}

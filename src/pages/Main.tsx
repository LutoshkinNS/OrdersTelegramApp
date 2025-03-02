import { useState } from "react";
import { Input } from "../shared/components/Input/Input.tsx";
import { Button } from "../shared/components/Button/Button.tsx";
import { Logo } from "../shared/components/Logo/Logo.tsx";
import { useNavigate } from "react-router";
import { fetchOrder } from "../shared/api/fetchOrder.ts";

export interface ProductType {
  id: number;
  label: string;
  price: number;
  count: number;
}

export interface StatusType {
  status: string;
  date: string;
}

export interface StatusesType {
  currentStatus: string;
  historyStatuses: Array<StatusType>;
}

export interface OrderType {
  trackNumber: string;
  customer: string;
  totalValue: number;
  products: Array<ProductType>;
  description: string | null;
  statuses: StatusesType;
}

type MainProps = {
  tg: any;
  setOrder: (order: OrderType) => void;
};

export default function Main(props: MainProps) {
  const { tg, setOrder } = props;
  const [inputValue, setInputValue] = useState<string>("АТ0758");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const navigate = useNavigate();

  const handleSubmit = async () => {
    if (inputValue !== "") {
      try {
        setIsLoading(true);
        const order = await fetchOrder(inputValue);
        setOrder(order);
        navigate(`/order/${inputValue}`);
      } catch (error) {
        console.error('Error fetching order:', error);
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <>
      <header className="max-w-4xl px-6 py-4 border border-transparent">
        <Logo color={tg.colorScheme === "light" ? "dark" : "light"} />
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

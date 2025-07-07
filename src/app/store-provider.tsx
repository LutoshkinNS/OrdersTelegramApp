import { StoreProvider as AppStoreProvider } from "../context/StoreContext.tsx";
import { useState } from "react";
import { Telegram } from "@twa-dev/types";
import { IOrder } from "@/entities/order";

export function StoreProvider({
  children,
  tg,
}: {
  children: React.ReactNode;
  tg: Telegram["WebApp"];
}) {
  const tgUserId = tg.initDataUnsafe.user?.id;

  const [orders, setOrders] = useState<IOrder[]>([]);
  const [inputValue, setInputValue] = useState<string>("");

  return (
    <AppStoreProvider
      value={{
        tgUserId,
        orders,
        setOrders,
        inputValue,
        setInputValue,
      }}
    >
      {children}
    </AppStoreProvider>
  );
}

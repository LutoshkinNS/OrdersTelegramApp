import { StoreProvider as AppStoreProvider } from "../context/StoreContext.tsx";
import { useState } from "react";
import { OrdersListType } from "@/shared/api/types.ts";
import { Telegram } from "@twa-dev/types";

export function StoreProvider({
  children,
  tg,
}: {
  children: React.ReactNode;
  tg: Telegram["WebApp"];
}) {
  const tgUserId = tg.initDataUnsafe.user?.id;

  const [orders, setOrders] = useState<OrdersListType>([]);
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

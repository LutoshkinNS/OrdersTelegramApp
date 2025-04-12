import { BrowserRouter, Route, Routes } from "react-router";
import { ErrorBoundary } from "react-error-boundary";
import { useEffect, useState } from "react";

import { Layout } from "./shared/components/Layout/Layout.tsx";
import Main from "@/pages/Main.tsx";
import { Error } from "@/pages/Error.tsx";
import { Order } from "@/pages/Order.tsx";
import { StoreProvider } from "./context/StoreContext.tsx";

import "./shared/styles/index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { OrdersListType } from "@/shared/api/types.ts";

export const tg = window.Telegram.WebApp;
const tgUserId = tg.initDataUnsafe.user?.id;

const queryClient = new QueryClient();

export const App = () => {
  const [orders, setOrders] = useState<OrdersListType>([]);
  const [inputValue, setInputValue] = useState<string>("");

  useEffect(() => {
    tg.ready();
  }, []);

  return (
    <BrowserRouter>
      <ErrorBoundary fallback={<Error />} onReset={() => {}}>
        <QueryClientProvider client={queryClient}>
          <StoreProvider
            value={{
              tgUserId,
              orders,
              setOrders,
              inputValue,
              setInputValue,
            }}
          >
            <Routes>
              <Route element={<Layout themeMode={tg.colorScheme} />}>
                <Route path="/" element={<Main />} />
                <Route path="/order/:trackId" element={<Order />} />
                <Route path="/error" element={<Error />} />
              </Route>
            </Routes>
          </StoreProvider>
        </QueryClientProvider>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

import { BrowserRouter, Route, Routes } from "react-router";
import { Layout } from "./shared/components/Layout/Layout.tsx";
import Main, { OrderType } from "./pages/Main.tsx";
import { Order } from "./pages/Order.tsx";
import { useEffect, useState } from "react";
import { StoreProvider } from "./context/StoreContext.tsx";

export const tg = window.Telegram.WebApp;

export const App = () => {
  const [order, setOrder] = useState<OrderType | null>(null);

  useEffect(() => {
    tg.ready();
  }, []);

  return (
    <StoreProvider value={{ order, setOrder }}>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout themeMode={tg.colorScheme} />}>
            <Route path="/" element={<Main tg={tg} setOrder={setOrder} />} />
            <Route path="/order/:trackId" element={<Order />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </StoreProvider>
  );
};

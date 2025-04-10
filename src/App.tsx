import { BrowserRouter, Route, Routes } from "react-router";
import { ErrorBoundary } from "react-error-boundary";
import { useEffect } from "react";

import { Layout } from "./shared/components/Layout/Layout.tsx";
import Main from "@/pages/Main.tsx";
import { Error } from "@/pages/Error.tsx";
import { Order } from "@/pages/Order.tsx";
import { StoreProvider } from "./context/StoreContext.tsx";

import "./shared/styles/index.css";

export const tg = window.Telegram.WebApp;
const tgUserId = tg.initDataUnsafe.user?.id;

export const App = () => {
  useEffect(() => {
    tg.ready();
  }, []);

  return (
    <BrowserRouter>
      <ErrorBoundary fallback={<Error />} onReset={() => {}}>
        <StoreProvider value={{ tgUserId }}>
          <Routes>
            <Route element={<Layout themeMode={tg.colorScheme} />}>
              <Route path="/" element={<Main />} />
              <Route path="/order/:trackId" element={<Order />} />
              <Route path="/error" element={<Error />} />
            </Route>
          </Routes>
        </StoreProvider>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

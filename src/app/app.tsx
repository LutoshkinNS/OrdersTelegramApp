import { ErrorBoundary } from "react-error-boundary";
import { useEffect } from "react";

import { Error } from "@/pages/Error.tsx";

import "../shared/styles/index.css";
import { AppRoutes } from "./app-routes.tsx";
import { AppProviders } from "./app-providers.tsx";

export const tg = window.Telegram.WebApp;

export const App = () => {
  useEffect(() => {
    tg.ready();
  }, []);

  return (
    <ErrorBoundary fallback={<Error />} onReset={() => {}}>
      <AppProviders tg={tg}>
        <AppRoutes />
      </AppProviders>
    </ErrorBoundary>
  );
};

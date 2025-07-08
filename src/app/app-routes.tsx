import { Route, Routes } from "react-router";
import { Layout } from "@/shared/components/Layout/Layout.tsx";
import Main from "@/pages/Main.tsx";
import { Order } from "@/pages/Order.tsx";
import { Error } from "@/pages/Error.tsx";
import { tg } from "@/app/app.tsx";

export function AppRoutes() {
  return (
    <Routes>
      <Route element={<Layout themeMode={tg.colorScheme} />}>
        <Route path="/" element={<Main />} />
        <Route path="/order/:trackId" element={<Order />} />
        <Route path="/error" element={<Error />} />
      </Route>
    </Routes>
  );
}

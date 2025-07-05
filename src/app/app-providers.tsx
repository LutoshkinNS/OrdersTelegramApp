import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@/shared/api/query-client.ts";
import { StoreProvider } from "@/app/store-provider.tsx";
import { Telegram } from "@twa-dev/types";

export function AppProviders({
  children,
  tg,
}: {
  children: React.ReactNode;
  tg: Telegram["WebApp"];
}) {
  return (
    <QueryClientProvider client={queryClient}>
      <StoreProvider tg={tg}>{children}</StoreProvider>
    </QueryClientProvider>
  );
}

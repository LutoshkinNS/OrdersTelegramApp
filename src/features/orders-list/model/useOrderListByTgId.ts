import { useQuery } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { useEffect } from "react";
import { useStore } from "@/context/StoreContext.tsx";
import { orderListByTgIdQuery } from "@/entities/order/model/order-queries.ts";

export function useOrderListByTgId() {
  const { tgUserId } = useStore();

  const { data, isPending, refetch, error, isError } = useQuery({
    ...orderListByTgIdQuery(tgUserId!),
    enabled: !!tgUserId,
  });

  useEffect(() => {
    if (isError) {
      toast.error("Не удалось загрузить список заказов. Попробуйте еще раз.");
    }
  }, [isError]);

  return { data, isPending, refetch, error };
}

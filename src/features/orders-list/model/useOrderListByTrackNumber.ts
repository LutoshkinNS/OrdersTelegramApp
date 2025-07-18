import { useQuery } from "@tanstack/react-query";
import { orderListByTrackNumberQuery } from "@/entities/order";
import { toast } from "react-toastify";
import { useEffect } from "react";

export function useOrderListByTrackNumber(trackNumber: string | undefined) {
  const { data, isPending, refetch, error, isError } = useQuery({
    ...orderListByTrackNumberQuery(trackNumber || ""),
    enabled: false,
  });

  useEffect(() => {
    if (isError) {
      toast.error("Не удалось загрузить список заказов. Попробуйте еще раз.");
    }
  }, [isError]);

  return { data, isPending, refetch, error };
}

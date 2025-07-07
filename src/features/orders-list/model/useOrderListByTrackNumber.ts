import { useQuery } from "@tanstack/react-query";
import { orderListQuery } from "@/entities/order";
import { toast } from "react-toastify";
import { useEffect } from "react";

export function useOrderListByTrackNumber(trackNumber: string | undefined) {
  const { data, isLoading, refetch, error, isError } = useQuery({
    ...orderListQuery(trackNumber!),
    enabled: !!trackNumber,
  });

  useEffect(() => {
    if (isError) {
      toast.error("Не удалось загрузить список заказов. Попробуйте еще раз.");
    }
  }, [isError]);

  return { data, isLoading, refetch, error };
}

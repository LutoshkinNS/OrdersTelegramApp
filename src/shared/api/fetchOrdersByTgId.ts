import { DEV_API_URL } from "./config.ts";
import { OrdersListType } from "@/shared/api/types.ts";

export const fetchOrdersByTgId = async (
  tgId: number,
): Promise<OrdersListType> => {
  const response = await fetch(
    `${import.meta.env.DEV ? DEV_API_URL : ""}/api/orders/tg?tgId=${tgId}`,
  );

  if (!response.ok) {
    throw new Error("Непредвиденная ошибка при запросе данных");
  }

  try {
    return await response.json();
  } catch (error) {
    console.error("fetchOrder unknown error:", error);

    if (error instanceof Error) {
      if (error.message === "Failed to fetch") {
        throw error;
      }
      throw new Error("Непредвиденная ошибка");
    }

    throw new Error("Неизвестная ошибка при обработке данных");
  }
};

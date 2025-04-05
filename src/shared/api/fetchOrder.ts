import { DEV_API_URL } from "./config.ts";

export interface ProductType {
  id: number;
  label: string;
  price: number;
  count: number;
}

export interface StatusType {
  status: string;
  date: string;
}

export interface StatusesType {
  currentStatus: string;
  historyStatuses: Array<StatusType>;
}

export interface OrderType {
  trackNumber: string;
  customer?: string;
  deliveryToCustomer?: string;
  deliveryChinaToRF?: number;
  totalValue: number;
  products?: Array<ProductType>;
  description?: string | null;
  statuses: StatusesType;
}

export interface ErrorType {
  code: string;
  message: string;
}

export const fetchOrder = async (trackNumber: string): Promise<OrderType> => {
  try {
    const response = await fetch(
      `${import.meta.env.DEV ? DEV_API_URL : ""}/api/order?trackNumber=${trackNumber}`,
      {
        method: "GET"
        // headers: {
        //     'Accept': 'application/json',
        //     'Content-Type': 'application/json',
        // },
        // mode: 'cors',
        // credentials: 'include'
      }
    );

    if (!response.ok) {
      throw new Error("Непредвиденная ошибка при запросе данных");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    if (error instanceof Error) {
      if (error.message === "Failed to fetch") {
        throw new Error("Не удалось подключиться к серверу. Попробуйте позже.");
      }

      throw error;
    } else {
      console.error("fetchOrder unknown error:", error);
      throw new Error("Неизвестная ошибка при запросе данных");
    }
  }
};

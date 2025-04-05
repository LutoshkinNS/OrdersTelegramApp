import {DEV_API_URL} from "./config.ts";

export interface OrderItemType {
    track_number: string;
    status: string;
}

export type OrdersListType = Array<OrderItemType>

export const fetchOrders = async (tgId: number): Promise<OrdersListType> => {
    try {
        const response = await fetch(`${import.meta.env.DEV ? DEV_API_URL : ''}/api/orders?tgId=${tgId}`);

        if (!response.ok) {
            throw new Error("Непредвиденная ошибка при запросе данных");
        }

        return await response.json();
    } catch (error) {
        if (error instanceof Error) {
            if (error.message === 'Failed to fetch') {
                throw new Error('Не удалось подключиться к серверу. Попробуйте позже.');
            }

            throw error;
        } else {
            console.error('fetchOrder unknown error:', error);
            throw new Error('Неизвестная ошибка при запросе данных');
        }
    }
};
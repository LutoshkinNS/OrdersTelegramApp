import {FETCH_URL} from "./config.ts";
import {OrderType} from "../../pages/Main.tsx";

export const fetchOrder = async (trackNumber: string): Promise<OrderType> => {
    try {
        const response = await fetch(`${FETCH_URL}/api/order?trackNumber=${trackNumber}`);

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        return await response.json();
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error
    }
};
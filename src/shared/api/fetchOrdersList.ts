import {tg, url} from "../../App.tsx";

export const fetchOrdersList = async () => {
    try {
        const response = await fetch(`${url}/api/deals/tg?id=${tg.initDataUnsafe.user?.id}`);
        return await response.json();
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};
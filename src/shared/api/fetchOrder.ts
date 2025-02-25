import {tg, url} from "../../App.tsx";

export const fetchOrder = async (number: string) => {
    try {
        const response = await fetch(`${url}/api/deals/label?id=${tg.initDataUnsafe.user?.id}&label=${number}`);
        return await response.json();
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};
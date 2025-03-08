// для nginx указываем относительные пути
// import { FETCH_URL } from "./config";

interface FetchOrderImageParams {
    trackNumber: string;
    width?: number;
    height?: number;
    quality?: number;
}

interface FetchOrderImages {
    id: number;
    title: string;
    imageBase64: string;
}

export type FetchOrderImagesResponse = Array<FetchOrderImages>

export const fetchOrderImages = async ({
    trackNumber,
    width,
    height,
    quality
}: FetchOrderImageParams): Promise<FetchOrderImagesResponse> => {
    try {
        let url = `/api/order/image?trackNumber=${trackNumber}`;
        
        if (width) url += `&width=${width}`;
        if (height) url += `&height=${height}`;
        if (quality) url += `&quality=${quality}`;

        const response = await fetch(url);

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        return await response.json();
    } catch (error) {
        console.error('Error fetching image:', error);
        throw error;
    }
};

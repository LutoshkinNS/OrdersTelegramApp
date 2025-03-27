import {FetchOrderImagesResponse} from "@/shared/api/fetchOrderImages.ts";
import Dialog from "@/shared/components/Dialog/Dialog.tsx";
import {ProductAvatar} from "@/shared/components/ProductAvatar/ProductAvatar.tsx";

export type ImagesDuringDeliveryProps = {
    images?: FetchOrderImagesResponse;
}

export const ImagesDuringDelivery = ({images}: ImagesDuringDeliveryProps) => {
    return (
        images?.find((image) => image.id === 0) ? (
                <>
                    <p className="text-2xl font-medium mb-4 ">Фотографии заказа</p>
                    <div className="flex flex-row flex-wrap">
                        {images?.map(
                            (image) =>
                                image.id === 0 && (
                                    <Dialog
                                        trigger={
                                            <ProductAvatar className="mr-4 mb-4" url={image.imageBase64}/>
                                        }
                                        content={
                                            <img
                                                src={image.imageBase64}
                                                alt="product"
                                                className={"w-full h-full"}
                                            />
                                        }
                                    />
                                )
                        )}
                    </div>
                </>
            ) :
            <>
                {images ? null : <>
                    <div className="mb-4 bg-gray dark:bg-gray-dark rounded-3xl w-55 h-6 animate-pulse"></div>
                    <div className="flex flex-row flex-wrap">
                        <div
                            className="mr-4 mb-4 bg-gray dark:bg-gray-dark rounded-3xl w-28 h-28 animate-pulse"></div>
                        <div
                            className="mr-4 mb-4 bg-gray dark:bg-gray-dark rounded-3xl w-28 h-28 animate-pulse"></div>
                    </div>
                </>}
            </>

    );
};
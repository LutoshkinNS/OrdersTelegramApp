import {NavLink, useParams} from "react-router";
import {useEffect, useState} from "react";
import {toast} from "react-toastify";

import {Arrow} from "../shared/components/Arrow/Arrow.tsx";
import {ProductAvatar} from "../shared/components/ProductAvatar/ProductAvatar.tsx";
import {Accordion} from "../shared/components/Accordion/Accordion.tsx";
import {useStore} from "../context/StoreContext.tsx";
import {
    fetchOrderImages,
    FetchOrderImagesResponse,
} from "../shared/api/fetchOrderImages.ts";
import {fetchOrder} from "../shared/api/fetchOrder.ts";
import Dialog from "@/shared/components/Dialog/Dialog.tsx";

export const Order = () => {
    const {order, setOrder} = useStore();
    const {trackId} = useParams();
    const [statusOpen, setToggleStatus] = useState<boolean>(false);
    const [images, setImages] = useState<FetchOrderImagesResponse>();
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const notify = (e: string) => toast.error(e);

    useEffect(() => {
        const getOrder = async () => {
            if (trackId) {
                try {
                    setIsLoading(true);
                    const respOrder = await fetchOrder(trackId);

                    if (respOrder) {
                        console.log("fetchOrder", respOrder);
                        setOrder(respOrder);
                    } else {
                        notify("Заказ не найден");
                    }
                } catch (error) {
                    console.error("Error fetching order:", error);
                    notify(`${error}`);
                } finally {
                    setIsLoading(false);
                }
            }
        };

        if (!order) {
            getOrder();
        }
    }, [trackId, order, setOrder]);

    useEffect(() => {
        const loadImage = async () => {
            try {
                if (!trackId) return;

                const images = await fetchOrderImages({
                    trackNumber: trackId,
                    // width: 112,
                    // height: 112,
                    quality: 80,
                });

                console.log("fetchImages", images);
                setImages(images);
            } catch (err) {
                console.error("Error loading image:", err);
                toast.error("Ошибка при загрузке изображений");
            }
        };

        loadImage();
    }, [trackId]);

    if (!order) {
        return <div>Order not found</div>;
    }

    return (
        <>
            <header className="max-w-4xl px-6 py-4 border border-transparent">
                <NavLink to="/">
                    <Arrow/>
                </NavLink>
            </header>
            <main className="p-4">
                <p className="text-2xl font-medium mb-4">{order.customer}</p>
                <h2 className="text-4xl font-bold mb-2">{trackId}</h2>
                <p className="text-secondary-text dark:text-secondary-text-dark mb-4">
                    {order.description}
                </p>

                <Accordion
                    className="mb-6"
                    title={order.statuses.currentStatus}
                    open={statusOpen}
                    onToggle={() => setToggleStatus((prevState) => !prevState)}
                >
                    <ul className="list-disc pl-6">
                        {order.statuses.historyStatuses.map((item, idx) => {
                            const date = new Date(item.date);

                            return (
                                <li key={idx} className="mb-2">
                                    <p className="font-medium text-primary-text dark:text-primary-text-dark">
                                        {item.status}
                                    </p>
                                    <span>{date.toLocaleDateString()}</span>
                                    {" - "}
                                    <span>{date.toLocaleTimeString()}</span>
                                </li>
                            );
                        })}
                    </ul>
                </Accordion>

                <p className="text-2xl font-medium mb-4">
                    Общая стоимость: {order.totalValue} руб
                </p>

                {order.products.map((item) => (
                    <div key={item.id} className="mb-6 flex flex-row">
                        <Dialog
                            classNameTrigger="shrink-0"
                            trigger={
                                <ProductAvatar
                                    className="mr-4"
                                    url={
                                        images?.find((image) => image.id === item.id)?.imageBase64
                                    }
                                />
                            }
                            content={
                                <img
                                    src={
                                        images?.find((image) => image.id === item.id)?.imageBase64
                                    }
                                    alt="product"
                                />
                            }
                        />

                        <div className="">
                            <p className="pt-3 mb-1 text-xl font-medium">{item.label}</p>
                            <p className="mb-1 font-medium text-secondary-text dark:text-secondary-text-dark">
                                {item.count} шт
                            </p>
                            <p className="mb-1 font-medium text-secondary-text dark:text-secondary-text-dark">
                                {item.price} руб/шт
                            </p>
                        </div>
                    </div>
                ))}
                {images?.find((image) => image.id === 0) ? (
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
                }
            </main>
        </>
    );
};

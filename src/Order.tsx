import {NavLink, useParams} from "react-router";
import {useEffect, useState} from "react";
import {OrderType} from "./App.tsx";
import {fetchOrder} from "./shared/api/fetchOrder.ts";
import {Arrow} from "./shared/components/Arrow/Arrow.tsx";
import {mockData} from "./mock.ts";
import {ProductAvatar} from "./shared/components/ProductAvatar/ProductAvatar.tsx";
import {Accordion} from "./shared/components/Accordion/Accordion.tsx";

export const Order = () => {
    const {trackId} = useParams();
    const [order, setOrder] = useState<OrderType>();
    const [statusOpen, setToggleStatus] = useState<boolean>(false);

    useEffect(() => {
        if (trackId) {
            // fetchOrder(trackId).then(r => setOrder(r));
            setOrder(mockData);
        }
    }, [trackId]);

    return (
        <>
            <header
                className="max-w-4xl px-6 py-4 border border-transparent">
                <NavLink to="/">
                    <Arrow/>
                </NavLink>
            </header>
            <main className="p-4">
                <p className="text-2xl font-medium mb-4">{order?.customer}</p>
                <h2 className="text-4xl font-bold mb-2">{trackId}</h2>
                <p className="text-secondary-text dark:text-secondary-text-dark mb-4">Lorem ipsum dolor sit amet,
                    consectetur adipisicing elit.
                    Debitis
                    delectus
                    distinctio neque odit placeat veritatis, vero? Commodi dolorem possimus repellat!</p>


                <Accordion className="mb-6" title={order?.statuses.currentStatus}
                           open={statusOpen}
                           onToggle={() => setToggleStatus((prevState) => !prevState)}>
                    <ul className="list-disc pl-6">
                        {order?.statuses.historyStatuses.map((item) => {
                            const date = new Date(item.date);

                            return <li className='mb-2'>
                                <p className="font-medium text-primary-text dark:text-primary-text-dark">{item.status}</p>
                                <span>{date.toLocaleDateString()}</span>
                                {' - '}
                                <span>{date.toLocaleTimeString()}</span>
                            </li>
                        })
                        }
                    </ul>
                </Accordion>

                {
                    order?.products.map((item) => (
                        /*<div className="mb-6">*/
                        <div className="mb-6 flex flex-row ">
                            <ProductAvatar className="mr-4"/>
                            <div className="">
                                <p className="pt-3 mb-1 text-xl font-medium">{item.label}</p>
                                <p className="mb-1 font-medium text-secondary-text dark:text-secondary-text-dark">{item.count} шт</p>
                                <p className="mb-1 font-medium text-secondary-text dark:text-secondary-text-dark">{item.price} руб/шт</p>
                            </div>
                        </div>
                    ))
                }


            </main>
        </>
    );
};
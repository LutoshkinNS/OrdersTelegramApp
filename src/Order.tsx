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
            const findOrder = mockData.find((item) => item.label === trackId);
            setOrder(findOrder);
        }
    }, [trackId]);

    return (
        <div className="flex flex-col h-dvh">
            <header
                className="flex max-w-4xl px-6 py-4 border border-transparent">
                <NavLink to="/">
                    <Arrow/>
                </NavLink>
            </header>
            <main className="h-full grow p-6">
                {/*<pre>*/}
                {/*    {order ? JSON.stringify(order, null, 2) : 'Not data'}*/}
                {/*</pre>*/}
                <h2 className="text-4xl font-bold mb-6">{trackId}</h2>
                <p className="text-2xl font-medium mb-4">Константин Константинович К.</p>
                <div className="mb-6">
                    <ProductAvatar className="float-left mr-4"/>
                    <div className="">
                        <p className="pt-3 mb-1 text-xl font-medium">Название</p>
                        <span className="block mb-1 font-medium">3 шт</span>
                        <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis
                            delectus
                            distinctio neque odit placeat veritatis, vero? Commodi dolorem possimus repellat!</p>
                    </div>
                </div>
                <Accordion title={"В пути"} open={statusOpen}
                           onToggle={() => setToggleStatus((prevState) => !prevState)}>
                    <ul>
                        <li>01.01.2025 - Создан</li>
                        <li>02.01.2025 - Упакован</li>
                        <li>03.01.2025 - Отправлен со склада</li>
                        <li>04.01.2025 - В пути</li>
                    </ul>
                </Accordion>

            </main>
        </div>
    );
};
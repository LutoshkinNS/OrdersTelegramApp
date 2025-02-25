import {NavLink, useParams} from "react-router";
import {useEffect, useState} from "react";
import {Deal, tg, url} from "./Max.tsx";

export const Order = () => {
    const {id} = useParams();
    const [order, setOrder] = useState<Deal>();

    useEffect(() => {
        const fetchOrder = async (id: string) => {
            try {
                const response = await fetch(`${url}/api/deals/label?id=${tg.initDataUnsafe.user?.id}&label=${id}`);
                const data = await response.json();
                console.log(data);
                setOrder(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        if (id) {
            fetchOrder(id)
        }
    }, [id]);

    return (
        <div className="flex flex-col h-dvh">
            <header
                className="flex max-w-4xl px-6 py-4 border border-transparent">
                <NavLink to="/">
                    <div className="text-3xl font-bold">DLC</div>
                </NavLink>
            </header>
            <main className="h-full grow p-6">
                <pre>
                    {order ? JSON.stringify(order, null, 2) : 'Not data'}
                </pre>
            </main>
        </div>
    );
};
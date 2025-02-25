import {useEffect, useState} from "react";
import "./App.css";
import {Input} from "./components/Input/Input.tsx";
import {mockData} from './mock'
import {NavLink} from "react-router";

export const url = "https://new-queens-return.loca.lt"

export const tg = window.Telegram.WebApp;

export interface Deal {
    description: string;
    label: string;
    stage: string;
    data: unknown;
    time_period: {
        endDate: string;
        startDate: string;
    }
}

const Card = ({children, className = ""}) => {
    return (
        <div className={`border rounded-md shadow-md p-4 bg-white ${className}`}>
            {children}
        </div>
    );
};

const Button = ({children, onClick, className = ""}) => {
    return (
        <button
            onClick={onClick}
            className={`w-full px-4 py-4 bg-orange-500 text-white rounded-lg shadow-xl hover:bg-orange-600 transition ${className}`}
        >
            {children}
        </button>
    );
};

export default function OrdersList() {
    const [deals, setDeals] = useState<Deal[]>();
    const [filteredDeals, setFilteredDeals] = useState<Deal[]>();
    // const [inputValue, setInputValue] = useState<string>();


    useEffect(() => {
        tg.ready();
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`${url}/api/deals/tg?id=${tg.initDataUnsafe.user?.id}`);
                const data = await response.json();
                console.log(data);
                if (!data) {
                    setDeals(mockData)
                    setFilteredDeals(mockData)
                } else {
                    setDeals(data)
                    setFilteredDeals(data)
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();

        // setDeals(mockData)
        // setFilteredDeals(mockData)
    }, []);

    const handleFilter = (e) => {
        console.log(e.target.value)
        console.log(deals)
        const filteredOrders = deals?.filter((order) => order.label.toLowerCase().includes(e.target.value.toLowerCase()));
        setFilteredDeals(filteredOrders);
    }

    return (
        <div className="flex flex-col h-dvh">
            <header
                className="flex max-w-4xl px-6 py-4 border border-transparent">
                <div className="text-3xl font-bold">DLC</div>
            </header>
            <main className="h-full grow p-6 overflow-scroll">
                {/*{*/}
                {/*    tg.initDataUnsafe.user?.id*/}
                {/*}*/}
                {/*<h1 className="text-2xl font-bold mb-4">Список заказов</h1>*/}
                <div>
                    {filteredDeals?.map((order) => (
                        <NavLink to={`/order/${order.label}`}>
                            <Card key={order.label} className="mb-4 p-4 border border-gray-300 rounded-lg shadow">
                                <div className="flex justify-between items-center">
                                    <div>
                                        <h2 className="text-lg font-semibold">{order.label}</h2>
                                        <p className="text-sm text-gray-500">Статус: {order.stage}</p>
                                    </div>
                                </div>
                            </Card>
                        </NavLink>

                    ))}
                </div>


                {/*{order ? <Card key={order.label} className="p-4 border rounded-lg shadow">*/}
                {/*    <div className="flex justify-between items-center">*/}
                {/*        <div>*/}
                {/*            <h2 className="text-lg font-semibold">{order.label}</h2>*/}
                {/*            <p className="text-sm text-gray-500">Статус: {order.stage}</p>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*    <div className="mt-4 p-3 bg-gray-100 rounded-lg text-gray-700">*/}
                {/*        {order.description}*/}
                {/*    </div>*/}
                {/*</Card> : null}*/}

            </main>
            <footer
                className="shadow-[0px_10px_31px_7px_rgba(0,0,0,0.10)] px-6 py-4 border border-transparent rounded-t-2xl ">
                <Input className="mb-6" type="text" placeholder="Номер заказа"
                       onInput={handleFilter}/>

                {/*<Button className="mb-4" onClick={handleFilter}>Отследить посылку</Button>*/}
            </footer>
        </div>
    );
}
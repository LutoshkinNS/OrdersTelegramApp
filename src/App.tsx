import "./App.css";
import {useEffect, useState} from "react";
import {Button} from "./components/Button/Button";
import {Input} from "./components/Input/Input";

const tg = window.Telegram.WebApp;

interface Deal {
    description: string;
    label: string;
    stage: string;
    data: unknown;
    time_period: {
        endDate: string;
        startDate: string;
    }
}


function App() {
    const [deals, setDeals] = useState<Deal[]>();
    const [order, setOrder] = useState<Deal>();
    const [input, setInput] = useState<string>();

    useEffect(() => {
        tg.ready();
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://huge-apes-joke.loca.lt/api/deals/tg?id=1');
                const data = await response.json();
                console.log(data);
                setDeals(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    const fetchOrder = async (label: string) => {
        try {
            const response = await fetch(`https://huge-apes-joke.loca.lt/api/deals/label?id=1&label=${label}`);
            const data = await response.json();
            console.log(data);
            setOrder(data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };


    console.log(deals)

    return (
        <>

            <main className="p-8 flex flex-col justify-start h-dvh">


                <div className="flex flex-row gap-2">
                    {deals?.map((deal) => {
                        return (
                            <h3>{deal.label}</h3>
                        )
                    })}
                </div>

                <Input type="text" placeholder="Номер посылки" onInput={(e) => setInput(e.target.value)}/>

                <Button className="mb-4" onClick={() => fetchOrder(input)}>Отследить посылку</Button>

                <h3>{order?.label}</h3>
                <p>{order?.description}</p>
                <p>{order?.stage}</p>
                <p>{order?.time_period.startDate}</p>
                <p>{order?.time_period.endDate}</p>
            </main>
        </>
    )
}

export default App;

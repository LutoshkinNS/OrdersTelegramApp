import {useEffect, useState} from "react";
import "./App.css";
import {Input} from "./shared/components/Input/Input.tsx";
import {Button} from "./shared/components/Button/Button.tsx";
import {Logo} from "./shared/components/Logo/Logo.tsx";
import {mockData} from "./mock.ts";
import {useNavigate} from "react-router";

export const url = "https://new-queens-return.loca.lt"

export const tg = window.Telegram.WebApp;

export interface OrderType {
    description: string;
    label: string;
    stage: string;
    data: unknown;
    time_period: {
        endDate: string;
        startDate: string;
    }
}


export default function App() {
    const [inputValue, setInputValue] = useState<string>('KR-22');
    const [order, setOrder] = useState<OrderType | undefined>()

    const navigate = useNavigate();

    console.log(order)

    useEffect(() => {
        tg.ready();
    }, []);

    const handleSubmit = () => {
        navigate(`/order/${inputValue}`)
        // const findOrder = mockData.find((item) => item.label === inputValue);
        // setOrder(findOrder);
        // setInputValue('');
        // fetchOrder(inputValue).then(r => console.log(r));
    }

    return (
        <>
            <header
                className="max-w-4xl px-6 py-4 border border-transparent">
                <Logo/>
            </header>
            <main className="p-6">
                {/*{*/}
                {/*    tg.initDataUnsafe.user?.id*/}
                {/*}*/}

                <Input className="mb-6 text-2xl" type="text" inputMode="text" placeholder="Номер заказа"
                       value={inputValue}
                       onInput={(e) => setInputValue(e.target.value)} autoFocus={true}/>
                <Button className="mb-4" onClick={handleSubmit}>Отследить посылку</Button>
                <p className="text-center text-gray-700 text-xl">Нажимая кнопку, вы соглашаетесь с обработкой
                    персональных
                    данных и
                    политикой
                    конфиденциальности</p>
            </main>
        </>
    );
}
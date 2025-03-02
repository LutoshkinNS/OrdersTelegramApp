import {useEffect, useState} from "react";
// import "./shared/styles/index.css";
import {Input} from "./shared/components/Input/Input.tsx";
import {Button} from "./shared/components/Button/Button.tsx";
import {Logo} from "./shared/components/Logo/Logo.tsx";
import {mockData} from "./mock.ts";
import {useNavigate} from "react-router";

export const url = "https://new-queens-return.loca.lt"

export interface ProductType {
    id: number;
    label: string;
    price: number;
    count: number;
}

export interface StatusType {
    status: string;
    date: number;
}

export interface StatusesType {
    currentStatus: string;
    historyStatuses: Array<StatusType>;
}

export interface OrderType {
    trackNumber: string;
    customer: string;
    totalValue: number;
    products: Array<ProductType>;
    description: string | null;
    statuses: StatusesType
}


export default function App(props) {
    const {tg} = props
    const [inputValue, setInputValue] = useState<string>('АТ0758');
    const [order, setOrder] = useState<OrderType | undefined>()

    const navigate = useNavigate();

    console.log(order)

    useEffect(() => {
        tg.ready();
    }, [tg]);

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
                <Logo color={tg.colorScheme === 'light' ? 'dark' : 'light'}/>
            </header>
            <main className="p-4">
                {/*{*/}
                {/*    tg.initDataUnsafe.user?.id*/}
                {/*}*/}

                <Input className="mb-6 text-2xl" type="text" inputMode="text" placeholder="Номер заказа"
                       value={inputValue}
                       onInput={(e) => setInputValue(e.target.value)} autoFocus={true}/>
                <Button className="mb-4" onClick={handleSubmit}>Отследить посылку</Button>
                <p className="text-center text-secondary-text dark:text-secondary-text-dark text-l">Нажимая
                    кнопку, вы соглашаетесь с
                    обработкой
                    персональных
                    данных и
                    политикой
                    конфиденциальности</p>
            </main>
        </>
    );
}
import {useState, useEffect} from "react";
import {toast} from "react-toastify";
import {useNavigate} from "react-router";
import {Input} from "@/shared/components/Input/Input.tsx";
import {Button} from "@/shared/components/Button/Button.tsx";
import {fetchOrder, OrderType} from "@/shared/api/fetchOrder.ts";
import {fetchOrders, OrdersListType} from "@/shared/api/fetchOrders.ts";
import {FindedOrders} from "@/shared/components/FindedOrders/FindedOrders.tsx";

type MainProps = {
    setOrder: (order: OrderType) => void;
    tgUserId: number;
};

export default function Main(props: MainProps) {
    const {setOrder, tgUserId} = props;
    const [inputValue, setInputValue] = useState<string>("");
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [isOrderLoading, setIsOrderLoading] = useState<boolean>(false);
    const [ordersList, setOrdersList] = useState<OrdersListType>();
    const [isOrdersLoading, setIsOrdersLoading] = useState<boolean>(true);

    const navigate = useNavigate();
    const notify = (e: string) => toast.error(e);

    useEffect(() => {
        const getOrders = async () => {
            setIsOrdersLoading(true);
            const orders = await fetchOrders(tgUserId);
            setOrdersList(orders);
            setIsOrdersLoading(false);
        };
        getOrders();
    }, [tgUserId]);

    const handleSubmit = async () => {
        if (inputValue !== "") {
            try {
                setIsLoading(true);
                const order = await fetchOrder(inputValue);

                if (order.code || order.message) {
                    throw new Error(order.message);
                } else {
                    console.log("fetchOrder", order);
                    setOrder(order);
                    navigate(`/order/${inputValue}`);
                }
            } catch (error) {
                console.error("Error fetching order:", error);
                notify(error instanceof Error ? error.message : "Произошла ошибка");
            } finally {
                setIsLoading(false);
            }
        }
    };

    const handleOrderClick = async (trackNumber: string) => {
        try {
            setIsOrderLoading(true);
            const order = await fetchOrder(trackNumber);
            setOrder(order);
            navigate(`/order/${trackNumber}`);
        } catch (error) {
            console.error("Error fetching order:", error);
            notify(error instanceof Error ? error.message : "Произошла ошибка");
        } finally {
            setIsOrderLoading(false);
        }
    };

    return (
        <div className="p-4">
            <div className="">
                <div className="mb-10 flex">
                    <Input
                        className="text-xl mr-4"
                        type="text"
                        inputMode="text"
                        placeholder="Номер заказа"
                        value={inputValue}
                        onInput={(e) => setInputValue(e.target.value)}
                        autoFocus={true}
                    />
                    <Button
                        className="text-xl"
                        onClick={handleSubmit}
                        disabled={isLoading}
                    >
                        {isLoading ? "Загрузка..." : "Найти"}
                    </Button>
                </div>
                {/*<p className="text-center text-secondary-text dark:text-secondary-text-dark text-sm">*/}
                {/*    Нажимая кнопку, вы соглашаетесь с обработкой персональных данных и*/}
                {/*    политикой конфиденциальности*/}
                {/*</p>*/}
            </div>
            <div className="flex items-center justify-center">
                {isOrdersLoading ? (
                    <ul className="flex flex-col gap-2 w-full">
                        {[1, 2].map((i) => (
                            <li key={i} className="animate-pulse">
                                <div className="w-full h-[88px] bg-gray-200 dark:bg-gray-700 rounded-xl"/>
                            </li>
                        ))}
                    </ul>
                ) : ordersList ? (
                    <FindedOrders
                        ordersList={ordersList}
                        onClick={handleOrderClick}
                        isOrderLoading={isOrderLoading}
                    />
                ) : (
                    <div className="h-52 flex items-center justify-center">
                        <p className="text-primary-text dark:text-primary-text-dark">
                            У вас нет заказов
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}

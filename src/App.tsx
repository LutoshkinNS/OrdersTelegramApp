import {BrowserRouter, Route, Routes} from "react-router";
import {ErrorBoundary} from "react-error-boundary";
import {useEffect, useState} from "react";

import {Layout} from "./shared/components/Layout/Layout.tsx";
import Main, {OrderType} from "@/pages/Main.tsx";
import {Error} from "@/pages/Error.tsx";
import {Order} from "@/pages/Order.tsx";
import {StoreProvider} from "./context/StoreContext.tsx";

import "./shared/styles/index.css";

export const tg = window.Telegram.WebApp;

export const App = () => {
    const [order, setOrder] = useState<OrderType | null>(null);

    useEffect(() => {
        tg.ready();
    }, []);

    return (
        <BrowserRouter>
            <ErrorBoundary fallback={<Error/>} onReset={() => {
                setOrder(null);
            }}>
                <StoreProvider value={{order, setOrder}}>
                    <Routes>
                        <Route element={<Layout themeMode={tg.colorScheme}/>}>
                            <Route path="/" element={<Main setOrder={setOrder}/>}/>
                            <Route path="/order/:trackId" element={<Order/>}/>
                            <Route path="/error" element={<Error/>}/>
                        </Route>
                    </Routes>
                </StoreProvider>
            </ErrorBoundary>
        </BrowserRouter>

    );
};

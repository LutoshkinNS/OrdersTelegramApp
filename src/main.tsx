import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
// import App from './App.tsx'
import OrdersList from "./Max.tsx";
import {BrowserRouter, Route, Routes} from "react-router";
import {Order} from "./Order.tsx";

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<OrdersList/>}/>
                <Route path="/order/:id" element={<Order/>}/>
            </Routes>
        </BrowserRouter>
    </StrictMode>,
)

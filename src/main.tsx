import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import {BrowserRouter, Route, Routes} from "react-router";
import App from "./App.tsx";
import {Order} from "./Order.tsx";
import {Layout} from "./shared/components/Layout/Layout.tsx";

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <BrowserRouter>
            <Routes>
                <Route element={<Layout/>}>
                    <Route path="/" element={<App/>}/>
                    <Route path="/order/:trackId" element={<Order/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    </StrictMode>,
)

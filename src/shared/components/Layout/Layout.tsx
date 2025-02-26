import {Outlet} from "react-router";

export const Layout = () => {

    return (
        <div className="max-w-3xl h-dvh mx-auto">
            <Outlet/>
        </div>
    );
};
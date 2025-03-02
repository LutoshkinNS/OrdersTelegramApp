import {Outlet} from "react-router";
import clsx from "clsx";

export const Layout = (props) => {
    const {themeMode} = props

    return (
        <div className={clsx("max-w-3xl h-dvh mx-auto text-primary-text dark:text-primary-text-dark", themeMode)}>
            <Outlet/>
        </div>
    );
};
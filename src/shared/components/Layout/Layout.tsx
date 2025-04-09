import { NavLink, Outlet, useLocation } from "react-router";
import clsx from "clsx";
import { ToastContainer } from "react-toastify";
import { ArrowToMainBlock } from "@/shared/components/ArrowBackBlock/ArrowBackBlock";
import { Logo } from "@/shared/components/Logo/Logo";

type LayoutProps = {
  themeMode: "light" | "dark";
};

export const Layout = ({ themeMode }: LayoutProps) => {
  const location = useLocation();
  const isMainPage = location.pathname === "/";

  return (
    <div
      className={clsx(
        "max-w-3xl h-dvh mx-auto text-primary-text dark:text-primary-text-dark",
        themeMode,
      )}
    >
      <header className="flex items-center px-6 py-4 border border-transparent relative">
        {!isMainPage && <ArrowToMainBlock />}
        <div className="grow-1 flex justify-center items-center">
          <NavLink to="/">
            <Logo />
          </NavLink>
        </div>
      </header>
      <main>
        <Outlet />

        <ToastContainer
          position="bottom-center"
          autoClose={5000}
          hideProgressBar
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
      </main>
    </div>
  );
};

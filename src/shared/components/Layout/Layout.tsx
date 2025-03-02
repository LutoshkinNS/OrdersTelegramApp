import { Outlet } from "react-router";
import clsx from "clsx";
import { ToastContainer } from "react-toastify";

type LayoutProps = {
  themeMode: "light" | "dark";
};

export const Layout = (props: LayoutProps) => {
  const { themeMode } = props;

  return (
    <div
      className={clsx(
        "max-w-3xl h-dvh mx-auto text-primary-text dark:text-primary-text-dark",
        themeMode
      )}
    >
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
    </div>
  );
};

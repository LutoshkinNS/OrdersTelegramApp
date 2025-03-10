import {createContext, useContext, ReactNode} from "react";
import {OrderType} from "@/shared/api/fetchOrder.ts";

interface StoreContextType {
    order: OrderType | null;
    setOrder: (order: OrderType | null) => void;
}

const StoreContext = createContext<StoreContextType | null>(null);

export const StoreProvider = ({
                                  children,
                                  value,
                              }: {
    children: ReactNode;
    value: StoreContextType;
}) => {
    return (
        <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
    );
};

export const useStore = () => {
    const context = useContext(StoreContext);
    if (context === null) {
        throw new Error("useStore must be used within an StoreProvider");
    }
    return context;
};

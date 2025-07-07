import { createContext, useContext, ReactNode } from "react";
import { OrdersListType } from "@/shared/api/types.ts";
import { IOrder } from "@/entities/order";

interface StoreContextType {
  tgUserId?: number;
  orders: OrdersListType;
  setOrders: (orders: IOrder[]) => void;
  inputValue: string;
  setInputValue: (value: string) => void;
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

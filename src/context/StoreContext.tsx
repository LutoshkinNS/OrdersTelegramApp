import { createContext, useContext, ReactNode } from "react";

interface StoreContextType {
  tgUserId?: number;
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

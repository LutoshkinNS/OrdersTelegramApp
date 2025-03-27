export type TotalCostProps = {
    children: React.ReactNode;
}

export const TotalCost = ({children}: TotalCostProps) => {
    return (
        <p className="text-2xl font-medium mb-4">
            Общая стоимость: <span className="font-bold">{children} ₽</span>
        </p>
    );
};
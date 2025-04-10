export type TotalCostProps = {
  children: number;
};

export const TotalCost = ({ children }: TotalCostProps) => {
  const formattedNumber = children.toLocaleString("ru-RU");

  return (
    <p className="text-2xl font-medium mb-4">
      Общая стоимость: <span className="font-bold">{formattedNumber} ₽</span>
    </p>
  );
};

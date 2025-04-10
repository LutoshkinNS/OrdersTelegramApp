export type TotalCostProps = {
  children: number;
};

export const TotalCost = ({ children }: TotalCostProps) => {
  const formattedNumber = children.toLocaleString("ru-RU");

  return (
    <p className="text-2xl font-medium mb-4">
      <span>Общая стоимость: </span>
      <span className="font-bold inline-block">{formattedNumber} ₽</span>
    </p>
  );
};

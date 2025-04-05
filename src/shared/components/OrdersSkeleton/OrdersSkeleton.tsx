export const OrdersSkeleton = () => {
  return (
    <ul className="flex flex-col gap-2 w-full">
      {[1, 2].map((i) => (
        <li key={i} className="animate-pulse">
          <div className="w-full h-[72px] bg-gray-200 dark:bg-gray-700 rounded-xl" />
        </li>
      ))}
    </ul>
  );
};

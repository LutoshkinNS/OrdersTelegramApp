export const DeliveryImagesSkeleton = () => {
  return (
    <>
      <div className="h-6 w-48 bg-gray-200 dark:bg-gray-700 rounded-xl animate-pulse mb-4" />
      <div className="flex flex-row flex-wrap">
        {[1, 2].map((i) => (
          <div
            key={i}
            className="w-28 h-28 bg-gray-200 dark:bg-gray-700 rounded-3xl animate-pulse mr-4 mb-4"
          />
        ))}
      </div>
    </>
  );
};

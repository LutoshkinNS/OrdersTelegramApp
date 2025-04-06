export const ProductSkeleton = () => {
  return (
    <div className="flex flex-row">
      <div className="w-28 h-28 bg-gray-200 dark:bg-gray-700 rounded-3xl animate-pulse mr-4" />
      <div className="flex-1">
        <div className="h-6 w-3/4 bg-gray-200 dark:bg-gray-700 rounded-xl animate-pulse mb-2" />
        <div className="h-4 w-1/4 bg-gray-200 dark:bg-gray-700 rounded-xl animate-pulse mb-1" />
        <div className="h-4 w-1/3 bg-gray-200 dark:bg-gray-700 rounded-xl animate-pulse" />
      </div>
    </div>
  );
};

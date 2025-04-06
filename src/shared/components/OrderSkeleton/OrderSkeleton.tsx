import { ProductSkeleton } from "@/shared/components/ProductSkeleton/ProductSkeleton.tsx";
import { DeliveryImagesSkeleton } from "@/shared/components/DeliveryImagesSkeleton/DeliveryImagesSkeleton.tsx";

export const OrderSkeleton = () => {
  return (
    <div className="p-4">
      <div className="mb-4">
        <div className="h-6 w-32 bg-gray-200 dark:bg-gray-700 rounded-xl animate-pulse mb-4" />
        <div className="h-8 w-48 bg-gray-200 dark:bg-gray-700 rounded-xl animate-pulse mb-2" />
        <div className="h-4 w-full bg-gray-200 dark:bg-gray-700 rounded-xl animate-pulse" />
      </div>
      <div className="mb-6">
        <div className="h-12 w-full bg-gray-200 dark:bg-gray-700 rounded-xl animate-pulse mb-2" />
        <div className="h-8 w-3/4 bg-gray-200 dark:bg-gray-700 rounded-xl animate-pulse mb-2" />
        <div className="h-8 w-1/2 bg-gray-200 dark:bg-gray-700 rounded-xl animate-pulse" />
      </div>
      <div className="h-8 w-24 bg-gray-200 dark:bg-gray-700 rounded-xl animate-pulse mb-6" />
      <div className="space-y-6">
        {[1, 2].map((i) => (
          <ProductSkeleton key={i} />
        ))}
      </div>
      <div className="mt-6">
        <DeliveryImagesSkeleton />
      </div>
    </div>
  );
};

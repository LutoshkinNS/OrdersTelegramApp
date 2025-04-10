import Dialog from "@/shared/components/Dialog/Dialog.tsx";
import { ProductAvatar } from "@/shared/components/ProductAvatar/ProductAvatar.tsx";
import { OrderType } from "@/shared/api/fetchOrder.ts";
import { FetchOrderImagesResponse } from "@/shared/api/fetchOrderImages.ts";

export type ProductsProps = {
  products: OrderType["products"];
  images?: FetchOrderImagesResponse;
};

export const Products = ({ products, images }: ProductsProps) => {
  return products?.map((product) => (
    <div key={product.id} className="mb-6 flex flex-row">
      <Dialog
        classNameTrigger="shrink-0"
        trigger={
          <ProductAvatar
            className="mr-4"
            url={images?.find((image) => image.id === product.id)?.imageBase64}
          />
        }
        content={
          <img
            src={images?.find((image) => image.id === product.id)?.imageBase64}
            alt="product"
          />
        }
      />

      <div className="">
        <p className="pt-3 mb-1 text-xl font-medium">{product.label}</p>
        <p className="mb-1 font-medium text-secondary-text dark:text-secondary-text-dark">
          {product.count} шт
        </p>
        <p className="mb-1 font-medium text-secondary-text dark:text-secondary-text-dark">
          {product.price.toLocaleString("ru-RU")} руб/шт
        </p>
      </div>
    </div>
  ));
};

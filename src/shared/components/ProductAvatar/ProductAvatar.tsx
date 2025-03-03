import clsx from "clsx";

export interface ProductAvatarProps {
  className?: string;
  url?: string;
}

export const ProductAvatar = (props: ProductAvatarProps) => {
  const { className, url } = props;

  return (
    <>
      {url ? (
        <img
          src={url}
          alt="product"
          className={clsx(
            "bg-gray dark:bg-gray-dark rounded-3xl w-28 h-28 cursor-pointer hover:opacity-90 transition-opacity",
            className
          )}
        />
      ) : (
        <div
          className={clsx(
            "bg-gray dark:bg-gray-dark rounded-3xl w-28 h-28",
            className
          )}
        />
      )}
    </>
  );
};

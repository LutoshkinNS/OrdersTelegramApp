import clsx from "clsx";

export interface ProductAvatarProps {
    className?: string;
}

export const ProductAvatar = (props: ProductAvatarProps) => {
    const {className} = props
    return (
        <div className={clsx("bg-gray rounded-3xl w-28 h-28", className)}></div>
    );
};
import clsx from "clsx";

export type ButtonProps = React.HTMLAttributes<HTMLButtonElement> & {
    children: React.ReactNode;
    className?: string;
};

export function Button(props: ButtonProps) {
    const {children, className, ...otherProps} = props;

    return (
        <button
            className={clsx(
                "w-full px-5 py-7 bg-primary text-white text-2xl font-medium rounded-xl hover:bg-orange-700 transition cursor-pointer",
                className
            )}
            {...otherProps}
        >
            {children}
        </button>
    );
}

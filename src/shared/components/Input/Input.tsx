import clsx from "clsx";

export type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
    className?: string;
};

export function Input(props: InputProps) {
    const {className, ...otherProps} = props;

    return (
        <input
            className={clsx(
                "w-full px-5 py-4 bg-gray dark:bg-gray-dark font-medium text-primary-text dark:text-primary-text-dark border-none rounded-xl focus:outline-none focus:border-orange-600 transition-colors",
                className
            )}
            {...otherProps}
        />
    );
}

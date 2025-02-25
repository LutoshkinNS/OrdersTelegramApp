import clsx from "clsx";

export type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
    className?: string;
};

export function Input(props: InputProps) {
    const {className, ...otherProps} = props;

    return (
        <input
            className={clsx(
                "w-full px-5 py-5 bg-gray text-2xl font-medium text-gray-950 border-none rounded-xl focus:outline-none focus:border-orange-600 transition-colors",
                className
            )}
            {...otherProps}
        />
    );
}

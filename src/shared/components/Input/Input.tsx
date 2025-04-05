import clsx from "clsx";
import {Input as InputBase} from "@base-ui-components/react/input";

export type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
    className?: string;
};

export function Input(props: InputProps) {
    const {className, ...otherProps} = props;

    return (
        <InputBase
            className={clsx(
                "w-full px-5 py-4 bg-gray dark:bg-gray-dark font-medium text-primary-text dark:text-primary-text-dark border-none rounded-xl outline-2 outline-transparent",
                "focus:outline-primary",
                className
            )}
            {...otherProps}
        />
    );
}

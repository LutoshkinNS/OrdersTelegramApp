import {twMerge} from 'tailwind-merge';

export type ButtonProps = React.HTMLAttributes<HTMLButtonElement> & {
    children: React.ReactNode;
    className?: string;
    disabled?: boolean;
};

export function Button(props: ButtonProps) {
    const {children, className, disabled, ...otherProps} = props;

    const classes = twMerge(
        "w-full px-4 py-6 bg-primary text-button-text text-2xl font-medium rounded-xl transition cursor-pointer",
        "hover:bg-orange-700",
        disabled ? "opacity-50 cursor-not-allowed hover:bg-primary" : "",
        className
    );

    return (
        <button
            className={classes}
            disabled={disabled}
            {...otherProps}
        >
            {children}
        </button>
    );
}

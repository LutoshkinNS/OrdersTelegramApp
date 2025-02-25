import clsx from "clsx";

export type ButtonProps = React.HTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
  className?: string;
};

export function Button(props: ButtonProps) {
  const { children, className, ...otherProps } = props;

  return (
    <button
      className={clsx(
        "bg-[#FF5C00] hover:bg-[#e65300] text-white font-medium px-8 py-3 rounded-md transition-colors",
        className
      )}
      {...otherProps}
    >
      {children}
    </button>
  );
}

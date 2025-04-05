import clsx from "clsx";

export type Description = {
  children?: React.ReactNode;
  className?: string;
};

export const Description = ({ children, className }: Description) => {
  return children ? (
    <p className={clsx("text-secondary-text dark:text-secondary-text-dark", className)}>
      {children}
    </p>
  ) : null;
};

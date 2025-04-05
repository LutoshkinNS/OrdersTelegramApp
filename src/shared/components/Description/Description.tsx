export type Description = {
  children?: React.ReactNode;
  className?: string;
};

export const Description = ({ children }: Description) => {
  return children ? (
    <p className="text-secondary-text dark:text-secondary-text-dark mb-4">
      {children}
    </p>
  ) : null;
};

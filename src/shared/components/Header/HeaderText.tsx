import clsx from "clsx";

export type HeaderProps = {
  tag: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  children: React.ReactNode;
  className?: string;
};

export const HeaderText = ({ children, tag, className }: HeaderProps) => {
  const Tag = tag;

  const mapClassToTag = {
    h1: "",
    h2: "text-4xl font-bold",
    h3: "",
    h4: "",
    h5: "",
    h6: "",
  };

  return <Tag className={clsx(mapClassToTag[tag], className)}>{children}</Tag>;
};

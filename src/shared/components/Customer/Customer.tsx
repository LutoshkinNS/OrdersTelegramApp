type CustomerProps = {
  name: string;
};

export const Customer = ({ name }: CustomerProps) => {
  return <p className="text-2xl font-medium mb-4">{name}</p>;
};

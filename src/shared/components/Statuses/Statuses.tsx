import { StatusesList } from "@/shared/components/StatusesList/StatusesList.tsx";
import { Accordion } from "@/shared/components/Accordion/Accordion.tsx";
import { StatusesType } from "@/shared/api/fetchOrder.ts";
import { useState } from "react";

export type StatusesProps = {
  currentStatus: StatusesType["currentStatus"];
  statuses: StatusesType["historyStatuses"];
  className?: string;
};

export const Statuses = ({ currentStatus, statuses, className }: StatusesProps) => {
  const [statusOpen, setToggleStatus] = useState<boolean>(false);

  return (
    <Accordion
      className={className}
      title={currentStatus}
      open={statusOpen}
      onToggle={() => setToggleStatus((prevState) => !prevState)}
    >
      <StatusesList statuses={statuses} />
    </Accordion>
  );
};

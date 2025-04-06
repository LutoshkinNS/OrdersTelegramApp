import { StatusesType } from "@/shared/api/fetchOrder.ts";
import clsx from "clsx";

export type StatusesListProps = {
  statuses: StatusesType["historyStatuses"];
  currentStatus: StatusesType["currentStatus"];
};

export const StatusesList = ({
  statuses,
  currentStatus,
}: StatusesListProps) => {
  // FIXME
  let afterCurrentStatusIdx = false;

  return (
    <ul className="list-disc pl-6">
      {statuses.map((status, idx) => {
        if (status.status === currentStatus) {
          afterCurrentStatusIdx = true;
        }

        const isPastStatus = !!status.date || !afterCurrentStatusIdx;

        return (
          <li
            key={idx}
            className={clsx(
              "mb-2",
              isPastStatus
                ? "text-primary"
                : "text-not-active-text dark:text-not-active-text-dark",
            )}
          >
            <p className={clsx("font-medium")}>{status.status}</p>
            {status.date ? (
              <span className="text-primary-text dark:text-primary-text-dark">
                {new Date(status.date).toLocaleDateString()}
              </span>
            ) : null}
          </li>
        );
      })}
    </ul>
  );
};

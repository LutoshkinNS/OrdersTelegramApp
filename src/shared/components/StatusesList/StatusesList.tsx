import {StatusesType} from "@/shared/api/fetchOrder.ts";

export type StatusesListProps = {
    statuses: StatusesType['historyStatuses']
}

export const StatusesList = ({statuses}: StatusesListProps) => {
    return (
        <ul className="list-disc pl-6">
            {statuses.map((status, idx) => {
                const date = new Date(status.date);

                return (
                    <li key={idx} className="mb-2">
                        <p className="font-medium text-primary-text dark:text-primary-text-dark">
                            {status.status}
                        </p>
                        <span>{date.toLocaleDateString()}</span>
                    </li>
                );
            })}
        </ul>
    );
};
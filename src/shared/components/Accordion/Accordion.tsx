import clsx from "clsx";
import Arrow from "../../assets/Arrow2.svg";

export interface AccordionProps {
    children: React.ReactNode;
    className?: string;
    title: string;
    onToggle: () => void;
    open: boolean;
}

interface ArrowIconProps {
    direction: "up" | "down";
}

const ArrowIcon = (props: ArrowIconProps) => {
    const {direction} = props;

    return (
        <div
            className={clsx("w-8 h-8 flex items-center justify-center  rounded-xl", direction === "up" ? 'bg-primary' : 'bg-neutral-950')}>
            <img src={Arrow} alt="" className={clsx('transform', direction === "up" ? 'rotate-180' : '')}/>
        </div>
    )
}

export const Accordion = (props: AccordionProps) => {
    const {children, title, className, open, onToggle} = props
    return (
        <div
            className={clsx('p-4 rounded-xl bg-gray font-medium text-gray-950', className)} onClick={onToggle}>
            <div className="flex flex-row justify-between items-center">
                <span>{title}</span>
                <ArrowIcon direction={open ? "up" : "down"}/>
            </div>
            <div className={clsx("text-gray-700 font-normal", open ? 'visible mt-4' : 'hidden')}>{children}</div>
        </div>
    );
};
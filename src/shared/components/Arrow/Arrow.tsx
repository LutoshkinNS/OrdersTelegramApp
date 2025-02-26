import ArrowSvg from '../../assets/arrow.svg';
import clsx from "clsx";

export interface ArrowProps {
    alt?: string;
    className?: string;
}

export const Arrow = (props: ArrowProps) => {
    const {alt, className} = props

    return (
        <img className={clsx('transform rotate-180 cursor-pointer', className)} src={ArrowSvg} alt={alt}/>
    );
};
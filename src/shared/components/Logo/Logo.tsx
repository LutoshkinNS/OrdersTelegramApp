import logoDark from '../../assets/logo-dark.png'
import logoLight from '../../assets/logo-light.png'
import clsx from "clsx";

export type LogoProps = {
    color?: "light" | "dark";
}

export const Logo = (props: LogoProps) => {
    const {color = 'dark'} = props

    return (
        <img className={clsx('max-w-32 max-h-32')} src={color ? logoDark : logoLight} alt="logo"/>
    );
};
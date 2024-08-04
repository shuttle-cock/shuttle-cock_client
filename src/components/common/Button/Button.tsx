import { ButtonHTMLAttributes, DetailedHTMLProps, PropsWithChildren } from 'react';
import { buttonVariants } from './Button.css';

type ButtonElementProps = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;
type CSSProps = NonNullable<Parameters<typeof buttonVariants>[0]>;
type CombinedProps<T = unknown> = ButtonElementProps & CSSProps & PropsWithChildren<T>;

type ButtonProps = CombinedProps;

export default function Button({
	color = 'primary',
	variant = 'filled',
	size = 'M',
	children,
	className,
	...rest
}: ButtonProps) {
	const baseClassName = buttonVariants({ color, variant, size });
	const buttonClassName = [baseClassName, className].filter(Boolean).join(' ');

	return (
		<button className={buttonClassName} {...rest}>
			{children}
		</button>
	);
}

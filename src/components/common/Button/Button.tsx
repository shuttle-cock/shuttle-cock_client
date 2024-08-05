import { ComponentProps } from 'react';
import { buttonVariants } from './Button.css';

type ElementProps = ComponentProps<'button'>;
type CSSProps = NonNullable<Parameters<typeof buttonVariants>[0]>;
type CombinedProps<T = unknown> = ElementProps & CSSProps & T;

type ButtonProps = CombinedProps<{}>;

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

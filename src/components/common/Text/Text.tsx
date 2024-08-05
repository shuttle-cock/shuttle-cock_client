import { ComponentProps, createElement } from 'react';
import { textVariants } from './Text.css';

type ElementProps = ComponentProps<keyof JSX.IntrinsicElements>;
type CSSProps = NonNullable<Parameters<typeof textVariants>[0]>;
type CombinedProps<T = unknown> = ElementProps & CSSProps & T;

type TextProps = CombinedProps<{
	tag?: keyof JSX.IntrinsicElements;
}>;

export default function Text({
	color = 'grayscale.G700',
	noWrap = false,
	size = 'r',
	weight = 'regular',
	tag = 'span',
	className,
	...rest
}: TextProps) {
	const baseClassName = textVariants({ color, noWrap, size, weight });
	const textClassName = [baseClassName, className].filter(Boolean).join(' ');

	return createElement(tag, {
		className: textClassName,
		...rest
	});
}

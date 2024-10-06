import { ComponentProps } from 'react';

import * as icons from '@assets/icons';
import { iconVariants } from './Icon.css';

type ElementProps = ComponentProps<'svg'>;
type CSSProps = NonNullable<Parameters<typeof iconVariants>[0]>;
type CombinedProps<T = unknown> = ElementProps & CSSProps & T;

type IconProps = CombinedProps<{
	name: keyof typeof icons;
}>;

export default function Icon({ name, color, className, ...rest }: IconProps) {
	const baseClassName = iconVariants({ color });
	const iconClassName = [baseClassName, className].filter(Boolean).join(' ');

	const SVGIcon = icons[name];

	return <SVGIcon className={iconClassName} {...rest} />;
}

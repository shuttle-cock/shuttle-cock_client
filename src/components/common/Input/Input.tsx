import { ComponentProps } from 'react';
import * as styles from './Input.css';

type ElementProps = Omit<ComponentProps<'input'>, 'size' | 'type'>;
type CombinedProps<T = unknown> = ElementProps & T;

type InputProps = CombinedProps<{
	state?: string;
	size?: string;
	iconLeading?: React.ReactNode;
	iconTrailing?: React.ReactNode;
	errorMessage?: string;
}>;

export default function Input({
	state = 'default',
	size = 'M',
	iconLeading,
	iconTrailing,
	errorMessage,
	...rest
}: InputProps) {
	return (
		<div className={`${styles.container}`}>
			<input className={styles.input} {...rest} />
		</div>
	);
}

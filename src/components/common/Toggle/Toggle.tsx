import { ComponentProps, useState } from 'react';
import * as styles from './Toggle.css';

type ElementProps = Omit<ComponentProps<'input'>, 'type'>;
type CombinedProps<T = unknown> = ElementProps & T;

type ToggleProps = CombinedProps<{}>;

export default function Toggle({ checked: initialChecked = false, onChange, ...rest }: ToggleProps) {
	const [isChecked, setIsChecked] = useState(initialChecked);

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setIsChecked(event.target.checked);
		onChange && onChange(event);
	};

	return (
		<label className={styles.toggleBase}>
			<input type="checkbox" className={styles.toggleCheckbox} checked={isChecked} onChange={handleChange} {...rest} />
			<span className={styles.toggleSlider}></span>
		</label>
	);
}

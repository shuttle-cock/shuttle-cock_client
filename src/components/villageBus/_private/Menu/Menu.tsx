import { ComponentProps } from 'react';
import { motion } from 'framer-motion';

import * as styles from './Menu.css';

type MenuProps = {
	isActive: boolean;
	label: string;
	onClick: ComponentProps<'li'>['onClick'];
};

export default function Menu({ isActive, label, onClick }: MenuProps) {
	const className = `${styles.item} ${isActive ? styles.active : ''}`;

	return (
		<li className={className} onClick={onClick}>
			{label}
			{isActive && <motion.div className={styles.underline} layoutId="underline" />}
		</li>
	);
}

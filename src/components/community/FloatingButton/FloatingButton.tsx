import React from 'react';
import * as styles from './FloatingButton.css';

interface IProps {
	onClick: () => void;
	icon: React.ReactNode;
	backgroundColor: string;
	position?: { bottom?: string; right?: string };
}

const FloatingButton = ({ onClick, icon, backgroundColor, position }: IProps) => {
	return (
		<button className={styles.fab} style={{ backgroundColor, ...position }} onClick={onClick}>
			{icon}
		</button>
	);
};

export default FloatingButton;

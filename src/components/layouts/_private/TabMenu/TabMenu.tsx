import { ComponentProps } from 'react';
import { useNavigate } from 'react-router-dom';

import { Icon, Text } from '@components/common';
import { AppRoutesType } from '@constants/routerConstants';
import * as styles from './TabMenu.css';

type TabMenuProps = {
	iconName: ComponentProps<typeof Icon>['name'];
	isActive: boolean;
	label: string;
	to: AppRoutesType;
};

export default function TabMenu({ iconName, isActive, label, to }: TabMenuProps) {
	const navigate = useNavigate();

	const handleNavigation = () => {
		!isActive && navigate(to);
	};

	return (
		<li className={styles.container} onClick={handleNavigation}>
			<Icon name={iconName} color={isActive ? 'primary.B300' : 'grayscale.G300'} className={styles.transition} />
			<Text size="xs" color={isActive ? 'primary.B300' : 'grayscale.G300'} className={styles.transition}>
				{label}
			</Text>
		</li>
	);
}

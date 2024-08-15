import { ComponentProps } from 'react';
import { useNavigate } from 'react-router-dom';

import { APP_ROUTES, type AppRoutesType } from '../../../constants/router';
import { Icon, Text } from '../../common';
import * as styles from './TabMenus.css';

type TabMenu = {
	id: string;
	router: AppRoutesType;
	iconName: ComponentProps<typeof Icon>['name'];
	text: string;
};

export default function TabMenus() {
	const navigate = useNavigate();

	const tabMenus: TabMenu[] = [
		{ id: '1', router: APP_ROUTES.SHUTTLE_BUS, iconName: 'shuttle_bus_m', text: '셔틀버스' },
		{ id: '2', router: APP_ROUTES.VILLAGE_BUS, iconName: 'bus_m', text: '마을버스' },
		{ id: '3', router: APP_ROUTES.COMMUNITY, iconName: 'community_m', text: '커뮤니티' }
	];

	return (
		<ul className={styles.tabMenu}>
			{tabMenus.map(({ id, iconName, router, text }) => {
				const isActive = location.pathname === router;
				return (
					<li key={id} className={styles.tabMenuItem} onClick={() => isActive || navigate(router)}>
						<Icon name={iconName} color={isActive ? 'primary.B300' : 'grayscale.G300'} />
						<Text>{text}</Text>
					</li>
				);
			})}
		</ul>
	);
}

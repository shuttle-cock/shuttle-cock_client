import { ComponentProps } from 'react';
import { useLocation } from 'react-router-dom';

import { APP_ROUTES } from '../../../../constants/router';
import TabMenu from '../TabMenu';
import * as styles from './TabMenus.css';

type TabMenu = Omit<ComponentProps<typeof TabMenu>, 'isActive'> & {
	id: string;
};

const tabMenus: TabMenu[] = [
	{ id: '1', iconName: 'shuttle_bus_m', label: '셔틀버스', to: APP_ROUTES.SHUTTLE_BUS },
	{ id: '2', iconName: 'bus_m', label: '마을버스', to: APP_ROUTES.BUS },
	{ id: '3', iconName: 'community_m', label: '커뮤니티', to: APP_ROUTES.COMMUNITY }
];

export default function TabMenus() {
	const location = useLocation();

	return (
		<ul className={styles.container}>
			{tabMenus.map(({ id, ...props }) => (
				<TabMenu key={id} isActive={location.pathname.startsWith(props.to)} {...props} />
			))}
		</ul>
	);
}

import { useEffect, useState } from 'react';

import { BusInfoDisplay, BusRouteList, Menubar } from '@components/bus';
import { useGetBusRouterList } from '@state/queries/bus';
import * as styles from './Bus.css';

const menus: [string, string] = ['지식산업센터', '고덕역'];
const BUS_ROUTE_ID = {
	'3324': 104000013,
	강동01: 124900002
};

export default function Bus() {
	const [selectedMenu, setSelectedMenu] = useState('지식산업센터');

	const handleMenuSelect = (menu: string) => {
		setSelectedMenu(menu);
	};

	const { data } = useGetBusRouterList(BUS_ROUTE_ID.강동01);
	const routerList = data?.busRouteList.slice(0, 10);

	return (
		<div className={styles.container}>
			<div className={styles.header}>
				<Menubar menus={menus} onMenuSelect={handleMenuSelect} selectedMenu={selectedMenu} />
				<BusInfoDisplay busLabel={'마을버스 강동 01'} departureLocation={selectedMenu} timeLeft={'6'} />
			</div>
			{routerList && (
				<BusRouteList
					routerList={selectedMenu === '지식산업센터' ? routerList : routerList.reverse()}
					selectedMenu={selectedMenu}
				/>
			)}
		</div>
	);
}

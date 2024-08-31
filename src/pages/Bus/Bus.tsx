import { useState } from 'react';

import { BusInfoDisplay, Menubar } from '../../components/bus';
import * as styles from './Bus.css';

const menus: [string, string] = ['지식산업센터', '고덕역'];

export default function Bus() {
	const [selectedMenu, setSelectedMenu] = useState('지식산업센터');

	const handleMenuSelect = (menu: string) => {
		setSelectedMenu(menu);
	};

	return (
		<div className={styles.container}>
			<Menubar menus={menus} onMenuSelect={handleMenuSelect} selectedMenu={selectedMenu} />
			<BusInfoDisplay busLabel={'마을버스 강동 01'} departureLocation={selectedMenu} timeLeft={'6'} />
			{selectedMenu === '지식산업센터' && <div>지식산업센터 정보가 여기에 표시됩니다.</div>}
			{selectedMenu === '고덕역' && <div>고덕역 정보가 여기에 표시됩니다.</div>}
		</div>
	);
}

import { useState } from 'react';

import { Menubar } from '../../components/villageBus';
import * as styles from './VillageBus.css';

const menus: [string, string] = ['지식산업센터', '고덕역'];

export default function VillageBus() {
	const [selectedMenu, setSelectedMenu] = useState('지식산업센터');

	const handleMenuSelect = (menu: string) => {
		setSelectedMenu(menu);
	};

	return (
		<div className={styles.container}>
			<Menubar menus={menus} onMenuSelect={handleMenuSelect} selectedMenu={selectedMenu} />
			{selectedMenu === '지식산업센터' && <div>지식산업센터 정보가 여기에 표시됩니다.</div>}
			{selectedMenu === '고덕역' && <div>고덕역 정보가 여기에 표시됩니다.</div>}
		</div>
	);
}

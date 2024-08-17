import { Outlet } from 'react-router-dom';

import { Header, TabMenus } from '../__private__';
import * as styles from './PostLoginLayout.css';

export default function PostLoginLayout() {
	return (
		<div className={styles.container}>
			<Header />
			<main className={styles.content}>
				<Outlet />
			</main>
			<TabMenus />
		</div>
	);
}

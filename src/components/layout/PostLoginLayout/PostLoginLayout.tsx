import { Outlet, useNavigate } from 'react-router-dom';

import { Header, TabMenus } from '../_private';
import * as styles from './PostLoginLayout.css';
import { useEffect } from 'react';

export default function PostLoginLayout() {
	const navigate = useNavigate();
	const userData = sessionStorage.getItem('userData');

	useEffect(() => {
		if (!userData) {
			navigate('/login');
		}
	}, [userData]);

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

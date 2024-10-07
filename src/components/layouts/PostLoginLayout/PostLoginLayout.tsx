import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

import { loadUserInfo } from '@services/storageService';
import { Header, TabMenus } from '../_private';
import * as styles from './PostLoginLayout.css';
import { APP_ROUTES } from '@constants/routerConstants';

export default function PostLoginLayout() {
	const navigate = useNavigate();
	const { userId } = loadUserInfo();

	useEffect(() => {
		if (!userId) {
			navigate(APP_ROUTES.LOGIN, { replace: true });
		}
	}, []);

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

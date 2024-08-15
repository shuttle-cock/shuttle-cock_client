import { Outlet, useNavigate } from 'react-router-dom';

import { APP_ROUTES } from '../../../constants/router';
import TabMenus from '../TabMenus';
import * as styles from './PostLoginLayout.css';

export default function PostLoginLayout() {
	const navigate = useNavigate();

	const handleLogoutTest = () => {
		navigate(APP_ROUTES.ROOT, { replace: true });
	};

	return (
		<div className={styles.container}>
			<h2>PostLoginLayout</h2>
			<br />
			<div onClick={handleLogoutTest}>Logout</div>
			<br />
			<Outlet />
			<br />
			<TabMenus />
		</div>
	);
}

import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

import { APP_ROUTES } from '@constants/routerConstants';
import { loadUserInfo } from '@services/storageService';

export default function PreLoginLayout() {
	const navigate = useNavigate();
	const { userId } = loadUserInfo();

	useEffect(() => {
		if (!!userId) {
			navigate(APP_ROUTES.SHUTTLE_BUS, { replace: true });
		}
	}, []);

	return <Outlet />;
}

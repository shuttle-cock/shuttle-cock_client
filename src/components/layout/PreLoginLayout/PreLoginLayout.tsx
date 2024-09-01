import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

import { APP_ROUTES } from '../../../constants/router';
import { loadUserInfo } from '../../../services/storageService';

const { userId } = loadUserInfo();

export default function PreLoginLayout() {
	const navigate = useNavigate();

	useEffect(() => {
		if (!!userId) {
			navigate(APP_ROUTES.SHUTTLE_BUS, { replace: true });
		}
	}, []);

	return <Outlet />;
}

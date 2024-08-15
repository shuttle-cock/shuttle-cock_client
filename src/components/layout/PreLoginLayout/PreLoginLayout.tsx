import { Outlet, useNavigate } from 'react-router-dom';
import { APP_ROUTES } from '../../../constants/router';

export default function PreLoginLayout() {
	const navigate = useNavigate();

	const handleLoginTest = () => {
		navigate(APP_ROUTES.SHUTTLE_BUS, { replace: true });
	};

	return (
		<div>
			<h2>PreLoginLayout</h2>
			<br />
			<div onClick={handleLoginTest}>Login</div>
			<br />
			<Outlet />
		</div>
	);
}

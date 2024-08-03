import { Outlet, useNavigate } from 'react-router-dom';
import { RouterPath } from '../../../Router';

export default function PreLoginLayout() {
	const navigate = useNavigate();

	const handleLoginTest = () => {
		navigate(RouterPath.SHUTTLE_BUS, { replace: true });
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

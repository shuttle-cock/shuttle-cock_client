import { Outlet, Link, useNavigate } from 'react-router-dom';
import { RouterPath } from '../../../Router';

export default function PostLoginLayout() {
	const navigate = useNavigate();

	const handleLogoutTest = () => {
		navigate(RouterPath.ROOT, { replace: true });
	};

	return (
		<div>
			<h2>PostLoginLayout</h2>
			<br />
			<div onClick={handleLogoutTest}>Logout</div>
			<br />
			<Outlet />
			<br />
			<div>
				<Link to={RouterPath.SHUTTLE_BUS}>SHUTTLE_BUS</Link>
				&nbsp; | &nbsp;
				<Link to={RouterPath.VILLAGE_BUS}>VILLAGE_BUS</Link>
				&nbsp; | &nbsp;
				<Link to={RouterPath.COMMUNITY}>COMMUNITY</Link>
			</div>
		</div>
	);
}

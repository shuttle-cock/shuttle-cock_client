import { Navigate, RouteObject, RouterProvider, createBrowserRouter } from 'react-router-dom';

import { PostLoginLayout, PreLoginLayout } from '@components/layouts';
import { APP_ROUTES } from '@constants/routerConstants';
import '@styles/global.css';
import '@styles/libs/normalize.css';
import * as P from './pages';

/** 로그인 전 라우터 구성 */
const preLoginRouter: RouteObject = {
	element: <PreLoginLayout />,
	children: [{ path: APP_ROUTES.LOGIN, element: <P.Login /> }]
};

/** 로그인 후 라우터 구성 */
const postLoginRouter: RouteObject = {
	element: <PostLoginLayout />,
	children: [
		{ index: true, element: <Navigate to={APP_ROUTES.SHUTTLE_BUS} replace /> },
		{ path: APP_ROUTES.SHUTTLE_BUS, element: <P.ShuttleBus /> },
		{ path: APP_ROUTES.BUS, element: <P.Bus /> },
		{ path: APP_ROUTES.COMMUNITY, element: <P.Community /> },
		{ path: APP_ROUTES.COMMUNITY_INFO, element: <P.CommunityInfo /> }
	]
};

/** 공통 라우터 설정 */
const rootRouter: RouteObject = {
	path: APP_ROUTES.ROOT,
	children: [preLoginRouter, postLoginRouter],
	errorElement: <P.Error />
};

const router = createBrowserRouter([rootRouter]);

export default function App() {
	return <RouterProvider router={router} />;
}

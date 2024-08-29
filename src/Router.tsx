import { Navigate, RouterProvider, createBrowserRouter, type RouteObject } from 'react-router-dom';

import { PostLoginLayout, PreLoginLayout } from './components/layout';
import { APP_ROUTES } from './constants/router';
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
		{ path: APP_ROUTES.VILLAGE_BUS, element: <P.VillageBus /> },
		{ path: APP_ROUTES.COMMUNITY, element: <P.Community /> }
	]
};

/** 공통 라우터 설정 */
const rootRouter: RouteObject = {
	path: APP_ROUTES.ROOT,
	children: [preLoginRouter, postLoginRouter],
	errorElement: <P.Error />
};

export default function Router() {
	return <RouterProvider router={createBrowserRouter([rootRouter])} />;
}

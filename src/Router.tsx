import { Suspense, lazy } from 'react';
import { RouterProvider, createBrowserRouter, type RouteObject } from 'react-router-dom';

import { PostLoginLayout, PreLoginLayout } from './components/layout';

const Login = lazy(() => import('./pages/Login'));
const ShuttleBus = lazy(() => import('./pages/ShuttleBus'));
const VillageBus = lazy(() => import('./pages/VillageBus'));
const Community = lazy(() => import('./pages/Community'));
const Error = lazy(() => import('./pages/Error'));

export enum RouterPath {
	ROOT = '/',
	SHUTTLE_BUS = '/shuttle_bus',
	VILLAGE_BUS = '/village_bus',
	COMMUNITY = '/community'
}

/** 로그인 전 라우터 구성 */
const preLoginRouter: RouteObject = {
	element: <PreLoginLayout />,
	children: [{ path: RouterPath.ROOT, element: <Login /> }]
};

/** 로그인 후 라우터 구성 */
const postLoginRouter: RouteObject = {
	element: <PostLoginLayout />,
	children: [
		{ path: RouterPath.SHUTTLE_BUS, element: <ShuttleBus /> },
		{ path: RouterPath.VILLAGE_BUS, element: <VillageBus /> },
		{ path: RouterPath.COMMUNITY, element: <Community /> }
	]
};

/** 공통 라우터 설정 */
const rootRouter: RouteObject = {
	path: RouterPath.ROOT,
	children: [preLoginRouter, postLoginRouter],
	errorElement: <Error />
};

export default function Router() {
	return (
		<Suspense fallback={<span>Loading...</span>}>
			<RouterProvider router={createBrowserRouter([rootRouter])} />
		</Suspense>
	);
}

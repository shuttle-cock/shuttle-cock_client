import { Suspense, lazy } from 'react';
import { RouterProvider, createBrowserRouter, type RouteObject } from 'react-router-dom';

import PostLoginLayout from './components/layouts/PostLoginLayout';
import PreLoginLayout from './components/layouts/PreLoginLayout';

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

const preLoginRouter: RouteObject = {
	element: <PreLoginLayout />,
	children: [{ path: RouterPath.ROOT, element: <Login /> }]
};

const postLoginRouter: RouteObject = {
	element: <PostLoginLayout />,
	children: [
		{ path: RouterPath.SHUTTLE_BUS, element: <ShuttleBus /> },
		{ path: RouterPath.VILLAGE_BUS, element: <VillageBus /> },
		{ path: RouterPath.COMMUNITY, element: <Community /> }
	]
};

const routeObject: RouteObject[] = [
	{
		path: RouterPath.ROOT,
		children: [preLoginRouter, postLoginRouter],
		errorElement: <Error />
	}
];

export default function Router() {
	return (
		<Suspense fallback={<span>Loading...</span>}>
			<RouterProvider router={createBrowserRouter(routeObject)} />
		</Suspense>
	);
}

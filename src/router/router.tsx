import { lazy } from "react";
import { createBrowserRouter, Navigate, Outlet, RouteObject } from 'react-router-dom';

import { DEFAULT_ROOT_ROUTE, ROOT_ROUTE } from "@/constants/routes.ts";

import LazyLoader from "@/components/LazyLoader";

// example using with named export | using default export is also possible
const HomePageLazy = LazyLoader(
	lazy(() => import('@/pages/HomePage.tsx')
		.then(module => ({ default: module.HomePage })))
);

export const routes: RouteObject[] = [
	{
		path: ROOT_ROUTE,
		element: <Outlet/>,
		children: [
			{
				index: true,
				element: <HomePageLazy/>
			},
		],
	},
	{
		path: '*',
		element: <Navigate to={DEFAULT_ROOT_ROUTE} replace/>
	}
];

const basename = import.meta.env.BASE_URL;
export const browserRouter = createBrowserRouter(routes, { basename });
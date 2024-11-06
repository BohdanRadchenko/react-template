import { JSX, LazyExoticComponent, Suspense } from 'react';

import Loading from "@/components/Loading";

export const LazyLoader =
	(Component: LazyExoticComponent<() => JSX.Element>) =>
		(props: Record<string, unknown>): JSX.Element =>
			(
				<Suspense fallback={<Loading/>}>
					<Component {...props} />
				</Suspense>
			);

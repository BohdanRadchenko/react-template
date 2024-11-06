import { FC, PropsWithChildren, StrictMode } from "react";

export const RootProvider: FC<PropsWithChildren> = ({ children }) => {
	return (
		<StrictMode>
			{children}
		</StrictMode>
	);
};
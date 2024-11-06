import { FC, PropsWithChildren } from "react";

import { ThemeProvider } from "./ThemeProvider.tsx";

export const RootProvider: FC<PropsWithChildren> = ({ children }) => {
	return (
		<ThemeProvider>
			{children}
		</ThemeProvider>
	);
};
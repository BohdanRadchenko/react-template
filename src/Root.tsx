import RootProvider from "@/providers";
import App from './App';

export const Root = () => {
	return (
		<RootProvider>
			<App/>
		</RootProvider>
	);
};
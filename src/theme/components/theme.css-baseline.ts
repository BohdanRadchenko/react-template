import { Components } from "@mui/material/styles/components";

export const MuiCssBaseline: Components['MuiCssBaseline'] = {
	styleOverrides: () => {
		return {
			body: {
				width: '100%',
				minHeight: '100vh',
			},
			'body > div': {
				width: 'inherit',
				minHeight: 'inherit',
			},
			['*']: {
				boxSizing: 'border-box',
			},
		};
	}
};

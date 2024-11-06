import { Theme, ThemeOptions } from "@mui/material/styles";

import { Components } from "@mui/material/styles/components";

const fontFamily = [ '"Roboto"', '"Helvetica"', '"Arial"', 'sans-serif' ].join(', ');
const fontSize = 14;

export const typography: ThemeOptions['typography'] = {
	fontFamily,
	body1: {
		fontWeight: 400,
		fontSize: "1rem",
		lineHeight: 1.5,
		letterSpacing: "0.00938em",
	}
};

export const MuiTypography: Components<Theme>['MuiTypography'] = {
	defaultProps: {
		variant: 'body1',
	},
	styleOverrides: {
		root: {
			fontFamily,
			fontSize,
		},
	}
};
import { createTheme, responsiveFontSizes, Theme, ThemeOptions } from '@mui/material/styles';

import { MuiCssBaseline, MuiTypography, typography } from "./components";

import { Components } from "@mui/material/styles/components";

export const components: Components<Theme> = {
	MuiCssBaseline,
	MuiTypography,
};

export const SPACING_FACTOR = 4;
export const BREAKPOINTS_VALUES = {
	xs: 0,
	sm: 600,
	md: 900,
	lg: 1200,
	xl: 1536,
};

const { palette: muiPalette } = createTheme({});

/**
 * [Theming]{@link https://mui.com/material-ui/customization/theming/} <br>
 * [Default mui theme]{@link https://mui.com/material-ui/customization/default-theme}
 * */
const sharedTheme: ThemeOptions = {
	spacing: (factor: number) => `${SPACING_FACTOR * factor}px`,
	typography,
	components,
	palette: {
		...muiPalette,
	},
	shape: {
		borderRadius: 6,
	},
	breakpoints: {
		values: BREAKPOINTS_VALUES,
	},
};

export const theme = responsiveFontSizes(createTheme(sharedTheme));
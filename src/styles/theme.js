import { createTheme, responsiveFontSizes } from '@mui/material';

export default responsiveFontSizes(
	createTheme({
		palette: {
			background: {
				default: '#000000',
			},
			primary: {
				main: '#14213D',
			},
			secondary: {
				main: '#FCA311',
			},
		},
		typography: {
			fontFamily: ['Montserrat', 'sans-serif'].join(','),
		},
		components: {},
	})
);

import { styled, TextField } from '@mui/material';

const Textfield = styled(TextField)(({ theme }) => ({
	'& label': {
		color: theme.palette.primary.contrastText,
		'&.Mui-focused': {
			color: theme.palette.secondary.main,
		},
	},
	'& .MuiInput-underline': {
		color: theme.palette.primary.contrastText,
		'&:hover': {
			'&:before': {
				borderBottomColor: theme.palette.secondary.main,
			},
			'&:after': {
				borderBottomColor: theme.palette.secondary.main,
			},
		},
		'&:before': {
			borderBottomColor: theme.palette.primary.contrastText,
		},
		'&:after': {
			borderBottomColor: theme.palette.primary.contrastText,
		},
		'&.Mui-focused': {
			color: theme.palette.secondary.light,
			'&:before': {
				borderBottomColor: theme.palette.secondary.main,
			},
			'&:after': {
				borderBottomColor: theme.palette.secondary.main,
			},
		},
	},
}));

export default Textfield;

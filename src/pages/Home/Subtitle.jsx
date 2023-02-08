import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@mui/material';

export default function Subtitle({ label }) {
	return (
		<Typography
			sx={{
				textAlign: 'center',
				textDecoration: 'underline',
			}}
			color="primary.contrastText"
			variant="h2"
			component="h2"
		>
			{label}
		</Typography>
	);
}

Subtitle.propTypes = {
	label: PropTypes.string,
};

Subtitle.defaultProps = {
	label: 'empty',
};

import React from 'react';
import PropTypes from 'prop-types';
import { Box, Divider, Typography, useTheme } from '@mui/material';
import Navbar from '../Navbar';

function Header({ children, title, ...params }) {
	const theme = useTheme();
	return (
		<Navbar {...params}>
			<Box
				sx={{
					flexGrow: 1,
					display: 'flex',
					justifyContent: 'space-between',
					alignItems: 'center',
					flexDirection: 'row',
				}}
			>
				<Typography variant="h3" component="div" sx={{ mr: 1 }}>
					{title}
				</Typography>
				<Divider
					sx={{
						borderColor: theme.palette.primary.contrastText,
						marginRight: theme.spacing(1),
					}}
					orientation="vertical"
					flexItem
				/>
				{children}
			</Box>
		</Navbar>
	);
}

Header.propTypes = {
	children: PropTypes.node.isRequired,
	title: PropTypes.string,
};

Header.defaultProps = {
	title: 'title',
};

export default Header;

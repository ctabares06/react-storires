import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mui/material';
import StoreHeader from '../StoreHeader';
import Footbar from '../Footbar';

function Layout({ children }) {
	return (
		<Box
			sx={{
				minHeight: '100vh',
			}}
		>
			<StoreHeader />
			<Box
				sx={{
					my: '80px',
				}}
			>
				{children}
			</Box>
			<Footbar />
		</Box>
	);
}

Layout.propTypes = {
	children: PropTypes.node.isRequired,
};

export default Layout;

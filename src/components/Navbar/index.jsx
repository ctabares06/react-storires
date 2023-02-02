import React from 'react';
import PropTypes from 'prop-types';
import { AppBar, Toolbar } from '@mui/material';

function Navbar({ children, ...params }) {
	return (
		<AppBar {...params}>
			<Toolbar>{children}</Toolbar>
		</AppBar>
	);
}

Navbar.propTypes = {
	children: PropTypes.node,
};

Navbar.defaultProps = {
	children: null,
};

export default Navbar;

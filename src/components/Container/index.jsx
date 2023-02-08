import React from 'react';
import { Container as MuiContainer } from '@mui/material';

function Container({ children, ...rest }) {
	return <MuiContainer {...rest}>{children}</MuiContainer>;
}

export default Container;

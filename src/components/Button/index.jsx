import React from 'react';
import PropTypes from 'prop-types';
import { Button as ButtonMui } from '@mui/material';

function Button({ label, ...props }) {
	return <ButtonMui {...props}>{label}</ButtonMui>;
}

Button.propTypes = {
	label: PropTypes.string.isRequired,
};

export default Button;

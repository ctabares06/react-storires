import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';

function CustomButton({ label, textval }) {
	const [text, setText] = useState(label || 'button default');

	const handleClick = () => {
		setText(textval);
	};

	return <Button label={text} onClick={handleClick} />;
}

export default CustomButton;

CustomButton.propTypes = {
	label: PropTypes.string.isRequired,
	textval: PropTypes.string,
};

CustomButton.defaultProps = {
	textval: 'text',
};

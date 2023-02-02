import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import CustomButton from '../components/CustomButton';

test('Button should render', () => {
	render(<CustomButton label="button" />);
	const button = screen.getByRole('button', { name: 'button' });
	expect(button).toBeInTheDocument();
});

test('Button should change text', () => {
	render(<CustomButton label="button" textval="title" />);
	const button = screen.getByRole('button', { name: 'button' });

	fireEvent.click(button);
	expect(button).toHaveTextContent('title');
});
